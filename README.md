# SAS Visual Analytics SDK -- Archived repository
**Notice: The Visual Analytics SDK has moved and is now part of the SAS Viya SDK for JavaScript. See [sas-viya-sdk-js](https://github.com/sassoftware/sas-viya-sdk-js/tree/main/sdk/va-report-components) for documentation, examples and to enter new GitHub issues.**

## Overview

The SAS Visual Analytics SDK is a set of JavaScript APIs and web components that enable SAS Visual Analytics report content
to be easily embedded in a third-party application or web page. Entire reports or individual report objects can be
embedded, and the content is fully interactive. This functionality is delivered as the `va-report-components` JavaScript
library.

## Prerequisites

Access to a deployment of SAS Visual Analytics 8.4 (or later) is necessary in order to use the SDK. For more information about server set up, see <a target="_blank" href="https://developer.sas.com/sdk/va/docs/guides/viya-setup/">SAS Viya setup</a>.

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

Accessing the `va-report-components` library from the SAS Developer CDN is easy. It does not require installation or
hosting of the library code and assets. Here is an example of loading the latest version of `va-report-components` from the CDN using an HTML `script` tag.

```html
<script async src="https://cdn.developer.sas.com/packages/va-report-components/latest/dist/umd/va-report-components.js"></script>
```

When the library is used in production, consider pinning it to an explicit version. This is done with a URL like `https://cdn.developer.sas.com/packages/va-report-components/${VERSION}/dist/umd/va-report-components.js`, where `${VERSION}` is the full `major.minor.patch` semantic version.

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
