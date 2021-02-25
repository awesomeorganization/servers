/* eslint-disable node/no-unsupported-features/es-syntax */

export const http = async ({
  createOptions = {},
  listenOptions = {},
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
}) => {
  const { createServer } = await import('http')
  // FOR COMPATABILITY
  if ('address' in listenOptions === true) {
    listenOptions.host = listenOptions.address
  }
  const socket = createServer(createOptions).listen(listenOptions)
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
  return new Promise((resolve, reject) => {
    socket.prependOnceListener('listening', () => {
      setImmediate(resolve, socket)
    })
    socket.prependOnceListener('error', (error) => {
      setImmediate(reject, error)
    })
  })
}

export const https = async ({
  createOptions = {},
  listenOptions = {},
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
}) => {
  const { createServer } = await import('https')
  // FOR COMPATABILITY
  if ('address' in listenOptions === true) {
    listenOptions.host = listenOptions.address
  }
  const socket = createServer(createOptions).listen(listenOptions)
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
  return new Promise((resolve, reject) => {
    socket.prependOnceListener('listening', () => {
      setImmediate(resolve, socket)
    })
    socket.prependOnceListener('error', (error) => {
      setImmediate(reject, error)
    })
  })
}

export const http2 = async ({
  createOptions = {},
  listenOptions = {},
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
}) => {
  const { createServer } = await import('http2')
  // FOR COMPATABILITY
  if ('address' in listenOptions === true) {
    listenOptions.host = listenOptions.address
  }
  const socket = createServer(createOptions).listen(listenOptions)
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
  return new Promise((resolve, reject) => {
    socket.prependOnceListener('listening', () => {
      setImmediate(resolve, socket)
    })
    socket.prependOnceListener('error', (error) => {
      setImmediate(reject, error)
    })
  })
}

export const https2 = async ({
  createOptions = {},
  listenOptions = {},
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
}) => {
  const { createSecureServer } = await import('http2')
  // FOR COMPATABILITY
  if ('address' in listenOptions === true) {
    listenOptions.host = listenOptions.address
  }
  const socket = createSecureServer(createOptions).listen(listenOptions)
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
  return new Promise((resolve, reject) => {
    socket.prependOnceListener('listening', () => {
      setImmediate(resolve, socket)
    })
    socket.prependOnceListener('error', (error) => {
      setImmediate(reject, error)
    })
  })
}

export const tcp = async ({ createOptions = {}, listenOptions = {}, onClose, onConnection, onError, onListening }) => {
  const { createServer } = await import('net')
  // FOR COMPATABILITY
  if ('address' in listenOptions === true) {
    listenOptions.host = listenOptions.address
  }
  const socket = createServer(createOptions).listen(listenOptions)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  return new Promise((resolve, reject) => {
    socket.prependOnceListener('listening', () => {
      setImmediate(resolve, socket)
    })
    socket.prependOnceListener('error', (error) => {
      setImmediate(reject, error)
    })
  })
}

export const tls = async ({
  createOptions = {},
  listenOptions = {},
  onClose,
  onConnection,
  onError,
  onKeylog,
  onListening,
  onNewSession,
  onOcspRequest,
  onResumeSession,
  onSecureConnection,
}) => {
  const { createServer } = await import('tls')
  // FOR COMPATABILITY
  if ('address' in listenOptions === true) {
    listenOptions.host = listenOptions.address
  }
  const socket = createServer(createOptions).listen(listenOptions)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnection === 'function' && socket.on('connection', onConnection)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onKeylog === 'function' && socket.on('keylog', onKeylog)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onNewSession === 'function' && socket.on('newSession', onNewSession)
  typeof onOcspRequest === 'function' && socket.on('OCSPRequest', onOcspRequest)
  typeof onResumeSession === 'function' && socket.on('resumeSession', onResumeSession)
  typeof onSecureConnection === 'function' && socket.on('secureConnection', onSecureConnection)
  return new Promise((resolve, reject) => {
    socket.prependOnceListener('listening', () => {
      setImmediate(resolve, socket)
    })
    socket.prependOnceListener('error', (error) => {
      setImmediate(reject, error)
    })
  })
}

export const udp = async ({ createOptions = {}, listenOptions = {}, onClose, onConnect, onError, onListening, onMessage }) => {
  const { createSocket } = await import('dgram')
  // FOR COMPATABILITY
  if ('host' in listenOptions === true) {
    listenOptions.address = listenOptions.host
  }
  const socket = createSocket(createOptions)
  socket.bind(listenOptions)
  typeof onClose === 'function' && socket.on('close', onClose)
  typeof onConnect === 'function' && socket.on('connect', onConnect)
  typeof onError === 'function' && socket.on('error', onError)
  typeof onListening === 'function' && socket.on('listening', onListening)
  typeof onMessage === 'function' && socket.on('message', onMessage)
  return new Promise((resolve, reject) => {
    socket.prependOnceListener('listening', () => {
      setImmediate(resolve, socket)
    })
    socket.prependOnceListener('error', (error) => {
      setImmediate(reject, error)
    })
  })
}
