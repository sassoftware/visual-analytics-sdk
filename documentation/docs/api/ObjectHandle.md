---
id: ObjectHandle
title: ObjectHandle
---

An `ObjectHandle` is used to perform actions on a single object in an open
report. An object's handle can be obtained using the `getObjectHandle` method
on a [`ReportHandle`](ReportHandle.md).

When a report element is assigned new attribute values or removed from the DOM,
any `ObjectHandles` obtained from that element are invalidated and should be
discarded.

## Methods

### exportData(format: string, options?: ExportDataOptions): Promise\<string>
Exports a file that contains the object's data, and returns a URL to the file. 

`format` defines the format of the data output file.
Supported formats: 
  - `"XLSX"`
  - `"CSV"`
  - `"TSV"`

`options` is an [`ExportDataOptions`](ExportDataOptions.md) bundle that modifies properties of the exported data file. 

If no `options` parameter is supplied, the data will be exported using the default option values. 

### exportPDF(options?: ExportPDFOptions): Promise\<string>

Exports a PDF of the report object and returns a URL to the PDF document. 

`options` is an [`ExportPDFOptions`](ExportPDFOptions.md) that controls the format of the exported PDF document. The option `includedReportObjects` does not apply when exporting a report object.

If no `options` parameter is supplied, the report is exported using the default options values.

### refreshData(): void

Refreshes the data for the report object that is controlled by the
`ObjectHandle`.
