---
id: SASReportObjectElement
title: SASReportObjectElement
---

`SASReportObjectElement` is a custom HTML element that renders a report object. This could be a single object or a
container of multiple objects. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

To find the correct values for `url`, `reportUri`, and `objectName`, see [the Getting Started page](getting-started.md#create-a-custom-html-tag).

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

Choose the method to authenticate requests to the SAS Viya server.

- `'guest'` automatically signs in to the SAS Viya server as the guest user.
- `'credentials'` uses SAS Logon to establish an authenticated session.

default value: `'credentials'`

### `url: string`

Specify the URL of the SAS Viya server that hosts the report. This is the full context root, including the protocol,
optional port, and host.

### `reportUri: string`

Specify the report URI.

### `packageUri: string`

Specify the base location of the SAS report package that was exported from SAS Visual Analytics.  This can be absolute or relative to the page. `authenticationType`, `url`, and `reportUri` are ignored when you set this property.

See [Export Report Package](guides/export-report-package.md)

### `objectName: string`

Specify the name of the object from the report to display.

## Properties

### `menuItemProvider: MenuItemProvider`

A [`MenuItemProvider`](MenuItemProvider.md) function that generates custom menu content for this element.

## Methods

### `getReportHandle(): Promise<ReportHandle>`

Get a [ReportHandle](ReportHandle.md) for controlling the state of the
current report.

If called before the element is added to the DOM, the promise will resolve
after the object begins to load.

The [ReportHandle](ReportHandle.md) is invalidated when attributes on the
`SASReportObjectElement` are changed and when the element is removed from the
DOM. To obtain another [ReportHandle](ReportHandle.md), discard the previous
result and call `getReportHandle` again.

[ReportHandles](ReportHandle.md) from `SASReportObjectElement` are shared
between objects from the same report.
