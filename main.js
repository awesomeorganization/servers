import { createServer as _http2, createSecureServer as _https2 } from 'http2'
import { createServer as _tcp, isIP } from 'net'

import { createServer as _http } from 'http'
import { createServer as _https } from 'https'
import { createServer as _tls } from 'tls'
import { createSocket as _udp } from 'dgram'

export const http = ({
  async = true,
  onCheckContinue,
  onCheckExpectation,
  onClientError,
  onClose,
  onConnect,
  onConnection,
  onError,
  onListening,
  onRequest,
  onUpgrade,
  ...options
}) => {
  const socket = _http(options)
  typeof onCheckContinue === 'function' && socket.on('checkContinue', onCheckContinue)
  typeof onCheckExpectation === 'function' && socket.on('checkExpectation', onCheckExpectation)
  typeof onClientError === 'function' && socket.on('clientError', onClientError)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnect === 'function' && socket.on('connect', onConnect)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onRequest === 'function' && socket.on('request', onRequest)
  typeof onUpgrade === 'function' && socket.on('upgrade', onUpgrade)
  socket.listen(options)
  if (async === true) {
    return new Promise((resolve, reject) => {
      socket.once('listening', () => {
        setImmediate(resolve, socket)
      })
      socket.once('error', (error) => {
        setImmediate(reject, error)
      })
    })
  }
  return socket
}

export const http2 = ({
  async = true,
  onCheckContinue,
  onClose,
  onConnection,
  onError,
  onListening,
  onRequest,
  onSession,
  onSessionError,
  onStream,
  onTimeout,
  ...options
}) => {
  const socket = _http2(options)
  typeof onCheckContinue === 'function' && socket.on('checkContinue', onCheckContinue)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onRequest === 'function' && socket.on('request', onRequest)
  typeof onSession === 'function' && socket.on('session', onSession)
  typeof onSessionError === 'function' && socket.on('sessionError', onSessionError)
  typeof onStream === 'function' && socket.on('stream', onStream)
  typeof onTimeout === 'function' && socket.on('timeout', onTimeout)
  socket.listen(options)
  if (async === true) {
    return new Promise((resolve, reject) => {
      socket.once('listening', () => {
        setImmediate(resolve, socket)
      })
      socket.once('error', (error) => {
        setImmediate(reject, error)
      })
    })
  }
  return socket
}

export const https = ({
  async = true,
  onCheckContinue,
  onCheckExpectation,
  onClientError,
  onClose,
  onConnect,
  onConnection,
  onError,
  onListening,
  onRequest,
  onUpgrade,
  ...options
}) => {
  const socket = _https(options)
  typeof onCheckContinue === 'function' && socket.on('checkContinue', onCheckContinue)
  typeof onCheckExpectation === 'function' && socket.on('checkExpectation', onCheckExpectation)
  typeof onClientError === 'function' && socket.on('clientError', onClientError)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnect === 'function' && socket.on('connect', onConnect)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onRequest === 'function' && socket.on('request', onRequest)
  typeof onUpgrade === 'function' && socket.on('upgrade', onUpgrade)
  socket.listen(options)
  if (async === true) {
    return new Promise((resolve, reject) => {
      socket.once('listening', () => {
        setImmediate(resolve, socket)
      })
      socket.once('error', (error) => {
        setImmediate(reject, error)
      })
    })
  }
  return socket
}

export const https2 = ({
  async = true,
  onCheckContinue,
  onClose,
  onConnection,
  onError,
  onListening,
  onRequest,
  onSession,
  onSessionError,
  onStream,
  onTimeout,
  onUnknownProtocol,
  ...options
}) => {
  const socket = _https2(options)
  typeof onCheckContinue === 'function' && socket.on('checkContinue', onCheckContinue)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onRequest === 'function' && socket.on('request', onRequest)
  typeof onSession === 'function' && socket.on('session', onSession)
  typeof onSessionError === 'function' && socket.on('sessionError', onSessionError)
  typeof onStream === 'function' && socket.on('stream', onStream)
  typeof onTimeout === 'function' && socket.on('timeout', onTimeout)
  typeof onUnknownProtocol === 'function' && socket.on('unknownProtocol', onUnknownProtocol)
  socket.listen(options)
  if (async === true) {
    return new Promise((resolve, reject) => {
      socket.once('listening', () => {
        setImmediate(resolve, socket)
      })
      socket.once('error', (error) => {
        setImmediate(reject, error)
      })
    })
  }
  return socket
}

export const tcp = ({ async = true, onClose, onConnection, onError, onListening, ...options }) => {
  const socket = _tcp(options)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  socket.listen(options)
  if (async === true) {
    return new Promise((resolve, reject) => {
      socket.once('listening', () => {
        setImmediate(resolve, socket)
      })
      socket.once('error', (error) => {
        setImmediate(reject, error)
      })
    })
  }
  return socket
}

export const tls = ({
  async = true,
  onClose,
  onConnection,
  onError,
  onKeylog,
  onListening,
  onNewSession,
  onOcspRequest,
  onResumeSession,
  onSecureConnection,
  ...options
}) => {
  const socket = _tls(options)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onKeylog === 'function' && socket.on('keylog', onKeylog)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onNewSession === 'function' && socket.on('newSession', onNewSession)
  typeof onOcspRequest === 'function' && socket.on('OCSPRequest', onOcspRequest)
  typeof onResumeSession === 'function' && socket.on('resumeSession', onResumeSession)
  typeof onSecureConnection === 'function' && socket.on('secureConnection', onSecureConnection)
  socket.listen(options)
  if (async === true) {
    return new Promise((resolve, reject) => {
      socket.once('listening', () => {
        setImmediate(resolve, socket)
      })
      socket.once('error', (error) => {
        setImmediate(reject, error)
      })
    })
  }
  return socket
}

export const udp = ({ async = true, onClose, onConnect, onError, onListening, onMesage, ...options }) => {
  // FOR COMPATABILITY
  if ('host' in options === true) {
    options.address = options.host
  }
  // FOR AUTO TYPE
  if ('type' in options === false) {
    options.type = `udp${isIP(options.address)}`
  }
  const socket = _udp(options)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnect === 'function' && socket.on('connect', onConnect)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onMesage === 'function' && socket.on('message', onMesage)
  socket.bind(options)
  if (async === true) {
    return new Promise((resolve, reject) => {
      socket.once('listening', () => {
        setImmediate(resolve, socket)
      })
      socket.once('error', (error) => {
        setImmediate(reject, error)
      })
    })
  }
  return socket
}
