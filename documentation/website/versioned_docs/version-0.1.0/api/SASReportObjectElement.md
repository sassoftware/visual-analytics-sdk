---
id: version-0.1.0-SASReportObjectElement
title: SASReportObjectElement
original_id: SASReportObjectElement
---

`SASReportObjectElement` is a custom HTML element that renders a report object. This could be a single object or a
container of multiple objects. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

Check out [the Getting Started page](getting-started.md#create-a-custom-html-tag) to learn how to find
the correct values for `url`, `reportUri`, and `objectName`.

## Custom Element Tag

```html
<sas-report-object
  authenticationType="guest"
  url="http://my-viya-server.com"
  reportUri="/reports/reports/c3c6befb-3981-4c9e-b011-7dc11dec5e37"
  objectName="ve27"
></sas-report-object>
```

## Attributes

### `authenticationType: string`

Choose the method that will be used to authenticate requests to the Viya server.

Currently the only valid value is `"guest"`. This attribute is required to support a future update where `"credential"`
will be the default.

### `url: string`

Specify the URL of the SAS Viya server that hosts the report. This is the full context root, including the protocol,
optional port, and host.

### `reportUri: string`

Specify the report URI.

### `objectName: string`

Specify the name of the object from the report to display.
