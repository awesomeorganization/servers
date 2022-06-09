/* eslint-disable node/no-unsupported-features/es-syntax */
import { LOCALHOST_CERT, LOCALHOST_KEY, http, http2, https, https2, tcp, tls, udp } from '../main.js'

import { deepEqual } from 'node:assert'
import { once } from 'node:events'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const expected = Buffer.from('OK')

const assertBuffer = (actual) => {
  deepEqual(actual, expected)
}

const assertStream = async (stream) => {
  const chunks = []
  for await (const chunk of stream) {
    chunks.push(chunk)
  }
  assertBuffer(Buffer.concat(chunks))
}

const clients = {
  async http({ address, port }) {
    const { request } = await import('node:http')
    const [stream] = await once(
      request({
        agent: false,
        host: address,
        port,
      }).end(),
      'response'
    )
    await assertStream(stream)
  },
  async http2({ address, port }) {
    const { connect } = await import('node:http2')
    const socket = connect({
      host: address,
      port,
      protocol: 'http:',
    })
    await once(socket, 'connect')
    const stream = socket.request({
      endStream: true,
    })
    await assertStream(stream)
    socket.close()
  },
  async https({ address, port }) {
    const { request } = await import('node:https')
    const [stream] = await once(
      request({
        agent: false,
        host: address,
        port,
      }).end(),
      'response'
    )
    await assertStream(stream)
  },
  async https2({ address, port }) {
    const { connect } = await import('node:http2')
    const socket = connect({
      host: address,
      port,
      protocol: 'https:',
    })
    await once(socket, 'connect')
    const stream = socket.request({
      endStream: true,
    })
    await assertStream(stream)
    socket.close()
  },
  async tcp({ address, port }) {
    const { connect } = await import('node:net')
    const socket = connect({
      host: address,
      port,
    })
    await once(socket, 'connect')
    await assertStream(socket)
  },
  async tls({ address, port }) {
    const { connect } = await import('node:tls')
    const socket = connect({
      host: address,
      port,
    })
    await once(socket, 'secureConnect')
    await assertStream(socket)
  },
  async udp({ address, family, port }) {
    const { createSocket } = await import('node:dgram')
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
    await once(socket, 'connect')
    socket.send(expected)
    const [message] = await once(socket, 'message')
    assertBuffer(message)
    socket.close()
  },
}

const test = () => {
  for (const { host, ipv6Only } of [
    { host: '127.0.0.1', ipv6Only: false },
    { host: '::1', ipv6Only: true },
  ]) {
    http({
      handlers: {
        async listening() {
          await clients.http(this.address())
          this.close()
        },
        request(_request, response) {
          response.end(expected)
        },
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
    })
    https({
      createOptions: {
        cert: LOCALHOST_CERT,
        key: LOCALHOST_KEY,
      },
      handlers: {
        async listening() {
          await clients.https(this.address())
          this.close()
        },
        request(_request, response) {
          response.end(expected)
        },
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
    })
    http2({
      handlers: {
        async listening() {
          await clients.http2(this.address())
          this.close()
        },
        stream(stream) {
          stream.end(expected)
        },
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
    })
    https2({
      createOptions: {
        cert: LOCALHOST_CERT,
        key: LOCALHOST_KEY,
      },
      handlers: {
        async listening() {
          await clients.https2(this.address())
          this.close()
        },
        stream(stream) {
          stream.end(expected)
        },
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
    })
    tcp({
      handlers: {
        connection(connection) {
          connection.end(expected)
        },
        async listening() {
          await clients.tcp(this.address())
          this.close()
        },
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
    })
    tls({
      createOptions: {
        cert: LOCALHOST_CERT,
        key: LOCALHOST_KEY,
      },
      handlers: {
        async listening() {
          await clients.tls(this.address())
          this.close()
        },
        secureConnection(secureConnection) {
          secureConnection.end(expected)
        },
      },
      listenOptions: {
        host,
        ipv6Only,
        port: 0,
      },
    })
    udp({
      createOptions: {
        ipv6Only,
        type: ipv6Only === true ? 'udp6' : 'udp4',
      },
      handlers: {
        async listening() {
          await clients.udp(this.address())
          this.close()
        },
        message(message, { address, port, size }) {
          this.send(message, 0, size, port, address)
        },
      },
      listenOptions: {
        host,
        port: 0,
      },
    })
  }
}

test()
