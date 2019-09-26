---
id: version-0.1.0-connectToServer
title: connectToServer
original_id: connectToServer
---

```
connectToServer(url, options): void
```

Initiate the connection to the SAS Visual Analytics server specified by the url. Using a SASReportElement or
SASReportObjectElement implicitly makes the appropriate server connection. This API is used to make a server connection
before any report elements are added to the DOM. `connectToServer` is intended for use in single-page applications, or
in any context where report components will not necessarily be shown immediately. In these cases, calling
`connectToServer` as early as possible reduces the amount of work that needs to be done upon the first interaction with
the server.

## Arguments

### `url: string`

Specify the url of the SAS Viya server. This is the full context root, including the protocol, optional port, and host.

### `options: Object`

Choose additional options for how to connect to the server. The following properties are supported:

- `authenticationType: string`: Choose the method that will be used to authenticate requests to the Viya server.
  - Currently the only valid value is `"guest"`. This attribute is required to support a future update where
    `"credential"` will be the default.
