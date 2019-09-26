---
id: version-0.1.0-SASReportElement
title: SASReportElement
original_id: SASReportElement
---

`SASReportElement` is a custom HTML element that renders an entire report. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

See [the Getting Started page](getting-started.md#create-a-custom-html-tag) to learn how to find
the correct values for `url` and `reportUri`.

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

Currently, the only valid value is `"guest"`. This attribute is required to support a future update where `"credential"`
will be the default.

### `url: string`

Specify the URL of the SAS Viya server that hosts the report. This is the full context root, including the protocol,
optional port, and host.

### `reportUri: string`

Specify the report URI.

### `hideNavigation: boolean | 'auto'`

Indicate whether page navigation tabs ought to be hidden. `false` provides an application-like experience, whereas
`true` provides a clean look which displays a single page. The `'auto'` option displays tabs only for reports with more
than one section.

default value: `'auto'`

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
