---
id: Empty state
section: components
cssPrefix: pf-v6-c-empty-state
---## Examples

### Basic

```html
<div class="pf-v6-c-empty-state">
  <div class="pf-v6-c-empty-state__content">
    <div class="pf-v6-c-empty-state__header">
      <div class="pf-v6-c-empty-state__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="m29.5 17.01-6-3.464V6.62a.998.998 0 0 0-.5-.866l-6.5-3.753a1.003 1.003 0 0 0-1 0L9 5.754a1 1 0 0 0-.5.866v6.926l-6 3.464a1 1 0 0 0-.5.866v7.505c0 .357.19.688.5.866L9 30a1.003 1.003 0 0 0 1 0l6-3.464L22 30a1.003 1.003 0 0 0 1 0l6.5-3.753a1 1 0 0 0 .5-.866v-7.505a.998.998 0 0 0-.5-.866ZM16 4.021l5.5 3.176v6.349L16 16.722l-5.5-3.176V7.197L16 4.021ZM9.5 27.979 4 24.803v-6.351l5.499-3.175L15 18.453v6.349l-5.5 3.176ZM28 24.804l-5.5 3.176-5.5-3.176v-6.349l5.501-3.176L28 18.454v6.351Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-empty-state__title">
        <h4 class="pf-v6-c-empty-state__title-text">Empty state</h4>
      </div>
    </div>

    <div
      class="pf-v6-c-empty-state__body"
    >This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>

    <div class="pf-v6-c-empty-state__footer">
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary action</span>
        </button>
      </div>
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Multiple</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action buttons</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Can</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Go here</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">In the second</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action area</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Extra small

```html
<div class="pf-v6-c-empty-state pf-m-xs">
  <div class="pf-v6-c-empty-state__content">
    <div class="pf-v6-c-empty-state__header">
      <div class="pf-v6-c-empty-state__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="m29.5 17.01-6-3.464V6.62a.998.998 0 0 0-.5-.866l-6.5-3.753a1.003 1.003 0 0 0-1 0L9 5.754a1 1 0 0 0-.5.866v6.926l-6 3.464a1 1 0 0 0-.5.866v7.505c0 .357.19.688.5.866L9 30a1.003 1.003 0 0 0 1 0l6-3.464L22 30a1.003 1.003 0 0 0 1 0l6.5-3.753a1 1 0 0 0 .5-.866v-7.505a.998.998 0 0 0-.5-.866ZM16 4.021l5.5 3.176v6.349L16 16.722l-5.5-3.176V7.197L16 4.021ZM9.5 27.979 4 24.803v-6.351l5.499-3.175L15 18.453v6.349l-5.5 3.176ZM28 24.804l-5.5 3.176-5.5-3.176v-6.349l5.501-3.176L28 18.454v6.351Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-empty-state__title">
        <h4 class="pf-v6-c-empty-state__title-text">Empty state</h4>
      </div>
    </div>

    <div
      class="pf-v6-c-empty-state__body"
    >This represents an the empty state pattern in PatternFly. The icon is optional.</div>

    <div class="pf-v6-c-empty-state__footer">
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-small pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Multiple</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action buttons</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Can</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Go here</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-link" type="button">
          <span class="pf-v6-c-button__text">In the</span>
        </button>
        <button class="pf-v6-c-button pf-m-small pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action area</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Small

```html
<div class="pf-v6-c-empty-state pf-m-sm">
  <div class="pf-v6-c-empty-state__content">
    <div class="pf-v6-c-empty-state__header">
      <div class="pf-v6-c-empty-state__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="m29.5 17.01-6-3.464V6.62a.998.998 0 0 0-.5-.866l-6.5-3.753a1.003 1.003 0 0 0-1 0L9 5.754a1 1 0 0 0-.5.866v6.926l-6 3.464a1 1 0 0 0-.5.866v7.505c0 .357.19.688.5.866L9 30a1.003 1.003 0 0 0 1 0l6-3.464L22 30a1.003 1.003 0 0 0 1 0l6.5-3.753a1 1 0 0 0 .5-.866v-7.505a.998.998 0 0 0-.5-.866ZM16 4.021l5.5 3.176v6.349L16 16.722l-5.5-3.176V7.197L16 4.021ZM9.5 27.979 4 24.803v-6.351l5.499-3.175L15 18.453v6.349l-5.5 3.176ZM28 24.804l-5.5 3.176-5.5-3.176v-6.349l5.501-3.176L28 18.454v6.351Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-empty-state__title">
        <h4 class="pf-v6-c-empty-state__title-text">Empty state</h4>
      </div>
    </div>

    <div
      class="pf-v6-c-empty-state__body"
    >This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>

    <div class="pf-v6-c-empty-state__footer">
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary action</span>
        </button>
      </div>

      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Multiple</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action buttons</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Can</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Go here</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">In the second</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action area</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Large

```html
<div class="pf-v6-c-empty-state pf-m-lg">
  <div class="pf-v6-c-empty-state__content">
    <div class="pf-v6-c-empty-state__header">
      <div class="pf-v6-c-empty-state__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="m29.5 17.01-6-3.464V6.62a.998.998 0 0 0-.5-.866l-6.5-3.753a1.003 1.003 0 0 0-1 0L9 5.754a1 1 0 0 0-.5.866v6.926l-6 3.464a1 1 0 0 0-.5.866v7.505c0 .357.19.688.5.866L9 30a1.003 1.003 0 0 0 1 0l6-3.464L22 30a1.003 1.003 0 0 0 1 0l6.5-3.753a1 1 0 0 0 .5-.866v-7.505a.998.998 0 0 0-.5-.866ZM16 4.021l5.5 3.176v6.349L16 16.722l-5.5-3.176V7.197L16 4.021ZM9.5 27.979 4 24.803v-6.351l5.499-3.175L15 18.453v6.349l-5.5 3.176ZM28 24.804l-5.5 3.176-5.5-3.176v-6.349l5.501-3.176L28 18.454v6.351Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-empty-state__title">
        <h4 class="pf-v6-c-empty-state__title-text">Empty state</h4>
      </div>
    </div>

    <div
      class="pf-v6-c-empty-state__body"
    >This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>

    <div class="pf-v6-c-empty-state__footer">
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary action</span>
        </button>
      </div>
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Multiple</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action buttons</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Can</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Go here</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">In the second</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action area</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### Extra large

```html
<div class="pf-v6-c-empty-state pf-m-xl">
  <div class="pf-v6-c-empty-state__content">
    <div class="pf-v6-c-empty-state__header">
      <div class="pf-v6-c-empty-state__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="m29.5 17.01-6-3.464V6.62a.998.998 0 0 0-.5-.866l-6.5-3.753a1.003 1.003 0 0 0-1 0L9 5.754a1 1 0 0 0-.5.866v6.926l-6 3.464a1 1 0 0 0-.5.866v7.505c0 .357.19.688.5.866L9 30a1.003 1.003 0 0 0 1 0l6-3.464L22 30a1.003 1.003 0 0 0 1 0l6.5-3.753a1 1 0 0 0 .5-.866v-7.505a.998.998 0 0 0-.5-.866ZM16 4.021l5.5 3.176v6.349L16 16.722l-5.5-3.176V7.197L16 4.021ZM9.5 27.979 4 24.803v-6.351l5.499-3.175L15 18.453v6.349l-5.5 3.176ZM28 24.804l-5.5 3.176-5.5-3.176v-6.349l5.501-3.176L28 18.454v6.351Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-empty-state__title">
        <h4 class="pf-v6-c-empty-state__title-text">Empty state</h4>
      </div>
    </div>

    <div
      class="pf-v6-c-empty-state__body"
    >This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>
    <div class="pf-v6-c-empty-state__footer">
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary action</span>
        </button>
      </div>
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Multiple</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action buttons</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Can</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Go here</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">In the second</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action area</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

### With status

```html
<div class="pf-v6-c-empty-state pf-m-success">
  <div class="pf-v6-c-empty-state__content">
    <div class="pf-v6-c-empty-state__header">
      <div class="pf-v6-c-empty-state__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7.795 11.795-8.646 8.646c-.317.317-.733.475-1.149.475s-.832-.158-1.149-.475l-4.646-4.646a1.126 1.126 0 0 1 1.591-1.591l4.205 4.205 8.205-8.205a1.126 1.126 0 0 1 1.591 1.591Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-empty-state__title">
        <h4 class="pf-v6-c-empty-state__title-text">You're all set</h4>
      </div>
    </div>

    <div
      class="pf-v6-c-empty-state__body"
    >This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>

    <div class="pf-v6-c-empty-state__footer">
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-primary" type="button">
          <span class="pf-v6-c-button__text">Primary action</span>
        </button>
      </div>
      <div class="pf-v6-c-empty-state__actions">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Multiple</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action buttons</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Can</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Go here</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">In the second</span>
        </button>
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__text">Action area</span>
        </button>
      </div>
    </div>
  </div>
</div>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-v6-c-empty-state__icon` |  Hides icon for assistive technologies. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-empty-state` | `<div>` |  Initiates an empty state component. The empty state centers its content (`.pf-v6-c-empty-state__content`) vertically and horizontally. **Required** |
| `.pf-v6-c-empty-state__content` | `<div>` |  Creates the content container. **Required** |
| `.pf-v6-c-empty-state__header` | `<div>` |  Creates the header container. **Required** |
| `.pf-v6-c-empty-state__title` | `<div>` |  Creates the empty state title container. **Required** |
| `.pf-v6-c-empty-state__title-text` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<div>` |  Creates the empty state title text container. |
| `.pf-v6-c-empty-state__icon` | `<div>` |  Creates the empty state icon container. |
| `.pf-v6-c-empty-state__body` | `<div>` |  Creates the empty state body content. There can be more than one `.pf-v6-c-empty-state__body` elements. |
| `.pf-v6-c-empty-state__footer` | `<div>` |  Creates the footer container. **Required** |
| `.pf-v6-c-empty-state__actions` | `<div>` |  Container for actions. **Required** |
| `.pf-m-xs` | `.pf-v6-c-empty-state` | Modifies the empty state for an extra small variation and max-width. |
| `.pf-m-sm` | `.pf-v6-c-empty-state` | Modifies the empty state for a small max-width. |
| `.pf-m-lg` | `.pf-v6-c-empty-state` | Modifies the empty state for a large max-width. |
| `.pf-m-xl` | `.pf-v6-c-empty-state` | Modifies the empty state for an extra large variation and max-width. |
| `.pf-m-full-height` | `.pf-v6-c-empty-state` | Modifies the empty state to be `height: 100%`. If you need the empty state content to be centered vertically, you can use this modifier to make the empty state fill the height of its container, and center `.pf-v6-c-empty-state__content`. **Note:** this modifier requires the parent of `.pf-v6-c-empty-state` have an implicit or explicit `height` defined.  |
| `.pf-m-danger` | `.pf-v6-c-empty-state` | Modifies the empty state for danger status. |
| `.pf-m-warning` | `.pf-v6-c-empty-state` | Modifies the empty state for warning status. |
| `.pf-m-success` | `.pf-v6-c-empty-state` | Modifies the empty state for success status. |
| `.pf-m-info` | `.pf-v6-c-empty-state` | Modifies the empty state for info status. |
| `.pf-m-custom` | `.pf-v6-c-empty-state` | Modifies the empty state for custom status. |
