# servers

:boom: [ESM] The easiest way to create http, http2, https, https2, tcp, tls, udp servers in Node.js

---

![npm](https://img.shields.io/david/awesomeorganization/servers)
![npm](https://img.shields.io/npm/v/@awesomeorganization/servers)
![npm](https://img.shields.io/npm/dt/@awesomeorganization/servers)
![npm](https://img.shields.io/npm/l/@awesomeorganization/servers)
![npm](https://img.shields.io/bundlephobia/minzip/@awesomeorganization/servers)
![npm](https://img.shields.io/bundlephobia/min/@awesomeorganization/servers)

---

## Example

```
import { http, http2, https, https2, tcp, tls, udp } from '@awesomeorganization/servers'

const http = await http({
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

const https = await https({
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

const http2 = await http2({
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

const https2 = await https2({
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

const tcp = await tcp({
  listenOptions: {
    host,
    ipv6Only,
    port,
  },
})

const tls = await tls({
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

const udp = await udp({
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
