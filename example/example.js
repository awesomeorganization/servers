import { LOCALHOST_CERT, LOCALHOST_KEY, http, https, https2 } from '@awesomeorganization/servers'

const example = () => {
  http({
    handlers: {
      request(request, response) {
        response.end('Hi!')
      },
    },
    listenOptions: {
      host: '127.0.0.1',
      port: 3000,
    },
  })
  https({
    createOptions: {
      cert: LOCALHOST_CERT,
      key: LOCALHOST_KEY,
    },
    handlers: {
      request(request, response) {
        response.end('Hi!')
      },
    },
    listenOptions: {
      host: '127.0.0.1',
      port: 4000,
    },
  })
  https2({
    createOptions: {
      cert: LOCALHOST_CERT,
      key: LOCALHOST_KEY,
    },
    handlers: {
      stream(stream) {
        stream.end('Hi!')
      },
    },
    listenOptions: {
      host: '127.0.0.1',
      port: 5000,
    },
  })
  // TRY
  // http://127.0.0.1:3000/
  // https://127.0.0.1:4000/
  // https://127.0.0.1:5000/
}

example()
