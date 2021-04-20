---
id: version-0.16.0-setUseHighContrastReportTheme
title: setUseHighContrastReportTheme
original_id: setUseHighContrastReportTheme
---

```
setUseHighContrastReportTheme(enabled): void
```

Configure whether report contents should display with the SAS High Contrast
report theme. When called with `true`, all report objects are overriden to
use the SAS High Contrast report theme, and any report styles that might
reduce readability are ignored. When called with `false`, the override is
turned off. Whenever the function is called with a new value, all report
objects are reloaded to reflect the latest value of the setting. The SAS High
Contrast report theme override is disabled by default.

## Arguments

### `enabled: boolean`

Whether the SAS High Contrast report theme override should be enabled or
disabled.
