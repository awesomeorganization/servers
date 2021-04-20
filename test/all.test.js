/* eslint-disable node/no-unsupported-features/es-syntax */

import { LOCALHOST_CERT, LOCALHOST_KEY, http, http2, https, https2, tcp, tls, udp } from '../main.js'

import { deepStrictEqual } from 'assert'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const expectedMessage = Buffer.from('OK')

const assertMessage = (actualMessage, family, protocol) => {
  deepStrictEqual(actualMessage, expectedMessage)
  console.log(family, protocol)
}

const assertData = (stream, family, protocol, next) => {
  const chunks = []
  stream.on('data', (chunk) => {
    chunks.push(chunk)
  })
  stream.once('end', () => {
    const actualMessage = Buffer.concat(chunks)
    assertMessage(actualMessage, family, protocol)
    next()
  })
}

const clients = {
  async http({ address, family, port }) {
    const { request } = await import('http')
    request({
      agent: false,
      host: address,
      port,
    })
      .once('response', (incomingMessage) => {
        assertData(incomingMessage, family, 'http', () => {})
      })
      .end()
  },
  async https({ address, family, port }) {
    const { request } = await import('https')
    request({
      agent: false,
      host: address,
      port,
    })
      .once('response', (incomingMessage) => {
        assertData(incomingMessage, family, 'https', () => {})
      })
      .end()
  },
  async http2({ address, family, port }) {
    const { connect } = await import('http2')
    const session = connect({
      host: address,
      port,
      protocol: 'http:',
    })
    session.once('connect', () => {
      const stream = session.request({
        endStream: true,
      })
      stream
        .once('response', () => {
          assertData(stream, family, 'http2', () => {})
        })
        .once('close', () => {
          session.close() // disallowHalfOpen
        })
    })
  },
  async https2({ address, family, port }) {
    const { connect } = await import('http2')
    const session = connect({
      host: address,
      port,
      protocol: 'https:',
    })
    session.once('connect', () => {
      const stream = session.request({
        endStream: true,
      })
      stream
        .once('response', () => {
          assertData(stream, family, 'https2', () => {})
        })
        .once('close', () => {
          session.close() // disallowHalfOpen
        })
    })
  },
  async tcp({ address, family, port }) {
    const { createConnection } = await import('net')
    const socket = createConnection({
      host: address,
      port,
    })
    socket.once('connect', () => {
      assertData(socket, family, 'tcp', () => {})
    })
  },
  async tls({ address, family, port }) {
    const { connect } = await import('tls')
    const socket = connect({
      host: address,
      port,
    })
    socket.once('secureConnect', () => {
      assertData(socket, family, 'tls', () => {})
    })
  },
  async udp({ address, family, port }) {
    const { createSocket } = await import('dgram')
    const socket = createSocket(
      family === 'IPv4'
        ? {
            ipv6Only: false,
            type: 'udp4',
          }
        : {
            ipv6Only: true,
            type: 'udp6',
          }
    )
    socket.connect(port, address)
    socket.once('connect', () => {
      socket.send(expectedMessage, () => {
        socket.once('message', (message) => {
          assertMessage(message, family, 'udp')
          socket.close()
        })
      })
    })
  },
}

const test = () => {
  for (const { host, ipv6Only } of [
    { host: '127.0.0.1', ipv6Only: false },
    { host: '::1', ipv6Only: true },
  ]) {
    http({
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
      onListening() {
        clients.http(this.address())
      },
      onRequest(incomingMessage, serverResponse) {
        serverResponse.end(expectedMessage, () => {
          this.close()
        })
      },
    })
    https({
      createOptions: {
        cert: LOCALHOST_CERT,
        key: LOCALHOST_KEY,
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
      onListening() {
        clients.https(this.address())
      },
      onRequest(incomingMessage, serverResponse) {
        serverResponse.end(expectedMessage, () => {
          this.close()
        })
      },
    })
    http2({
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
      onListening() {
        clients.http2(this.address())
      },
      onStream(stream) {
        stream.end(expectedMessage, () => {
          this.close()
        })
      },
    })
    https2({
      createOptions: {
        cert: LOCALHOST_CERT,
        key: LOCALHOST_KEY,
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
      onListening() {
        clients.https2(this.address())
      },
      onStream(stream) {
        stream.end(expectedMessage, () => {
          this.close()
        })
      },
    })
    tcp({
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
      onConnection(connection) {
        connection.end(expectedMessage, () => {
          this.close()
        })
      },
      onListening() {
        clients.tcp(this.address())
      },
    })
    tls({
      createOptions: {
        cert: LOCALHOST_CERT,
        key: LOCALHOST_KEY,
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
      onListening() {
        clients.tls(this.address())
      },
      onSecureConnection(connection) {
        connection.end(expectedMessage, () => {
          this.close()
        })
      },
    })
    udp({
      createOptions: {
        ipv6Only,
        type: ipv6Only === true ? 'udp6' : 'udp4',
      },
      listenOptions: {
        host,
        port: 0,
      },
      onListening() {
        clients.udp(this.address())
      },
      onMessage(message, address) {
        this.send(message, address.port, address.address, () => {
          this.close()
        })
      },
    })
  }
}

test()
