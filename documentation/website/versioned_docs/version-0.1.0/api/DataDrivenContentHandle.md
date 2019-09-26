---
id: version-0.1.0-DataDrivenContentHandle
title: DataDrivenContentHandle
original_id: DataDrivenContentHandle
---

A `DataDrivenContentHandle` is used to dispatch messages to a data-driven content report object. It can be obtained by
calling [`registerDataDrivenContent`.](registerDataDrivenContent.md)

## Methods

### `dispatch(message: Object): void`

Send a data selection message to the data-driven content object. The message object should be of the form specified in
the <a target="_blank" href="https://documentation.sas.com/?docsetId=varef&docsetTarget=n109mqtyl6quiun1mwfgtcn2s68b.htm&docsetVersion=8.4">SAS documentation for Selection Handling</a>.

### `deregister(): void`

Detach this handler from the attached data-driven report object. This cleans up resources and should be called when it
is no longer necessary to communicate with the object.

## The `message` object

The `message` object is used to update a data-driven content object by indicating a subset of its data that should be
selected.

### `resultName: string`

The name of the associated query result. This can be obtained from
[the `receivedMessage` object](registerDataDrivenContent.md#the-receivedmessage-object) which will be sent to
[the `onMessage` callback of `registerDataDrivenContent`](api/registerDataDrivenContent.md#onmessage-receivedmessage-object-void)
every time the data-driven content object is updated.

### `selections: Object[]`

An array of objects representing the data to be selected. Each object has a single `row` attribute which indicates the
index of the row to select.

### Example

```javascript
{
  resultName: 'dd40',
  selections: [{ row: 0 }, { row: 2 }]
}
```
