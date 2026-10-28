---
id: Code editor
section: components
cssPrefix: pf-v6-c-code-editor
---import './CodeEditor.css';

## Examples

### Default

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
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
                d="M28 7v22.607c0 .768-.622 1.393-1.387 1.393H10a1 1 0 1 1 0-2h16V7a1 1 0 1 1 2 0Zm-6.5 19h-16c-.827 0-1.5-.673-1.5-1.5V8a1.001 1.001 0 0 1 .294-.708l5.998-5.998A1.001 1.001 0 0 1 11 1h10.5c.827 0 1.5.673 1.5 1.5v22c0 .827-.673 1.5-1.5 1.5ZM7.414 7H10V4.414L7.414 7ZM21 3h-9v4.614C12 8.378 11.378 9 10.613 9H6v15h15V3Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1Zm-15.061-4.646c.292.292.676.438 1.061.438s.768-.146 1.061-.438l8.646-8.646a.999.999 0 1 0-1.414-1.414L17 21.587V3a1 1 0 0 0-2 0v18.586l-7.293-7.293a.999.999 0 1 0-1.414 1.414l8.646 8.646Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h26a1 1 0 0 1 1 1ZM7.707 12.707 15 5.414V24a1 1 0 1 0 2 0V5.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-8.646-8.647a1.5 1.5 0 0 0-2.121 0l-8.647 8.647a.999.999 0 1 0 1.414 1.414Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main"></div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
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
            d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

### Read-only

```html
<div class="pf-v6-c-code-editor pf-m-read-only">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
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
                d="M28 7v22.607c0 .768-.622 1.393-1.387 1.393H10a1 1 0 1 1 0-2h16V7a1 1 0 1 1 2 0Zm-6.5 19h-16c-.827 0-1.5-.673-1.5-1.5V8a1.001 1.001 0 0 1 .294-.708l5.998-5.998A1.001 1.001 0 0 1 11 1h10.5c.827 0 1.5.673 1.5 1.5v22c0 .827-.673 1.5-1.5 1.5ZM7.414 7H10V4.414L7.414 7ZM21 3h-9v4.614C12 8.378 11.378 9 10.613 9H6v15h15V3Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1Zm-15.061-4.646c.292.292.676.438 1.061.438s.768-.146 1.061-.438l8.646-8.646a.999.999 0 1 0-1.414-1.414L17 21.587V3a1 1 0 0 0-2 0v18.586l-7.293-7.293a.999.999 0 1 0-1.414 1.414l8.646 8.646Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h26a1 1 0 0 1 1 1ZM7.707 12.707 15 5.414V24a1 1 0 1 0 2 0V5.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-8.646-8.647a1.5 1.5 0 0 0-2.121 0l-8.647 8.647a.999.999 0 1 0 1.414 1.414Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main"></div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
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
            d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

### Without actions

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
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
            d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">YAML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div class="pf-v6-c-code-editor__upload">
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
                  d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-empty-state__title">
              <h4 class="pf-v6-c-empty-state__title-text">Start editing</h4>
            </div>
          </div>

          <div
            class="pf-v6-c-empty-state__body"
          >Drag a file here or browse to upload.</div>

          <div class="pf-v6-c-empty-state__footer">
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Browse</span>
              </button>
            </div>
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-link" type="button">
                <span class="pf-v6-c-button__text">Start from scratch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Without language tab

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header"></div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

### Drag file and hover over component

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
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
            d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">YAML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main pf-m-drag-hover">
    <div class="pf-v6-c-code-editor__upload">
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
                  d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-empty-state__title">
              <h4 class="pf-v6-c-empty-state__title-text">Start editing</h4>
            </div>
          </div>

          <div
            class="pf-v6-c-empty-state__body"
          >Drag a file here or browse to upload.</div>

          <div class="pf-v6-c-empty-state__footer">
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-primary" type="button">
                <span class="pf-v6-c-button__text">Browse</span>
              </button>
            </div>
            <div class="pf-v6-c-empty-state__actions">
              <button class="pf-v6-c-button pf-m-link" type="button">
                <span class="pf-v6-c-button__text">Start from scratch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With optional header content and keyboard shortcuts

```html
<div class="pf-v6-c-code-editor">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
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
                d="M28 7v22.607c0 .768-.622 1.393-1.387 1.393H10a1 1 0 1 1 0-2h16V7a1 1 0 1 1 2 0Zm-6.5 19h-16c-.827 0-1.5-.673-1.5-1.5V8a1.001 1.001 0 0 1 .294-.708l5.998-5.998A1.001 1.001 0 0 1 11 1h10.5c.827 0 1.5.673 1.5 1.5v22c0 .827-.673 1.5-1.5 1.5ZM7.414 7H10V4.414L7.414 7ZM21 3h-9v4.614C12 8.378 11.378 9 10.613 9H6v15h15V3Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1Zm-15.061-4.646c.292.292.676.438 1.061.438s.768-.146 1.061-.438l8.646-8.646a.999.999 0 1 0-1.414-1.414L17 21.587V3a1 1 0 0 0-2 0v18.586l-7.293-7.293a.999.999 0 1 0-1.414 1.414l8.646 8.646Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h26a1 1 0 0 1 1 1ZM7.707 12.707 15 5.414V24a1 1 0 1 0 2 0V5.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-8.646-8.647a1.5 1.5 0 0 0-2.121 0l-8.647 8.647a.999.999 0 1 0 1.414 1.414Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main">Header main content</div>
      <div class="pf-v6-c-code-editor__keyboard-shortcuts">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm0 28C8.832 29 3 23.168 3 16S8.832 3 16 3s13 5.832 13 13-5.832 13-13 13Zm5-17a5.008 5.008 0 0 1-4 4.899V19a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3a1 1 0 0 1-2 0c0-2.757 2.243-5 5-5s5 2.243 5 5Zm-3.25 12a1.75 1.75 0 1 1-3.501-.001A1.75 1.75 0 0 1 17.75 24Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">View shortcuts</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
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
            d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

### With optional code editor container

This is an extra container used in React to prevent event propagation if upload is enabled or there is a provided empty state.

```html
<div class="pf-v6-c-code-editor">
  <div role="presentation" tabindex="0" class="pf-v6-c-code-editor__container">
    <div class="pf-v6-c-code-editor__header">
      <div class="pf-v6-c-code-editor__header-content">
        <div class="pf-v6-c-code-editor__controls">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Copy to clipboard"
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
                  d="M28 7v22.607c0 .768-.622 1.393-1.387 1.393H10a1 1 0 1 1 0-2h16V7a1 1 0 1 1 2 0Zm-6.5 19h-16c-.827 0-1.5-.673-1.5-1.5V8a1.001 1.001 0 0 1 .294-.708l5.998-5.998A1.001 1.001 0 0 1 11 1h10.5c.827 0 1.5.673 1.5 1.5v22c0 .827-.673 1.5-1.5 1.5ZM7.414 7H10V4.414L7.414 7ZM21 3h-9v4.614C12 8.378 11.378 9 10.613 9H6v15h15V3Z"
                />
              </svg>
            </span>
          </button>
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Download code"
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
                  d="M30 29a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1Zm-15.061-4.646c.292.292.676.438 1.061.438s.768-.146 1.061-.438l8.646-8.646a.999.999 0 1 0-1.414-1.414L17 21.587V3a1 1 0 0 0-2 0v18.586l-7.293-7.293a.999.999 0 1 0-1.414 1.414l8.646 8.646Z"
                />
              </svg>
            </span>
          </button>
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Upload code"
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
                  d="M30 29a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h26a1 1 0 0 1 1 1ZM7.707 12.707 15 5.414V24a1 1 0 1 0 2 0V5.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-8.646-8.647a1.5 1.5 0 0 0-2.121 0l-8.647 8.647a.999.999 0 1 0 1.414 1.414Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="pf-v6-c-code-editor__tab">
        <span class="pf-v6-c-code-editor__tab-icon">
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
              d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
            />
          </svg>
        </span>
        <span class="pf-v6-c-code-editor__tab-text">HTML</span>
      </div>
    </div>
    <div class="pf-v6-c-code-editor__main">
      <div class="pf-v6-c-code-editor__upload">
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
                    d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
                  />
                </svg>
              </div>
              <div class="pf-v6-c-empty-state__title">
                <h4 class="pf-v6-c-empty-state__title-text">Start editing</h4>
              </div>
            </div>

            <div
              class="pf-v6-c-empty-state__body"
            >Drag a file here or browse to upload.</div>

            <div class="pf-v6-c-empty-state__footer">
              <div class="pf-v6-c-empty-state__actions">
                <button class="pf-v6-c-button pf-m-primary" type="button">
                  <span class="pf-v6-c-button__text">Browse</span>
                </button>
              </div>
              <div class="pf-v6-c-empty-state__actions">
                <button class="pf-v6-c-button pf-m-link" type="button">
                  <span class="pf-v6-c-button__text">Start from scratch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With full height modifier

```html
<div class="pf-v6-c-code-editor pf-m-full-height">
  <div class="pf-v6-c-code-editor__header">
    <div class="pf-v6-c-code-editor__header-content">
      <div class="pf-v6-c-code-editor__controls">
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Copy to clipboard"
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
                d="M28 7v22.607c0 .768-.622 1.393-1.387 1.393H10a1 1 0 1 1 0-2h16V7a1 1 0 1 1 2 0Zm-6.5 19h-16c-.827 0-1.5-.673-1.5-1.5V8a1.001 1.001 0 0 1 .294-.708l5.998-5.998A1.001 1.001 0 0 1 11 1h10.5c.827 0 1.5.673 1.5 1.5v22c0 .827-.673 1.5-1.5 1.5ZM7.414 7H10V4.414L7.414 7ZM21 3h-9v4.614C12 8.378 11.378 9 10.613 9H6v15h15V3Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Download code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1Zm-15.061-4.646c.292.292.676.438 1.061.438s.768-.146 1.061-.438l8.646-8.646a.999.999 0 1 0-1.414-1.414L17 21.587V3a1 1 0 0 0-2 0v18.586l-7.293-7.293a.999.999 0 1 0-1.414 1.414l8.646 8.646Z"
              />
            </svg>
          </span>
        </button>
        <button
          class="pf-v6-c-button pf-m-plain"
          type="button"
          aria-label="Upload code"
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
                d="M30 29a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h26a1 1 0 0 1 1 1ZM7.707 12.707 15 5.414V24a1 1 0 1 0 2 0V5.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-8.646-8.647a1.5 1.5 0 0 0-2.121 0l-8.647 8.647a.999.999 0 1 0 1.414 1.414Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-code-editor__header-main">Header main content</div>
      <div class="pf-v6-c-code-editor__keyboard-shortcuts">
        <button class="pf-v6-c-button pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm0 28C8.832 29 3 23.168 3 16S8.832 3 16 3s13 5.832 13 13-5.832 13-13 13Zm5-17a5.008 5.008 0 0 1-4 4.899V19a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3a1 1 0 0 1-2 0c0-2.757 2.243-5 5-5s5 2.243 5 5Zm-3.25 12a1.75 1.75 0 1 1-3.501-.001A1.75 1.75 0 0 1 17.75 24Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">View shortcuts</span>
        </button>
      </div>
    </div>
    <div class="pf-v6-c-code-editor__tab">
      <span class="pf-v6-c-code-editor__tab-icon">
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
            d="M9.707 9.707 3.414 16l6.293 6.293a.999.999 0 1 1-1.414 1.414l-6.646-6.646a1.501 1.501 0 0 1 0-2.121l6.646-6.646a.999.999 0 1 1 1.414 1.414Zm20.647 5.232-6.646-6.646a.999.999 0 1 0-1.414 1.414L28.587 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l6.646-6.646a1.501 1.501 0 0 0 0-2.121ZM18.121 6.022a.997.997 0 0 0-1.186.77l-3.826 18a1 1 0 1 0 1.956.416l3.826-18a1 1 0 0 0-.77-1.186Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-code-editor__tab-text">HTML</span>
    </div>
  </div>
  <div class="pf-v6-c-code-editor__main">
    <div dir="ltr" class="pf-v6-c-code-editor__code">
      <pre class="pf-v6-c-code-editor__code-pre">
                code goes here
      </pre>
    </div>
  </div>
</div>

```

## Documentation

### Usage

| Class                                      | Applied to | Outcome                                                                                       |
| ------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------- |
| `.pf-v6-c-code-editor`                     | `<div>`    | Initiates the code editor component. **Required**                                             |
| `.pf-v6-c-code-editor__header`             | `<div>`    | Initiates the code editor header used for the controls and tab elements. |
| `.pf-v6-c-code-editor__header-content`     | `<div>`    | Initiates the code editor header content used for the controls and tab elements. **Required** |
| `.pf-v6-c-code-editor__main`               | `<div>`    | Initiates the main container for a code editor e.g. Monaco **Required**                       |
| `.pf-v6-c-code-editor__code`               | `<div>`    | Initiates the container for code without a JS code editor. Comes with PatternFly styling.     |
| `.pf-v6-c-code-editor__controls`           | `<div>`    | Initiates the code editor controls.                                                           |
| `.pf-v6-c-code-editor__header-main`        | `<div>`    | Initiates the code editor header content area.                                                |
| `.pf-v6-c-code-editor__keyboard-shortcuts` | `<div>`    | Initiates the code editor header keyboard shortcuts area.                                     |
| `.pf-v6-c-code-editor__tab`                | `<div>`    | Initiates the code editor tab.                                                                |
| `.pf-v6-c-code-editor__tab-text`           | `<span>`   | Initiates the code editor tab text.                                                           |
| `.pf-v6-c-code-editor__tab-icon`           | `<span>`   | Initiates the code editor tab icon.                                                           |
| `.pf-v6-c-code-editor__upload`             | `<div>`    | Initiates the code editor upload border.                                                      |
| `.pf-v6-c-code-editor__container`             | `<div>`    | Initiates the container used inside `.pf-v6-c-code-editor` in PatternFly React. This is used in PatternFly React to prevent event propagation if upload is enabled or there is a provided empty state.                                                      |
| `.pf-m-full-height`             | `.pf-v6-c-code-editor`    | Modifies for full-height style.                                                   |
