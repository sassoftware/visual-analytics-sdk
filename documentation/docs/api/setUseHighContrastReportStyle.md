---
id: setUseHighContrastReportStyle
title: setUseHighContrastReportStyle
---

```
setUseHighContrastReportStyle(enabled): void
```

Configure whether report objects should display with high contrast styles.
When called with `true`, all reports objects are overriden to use the high
contrast theme, and report content options that may reduce readability are
ignored. When called with `false`, the override is turned off. Whenever the
function is called with a new value, all report objects are reloaded to
reflect the latest value of the setting. The high contrast override is
disabled by default.

## Arguments

### `enabled: boolean`

Whether the high contrast override should be enabled or disabled.
