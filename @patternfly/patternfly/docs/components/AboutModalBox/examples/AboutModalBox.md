---
id: About modal
section: components
cssPrefix: pf-c-about-modal-box
---## Examples

### Basic

```html isFullscreen
<div class="pf-c-about-modal-box">
  <div class="pf-c-about-modal-box__brand">
    <img
      class="pf-c-about-modal-box__brand-image"
      src="/assets/images/pf_mini_logo_white.svg"
      alt="PatternFly brand logo"
    />
  </div>
  <div class="pf-c-about-modal-box__close">
    <button
      class="pf-c-button pf-m-plain"
      type="button"
      aria-label="Close dialog"
    >
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-about-modal-box__header">
    <h1 class="pf-c-title pf-m-4xl" id="about-modal-title">Product name</h1>
  </div>
  <div class="pf-c-about-modal-box__content">
    <div class="pf-c-about-modal-box__body">content</div>
    <p
      class="pf-c-about-modal-box__strapline"
    >Trademark and copyright information here</p>
  </div>
</div>

```

## Documentation

### Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `aria-label="Close Dialog"` | `.pf-c-modal-box__close .pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required** |

### Customizing the background image

In order to use a custom image, pass a new value to the `--pf-c-about-modal-box--BackgroundImage` CSS variable. For example:

```css
--pf-c-about-modal-box--BackgroundImage: url("custom/image/path");
```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-about-modal-box` |  `<div>`, `<article>`  |  Initiates a modal box. |
| `.pf-c-about-modal-box__brand` |  `<div>` |  Initiates a modal box brand cell. |
| `.pf-c-about-modal-box__brand-image` |  `<img>` |  Initiates a modal box brand image. |
| `.pf-c-about-modal-box__close` |  `<div>` |  Initiates a modal box close cell. |
| `.pf-c-about-modal-box__header` |  `<div>`, `<header>` |  Initiates a modal box header cell. |
| `.pf-c-about-modal-box__content` |  `<div>` |  Initiates a modal box content cell. |
| `.pf-c-about-modal-box__body` |  `<div>` |  Initiates a modal box body cell. |
| `.pf-c-about-modal-box__strapline` |  `<p>` |  Initiates a modal box strapline cell. |
