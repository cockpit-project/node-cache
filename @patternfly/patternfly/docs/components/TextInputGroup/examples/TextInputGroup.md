---
id: 'Text input group'
section: components
cssPrefix: pf-v6-c-text-input-group
---import './TextInputGroup.css'

## Examples

### Basic

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main">
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value
        aria-label="Basic"
      />
    </span>
  </div>
</div>

```

### Disabled

```html
<div class="pf-v6-c-text-input-group pf-m-disabled">
  <div class="pf-v6-c-text-input-group__main">
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        disabled
        value="Disabled"
        aria-label="Disabled"
      />
    </span>
  </div>
</div>

```

### Plain

The following example shows a `TextInputGroup` with the `.pf-m-plain` class applied. A plain `TextInputGroup` must only be used when contained in an ancestor that has its own border or background color styling. <br/> <br/>
For the purposes of this example, the `TextInputGroup` is contained in a wrapper with dashed border styling to show where the component is.

```html
<div class="pf-v6-c-text-input-group pf-m-plain">
  <div class="pf-v6-c-text-input-group__main">
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value="Text input group with plain styling"
        aria-label="Plain"
      />
    </span>
  </div>
</div>

```

### Utilities and icon with placeholder text

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        placeholder="placeholder"
        value
        aria-label="Utilities and icon with placeholder"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear utilities and icon with placeholder example"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### With validation

```html
<div class="pf-v6-c-text-input-group pf-m-success">
  <div class="pf-v6-c-text-input-group__main">
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value="Success validation"
        aria-label="Success validation"
      />
      <span class="pf-v6-c-text-input-group__icon pf-m-status">
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
      </span>
    </span>
  </div>
</div>
<br />
<div class="pf-v6-c-text-input-group pf-m-warning">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value="Warning validation with icon at start"
        aria-label="Warning validation"
      />
      <span class="pf-v6-c-text-input-group__icon pf-m-status">
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
            d="m31.874 28.514-15.011-27a1.001 1.001 0 0 0-1.748 0l-15.011 27A1 1 0 0 0 .978 30H31a1 1 0 0 0 .874-1.486ZM14.5 12a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM16 26.001a2 2 0 1 1-.001-3.999A2 2 0 0 1 16 26.001Z"
          />
        </svg>
      </span>
    </span>
  </div>
</div>
<br />
<div class="pf-v6-c-text-input-group pf-m-error">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value="Error validation with icon at start and utilities"
        aria-label="Error validation"
      />
      <span class="pf-v6-c-text-input-group__icon pf-m-status">
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
            d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm-1.5 8a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 1 1-3 0V9ZM16 25.001a2 2 0 1 1-.001-3.999A2 2 0 0 1 16 25.001Z"
          />
        </svg>
      </span>
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear error validation example"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

<br />
<div class="pf-v6-c-text-input-group pf-m-error">
  <div class="pf-v6-c-text-input-group__main">
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value="Error validation with no icon but with utilities"
        aria-label="Type to filter"
      />
      <span class="pf-v6-c-text-input-group__icon pf-m-status">
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
            d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm-1.5 8a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 1 1-3 0V9ZM16 25.001a2 2 0 1 1-.001-3.999A2 2 0 0 1 16 25.001Z"
          />
        </svg>
      </span>
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear input"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Filters

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main">
    <div class="pf-v6-c-label-group">
      <div class="pf-v6-c-label-group__main">
        <ul
          class="pf-v6-c-label-group__list"
          role="list"
          aria-label="Label group list"
        >
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-label-group-label-one-text"
                >Label one</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-label-group-label-one-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-label-group-label-one-button text-input-group-filters-label-group-label-one-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-label-group-label-two-text"
                >Label two</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-label-group-label-two-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-label-group-label-two-button text-input-group-filters-label-group-label-two-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-label-group-label-three-text"
                >Label three</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-label-group-label-three-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-label-group-label-three-button text-input-group-filters-label-group-label-three-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-label-group-label-four-text"
                >Label four</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-label-group-label-four-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-label-group-label-four-button text-input-group-filters-label-group-label-four-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-label-group-label-five-text"
                >Label five</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-label-group-label-five-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-label-group-label-five-button text-input-group-filters-label-group-label-five-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-label-group-label-six-text"
                >Label six</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-label-group-label-six-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-label-group-label-six-button text-input-group-filters-label-group-label-six-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <button class="pf-v6-c-label pf-m-overflow">
              <span class="pf-v6-c-label__content">
                <span class="pf-v6-c-label__content">
                  <span class="pf-v6-c-label__text">8 more</span>
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value
        aria-label="Filters"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear filter example"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Filters expanded

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main">
    <div class="pf-v6-c-label-group">
      <div class="pf-v6-c-label-group__main">
        <ul
          class="pf-v6-c-label-group__list"
          role="list"
          aria-label="Label group list"
        >
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-one-text"
                >Label one</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-one-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-one-button text-input-group-filters-expanded-label-group-label-one-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-two-text"
                >Label two</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-two-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-two-button text-input-group-filters-expanded-label-group-label-two-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-three-text"
                >Label three</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-three-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-three-button text-input-group-filters-expanded-label-group-label-three-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-four-text"
                >Label four</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-four-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-four-button text-input-group-filters-expanded-label-group-label-four-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-five-text"
                >Label five</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-five-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-five-button text-input-group-filters-expanded-label-group-label-five-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-six-text"
                >Label six</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-six-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-six-button text-input-group-filters-expanded-label-group-label-six-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-seven-text"
                >Label seven</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-seven-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-seven-button text-input-group-filters-expanded-label-group-label-seven-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-eight-text"
                >Label eight</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-eight-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-eight-button text-input-group-filters-expanded-label-group-label-eight-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-nine-text"
                >Label nine</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-nine-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-nine-button text-input-group-filters-expanded-label-group-label-nine-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-ten-text"
                >Label ten</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-ten-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-ten-button text-input-group-filters-expanded-label-group-label-ten-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-eleven-text"
                >Label eleven</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-eleven-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-eleven-button text-input-group-filters-expanded-label-group-label-eleven-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-twelve-text"
                >Label twelve</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-twelve-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-twelve-button text-input-group-filters-expanded-label-group-label-twelve-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-thirteen-text"
                >Label thirteen</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-thirteen-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-thirteen-button text-input-group-filters-expanded-label-group-label-thirteen-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
          <li class="pf-v6-c-label-group__list-item">
            <span class="pf-v6-c-label pf-m-outline">
              <span class="pf-v6-c-label__content">
                <span
                  class="pf-v6-c-label__text"
                  id="text-input-group-filters-expanded-label-group-label-fourteen-text"
                >Label fourteen</span>
              </span>
              <span class="pf-v6-c-label__actions">
                <button
                  class="pf-v6-c-button pf-m-no-padding pf-m-plain"
                  id="text-input-group-filters-expanded-label-group-label-fourteen-button"
                  type="button"
                  aria-labelledby="text-input-group-filters-expanded-label-group-label-fourteen-button text-input-group-filters-expanded-label-group-label-fourteen-text"
                  aria-label="Remove"
                >
                  <span class="pf-v6-c-button__icon">
                    <svg
                      class="pf-v6-svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                      />
                    </svg>
                  </span>
                </button>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value
        aria-label="Filters expanded"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear filters expanded example"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Autocomplete last option hint

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main">
    <span class="pf-v6-c-text-input-group__text">
      <input
        class="pf-v6-c-text-input-group__text-input pf-m-hint"
        type="text"
        value="appleseed"
        disabled
        aria-hidden="true"
      />
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value="apples"
        aria-label="Type to filter"
      />
    </span>
  </div>
</div>

```

### Search input group

The React implementation can be found in the [search input](/components/search-input) component.

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        placeholder="Find by name"
        value
        aria-label="Search input group"
      />
    </span>
  </div>
</div>

```

### Search input group, no match

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        placeholder="Find by name"
        value="Joh"
        aria-label="Search input group no match"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear search input group no match"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Search input group, match with result count

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        placeholder="Find by name"
        value="John Doe"
        aria-label="Search input group match with result count"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <span class="pf-v6-c-badge pf-m-read">
      <span aria-hidden="true">3</span>
      <span class="pf-v6-screen-reader">3 matching results</span>
    </span>
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear search input group match with result count"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Search input group, match with navigable options

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        placeholder="Find by name"
        value="John Doe"
        aria-label="Search input group match with navigable options"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <span class="pf-v6-c-badge pf-m-read">
      <span aria-hidden="true">1 / 3</span>
      <span class="pf-v6-screen-reader">Showing result 1 / 3</span>
    </span>
    <div class="pf-v6-c-text-input-group__group">
      <button
        class="pf-v6-c-button pf-m-plain"
        type="button"
        aria-label="Previous"
        disabled
      >
        <span class="pf-v6-c-button__icon">
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
              d="M29 22a.997.997 0 0 1-.707-.293L16 9.414 3.707 21.707a.999.999 0 1 1-1.414-1.414L14.939 7.646a1.501 1.501 0 0 1 2.121 0l12.646 12.646a.999.999 0 0 1-.707 1.707Z"
            />
          </svg>
        </span>
      </button>
      <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="Next">
        <span class="pf-v6-c-button__icon">
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
              d="M16 24.792c-.384 0-.769-.146-1.061-.438L2.293 11.707a.999.999 0 1 1 1.414-1.414L16 22.586l12.293-12.293a.999.999 0 1 1 1.414 1.414L17.061 24.353a1.497 1.497 0 0 1-1.061.438Z"
            />
          </svg>
        </span>
      </button>
    </div>
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear search input group match with navigable options"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Search input group, expandable

```html
<h3>Collapsed</h3>
<br />
<div class="pf-v6-c-input-group pf-m-search-expandable pf-m-plain">
  <div class="pf-v6-c-input-group__item pf-m-search-input">
    <div class="pf-v6-c-text-input-group">
      <div class="pf-v6-c-text-input-group__main pf-m-icon">
        <span class="pf-v6-c-text-input-group__text">
          <span class="pf-v6-c-text-input-group__icon">
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
                d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
              />
            </svg>
          </span>
          <input
            class="pf-v6-c-text-input-group__text-input"
            type="text"
            placeholder="Search"
            value
            aria-label="Search input group collapsed"
          />
        </span>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-input-group__item pf-m-search-expand pf-m-plain">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Open search input group collapsed"
    >
      <span class="pf-v6-c-button__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-input-group__item pf-m-search-action pf-m-plain">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close search input group expandable"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>
<br />
<br />
<h3>Expanded</h3>
<br />
<div
  class="pf-v6-c-input-group pf-m-expanded pf-m-search-expandable pf-m-plain"
>
  <div class="pf-v6-c-input-group__item pf-m-search-input">
    <div class="pf-v6-c-text-input-group">
      <div class="pf-v6-c-text-input-group__main pf-m-icon">
        <span class="pf-v6-c-text-input-group__text">
          <span class="pf-v6-c-text-input-group__icon">
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
                d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
              />
            </svg>
          </span>
          <input
            class="pf-v6-c-text-input-group__text-input"
            type="text"
            placeholder="Search"
            value
            aria-label="Search input group expanded"
          />
        </span>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-input-group__item pf-m-search-expand pf-m-plain">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Open search input group collapsed"
    >
      <span class="pf-v6-c-button__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-input-group__item pf-m-search-action pf-m-plain">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Close search input group expandable"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Search input group, with submit button

```html
<div class="pf-v6-c-input-group">
  <div class="pf-v6-c-input-group__item pf-m-fill">
    <div class="pf-v6-c-text-input-group">
      <div class="pf-v6-c-text-input-group__main pf-m-icon">
        <span class="pf-v6-c-text-input-group__text">
          <span class="pf-v6-c-text-input-group__icon">
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
                d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
              />
            </svg>
          </span>
          <input
            class="pf-v6-c-text-input-group__text-input"
            type="text"
            placeholder="Find by name"
            value
            aria-label="Search input group with submit button"
          />
        </span>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-input-group__item">
    <button
      class="pf-v6-c-button pf-m-control"
      type="submit"
      aria-label="Submit search input group"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M18.35 8.94 12.7 3.29a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l.02.02 4.29 4.29H2c-.55 0-1 .45-1 1s.45 1 1 1h13.59l-4.29 4.29a.987.987 0 0 0-.02 1.41c.38.4 1.02.41 1.41.02l.02-.02 5.65-5.65c.59-.59.59-1.53 0-2.12Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Search input group, advanced search

```html
<div class="pf-v6-c-input-group">
  <div class="pf-v6-c-input-group__item pf-m-fill">
    <div class="pf-v6-c-text-input-group">
      <div class="pf-v6-c-text-input-group__main pf-m-icon">
        <span class="pf-v6-c-text-input-group__text">
          <span class="pf-v6-c-text-input-group__icon">
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
                d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
              />
            </svg>
          </span>
          <input
            class="pf-v6-c-text-input-group__text-input"
            type="text"
            value="username:root firstname:ned"
            aria-label="Search input group advanced search"
          />
        </span>
      </div>
      <div class="pf-v6-c-text-input-group__utilities">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Clear advance search input group collapsed"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              class="pf-v6-svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
            >
              <path
                d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-input-group__item">
    <button
      class="pf-v6-c-button pf-m-control"
      type="button"
      aria-expanded="false"
      aria-label="Advanced search collapsed"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M18.71 5.29a.996.996 0 0 0-1.41 0l-7.29 7.29-7.3-7.29a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l.02.02 7.65 7.65c.29.29.68.44 1.06.44s.77-.15 1.06-.44l7.65-7.65a.996.996 0 0 0 0-1.41Z"
          />
        </svg>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-input-group__item">
    <button
      class="pf-v6-c-button pf-m-control"
      type="submit"
      aria-label="Search advance search input group collapsed"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M18.35 8.94 12.7 3.29a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l.02.02 4.29 4.29H2c-.55 0-1 .45-1 1s.45 1 1 1h13.59l-4.29 4.29a.987.987 0 0 0-.02 1.41c.38.4 1.02.41 1.41.02l.02-.02 5.65-5.65c.59-.59.59-1.53 0-2.12Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

```

### Search input group, advanced search expanded

```html
<div class="pf-v6-c-input-group">
  <div class="pf-v6-c-input-group__item pf-m-fill">
    <div class="pf-v6-c-text-input-group">
      <div class="pf-v6-c-text-input-group__main pf-m-icon">
        <span class="pf-v6-c-text-input-group__text">
          <span class="pf-v6-c-text-input-group__icon">
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
                d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
              />
            </svg>
          </span>
          <input
            class="pf-v6-c-text-input-group__text-input"
            type="text"
            value="username:root firstname:ned"
            aria-label="Search input group advanced search expanded"
          />
        </span>
      </div>
      <div class="pf-v6-c-text-input-group__utilities">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Clear advance search input group expanded"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              class="pf-v6-svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
            >
              <path
                d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-input-group__item">
    <button
      class="pf-v6-c-button pf-m-expanded pf-m-control"
      type="button"
      aria-expanded="true"
      aria-label="Advanced search expanded"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M18.71 5.29a.996.996 0 0 0-1.41 0l-7.29 7.29-7.3-7.29a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l.02.02 7.65 7.65c.29.29.68.44 1.06.44s.77-.15 1.06-.44l7.65-7.65a.996.996 0 0 0 0-1.41Z"
          />
        </svg>
      </span>
    </button>
  </div>
  <div class="pf-v6-c-input-group__item">
    <button
      class="pf-v6-c-button pf-m-control"
      type="submit"
      aria-label="Search advance search input group expanded"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M18.35 8.94 12.7 3.29a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l.02.02 4.29 4.29H2c-.55 0-1 .45-1 1s.45 1 1 1h13.59l-4.29 4.29a.987.987 0 0 0-.02 1.41c.38.4 1.02.41 1.41.02l.02-.02 5.65-5.65c.59-.59.59-1.53 0-2.12Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

<div class="pf-v6-c-panel pf-m-raised">
  <div class="pf-v6-c-panel__main">
    <div class="pf-v6-c-panel__main-body">
      <form class="pf-v6-c-form" novalidate>
        <div class="pf-v6-c-form__group">
          <div class="pf-v6-c-form__group-label"><label
              class="pf-v6-c-form__label"
              for="text-input-group-advanced-search-input-expanded-legacy-form-example-username"
            >
              <span class="pf-v6-c-form__label-text">Username</span></label>
          </div>
          <div class="pf-v6-c-form__group-control">
            <span class="pf-v6-c-form-control">
              <input
                type="text"
                value="root"
                id="text-input-group-advanced-search-input-expanded-legacy-form-example-username"
                name="text-input-group-advanced-search-input-expanded-legacy-form-example-username"
              />
            </span>
          </div>
        </div>
        <div class="pf-v6-c-form__group">
          <div class="pf-v6-c-form__group-label"><label
              class="pf-v6-c-form__label"
              for="text-input-group-advanced-search-input-expanded-legacy-form-example-firstname"
            >
              <span class="pf-v6-c-form__label-text">First name</span></label>
          </div>
          <div class="pf-v6-c-form__group-control">
            <span class="pf-v6-c-form-control">
              <input
                type="text"
                value="ned"
                id="text-input-group-advanced-search-input-expanded-legacy-form-example-firstname"
                name="text-input-group-advanced-search-input-expanded-legacy-form-example-firstname"
              />
            </span>
          </div>
        </div>
        <div class="pf-v6-c-form__group">
          <div class="pf-v6-c-form__group-label"><label
              class="pf-v6-c-form__label"
              for="text-input-group-advanced-search-input-expanded-legacy-form-example-group"
            >
              <span class="pf-v6-c-form__label-text">Group</span></label>
          </div>
          <div class="pf-v6-c-form__group-control">
            <span class="pf-v6-c-form-control">
              <input
                type="text"
                id="text-input-group-advanced-search-input-expanded-legacy-form-example-group"
                name="text-input-group-advanced-search-input-expanded-legacy-form-example-group"
              />
            </span>
          </div>
        </div>
        <div class="pf-v6-c-form__group">
          <div class="pf-v6-c-form__group-label"><label
              class="pf-v6-c-form__label"
              for="text-input-group-advanced-search-input-expanded-legacy-form-example-email"
            >
              <span class="pf-v6-c-form__label-text">Email</span></label>
          </div>
          <div class="pf-v6-c-form__group-control">
            <span class="pf-v6-c-form-control">
              <input
                type="text"
                id="text-input-group-advanced-search-input-expanded-legacy-form-example-email"
                name="text-input-group-advanced-search-input-expanded-legacy-form-example-email"
              />
            </span>
          </div>
        </div>
        <div class="pf-v6-c-form__group pf-m-action">
          <div class="pf-v6-c-action-list">
            <div class="pf-v6-c-action-list__group">
              <div class="pf-v6-c-action-list__item">
                <button
                  class="pf-v6-c-button pf-m-primary"
                  id="submit-advanced-search-expanded"
                  type="submit"
                  aria-labelledby="submit-advanced-search-expanded search-input-group-advanced-search-expanded"
                >
                  <span class="pf-v6-c-button__text">Submit</span>
                </button>
              </div>
              <div class="pf-v6-c-action-list__item">
                <button
                  class="pf-v6-c-button pf-m-link"
                  id="reset-advanced-search-expanded"
                  type="button"
                  aria-labelledby="reset-advanced-search-expanded search-input-group-advanced-search-expanded"
                >
                  <span class="pf-v6-c-button__text">Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

```

### Search input group, autocomplete

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input"
        type="text"
        value="app"
        aria-label="Search input group autocomplete"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear autocomplete search input group"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

<div class="pf-v6-c-menu">
  <div class="pf-v6-c-menu__content">
    <ul class="pf-v6-c-menu__list" role="menu">
      <li class="pf-v6-c-menu__list-item" role="none">
        <button class="pf-v6-c-menu__item" type="button" role="menuitem">
          <span class="pf-v6-c-menu__item-main">
            <span class="pf-v6-c-menu__item-text">apple</span>
          </span>
        </button>
      </li>
      <li class="pf-v6-c-menu__list-item" role="none">
        <button class="pf-v6-c-menu__item" type="button" role="menuitem">
          <span class="pf-v6-c-menu__item-main">
            <span class="pf-v6-c-menu__item-text">appleby</span>
          </span>
        </button>
      </li>
      <li class="pf-v6-c-menu__list-item" role="none">
        <button class="pf-v6-c-menu__item" type="button" role="menuitem">
          <span class="pf-v6-c-menu__item-main">
            <span class="pf-v6-c-menu__item-text">appleseed</span>
          </span>
        </button>
      </li>
      <li class="pf-v6-c-menu__list-item" role="none">
        <button class="pf-v6-c-menu__item" type="button" role="menuitem">
          <span class="pf-v6-c-menu__item-main">
            <span class="pf-v6-c-menu__item-text">appleton</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Search input group, autocomplete last option hint

```html
<div class="pf-v6-c-text-input-group">
  <div class="pf-v6-c-text-input-group__main pf-m-icon">
    <span class="pf-v6-c-text-input-group__text">
      <span class="pf-v6-c-text-input-group__icon">
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
            d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
          />
        </svg>
      </span>
      <input
        class="pf-v6-c-text-input-group__text-input pf-m-hint"
        type="text"
        value="appleseed"
        disabled
        aria-hidden="true"
      />
    </span>
  </div>
  <div class="pf-v6-c-text-input-group__utilities">
    <button
      class="pf-v6-c-button pf-m-plain"
      type="button"
      aria-label="Clear autocomple search input group last option hint"
    >
      <span class="pf-v6-c-button__icon">
        <svg
          class="pf-v6-svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
        >
          <path
            d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
          />
        </svg>
      </span>
    </button>
  </div>
</div>

<div class="pf-v6-c-menu">
  <div class="pf-v6-c-menu__content">
    <ul class="pf-v6-c-menu__list" role="menu">
      <li class="pf-v6-c-menu__list-item" role="none">
        <button class="pf-v6-c-menu__item" type="button" role="menuitem">
          <span class="pf-v6-c-menu__item-main">
            <span class="pf-v6-c-menu__item-text">appleseed</span>
          </span>
        </button>
      </li>
    </ul>
  </div>
</div>

```

### Search input group, advanced search expanded with autocomplete

```html
<div class="ws-example-wrapper">
  <div class="pf-v6-c-input-group">
    <div class="pf-v6-c-input-group__item pf-m-fill">
      <div class="pf-v6-c-text-input-group">
        <div class="pf-v6-c-text-input-group__main pf-m-icon">
          <span class="pf-v6-c-text-input-group__text">
            <span class="pf-v6-c-text-input-group__icon">
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
                  d="m30.796 29.205-8.557-8.557A11.945 11.945 0 0 0 25 13c0-6.617-5.383-12-12-12S1 6.383 1 13s5.383 12 12 12c2.904 0 5.57-1.038 7.648-2.761l8.556 8.556a1.122 1.122 0 0 0 1.592 0 1.127 1.127 0 0 0 0-1.591ZM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.514 3 13Z"
                />
              </svg>
            </span>
            <input
              class="pf-v6-c-text-input-group__text-input"
              type="text"
              value="username:root firstname:n"
              aria-label="Search input group advanced search expanded with autocomplete"
            />
          </span>
        </div>
        <div class="pf-v6-c-text-input-group__utilities">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Clear advance search input group expanded with autocomplete"
          >
            <span class="pf-v6-c-button__icon">
              <svg
                class="pf-v6-svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
              >
                <path
                  d="M17.8 16.2 11.59 10l6.21-6.21c.42-.46.39-1.17-.07-1.59-.43-.4-1.09-.4-1.52 0l-6.2 6.2-6.22-6.19c-.44-.44-1.15-.44-1.59 0-.44.44-.44 1.15 0 1.59l6.2 6.21-6.2 6.2c-.42.46-.39 1.17.07 1.59.43.4 1.09.4 1.52 0L10 11.59l6.2 6.2c.44.44 1.15.44 1.59 0 .44-.45.44-1.16 0-1.6Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-expanded pf-m-control"
        type="button"
        aria-expanded="true"
        aria-label="Advanced search expanded with autocomplete"
      >
        <span class="pf-v6-c-button__icon">
          <svg
            class="pf-v6-svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
          >
            <path
              d="M18.71 5.29a.996.996 0 0 0-1.41 0l-7.29 7.29-7.3-7.29a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l.02.02 7.65 7.65c.29.29.68.44 1.06.44s.77-.15 1.06-.44l7.65-7.65a.996.996 0 0 0 0-1.41Z"
            />
          </svg>
        </span>
      </button>
    </div>
    <div class="pf-v6-c-input-group__item">
      <button
        class="pf-v6-c-button pf-m-control"
        type="submit"
        aria-label="Search advanced search input group expanded with autocomplete"
      >
        <span class="pf-v6-c-button__icon">
          <svg
            class="pf-v6-svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
          >
            <path
              d="M18.35 8.94 12.7 3.29a.987.987 0 0 0-1.41-.02.987.987 0 0 0-.02 1.41l.02.02 4.29 4.29H2c-.55 0-1 .45-1 1s.45 1 1 1h13.59l-4.29 4.29a.987.987 0 0 0-.02 1.41c.38.4 1.02.41 1.41.02l.02-.02 5.65-5.65c.59-.59.59-1.53 0-2.12Z"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>

  <div class="pf-v6-c-panel pf-m-raised">
    <div class="pf-v6-c-panel__main">
      <div class="pf-v6-c-panel__main-body">
        <form class="pf-v6-c-form" novalidate>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="text-input-group-advanced-search-input-form-with-autocomplete-example-username"
              >
                <span class="pf-v6-c-form__label-text">Username</span></label>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control">
                <input
                  type="text"
                  value="root"
                  id="text-input-group-advanced-search-input-form-with-autocomplete-example-username"
                  name="text-input-group-advanced-search-input-form-with-autocomplete-example-username"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="text-input-group-advanced-search-input-form-with-autocomplete-example-firstname"
              >
                <span class="pf-v6-c-form__label-text">First name</span></label>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control">
                <input
                  type="text"
                  value="ned"
                  id="text-input-group-advanced-search-input-form-with-autocomplete-example-firstname"
                  name="text-input-group-advanced-search-input-form-with-autocomplete-example-firstname"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="text-input-group-advanced-search-input-form-with-autocomplete-example-group"
              >
                <span class="pf-v6-c-form__label-text">Group</span></label>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control">
                <input
                  type="text"
                  id="text-input-group-advanced-search-input-form-with-autocomplete-example-group"
                  name="text-input-group-advanced-search-input-form-with-autocomplete-example-group"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-form__group-label"><label
                class="pf-v6-c-form__label"
                for="text-input-group-advanced-search-input-form-with-autocomplete-example-email"
              >
                <span class="pf-v6-c-form__label-text">Email</span></label>
            </div>
            <div class="pf-v6-c-form__group-control">
              <span class="pf-v6-c-form-control">
                <input
                  type="text"
                  id="text-input-group-advanced-search-input-form-with-autocomplete-example-email"
                  name="text-input-group-advanced-search-input-form-with-autocomplete-example-email"
                />
              </span>
            </div>
          </div>
          <div class="pf-v6-c-form__group pf-m-action">
            <div class="pf-v6-c-action-list">
              <div class="pf-v6-c-action-list__group">
                <div class="pf-v6-c-action-list__item">
                  <button
                    class="pf-v6-c-button pf-m-primary"
                    id="submit-advanced-search-expanded-with-autocomplete"
                    type="submit"
                    aria-labelledby="submit-advanced-search-expanded-with-autocomplete search-input-group-advanced-search-expanded-with-autocomplete"
                  >
                    <span class="pf-v6-c-button__text">Submit</span>
                  </button>
                </div>
                <div class="pf-v6-c-action-list__item">
                  <button
                    class="pf-v6-c-button pf-m-link"
                    id="reset-advanced-search-expanded-with-autocomplete"
                    type="submit"
                    aria-labelledby="reset-advanced-search-expanded-with-autocomplete search-input-group-advanced-search-expanded-with-autocomplete"
                  >
                    <span class="pf-v6-c-button__text">Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="pf-v6-c-menu">
    <div class="pf-v6-c-menu__content">
      <ul class="pf-v6-c-menu__list" role="menu">
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">nancy</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">ned</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">neil</span>
            </span>
          </button>
        </li>
        <li class="pf-v6-c-menu__list-item" role="none">
          <button class="pf-v6-c-menu__item" type="button" role="menuitem">
            <span class="pf-v6-c-menu__item-main">
              <span class="pf-v6-c-menu__item-text">nicole</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-text-input-group` | `<div>` | Creates a text input group. *Required* |
| `.pf-v6-c-text-input-group__main` | `<div>` | Creates a wrapper for the main content. *Required* |
| `.pf-v6-c-text-input-group__text` | `<span>` | Creates the text container. *Required*|
| `.pf-v6-c-text-input-group__icon` | `<span>` | Creates a container for an icon. |
| `.pf-v6-c-text-input-group__text-input` | `<input>` | Creates a text input. *Required* |
| `.pf-v6-c-text-input-group__utilities` | `<div>` | Creates text input utilities container. |
| `.pf-v6-c-text-input-group__group` | `<div>` | Creates text input prev/next nav group. |
| `.pf-m-plain` | `.pf-v6-c-text-input-group` | Applies plain styling. Only use this variant when the text input group is contained in an ancestor with its own border or background styling. |
| `.pf-m-disabled` | `.pf-v6-c-text-input-group` | Applies disabled styling. The `<input>` should also be `disabled`. |
| `.pf-m-success` | `.pf-v6-c-text-input-group` | Applies success validation styling. |
| `.pf-m-warning` | `.pf-v6-c-text-input-group` | Applies warning validation styling. |
| `.pf-m-error` | `.pf-v6-c-text-input-group` | Applies error validation styling. |
| `.pf-m-icon` | `.pf-v6-c-text-input-group__main` | Applies styling when icons are included in the container. |
| `.pf-m-status` | `.pf-v6-c-text-input-group__icon` | Applies status styling to the icon, matching the status modifier applied to `.pf-v6-c-text-input-group`. |
| `.pf-m-hint` | `.pf-v6-c-text-input-group__text-input` | Applies styling when hints are included in the container. |
