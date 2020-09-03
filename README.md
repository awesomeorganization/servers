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
  host,
  port,
})

const http2 = await http2({
  host,
  port,
})

const https = await https({
  cert,
  host,
  key,
  port,
})

const https2 = await https2({
  cert,
  host,
  key,
  port,
})

const tcp = await tcp({
  host,
  port,
})

const tls = await tls({
  cert,
  host,
  key,
  port,
})

const udp = await udp({
  host,
  port,
})
```
