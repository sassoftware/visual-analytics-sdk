---
id: api-reference
title: API Reference
---

The SAS Visual Analytics SDK provides a set of components and APIs that enable you to render reports and report parts. It also enables you 
to use SAS data to drive your own components or visualizations.

## Top-Level Exports

- [`SASReportElement`](api/SASReportElement.md)
- [`SASReportObjectElement`](api/SASReportObjectElement.md)
- [`connectToServer`](api/connectToServer.md)
- [`registerDataDrivenContent`](api/registerDataDrivenContent.md)
- [`DataDrivenContentHandle`](api/DataDrivenContentHandle.md)

## Loading with \<script\>

When you load the library with a script element, the `vaReportComponents` global variable is not ready to use until all of the other
assets are loaded. The `vaReportComponents.loaded` event is dispatched once it is ready.

```html
<script async src="https://unpkg.com/@sassoftware/va-report-components@0.3.0/dist/umd/va-report-components.js"></script>
<script>
  window.addEventListener('vaReportComponents.loaded', function() {
    // The SAS Visual Analytics SDK is loaded and ready
    const connectToServer = vaReportComponents.connectToServer;
  });
</script>
```

## Importing

All top-level exports can be imported like this:

### ES5 (UMD)

```javascript
const connectToServer = vaReportComponents.connectToServer;
```

### ES6

```javascript
import { connectToServer } from '@sassoftware/va-report-components';
```