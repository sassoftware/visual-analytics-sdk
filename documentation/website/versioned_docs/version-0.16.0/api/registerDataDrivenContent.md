---
id: version-0.16.0-registerDataDrivenContent
title: registerDataDrivenContent
original_id: registerDataDrivenContent
---

```
registerDataDrivenContent(options, onMessage): DataDrivenContentHandle
```

This function is used to receive and dispatch messages to a data-driven content object. If the report is not yet
opened then this call will open it and initiate data processing for this data-driven content object.

To find the correct values for `url`, `reportUri`, and `objectName`, see [the Getting Started page](getting-started.md#create-a-custom-html-tag).

## Arguments

### `options: Object`

Choose options for how to connect to the server. The following properties are supported:

- `url: string`: Specify the URL of the SAS Viya server that hosts the report. This is the full context root, including
  the protocol, optional port, and host.
- `reportUri: string`: Specify the report URI.
- `objectName: string`: Specify name of the data-driven content object.
- `authenticationType: string`: Choose the method to authenticate requests to the SAS Viya server.
  - `'guest'` automatically signs in to the SAS Viya server as the guest user.
  - `'credentials'` <b>`default`</b> uses SAS Logon to establish an authenticated session.

### `onMessage: (receivedMessage: Object) => void`

Define a callback function to handle data changes for this data-driven content object. This function is called every
time the data for this object is updated. For more information about the properties of the `receivedMessage` object as well as receiving data for data driven content, see the <a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=default&docsetId=varef&docsetTarget=n109mqtyl6quiun1mwfgtcn2s68b.htm#n1dce3mqdct26pn12s4yl6s3h39q">SAS Help Center</a>.

## Return value

`registerDataDrivenContent` returns a [`DataDrivenContentHandle`](api/DataDrivenContentHandle.md) which can be used to dispatch
messages to the data-driven content object.

## The `receivedMessage` object

The `receivedMessage` object is passed to the [`onMessage`](#onmessage-receivedmessage-object-void) callback every time
the data-driven content object is updated. It contains the report object's data and additional metadata.

### `resultName: string`

The name of the associated query result. This name is needed for communicating any messages from the data-driven content
object back to SAS Visual Analytics.

### `rowCount: number`

The number of rows of data returned. If all the data has been filtered out or no data items are assigned to the object,
then the row count is 0.

### `columns: Object[]`

An array of column objects that let the author determine the type of data and other attributes such as format and label.
Each column object supports the following properties:

- `name: string` A unique name for the column.
- `label: string` A human-readable label for the column.
- `type: string` The data type of the entries in that column. Can be `'number'` or `'string'`.
- `usage: string` Describes how the column is used. The special value `'brush'` indicates that this column holds row
  selection data. If a row is selected, then the value in the `'brush'` column has a value greater than `0`.
- `aggregation: string` An optional string that describes how the values in this column are aggregated together.
- `format: Object` An object describing how the data should be formatted for a column of type `'number'`. It has the
  following properties:
  - `name: string` A name for the format
  - `width: number` The maximum number of characters for the formatted value.
  - `precision: number` The number of digits after the decimal place.
  - `formatString: string` A string that completely specifies the formatting by combining the `name`, `width`, and
    `precision`.

### `data: (string|number)[]`

The query results stored in a two-dimensional array. The data is in row-major order. So, `receivedMessage.data[0]` is
the first row of data and `receivedMessage.data[0][0]` is the first column in the first row. The data in this array is
unformatted for measures. Specifying a format for a measure has no impact on the data returned. Dates and datetimes are
formatted, so the data reflects the format that is specified on any date or datetime variable.

### Example

```javascript
{
  version: '1',
  resultName: 'dd40',
  rowCount: 3,
  data: [
    ['Finch', 95000.0, 0.42857142857142855],
    ['Jones', 26000.0, 0.0],
    ['Smith', 108000.0, 0.5]
  ],
  columns: [
    {
      name: 'bi184',
      label: 'dealer',
      type: 'string'
    },
    {
      name: 'bi258',
      label: 'sales',
      type: 'number',
      usage: 'quantitative',
      aggregation: 'sum',
      format: {
        name: 'BEST',
        width: 12,
        precision: 0,
        formatString: 'BEST12.'
      }
    },
    {
      name: 'ri1',
      type: 'number',
      usage: 'brush',
      format: {
        name: 'COMMA',
        width: 12,
        precision: 2,
        formatString: 'COMMA12.2'
      }
    }
  ]
};
```
