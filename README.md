# servers

:boom: [ESM] The easiest way to create http, http2, https, https2, tcp, tls, udp servers in Node.js

---

![GitHub Workflow](https://img.shields.io/github/workflow/status/awesomeorganization/servers/npm-publish?style=flat-square)
![Codacy](https://img.shields.io/codacy/grade/6f224801be0543b99e8ee12db87f9316?style=flat-square)
![CodeFactor](https://img.shields.io/codefactor/grade/github/awesomeorganization/servers?style=flat-square)
![Snyk](https://img.shields.io/snyk/vulnerabilities/npm/@awesomeorganization/servers?style=flat-square)
![Depfu](https://img.shields.io/depfu/awesomeorganization/servers?style=flat-square)
![npms.io](https://img.shields.io/npms-io/final-score/@awesomeorganization/servers?style=flat-square)

---

## Install

```sh
npm install @awesomeorganization/servers
```

## Example

Full example in `/example` folder.

```js
import { LOCALHOST_CERT, LOCALHOST_KEY, http, https, https2 } from '@awesomeorganization/servers'

const example = () => {
  http({
    handlers: {
      request(_request, response) {
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
      request(_request, response) {
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
}

example()

// TRY
// http://127.0.0.1:3000/
// https://127.0.0.1:4000/
// https://127.0.0.1:5000/
```
