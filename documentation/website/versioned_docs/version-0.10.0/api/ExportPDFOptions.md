---
id: version-0.10.0-ExportPDFOptions
title: ExportPDFOptions
original_id: ExportPDFOptions
---

ExportPDFOptions provides options for customizing the properties of an exported report. If no option is specified, then the default value is used.

## Options

### `paperSize: string | Object`
Determines the size of the document. 
  - `"letter"` <b>`default`</b>
  - `"legal"`
  - `"ledger"`
  - `"A3"`
  - `"A4"`
  - `Object` Used for custom sizing to specify the desired width and height of the document in inches or centimeters.
    - `width: number` 
    - `height: number` 
    - `units: string`
        - `"inches"` <b>`default`</b>
        - `"centimeters"`

### `orientation: string` 
Orientation of the page.
  - `"landscape"` <b>`default`</b>
  - `"portrait"`
### `margin: Object` 
Margins for the page.
  - `top?: number` 
  - `bottom?: number`
  - `left?: number`
  - `right?: number`
  - `units?: string`
    - `"inches"`
    - `"centimeters"`

default value: `{ top: 0.25, bottom: 0.25, left: 0.25, right: 0.25, units: 'inches' }`
### `showPageNumbers: boolean` 
Show or hide page numbers.

default value: `true`
### `showEmptyRowsAndColumns: boolean` 
Show or hide empty columns and rows in list tables and crosstabs.

default value: `false`
### `includeTableOfContents: boolean` 
Adds a table of contents to the beginning of the PDF.

default value: `false`
### `includeAppendix: boolean` 
When `true`, and the report has parameters, descriptions, filters, warnings, errors, or display rule legends, then an appendix is created. Each object that is selected to be included in the PDF is automatically assigned a value so that you can reference that object in the appendix.

default value: `true`
### `includeComments: boolean` 
Include comments in the appendix of the PDF output. Only valid if `includeAppendix` is `true`.

default value: `false`
### `includeDetailsTables: boolean` 
Adds a section at the end of the PDF that includes the details tables for all of the objects in the report that have detail tables associated with them. Only valid if `includeAppendix` is `true`.

default value: `false`
### `expandClippedContent: boolean` 
Enables you to see all of the content for tables, crosstabs, gauges, and containers. This includes content that is only partially available in the layout of the page. Each object is displayed on a separate page at the end of the report.

default value: `false`
### `includeCoverPage: boolean` 
Adds a cover page to the PDF, which includes the name of the report, the date that the PDF was exported, the user name, and the number of pages.

default value: `true`
### `coverPageText: string` 
Adds additional text on the cover page. Only valid if `includeCoverPage` is `true`.

default value: `''`
### `includedReportObjects: string[]` 
A list of report object names for the objects to include in the exported PDF. If empty, the entire report will be exported.

default value: `[]`