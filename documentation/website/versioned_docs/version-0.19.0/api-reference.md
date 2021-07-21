---
id: version-0.19.0-api-reference
title: API Reference
original_id: api-reference
---

The SAS Visual Analytics SDK provides a set of components and APIs that enable you to render reports and report parts. It also enables you 
to use SAS data to drive your own components or visualizations.

## Top-Level Exports

- [`SASReportElement`](api/SASReportElement.md)
- [`SASReportPageElement`](api/SASReportPageElement.md)
- [`SASReportObjectElement`](api/SASReportObjectElement.md)
- [`connectToServer`](api/connectToServer.md)
- [`registerDataDrivenContent`](api/registerDataDrivenContent.md)
- [`DataDrivenContentHandle`](api/DataDrivenContentHandle.md)
- [`setUseHighContrastReportTheme`](api/setUseHighContrastReportTheme.md)
- [`setLoadingTheme`](api/setLoadingTheme.md)

## Loading with \<script\>

When you load the library with a script element, the `vaReportComponents` global variable is not ready to use until all of the other
assets are loaded. The `vaReportComponents.loaded` event is dispatched once it is ready.

```html
<script async src="https://unpkg.com/@sassoftware/va-report-components@0.19.0/dist/umd/va-report-components.js"></script>
<script>
  window.addEventListener('vaReportComponents.loaded', function() {
    // The SAS Visual Analytics SDK is loaded and ready
    const connectToServer = vaReportComponents.connectToServer;
  });
</script>
```
