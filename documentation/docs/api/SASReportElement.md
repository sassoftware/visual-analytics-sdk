---
id: SASReportElement
title: SASReportElement
---

`SASReportElement` is a custom HTML element that renders an entire report. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

To find the correct values for `url` and `reportUri`, see [the Getting Started page](getting-started.md#create-a-custom-html-tag).

## Custom Element Tag

```html
<sas-report
  authenticationType="guest"
  url="http://my-viya-server.com"
  reportUri="/reports/reports/c3c6befb-3981-4c9e-b011-7dc11dec5e37"
  hideNavigation
></sas-report>
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

Specify the base location of the SAS report package that was exported from SAS Visual Analytics.  This can be absolute or relative to the page. `authenticationType`, `url`, and `reportUri` are ignored when this property is set.

See [Export Report Package](guides/export-report-package.md)

### `hideNavigation: boolean | 'auto'`

Indicate whether page navigation tabs ought to be hidden. `false` provides an application-like experience, whereas
`true` provides a clean look which displays a single page. The `'auto'` option displays tabs only for reports with more
than one section.

default value: `'auto'`

## Properties

### `menuItemProvider: MenuItemProvider`

A [`MenuItemProvider`](MenuItemProvider.md) function that generates custom menu content for this element.

## Methods

### `getReportHandle(): Promise<ReportHandle>`

Get a [ReportHandle](ReportHandle.md) for controlling the state of the
current report.

If called before the element is added to the DOM, the promise will resolve
after the report begins to load.

The [ReportHandle](ReportHandle.md) is invalidated when attributes on the
`SASReportElement` are changed and when the element is removed from the DOM.
To obtain another [ReportHandle](ReportHandle.md), discard the previous
result and call `getReportHandle` again.

[ReportHandles](ReportHandle.md) from `SASReportElements` are never shared
with other elements.

## Styles

`SASReportElement` supports styling certain parts of the report via <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>.

### `--sas-report-background-color`

Specify the background color of the area surrounding the report content. This includes the report controls area, the
area behind the tab bar, and the padding.

default value: comes from the report theme

### `--sas-report-padding`

Specify the padding between the report content and the boundary of the custom element.

default value: `0`

### Example: inline styles on the custom element

To customize the style of a `sas-report`, add inline styles.

```html
<sas-report
  style="--sas-report-background-color: #0074BE; --sas-report-padding: 1rem;"
  authenticationType="guest"
  url="http://my-viya-server.com"
  reportUri="/reports/reports/c3c6befb-3981-4c9e-b011-7dc11dec5e37"
></sas-report>
```

### Example: CSS

Any selector that targets the `sas-report` element can be used to apply style variables.

```html
<style>
  .my-report {
    --sas-report-background-color: transparent;
    --sas-report-padding: 10px;
  }
</style>
<sas-report
  class="my-report"
  authenticationType="guest"
  url="http://my-viya-server.com"
  reportUri="/reports/reports/c3c6befb-3981-4c9e-b011-7dc11dec5e37"
></sas-report>
```
