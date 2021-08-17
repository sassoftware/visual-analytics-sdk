---
id: export-report-package
title: Export SAS Report Packages
---

The SAS Visual Analytics SDK can be used in two fundamentally different ways. In the most basic setup you are connecting directly to a SAS Viya deployment, delivering reports and data to your web page.  But it can also be used to display report content that has been exported from SAS Visual Analytics and hosted on your own web location. Exporting a report package allows your use of the SAS Visual Analytics SDK to be completely disconnected from SAS Viya. This provides the benefit of allowing your webpage traffic to scale independently from your SAS Viya deployment. This also allows you to skip any [SAS Viya configuration setup](guides/viya-setup.md) necessary for enabling cross-site access from the SAS Visual Analytics SDK.

## How do I export a SAS Report Package?

Once you have your report content created in SAS Visual Analytics, you can use its Export Package UI to download the report package zip file. Documentation for this can be found at <a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=v_008&docsetId=vareports&docsetTarget=p0log1ce8qcj4cn15k0oby258pdb.htm">Exporting SAS Report Packages</a>. Using the UI to export a report package can be convenient for one time use, and learning about the supported features, but if your data is changing regularly then you may want to automate the report package creation. This can be done with the SAS Viya CLI reports plug-in, as shown at <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=v_014&docsetId=calcli&docsetTarget=n09r8rzfe0xt6gn1krnt75beevgk.htm">CLI Examples: Reports</a>. Both export mechanisms provide options for exporting entire reports as well as partial subsets, which can be used when embedding individual objects or pages instead of a full report.

## What do I do with the SAS Report Package?

The exported report package includes a sample html page (`index.html`) that demonstrates the mechanics of how to use the SAS Visul Analytics SDK to render the report content. In order to see it, just deploy all of the package contents to a webserver and navigate a browser to the root of package location.

When creating your own webpage, or embedding the report content into an existing webpage, it is common to colocate the package contents with other assets for the webpage. So you might want to have a `reportAssets` folder that is deployed along side your html file. But it is also possible to put the package contents anywhere that is accessible through an http address.

Once the package contents are extracted, and you know where they will be deployed, you can reference it using the `packageUri` property on [`SASReportElement`](api/SASReportElement.md#packageuri-string), [`SASReportPageElement`](api/SASReportPageElement.md#packageuri-string), or [`SASReportObjectElement`](api/SASReportObjectElement.md#packageuri-string). `packageUri` should point to the base location of the package contents, either with an absolute or relative URL. 

```html
<sas-report-object
  packageUri="./reportAssets"
  objectName="ve27"
></sas-report-object>
```
As noted in the `packageUri` API documentation, this property takes the place of `url`, `reportUri`, and `authenticationType` that are used when connecting directly to SAS Viya.

## Why do my report fonts look different from SAS Visual Analytics?

When using the SAS Visual Analytics SDK to connect directly to SAS Viya, fonts are loaded from that SAS Viya deployment. This allows the report content to render using the same font that was specified when designing the report in SAS Visual Analytics. For licensing reasons we can not redistribute these fonts with an exported report package, thus when using exported packages there are extra steps needed to ensure the report content is using the font you intended.

### Define the font face in CSS

Use the [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) in your css to define the font(s) that are being used by the report content. This requires that you know the `font-family` name and have access to the font files.

```html
<style>
  @font-face {
    font-family: 'MyFont';
    src: url('/fonts/MyFont.woff2') format('woff2'),
         url('/fonts/MyFont.woff') format('woff');
  }
</style>
```

It may be necessary for you to use a font that is not a standard font available in SAS Visual Analytics. To do this, you must first load the font onto SAS Viya by utilizing the SAS Viya CLI fonts plug-in, as shown in <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=v_014&docsetId=calfonts&docsetTarget=p0z64ee1ufe5vpn1pibg7pzhsgrb.htm">Fonts: CLI Examples</a>. You can then create the report content using that font.

## Are all features and APIs supported?

As mentioned above, `url`, `reportUri`, and `authenticationType` are ignored when setting `packageUri`.  The following APIs and features are also not supported with exported report packages.
* [`exportPDF`](api/ReportHandle.md#exportpdfoptions-exportpdfoptions-promise-string)
* [`setUseHighContrastReportTheme`](api/setUseHighContrastReportTheme.md)
* Custom report themes

There are also some advanced report content and scenarios that are not supported with exported report packages. Those details are outlined in <a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=v_008&docsetId=varef&docsetTarget=n1tbiwkzea35nin1wbvjdcregjcs.htm#p0bfdy2hrkw4lzn1glyhtfu02t2h">Considerations for Objects in Report Packages</a> and further clarifications can be found at <a target="_blank" href="https://documentation.sas.com/?docsetVersion=v_002&docsetId=varef&docsetTarget=n1tbiwkzea35nin1wbvjdcregjcs.htm#p080fwv713hlzfn1cjvls3mfg6u0">SAS Report Packages: Frequently Asked Questions</a>.
