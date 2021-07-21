---
id: version-0.19.0-setLoadingTheme
title: setLoadingTheme
original_id: setLoadingTheme
---

```
setLoadingTheme(options): void
```

`setLoadingTheme` allows the user to set the theme of the sdk before a report loads. You might want to set the theme for the initial loading state to match the website that the SAS Visual Analytic SDK is embedded in. You also might want to set the loading theme to be consistent with the report that will be loaded.


`setLoadingTheme` only affects the initial loading and logon states. It does not affect the report theme once a report has been loaded.

## Arguments

### `options: Object | 'light' | 'dark' | 'high-contrast'`

When you select `'light'`, `'dark'`, or `'high-contrast'`, then the loading theme is based on one of the built-in themes.


Alternatively, you can specify theme values. The following optional properties are supported:

- `baseTheme: 'light' | 'dark'`: The base theme that is used for loading the theme values. The theme values are used when no defaults are provided. For example, if backgroundColor is not specified and the baseTheme is light, then the backgoundColor will be white since that is the theme's background color. **default**:`light`

You can further customize the loading style with additional style properties. Some examples are provided below to show you how certain options affect the theme. The following style overrides are available:
- `primary: string`: The logon button background and loading indicator.
- `backgroundColor: string`
- `textColor: string`
- `textColorInverse: string` The button text color for the logon state.
- `fontFamily: string`


### Examples

```javascript
  window.addEventListener('vaReportComponents.loaded', function() {
    vaReportComponents.setLoadingTheme('dark');
  });
```

```javascript
  window.addEventListener('vaReportComponents.loaded', function() {
    vaReportComponents.setLoadingTheme({
      baseTheme: 'dark',
      primary: '#FFA500',
      fontFamily: 'Gothic',
    });
  });
```