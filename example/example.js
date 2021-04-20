/* eslint-disable node/no-unsupported-features/es-syntax */

import { LOCALHOST_CERT, LOCALHOST_KEY, http, https } from '@awesomeorganization/servers'

const example = () => {
  http({
    listenOptions: {
      host: '127.0.0.1',
      port: 3000,
    },
    onRequest(request, response) {
      response.end('Hi!')
    },
  })
  https({
    createOptions: {
      cert: LOCALHOST_CERT,
      key: LOCALHOST_KEY,
    },
    listenOptions: {
      host: '127.0.0.1',
      port: 4000,
    },
    onRequest(request, response) {
      response.end('Hi!')
    },
  })
  // TRY
  // http://127.0.0.1:3000/
  // https://127.0.0.1:4000/
}

example()
