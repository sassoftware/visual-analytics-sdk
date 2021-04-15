---
id: data-driven-content
title: Data-Driven Content
---

The data-driven content object is a feature in SAS Visual Analytics which allows you to embed your own web content into
a report and drive it with data from SAS Visual Analytics. It responds to any filters, ranks, and actions in the same
way that native report objects do. For more information, see the
<a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=default&docsetId=varef&docsetTarget=n109mqtyl6quiun1mwfgtcn2s68b.htm">SAS Help Center</a>.

The SAS Visual Analytics SDK offers two ways to work with data-driven content objects:

- embed the objects directly by using the [`<sas-report-object>`](api/SASReportObjectElement.md) element. This loads the
  data-driven content in an iframe, exactly as it is done is SAS Visual Analytics. For details on embedding a
  data-driven object in this way, see [Create a Custom HTML Tag](getting-started.md#create-a-custom-html-tag).
- visualize the SAS Visual Analytics data and respond to actions independently by using the SAS Visual Analytics SDK
  API. This more flexible approach allows for customization of your own HTML content, based on data and actions that are
  driven from SAS Visual Analytics.

## SAS Visual Analytics SDK API Example

This guide walks you step-by-step through the
<a target="_blank" href="https://github.com/sassoftware/visual-analytics-sdk/blob/master/examples/registerDataDrivenContent.html">Data-Driven
Content Example</a>. The example is set up to show the data flow between the SAS Visual Analytics SDK and a custom HTML table rendered by the
example. Here are the steps to set up the example and run it using your own report.

### Create a source report

First, create a report with two objects. The first object will be a bar chart, and the second will be a data-driven
content object. (The URL that you specify for the data-driven content object in the source report does not matter for
the purposes of this example.)

Using any data set you have access to, assign the same category data item to both the bar chart and the data-driven
content. (Optional) Assign a measure to the bar chart and any number of measures to the data-driven content. Then create
a "linked selection" action between the two objects.

### Replace placeholder values

The example HTML uses placeholder values for the `url`, `reportUri`, and `objectName` values. These need to be replaced
with the actual values for the objects in your report. Using the directions specified in the
[Getting Started guide](getting-started.md#create-a-custom-html-tag), create a `sas-report-object` tag for the bar chart
object, and use it to replace the placeholder in the example.

```html
<body>
  <div class="flex-container small-content">
    <div class="container left-content">
      <sas-report-object
        authenticationType="guest"
        url="{SAS-VIYA-URL}"
        reportUri="{REPORT-URI}"
        objectName="{OBJECT-NAME}"
      ></sas-report-object>
    </div>
    <div class="container right-content">
      <div id="data-driven-content" class="ddc-container"></div>
    </div>
  </div>
</body>
```

Using the same steps, create a `<sas-report-object>` tag for the data-driven content object. But instead of
adding the tag directly to the example, use the generated `url`, `reportUri`, and `objectName` to populate the values
used in the call to `registerDataDrivenContent`.

```javascript
// Register the onMessage handler with the data-driven content object
var ddcHandle = vaReportComponents.registerDataDrivenContent(
  {
    authenticationType: 'guest',
    url: '{SAS-VIYA-URL}',
    reportUri: '{REPORT-URI}',
    objectName: '{OBJECT-NAME}'
  },
  handleDataMessage
);
```

Open the modified example in a browser. The output will look like this, with the data values changed to match the data
used in your report.

![Data-Driven Content Example](assets/data-driven-content.png)

## Analyzing the example

### Data-driven content registration

To begin communication with a data-driven content object, you must register a callback function to receive data
messages. This is done by calling [`registerDataDrivenContent`](api/registerDataDrivenContent.md), as shown in the above
code snippet. Here, `handleDataMessage` is passed as the data handler function callback. This function is called any
time data or selections are modified for this data-driven content object.

### Handling the data

In this example, most of the logic to handle the data-driven content logic is in the `handleDataMessage` function. Here
are details about the different sections of the code.

#### The `message` argument

The sole argument passed to the data handler callback is `message`, which is an object that contains the report object's
data and additional metadata. The structure of the message argument is explained in the documentation for
[registerDataDrivenContent](api/registerDataDrivenContent.md).

Entry into the data processing block is guarded by a `null` check on the `message` object, and a length check to make
sure the number of data rows is valid.

```javascript
function handleDataMessage(message) {
  if (message && message.rowCount >= 0) {
    // data processing
  }
}
```

#### The `columns` property

The `columns` property is an array of column objects, each containing metadata that describes each column, such as name,
label, type, and usage. One special type of column is the `brush` column, which holds row selection data. You can
identify the brush column by checking `usage === "brush"`. The example code below extracts the index of the column that
is the brush column. It then creates a list of column labels using the `label` property on each column.

```javascript
// Find the index of the brush column
const brushColumnIndex = message.columns.findIndex((column) => column.usage === 'brush');

// Extract the column labels (excluding the brush column)
const columnLabels = message.columns.filter((column) => column.usage !== 'brush').map((column) => column.label);
```

#### The `data` property

The `data` property is a two-dimentional array that is in row-major order. Each element of `data` is a row, and each row
is an array of values. The following code processes each data row, passing it to `createTableRow` in order to process
the values and create a row in the HTML table.

```javascript
const rows = message.data.map((dataRow, rowIndex) =>
  createTableRow(dataRow, brushColumnIndex, rowIndex, message.columns)
);
```

In `createTableRow`, the value of the brush column is used to set the `checked` property of the row's check box. The
brush value is numeric, and a value greater than 0 indicates that this data row is selected.

```javascript
checkbox.checked = brushColumnIndex >= 0 && dataRow[brushColumnIndex] > 0;
```

The data values are then processed to create `td` elements, each appended to the `tr`. Note that the brush column is
ignored in this step, and that the `column.type` is used to apply special styling to numeric cells.

```javascript
dataRow.forEach((value, index) => {
  if (index != brushColumnIndex) {
    let td = createElementWithText('td', value);
    // Use the column metadata to determine if the value is numeric.
    // If it is, apply the 'numeric' css class for right-alignment.
    if (columns[index].type === 'number') {
      td.className = 'numeric';
    }
    tr.appendChild(td);
  }
});
return tr;
```

### Sending selections

Selections can be sent back to SAS Visual Analytics by using the `dispatch` method on the `DataDrivenContentHandle`.
These selection messages then trigger filter and/or linked selection actions on any connected downstream objects in the
report.

The code in the section below creates a click handler for the table that dispatches the updated selection message. The
original data message included a `resultName` string. This unique string identifies this object, and must be included in
the dispatched message. `selections` is an array of objects, each with a `row` property containing the row index. The
code below converts the raw array of selected indices into an array of objects before including it as part of the
dispatched message object. For details on the structure of the dispatched method, see the reference for
[DataDrivenContentHandle](api/DataDrivenContentHandle.md#dispatchmessage-object-void).

```javascript
// Create a click handler for the HTML table.
const resultName = message.resultName;
table.addEventListener('click', (evt) => {
  // Convert the array of selection indices into an array of objects
  // with a 'row' property.
  const selections = getTableSelections(evt.currentTarget).map((index) => {
    return { row: index };
  });

  // Dispatch a selection from the data-driven content.
  ddcHandle.dispatch({ resultName, selections });
});
```
