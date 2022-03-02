---
id: ReportHandle
title: ReportHandle
---

A `ReportHandle` is used to control the state of an open report. A report's
handle can be obtained by calling the `getReportHandle` method on a
[`SASReportElement`](SASReportElement.md),
[`SASReportPageElement`](SASReportPageElement.md), or
[`SASReportObjectElement`](SASReportObjectElement.md).

When a report element is assigned new attribute values or removed from the DOM,
any `ReportHandles` obtained from that element are invalidated and should be
discarded.

## Methods

### getObjectHandle(objectName: string): Promise\<ObjectHandle>

Get an [ObjectHandle](ObjectHandle.md) for performing actions on a single object
in the report.

Possible values for `objectName` are the same as the `objectName` attribute on
[`SASReportObjectElement`](SASReportObjectElement.md). The promise is rejected
if the name does not exist in the report.

[`ObjectHandles`](ObjectHandle.md) are invalidated under the same conditions as
`ReportHandles`. To obtain another one, get a new `ReportHandle` and call
`getObjectHandle` again.

### setReportParameters(parameters: Object | undefined): void

Set the state of all the parameters in a report. For information on how
parameters can be added to reports, see the
<a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=default&docsetId=vareportdata&docsetTarget=n1wv50n60ccq86n1nzp6zat1wj64.htm">SAS Help Center</a>.

If `parameters` is an object, each key in the object should correspond to the
name of a parameter used in the report. Keys are case-sensitive and must
match the name of the parameter exactly. If a key does not match any
parameters in the report, its value is ignored.

For single value parameters, the value may be a number, string, `Date`
object, `null`, or `undefined`. For parameters that support multiple values,
the value may be also be an array of numbers, strings, or `Date` objects. If
the value given for a parameter is `null`, `undefined`, or the empty string
`''`, that parameter's value will be unset.

All report parameters missing from the `parameters` argument are reset to
their default values. Calling `setReportParameters` with either an empty
object or `undefined` resets all parameters to their default values. A
parameter's default value is the value it had when the report was first
opened.

If a parameter is given an invalid value, the value is ignored and the
parameter is neither updated nor reset. Numeric and date values that are out
of range for their parameters are invalid, as are arrays passed to single
value parameters. Strings are valid values for numeric parameters only if
they can be parsed into numbers. Strings are not valid for date and datetime
parameters.

If a page contains more than one
[`SASReportObjectElement`](SASReportObjectElement.md) using the same report,
parameters set on a `ReportHandle` from one will affect all the others on the
page. Each [`SASReportElement`](SASReportElement.md) and
[`SASReportPageElement`](SASReportPageElement.md) maintains its own report
state, so setting parameters on those elements does not affect other elements
on the page.

#### Example

In this example, the parameters `Date`, `Character`, `Multiple Character`,
and `Numeric` get valid values, `OtherNumeric` has its value unset, and
`InvalidNumeric` is left unchanged. If the report contained other parameters
not present in the object, they would be reset to their initial state.

```javascript
const sasReport = document.getElementById("my-report");
sasReport.getReportHandle().then((reportHandle) => {
  reportHandle.setReportParameters({
    Date: new Date(2020, 0, 1),
    Character: "String",
    "Multiple Character": ["String 1", "String 2"],
    Numeric: 12,
    OtherNumeric: null,
    InvalidNumeric: "number",
  });
});
```

### updateReportParameters(parameters: Object): void

Update a subset of the parameters in the report.

Usage of `updateReportParameters` is the same as `setReportParameters`,
except report parameters missing from the `parameters` argument do not get
reset to their default values. Calling `updateReportParameters` with an empty
object has no effect on the report.

#### Example

In this example, the parameters `Character` and `Numeric` get new values,
while all other parameters are left unchanged.

```javascript
const sasReport = document.getElementById("my-report");
sasReport.getReportHandle().then((reportHandle) => {
  reportHandle.updateReportParameters({
    Character: "String",
    Numeric: 12,
  });
});
```

### exportPDF(options?: ExportPDFOptions): Promise\<string>

Exports a PDF of the report and returns a URL to the PDF document.

`options` is an [`ExportPDFOptions`](ExportPDFOptions.md) that controls the format of the exported PDF document.
If no `options` parameter is supplied, the report is exported using the default options values.

#### Example

In this example, custom options are passed in to the export function, and the exported PDF is opened in a new window.

```javascript
const sasReport = document.getElementById("my-report");
sasReport.getReportHandle().then((reportHandle) => {
  const options = {
    orientation: "portrait",
    margin: { top: 0.2, bottom: 0.2, units: "inches" },
    includeDetailsTables: true,
    includedReportObjects: ["ve38", "ve56"],
  };

  reportHandle.exportPDF(options).then((pdfUrl) => {
    // Open the PDF in a new window
    window.open(pdfUrl, "_blank");
  });
});
```

### refreshData(): void

Refreshes the data for all of the objects in the report.

### reloadReport(): void

Reloads the report. This updates all report content and data, which resets all filters and parameters to their default values.
