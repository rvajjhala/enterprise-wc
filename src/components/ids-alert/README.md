# Ids Alert Component

## Description

The IDS Alert component used to communicate as part of a display message that gives users attention, affects an application, feature or a page. This component consists of different types such as `error`, `warning`, `success`, and `info` that represents its color.

## Use Cases

Typically, these alerts are mostly effective to gain attention of the status of your application. Try to use text along with the alert so that users that cant understand the color difference get the important alert information.

## Terminology

- **Type**: Type is basically the status of an alert.
- **Icon**: Icon is the symbol of the alert.
- **Color**: The type of alert color.

## Feature (With the Code Examples)

An alert is created by using the `ids-alert` html custom element. It has a `icon` property to set the desire alert icon to use.

```html
<ids-alert icon="info"></ids-alert>
<ids-alert icon="success"></ids-alert>
<ids-alert icon="alert"></ids-alert>
```

An alert can be used in a disabled situation so comes with a disabled style

```html
<ids-alert icon="info" disabled="true"></ids-alert>
```

An alert can have a tooltip

```html
<ids-alert icon="error" tooltip="Info about the error"></ids-alert>
```

An alert can use any icon, use the color setting with it to control the icon color

```html
<ids-alert icon="calendar" color="info" tooltip="Calendar Alert"></ids-alert
```

An alert can use any icon size

```html
<ids-alert icon="error" tooltip="Info about the error"  size="small"></ids-alert>
```

## Class Hierarchy

- IdsAlert
  - IdsElement
- Mixins
  IdsEventsMixin
  IdsThemeMixin

## Settings (Attributes)

- `icon` {boolean} Set the type of icon / alert to show options include  'alert' | 'success' | 'dirty' | 'error' | 'info' |'pending' | 'new' | 'in-progress' or any other icon in the icon set. For these other icons set the color property as well
- `disabled` {boolean} Set alert to disabled
- `tooltip` {string} Sets the string content for a tooltip, for error, success, info, alert the color of the tooltip will change
- `color` {string} Sets the icon color between error, success, info, alert, amber, amethyst

## Themeable Parts

- `icon` allows you to further style the icon element

## States and Variations

- Color
- Size
- Alert

## Keyboard Guidelines

Alert icons do not have tab stops or keyboard interaction on their own. However, they may be placed in a grid cell or other object that has tab focus.

## Responsive Guidelines

- Flows within its parent/placement and is usually centered vertically.

## Accessibility

The traffic light colors are accessibility violations for contrast, however, the high contrast theme provides an alternative that passes. In addition, in context text should be used as color alone cannot provide the meaning. i.e. Do not use color alone to indicate a state.

## Converting from Previous Versions (Breaking Changes)

**4.x to 5.x**
- Alert now uses all new markup and classes for web components (see above)
- The yellow alert is no longer available due to having poor contrast with the background.
- The names of some alerts (icon setting) have changed
