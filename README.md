# SAS Visual Analytics SDK

## Overview

The SAS Visual Analytics SDK is a set of JavaScript APIs and web components that enable SAS Visual Analytics report content
to be easily embedded in a third-party application or web page. Entire reports or individual report objects can be
embedded, and the content is fully interactive. This functionality is delivered as the `va-report-components` JavaScript
library.

## Prerequisites

Access to a deployment of SAS Visual Analytics 8.4 (or later) is necessary in order to use the SDK. For more information about server set up, see <a target="_blank" href="https://developer.sas.com/sdk/va/docs/getting-started#sas-viya-setup">SAS Viya setup</a>.

## Installation

### NPM

The <a target="_blank" href="https://www.npmjs.com/package/@sassoftware/va-report-components">`@sassoftware/va-report-components`</a> library is published to NPM and can be installed by running the `npm install` command as shown below. `va-report-components` does not support ES6 imports. Therefore, the contents of the `va-report-components/dist` folder must be deployed with your page, and then loaded using a `script` tag.

```bash
# From the root directory of your project
npm install @sassoftware/va-report-components

# Copy the contents of the package to an asset folder for deployment
cp -r ./node_modules/@sassoftware/va-report-components ./sdk-assets
```

The library can then be loaded out of the deployed assets folder using a `script` tag.

```html
<script async src="./sdk-assets/dist/umd/va-report-components.js"></script>
```

### CDN (Content Delivery Network)

Accessing the `va-report-components` library from a CDN is easy. It does not require installation or
hosting of the library code and assets. There are several public options for accessing NPM content through a CDN, such
as <a target="_blank" href="https://unpkg.com/">UNPKG</a> and <a target="_blank" href="https://www.jsdelivr.com/">jsDelivr</a>. Here is an example of loading the 0.11.0 version of `va-report-components` from UNPKG
using an HTML `script` tag. When used in production, the version should be pinned to the full `major.minor.patch` semantic version.

```html
<script async src="https://unpkg.com/@sassoftware/va-report-components@0.11.0/dist/umd/va-report-components.js"></script>
```

## Getting Started

For guides and an API reference, see <a target="_blank" href="https://developer.sas.com/sdk/va/">developer.sas.com</a>.

## Examples

Full examples are located in the [examples folder](./examples/) of this repository.

## Contributing

The SAS Visual Analytics SDK is not open for external contributions.

## License

This project is licensed under this commercial [license](LICENSE.txt).

## Additional Resources

- SAS Visual Analytics SDK on <a target="_blank" href="https://developer.sas.com/sdk/va/">developer.sas.com</a>
- SAS Visual Analytics <a target="_blank" href="https://support.sas.com/en/software/visual-analytics-support.html#documentation">documentation</a>
- SAS Visual Analytics <a target="_blank" href="https://communities.sas.com/t5/SAS-Visual-Analytics/bd-p/sas_va">Community</a>
