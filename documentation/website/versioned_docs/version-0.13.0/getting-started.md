---
id: version-0.13.0-getting-started
title: Getting started
original_id: getting-started
---

The SAS Visual Analytics SDK enables you to use the power of SAS Visual Analytics in your own websites and HTML applications.
You can embed entire reports with the `<sas-report>` custom HTML element, embed a single object with the
`<sas-report-object>` element, or connect to your reports with our JavaScript API.

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
as <a target="_blank" href="https://unpkg.com/">UNPKG</a> and <a target="_blank" href="https://www.jsdelivr.com/">jsDelivr</a>. Here is an example of loading the 0.13.0 version of `va-report-components` from UNPKG
using an HTML `script` tag. When used in production, the version should be pinned to the full `major.minor.patch` semantic version.

```html
<script async src="https://unpkg.com/@sassoftware/va-report-components@0.13.0/dist/umd/va-report-components.js"></script>
```

## SAS Viya setup

### Enable Cross-Origin Resource Sharing

By default, your SAS Viya deployment is not set up to allow access to REST API endpoints from different domains. This is
needed in order to connect to SAS Viya from the domain that is hosting your HTML page. This domain needs to be added to the
`allowOrigins` property in SAS Viya deployment's CORS configuration. See
<a target="_blank" href="https://developer.sas.com/reference/cors/">developer.sas.com</a> and
<a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calauthmdl&docsetTarget=n1pkgyrtk8bp4zn1d0v1ln4869og.htm#p04ifnaixhf85in1xo7zrr2fgimf">SAS Help Center</a> for more information.

### Cross-Site Request Forgery

SAS Viya servers protect against Cross-Site Request Forgery (CSRF) by blocking requests where the HTTP Referer Header does not match the URI of the requested resource or a URI whitelist. The domain of the site using the SAS Visual Analytics SDK must be whitelisted in the CSRF configuration.  See <a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calconfig&docsetTarget=n08030sasconfiguration0admin.htm#n0nf0wwa3p7mjhn11926x4k9gl72">SAS Help Center</a> for more information.

### Cross-Site Cookies

The SAS Visual Analytics SDK requires the use of cookies to handle authentication with the SAS Viya Logon service. Browsers require that the response setting the cookie explicitly enable cross-site cookies by setting `samesite=none` on the response header. This is not the default for SAS Viya and must be configured in order to support the SDK. The `sameSite` configuration option in the `sas.commons.web.security.cookies` definition should be set to `None`, and should be applied globally to all services. See <a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calconfig&docsetTarget=n08030sasconfiguration0admin.htm#p18obwsyh87dc7n18hvyxa1t8zjs">SAS Help Center</a> for more information.

### Allow guest access

The SAS Visual Analytics SDK has the option to connect to the SAS Viya server using guest authentication. This requires that the SAS Viya system be
set up to enable guest access, and that the guest user has access to the appropriate report content and data. For more information, see 
<a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calauthmdl&docsetTarget=n067qoyrgu1yohn19nq4ehy8o0b3.htm#p04ifnaixhf85in1xo7zrr2fgimf">SAS Help Center</a>.

## Include a custom elements polyfill

A <a target="_blank" href="https://www.npmjs.com/package/@webcomponents/custom-elements">custom elements polyfill</a> is required for Microsoft Edge support. The following script tag should be added before the `va-report-components` script tag.

```html
<script src="https://unpkg.com/@webcomponents/custom-elements"></script>
```

## Create a custom HTML tag

To build the custom HTML tag that you will embed in your web page:

1. Open a report in SAS Visual Analytics.
1. Open the menu in the report toolbar (which is displayed in the image below) or right-click an individual object, and then select Copy Link. The Copy Link window is displayed.
1. If you are using guest access, expand the Options heading and select the Guest access check box.
1. Click Copy Link.

![Report Overflow Menu](assets/report-overflow-menu.png)

Once the report link or object link has been copied to your clipboard, paste it below, and the output will show a custom HTML
tag that is ready to use.

<link rel="stylesheet" href="/sdk/va/css/copy-link-translator.css">
<form>
  <textarea id="vdk-slt-input"
    rows="5"
    style="resize: none; width: 100%;"
    placeholder="Paste the link from SAS Visual Analytics here."
    aria-label="Paste the link from SAS Visual Analytics here."
  ></textarea>
  <pre><code id="vdk-slt-output" class="hljs" data-hide="true"></code></pre>
</form>
<script type="module" src="/sdk/va/js/copy-link-translator.js"></script>

For a complete list of options, see the documentation for [`SASReportElement`](api/SASReportElement.md) and
[`SASReportObjectElement`](api/SASReportObjectElement.md)

## See our examples

<a target="_blank" href="https://github.com/sassoftware/visual-analytics-sdk/tree/master/examples">Our examples</a> demonstrate a few different
ways to start using the SAS Visual Analytics SDK in your HTML application.
