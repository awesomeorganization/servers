/* eslint-disable node/no-unsupported-features/es-syntax */

import { on, once } from 'events'

export const LOCALHOST_CERT = `-----BEGIN CERTIFICATE-----
MIIDlTCCAn2gAwIBAgIJAIiA2UzhbmG1MA0GCSqGSIb3DQEBCwUAMGMxCzAJBgNV
BAYTAlJVMQ8wDQYDVQQIEwZNb3Njb3cxDzANBgNVBAcTBk1vc2NvdzEeMBwGA1UE
ChMVIEF3ZXNvbWUgT3JnYW5pemF0aW9uMRIwEAYDVQQDEwlsb2NhbGhvc3QwHhcN
MjEwNDA4MTMyNDMwWhcNMzEwNDA5MTMyNDMwWjBjMQswCQYDVQQGEwJSVTEPMA0G
A1UECBMGTW9zY293MQ8wDQYDVQQHEwZNb3Njb3cxHjAcBgNVBAoTFSBBd2Vzb21l
IE9yZ2FuaXphdGlvbjESMBAGA1UEAxMJbG9jYWxob3N0MIIBIjANBgkqhkiG9w0B
AQEFAAOCAQ8AMIIBCgKCAQEA16RGziyQFoHtUTcboct0NC5FiNZVw67S8/Ti5Iil
WJQMF3GV8tL4o42lN7PoexMzgU9tYo4vvgtWGWS+8W7luw9LiAaqjNjKr6lOE8go
8P7eQckOskt8bDorIFtPKUUJtwFgn0DEbotzRLjc4SBUEkwyb+n1Pli9rKxOuMX0
Zjz2HtSa1tMfp1Fg0FCgJS6MgUL9g3e2Mf7mcW5vsfF4jgUzZHJXfsfopr+nu0Ds
2EvQfrFs3UVo76/PCHJPTIzkfgCgCXjgCjhHbwX1j0KqsiAbGjqzgeFe3KmzkUGS
rJAcpIHhdDVtyDqOeB/mwvqFBvx51pi0afwR4j03lQyM/QIDAQABo0wwSjAJBgNV
HRMEAjAAMBEGCWCGSAGG+EIBAQQEAwIE8DALBgNVHQ8EBAMCBaAwHQYDVR0lBBYw
FAYIKwYBBQUHAwIGCCsGAQUFBwMBMA0GCSqGSIb3DQEBCwUAA4IBAQBul441QXh8
mlCuyQ/1qB0p5X64hIHc02bLvUgajSMXNO4Nwt0T48z2Qh4kKjiya8/Uiu5O8JH1
Q0qvKt4VIAUmEKsI0f+N4WkgFbxSdPR6Ns9s7NtfG7ttaKHcF0+yss2GKa2ZNBl4
n4pMW4rl9k0raUjvoNIkNkmVgEP4Wj7WxteWID1pSj7J7HywJT8Qxf+yAic0ic6s
skFrJ7PTdzOHkEi1GSr8S/4N37kMq6u8oZLR35nuKFS8OVRRSuKmqY4iyVTZoCqS
RPFA2Q4jEzgvVWarYQ16YyifB8mnZipztUMsA1TceIQ9fbYKlBUo9EENWpF4itFI
1OgQXUsQmCyg
-----END CERTIFICATE-----`

export const LOCALHOST_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpgIBAAKCAQEA16RGziyQFoHtUTcboct0NC5FiNZVw67S8/Ti5IilWJQMF3GV
8tL4o42lN7PoexMzgU9tYo4vvgtWGWS+8W7luw9LiAaqjNjKr6lOE8go8P7eQckO
skt8bDorIFtPKUUJtwFgn0DEbotzRLjc4SBUEkwyb+n1Pli9rKxOuMX0Zjz2HtSa
1tMfp1Fg0FCgJS6MgUL9g3e2Mf7mcW5vsfF4jgUzZHJXfsfopr+nu0Ds2EvQfrFs
3UVo76/PCHJPTIzkfgCgCXjgCjhHbwX1j0KqsiAbGjqzgeFe3KmzkUGSrJAcpIHh
dDVtyDqOeB/mwvqFBvx51pi0afwR4j03lQyM/QIDAQABAoIBAQCuyPibJIOluqog
qgo7mi0WHms9/nyFn65dDqDZm+hpY5ZpaiegKmBeMPE5tRk6qNWWekqvF5Ca+ZVP
/9jE2J5cgIk4OC8E+rNOrmwanKKStAJyUAUZfxXao0tRbrE7Qjodm4A1lMmi0GUd
zrk5wHpkWl6HV5rwbf1PeFpWah0uv73aC00zweXzJVoCq+eZChhpmabzLRO+slUy
7VACzpwgJnPeuIJGNzXE9jCExzwRkl/auFm4wM5c9WXehpTB3EwYVtJfoMlgu4KE
Qh9TlngtBZt5/OYPZbxatMve5gbOfCq1UJlWntEGi1AJd+jBLIeYHdgO3mstq3QH
zwDel1ABAoGBAOxDs7nWZQ4ocK+g/Tm5227rVoDWqrfmIyAOaNE8hiVJhahtXoyq
4W6cJtGHLvWc9AXxU4LqWs0XKVNbG+xeVlaro8od1X/Z/IY02lSjW0dOXhbsvPVw
nIKErk2Wr70d4aQoQ37x6wYU+xJcapQn7iqcXgm7CDHkWjbKvIVx5cxFAoGBAOmn
k21X884AXYtc8goseR9+28B39kpEvDgE8AOzk0XHkfPOxF2l+Z50fILzVr4NURNv
BhDiIhexVgueoHjJ49OVH95LUISThojI8/BkjPXg/h60d7pOlyfoZowhMRzcZHq2
3mQrqJhArrh2CoRL/JSwJP3FjrAcp9yyA24P6XVZAoGBAKmDZbbnIThIQZlxK144
gD0T8subuX8aSodcb034W9Ly7kfKuLS6geXneV6J3GJyyw5ceGuMk7tka80XqHAt
u0qR+YExaJZDo4/y6dciIYKGsrFGB8kdk919LsYSYGKSxusNzGePUO3bLcydrAZC
o/nEmR/oJlgNm8CGMz6XWqX1AoGBAK5BF6X4bg84HouM6cXEnSBsD59e2ANTd7uf
kxBvoGnuCF932OKuoZcW8LUInaxnagvARRnaS+q3iqBn0O3EQ3DMSlQSfx4gl7jz
hVnG44mMHnjvxkrfycMtgy0GpAYOJ7GNKBY0qSvDMYrIHdfEg76wDyZja6LT/CyP
ZhdzLn0hAoGBAItbaHy1T0UMD07ocKO/1bgzvPozbAiIF/L4TvW5Vt21Uvv4Cbq2
Vdn937sOFHGPVbRUJ8Y9KOhhl7iaO4WH9EdxSPTEMWHEbsZoaKgvgtAT/sYAIKfp
UJeqNxeR9YN60iLw6jJpM2mq11sa4pnGh53ISP1uWkqVLMgXIvJPFzuQ
-----END RSA PRIVATE KEY-----`

const initHandlers = (socket, handlers) => {
  for (const [event, handler] of Object.entries(handlers)) {
    const clojure = async () => {
      for await (const args of on(socket, event)) {
        handler.apply(socket, args)
      }
    }
    clojure()
  }
}

const compatAddress = (listenOptions) => {
  if ('host' in listenOptions === false && 'address' in listenOptions === true) {
    listenOptions.host = listenOptions.address
    delete listenOptions.address
  }
  return listenOptions
}

const compatHost = (listenOptions) => {
  if ('address' in listenOptions === false && 'host' in listenOptions === true) {
    listenOptions.address = listenOptions.host
    delete listenOptions.host
  }
  return listenOptions
}

export const http = async ({ createOptions = {}, handlers = {}, listenOptions = {} }) => {
  const { createServer } = await import('http')
  const socket = createServer(createOptions).listen(compatAddress(listenOptions))
  initHandlers(socket, handlers)
  return once(socket, 'listening')
}

export const https = async ({ createOptions = {}, handlers = {}, listenOptions = {} }) => {
  const { createServer } = await import('https')
  const socket = createServer(createOptions).listen(compatAddress(listenOptions))
  initHandlers(socket, handlers)
  return once(socket, 'listening')
}

export const http2 = async ({ createOptions = {}, handlers = {}, listenOptions = {} }) => {
  const { createServer } = await import('http2')
  const socket = createServer(createOptions).listen(compatAddress(listenOptions))
  initHandlers(socket, handlers)
  return once(socket, 'listening')
}

export const https2 = async ({ createOptions = {}, handlers = {}, listenOptions = {} }) => {
  const { createSecureServer: createServer } = await import('http2')
  const socket = createServer(createOptions).listen(compatAddress(listenOptions))
  initHandlers(socket, handlers)
  return once(socket, 'listening')
}

export const tcp = async ({ createOptions = {}, handlers = {}, listenOptions = {} }) => {
  const { createServer } = await import('net')
  const socket = createServer(createOptions).listen(compatAddress(listenOptions))
  initHandlers(socket, handlers)
  return once(socket, 'listening')
}

export const tls = async ({ createOptions = {}, handlers = {}, listenOptions = {} }) => {
  const { createServer } = await import('tls')
  const socket = createServer(createOptions).listen(compatAddress(listenOptions))
  initHandlers(socket, handlers)
  return once(socket, 'listening')
}

export const udp = async ({ createOptions = {}, handlers = {}, listenOptions = {} }) => {
  const { createSocket } = await import('dgram')
  const socket = createSocket(createOptions).bind(compatHost(listenOptions))
  initHandlers(socket, handlers)
  return once(socket, 'listening')
}
