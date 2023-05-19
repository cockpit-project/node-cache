---
id: Page
section: components
cssPrefix: pf-v5-c-page
wrapperTag: div
---import './Page.css'

## Examples

### Vertical nav

```html
<div class="pf-v5-c-page">
  <header class="pf-v5-c-page__header">
    <div class="pf-v5-c-page__header-brand">
      <div class="pf-v5-c-page__header-brand-toggle">toggle</div>
      <a href="#" class="pf-v5-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-v5-c-page__header-tools">header-tools</div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">Navigation</div>
  </div>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section class="pf-v5-c-page__main-section pf-m-dark-100">
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-dark-100</code>.
    </section>
    <section class="pf-v5-c-page__main-section pf-m-dark-200">
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-dark-200</code>.
    </section>
    <section class="pf-v5-c-page__main-section pf-m-light">
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-light</code>.
    </section>
    <section class="pf-v5-c-page__main-section">
      This is a default
      <code>.pf-v5-c-page__main-section</code>.
    </section>
  </main>
</div>

```

### Horizontal nav

```html
<div class="pf-v5-c-page">
  <header class="pf-v5-c-page__header">
    <div class="pf-v5-c-page__header-brand">
      <a href="#" class="pf-v5-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-v5-c-page__header-nav">Navigation</div>
    <div class="pf-v5-c-page__header-tools">header-tools</div>
  </header>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section class="pf-v5-c-page__main-section pf-m-dark-100"></section>
    <section class="pf-v5-c-page__main-section pf-m-dark-200"></section>
    <section class="pf-v5-c-page__main-section pf-m-light"></section>
    <section class="pf-v5-c-page__main-section"></section>
  </main>
</div>

```

### Multiple sidebar body elements, padding, and fill

```html
<div class="pf-v5-c-page">
  <header class="pf-v5-c-page__header">
    <div class="pf-v5-c-page__header-brand">
      <div class="pf-v5-c-page__header-brand-toggle">toggle</div>
      <a href="#" class="pf-v5-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-v5-c-page__header-tools">header-tools</div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">Navigation</div>
    <div
      class="pf-v5-c-page__sidebar-body pf-m-fill pf-m-page-insets"
    >inset content</div>
    <div class="pf-v5-c-page__sidebar-body pf-m-page-insets">footer content</div>
  </div>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section class="pf-v5-c-page__main-section pf-m-light"></section>
  </main>
</div>

```

### With or without fill

```html
<div class="pf-v5-c-page">
  <header class="pf-v5-c-page__header">
    <div class="pf-v5-c-page__header-brand">
      <a href="#" class="pf-v5-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-v5-c-page__header-nav">Navigation</div>
    <div class="pf-v5-c-page__header-tools">header-tools</div>
  </header>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section
      class="pf-v5-c-page__main-section pf-m-light"
    >A regular page section.</section>
    <section class="pf-v5-c-page__main-section pf-m-fill">
      This section uses
      <code>.pf-m-fill</code> to fill the available space.
    </section>
    <section class="pf-v5-c-page__main-section pf-m-light pf-m-no-fill">
      This section uses
      <code>.pf-m-no-fill</code> to not fill the available space.
    </section>
  </main>
</div>

```

### Main section padding

```html
<div class="pf-v5-c-page">
  <header class="pf-v5-c-page__header">
    <div class="pf-v5-c-page__header-brand">
      <div class="pf-v5-c-page__header-brand-toggle">toggle</div>
      <a href="#" class="pf-v5-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-v5-c-page__header-tools">header-tools</div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">Navigation</div>
  </div>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section class="pf-v5-c-page__main-section">
      This
      <code>.pf-v5-c-page__main-section</code> has default padding.
    </section>
    <section class="pf-v5-c-page__main-section pf-m-no-padding pf-m-light">
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-no-padding</code> to remove all padding.
    </section>
    <section
      class="pf-v5-c-page__main-section pf-m-no-padding pf-m-padding-on-md"
    >
      This
      <code>.pf-v5-c-page__main-section</code> uses
      <code>.pf-m-no-padding .pf-m-padding-on-md</code> to remove padding up to the
      <code>md</code> breakpoint.
    </section>
  </main>
</div>

```

### Main section variations

```html
<div class="pf-v5-c-page">
  <header class="pf-v5-c-page__header">
    <div class="pf-v5-c-page__header-brand">
      <div class="pf-v5-c-page__header-brand-toggle">toggle</div>
      <a href="#" class="pf-v5-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-v5-c-page__header-tools">header-tools</div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">Navigation</div>
  </div>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section class="pf-v5-c-page__main-subnav">
      <code>.pf-v5-c-page__main-subnav</code> for horizontal subnav navigation
    </section>
    <section class="pf-v5-c-page__main-nav">
      <code>.pf-v5-c-page__main-nav</code> for tertiary navigation
    </section>
    <section class="pf-v5-c-page__main-tabs">
      <code>.pf-v5-c-page__main-tabs</code> for tabs
    </section>
    <div class="pf-v5-c-page__main-group">
      <code>.pf-v5-c-page__main-group</code> for a group of page sections
    </div>
    <section class="pf-v5-c-page__main-breadcrumb">
      <code>.pf-v5-c-page__main-breadcrumb</code> for breadcrumbs
    </section>
    <section class="pf-v5-c-page__main-section">
      <code>.pf-v5-c-page__main-section</code> for main sections
    </section>
    <section class="pf-v5-c-page__main-wizard">
      <code>.pf-v5-c-page__main-wizard</code> for wizards
    </section>
  </main>
</div>

```

### Centered section

```html
<div class="pf-v5-c-page">
  <header class="pf-v5-c-page__header">
    <div class="pf-v5-c-page__header-brand">
      <div class="pf-v5-c-page__header-brand-toggle">toggle</div>
      <a href="#" class="pf-v5-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-v5-c-page__header-tools">header-tools</div>
  </header>
  <main class="pf-v5-c-page__main" tabindex="-1">
    <section
      class="pf-v5-c-page__main-section pf-m-limit-width pf-m-align-center"
    >
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-card">
          <div class="pf-v5-c-card__body">
            When a width limited page section is wider than the value of
            <code>--pf-v5-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main section.
            <br />
            <br />The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section.
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

```

## Documentation

### Overview

This component provides the basic chrome for a page, including sidebar, header, and main areas.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="banner"` | `.pf-v5-c-page__header` | Identifies the element that serves as the banner region. |
| `role="main"` | `.pf-v5-c-page__main` | Identifies the element that serves as the main region. |
| `tabindex="-1"` | `.pf-v5-c-page__main` | Allows the main region to receive programmatic focus. **Required** |
| `id="[id]"` | `.pf-v5-c-page__main` | Provides a hook for sending focus to new content. **Required** |
| `aria-expanded="true/false"` | `.pf-v5-c-page__header-brand-toggle > .pf-v5-c-button` | Indicates that the expandable content is visible and the current state of the contents. **Required** |
| `aria-controls="[id of nav]"` | `.pf-v5-c-page__header-brand-toggle > .pf-v5-c-button` | Identifies the element controlled by the toggle. **Required**
| `tabindex="0"` | `.pf-v5-c-page__main-section.pf-m-overflow-scroll` | If a page section has overflow content that triggers a scrollbar, to ensure that the content is keyboard accessible, the page section must include either a focusable element within the scrollable region or the page section itself must be focusable by adding `tabindex="0"`. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-page` | `<div>` |   Declares the page component. |
| `.pf-v5-c-page__header` | `<header>` |   Declares the page header. |
| `.pf-v5-c-page__header-brand` | `<div>` |   Creates a header container to nest the brand component. |
| `.pf-v5-c-page__header-brand-toggle` | `<div>` |   Creates a container to nest the sidebar toggle. |
| `.pf-v5-c-page__header-brand-link` | `<a>`, `<span>` |   Creates a link for the brand logo. Use a `<span>` if there is no link. |
| `.pf-v5-c-page__header-selector` | `<div>` |   Creates a header container to nest the context selector component. |
| `.pf-v5-c-page__header-nav` | `<div>` |   Creates a container to nest the navigation component in the header. |
| `.pf-v5-c-page__header-tools` | `<div>` |   Creates a container to nest the icons and menus in header. |
| `.pf-v5-c-page__header-tools-group` | `<div>` |  Creates a container for grouping sets of icons and menus in header. |
| `.pf-v5-c-page__header-tools-item` | `<div>` |  Creates a container for an item in a header tools group. |
| `.pf-v5-c-page__sidebar` | `<aside>` |   Declares the page sidebar. |
| `.pf-v5-c-page__sidebar-body` | `<div>` | Creates a wrapper within the sidebar to hold content. **Note: The last/only `.pf-v5-c-page__sidebar-body` element will grow to fill the availble vertical space. You can change this behavior using `.pf-m-fill` and `.pf-m-no-fill`, which are documented below.** |
| `.pf-v5-c-page__main` | `<main>` |   Declares the main page area. |
| `.pf-v5-c-page__main-nav` | `<section>` |   Creates a container to nest the navigation component in the main page area. |
| `.pf-v5-c-page__main-breadcrumb` | `<section>` |   Creates a container to nest the breadcrumb component in the main page area. |
| `.pf-v5-c-page__main-section` | `<section>` |  Creates a section container in the main page area. **Note: The last/only `.pf-v5-c-page__main-section` element will grow to fill the availble vertical space. You can change this behavior using `.pf-m-fill` and `.pf-m-no-fill`, which are documented below.**  |
| `.pf-v5-c-page__main-tabs` | `<section>` | Creates a container to nest the tabs component in the main page area. |
| `.pf-v5-c-page__main-wizard` | `<section>` | Creates a container to nest the wizard component in the main page area. |
| `.pf-v5-c-page__main-body` | `<div>` | Creates the body section for a page section. **Required when using `.pf-m-limit-width` on `.pf-v5-c-page__main-section`** |
| `.pf-v5-c-page__main-group` | `<div>` | Creates the group of `.pf-v5-c-page__main-*` sections. Can be used in combination with `.pf-m-sticky-[top/bottom]` to make multiple sections sticky. |
| `.pf-v5-c-page__drawer` | `<div>` |  Creates a container for the drawer component when placing the main page element in the drawer body. |
| `.pf-m-selected` | `.pf-v5-c-page__header-tools-item` | Modifies a header tools item to indicate that the button inside is in the selected state. |
| `.pf-m-expanded` | `.pf-v5-c-page__sidebar` |  Modifies the sidebar for the expanded state. |
| `.pf-m-collapsed` | `.pf-v5-c-page__sidebar` |  Modifies the sidebar for the collapsed state. |
| `.pf-m-page-insets` | `.pf-v5-c-page__sidebar-body` |  Modifies a sidebar body padding/inset to visually match padding of page elements. |
| `.pf-m-inset-none` | `.pf-v5-c-page__sidebar-body` | Removes a sidebar body left/right inset. |
| `.pf-m-light` | `.pf-v5-c-page__sidebar` |  Modifies the sidebar the light variation. **Note: for use with a light themed nav component** |
| `.pf-m-light` | `.pf-v5-c-page__main-section` | Modifies a main page section to have a light theme. |
| `.pf-m-dark-200` | `.pf-v5-c-page__main-section` |  Modifies a main page section to have a dark theme and a dark transparent background. |
| `.pf-m-dark-100` | `.pf-v5-c-page__main-section` |  Modifies a main page section to have a dark theme and a darker transparent background. |
| `.pf-m-light-200` | `.pf-v5-c-page__main-wizard` | Modifies a wizard page section to have a light 200 theme. |
| `.pf-m-padding{-on-[breakpoint]}` | `.pf-v5-c-page__main-section` | Modifies the main page section to add padding back in at an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). Should be used with pf-m-no-padding. |
| `.pf-m-no-padding{-on-[breakpoint]}` | `.pf-v5-c-page__main-section` | Removes padding from the main page section at an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-fill` | `.pf-v5-c-page__main-section`, `.pf-v5-c-page__sidebar-body` | Modifies the element to grow to fill the available space. |
| `.pf-m-no-fill` | `.pf-v5-c-page__main-section`, `.pf-v5-c-page__sidebar-body` | Modifies the element to not grow to fill the available vertical space. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-page__header-tools-group`, `.pf-v5-c-page__header-tools-item` | Hides a header tools group or item at an optional breakpoint, or hides it at all [breakpoints](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) with `.pf-m-hidden`. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-page__header-tools-group`, `.pf-v5-c-page__header-tools-item` | Shows a header tools group or item at an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-limit-width` | `.pf-v5-c-page__main-section` | Modifies a page section to limit the `max-width` of the content inside. |
| `.pf-m-align-center` | `.pf-v5-c-page__main-section.pf-m-limit-width` | Modifies a page section body to align center. |
| `.pf-m-sticky-top{-on-[breakpoint]-height}` | `.pf-v5-c-page__main-*` | Modifies a section/group to be sticky to the top of its container at an optional height breakpoint. |
| `.pf-m-sticky-bottom{-on-[breakpoint]-height}` | `.pf-v5-c-page__main-*` | Modifies a section/group to be sticky to the bottom of its container at an optional height breakpoint. |
| `.pf-m-shadow-bottom` | `.pf-v5-c-page__main-*` | Modifies a section/group to have a bottom shadow. |
| `.pf-m-shadow-top` | `.pf-v5-c-page__main-*` | Modifies a section/group to have a top shadow. |
| `.pf-m-overflow-scroll` | `.pf-v5-c-page__main-*` | Modifies a section/group to show a scrollbar if it has overflow content. |
