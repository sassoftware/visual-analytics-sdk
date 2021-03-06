---
id: version-0.3.0-SASReportPageElement
title: SASReportPageElement
original_id: SASReportPageElement
---

`SASReportPageElement` is a custom HTML element that renders a report page. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

To find the correct values for `url`, `reportUri`, and `pageName`, see [the Getting Started page](getting-started.md#create-a-custom-html-tag).

## Custom Element Tag

```html
<sas-report-page
  authenticationType="guest"
  url="http://my-viya-server.com"
  reportUri="/reports/reports/c3c6befb-3981-4c9e-b011-7dc11dec5e37"
  pageName="vi20"
></sas-report-object>
```

## Attributes

### `authenticationType: string`

Choose the method to authenticate requests to the SAS Viya server.
- `'guest'` automatically signs in to the SAS Viya server as the guest user.
- `'credentials'` uses SAS Logon to establish an authenticated session.

default value: `'credentials'`

### `url: string`

Specify the URL of the SAS Viya server that hosts the report. This is the full context root, including the protocol,
optional port, and host.

### `reportUri: string`

Specify the report URI.

### `pageName: string`

Specify the name of the report page that you want to display. Either `pageName` or `pageIndex` can be used, but not both.

### `pageIndex: number`

Specify the index of the report page that you want to display. `0` is the first page. Either `pageName` or `pageIndex` can be used, but not both.
