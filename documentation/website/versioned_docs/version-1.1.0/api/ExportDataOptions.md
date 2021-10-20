---
id: version-1.1.0-ExportDataOptions
title: ExportDataOptions
original_id: ExportDataOptions
---

ExportDataOptions provides options for customizing the properties of the report data that you want to export. If no option is specified, then the default value is used.

## Options

### `columns: string[]`
Determines which data columns should be exported by specifying their labels.

### `startRow: number` 
Determines which row the data should begin with.

default value: `0`

### `endRow: number` 
Determines which row the data should end with.

default value: `<index of last row of data>`

### `formattedData: boolean` 
Controls whether formatted or unformatted data is exported. For example, if a data item has a dollar format applied, then exporting the formatted data includes the dollar sign. If this option is set to false, then the data for that item is exported as a raw number.

default value: `true`

### `detailedData: boolean` 
Specifies whether the data is aggregated (which has fewer columns, rows, or both depending on filters that have been applied) or detailed (which has all available columns and rows).

default value: `false`
