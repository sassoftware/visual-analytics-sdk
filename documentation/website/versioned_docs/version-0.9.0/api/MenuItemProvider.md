---
id: version-0.9.0-MenuItemProvider
title: MenuItemProvider
original_id: MenuItemProvider
---

## MenuItemProvider: `(target: Object) => Object[]`
A MenuItemProvider is a callback function, provided to an SDK report element, that is used to generate custom menu items.  The menu items are shown along with other built-in context menu items and object toolbar menu items.


## Arguments

### `target: {type: 'report'} | {type: 'object', name: string}`

An object describing the menu target.  The MenuItemProvider is used to generate menu items for the report and for individual objects in a report.  `target` gives context for which menu items should be generated. The MenuItemProvider callback should check the target information and return the desired custom menu items appropriately.  When type is `report` the returned menu items are shown in the context menu regardless of where in a report the user right-clicks.  When type is `object` the returned menu items are shown in both the context menu and object toolbar menu of the object with name matching the `name` property of `target`.

## Return value

A MenuItemProvider callback should return an array of menu item objects.  Each menu item has the following form:

- `text: string`: The text label that is shown in the menu
- `callback: () => void`: The callback function to call when the menu item is clicked

The content of the returned menu items should be be provided conditionally, based on the `target` parameter.  If no menu items are desired for a given `target`, an empty `Array` should be returned.

## Example

In this example, a custom menu is provided such that the report menu has two custom menu items, and each object has two custom menu items.
The object menu items use the `target.name` to customize the text shown in the menu.

```javascript
const sasReport = getElementById("my-report");
// Set the custom provider function to the menuItemProvider property
sasReport.menuItemProvider = (target) => {
  if (target.type === "report") {
    // Return the menu items that relate to the entire report
    return [
      {
        // The string that will be shown in the menu UI
        text: "Report Action 1",
        // The function that will be called when the user clicks this menu item
        callback: () => console.log("Doing report action 1"),
      },
      {
        text: "Report Action 2",
        callback: () => console.log("Doing report action 2"),
      },
    ];
  } else if (target.type === "object") {
    // Return the menu items that relate to the object with name target.name
    return [
      {
        text: `Object ${target.name} Action 1`,
        callback: () => console.log(`Doing object ${target.name} action 1`),
      },
      {
        text: `Object ${target.name} Action 2`,
        callback: () => console.log(`Doing object ${target.name} action 2`),
      },
    ];
  }
  return [];
};
```
