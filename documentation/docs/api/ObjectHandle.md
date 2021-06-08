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

### refreshData(): void

Refreshes the data for the report object that is controlled by the
`ObjectHandle`.
