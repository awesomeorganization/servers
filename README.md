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

```js
import { http, http2, https, https2, tcp, tls, udp } from '@awesomeorganization/servers'

http({
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

https({
  createOptions: {
    cert,
    key,
  },
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

http2({
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

https2({
  createOptions: {
    cert,
    key,
  },
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

tcp({
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

tls({
  createOptions: {
    cert,
    key,
  },
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

udp({
  createOptions: {
    ipv6Only,
    type,
  },
  listenOptions: {
    host,
    port,
  },
})
```
