---
id: version-0.1.0-faq
title: Frequently Asked Questions
sidebar_label: FAQ
original_id: faq
---

## What are the prerequisites for using the SAS Visual Analytics SDK?

Use of the SAS Visual Analytics SDK requires access to SAS Visual Analytics version 8.4 or later. Additional server configuration is also required. These requirements are covered in [Getting Started](getting-started.md#sas-viya-setup).

## What browsers are supported?

The SAS Visual Analytics SDK supports:

- Chrome 67+
- Firefox 60+
- Safari 11+
- Edge 17+ (with a [custom element polyfill](getting-started.md#include-a-custom-element-polyfill))

## Is there a license to use the SAS Visual Analytics SDK?

The SAS Visual Analytics SDK is released under a <a target="_blank" href="https://github.com/sassoftware/visual-analytics-sdk/blob/master/LICENSE.txt">commercial license</a>.

## How do I resolve this error message?

### "The server cannot be reached."

If the SAS Visual Analytics SDK is unable to reach the SAS Viya server, try these steps to resolve the problem:

1. Verify the SAS Viya server URL. This should be the full context root for the SAS Viya deployment, including the protocol, optional
   port, and host.
1. Disable your ad-blocker
1. [Enable cross-origin resource sharing on your SAS Viya deployment.](getting-started.md#enable-cross-origin-resource-sharing)

### "Unable to log on to the server."

If the SAS Visual Analytics SDK can reach the SAS Viya server but is unable to log on, try these steps to resolve the
problem:

1. Ensure that `authenticationType="guest"` is set on your `sas-report` or `sas-report-object`.
1. [Allow guest access on your SAS Viya deployment.](getting-started.md#allow-guest-access)
1. [Enable cross-origin resource sharing on your SAS Viya deployment.](getting-started.md#enable-cross-origin-resource-sharing)

### "Unable to load the selected report."

If the SAS Visual Analytics SDK has successfully connected to a SAS Viya server but is unable to load a particular report,
try these steps to resolve the problem:

1. Verify that the report URI is formatted correctly. It should look something like
   `"/reports/reports/f57c57ba-1cf1-4b14-aeeb-1a61664debb4"`. If the `"/reports/reports/"` prefix is missing, or if you
   see `%2F` in place of `/`, then the report will not load. We have a tool for generating a correctly-formatted
   `sas-report` or `sas-report-object` tag in our [Getting started guide](getting-started.md#create-a-custom-html-tag).
1. Ensure that you have permission to access the report given the current authentication type. Currently the SDK always
   logs in as a guest user when accessing reports; if the report is not accessible to a guest user, then the report will
   not load.

### "Report objects cannot be used in multiple contexts."

This message means that you have multiple uses of the same report object - either in `sas-report` or `sas-report-object` tags or through
`registerDataDrivenContent`. Remove all but one usage per report object and the error should be resolved.

## Why does nothing happen when I click a report link?

Report linking is not currently supported in the SAS Visual Analytics SDK.  All other action types are supported.

## Where is my custom report theme?

Custom report themes are not currently supported in the SAS Visual Analytics SDK.
