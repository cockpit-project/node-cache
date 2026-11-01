---
id: 'Helper text'
section: components
cssPrefix: pf-v6-c-helper-text
---## Examples

### Basic

```html
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item">
    <span class="pf-v6-c-helper-text__item-text">This is default helper text</span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-indeterminate">
    <span class="pf-v6-c-helper-text__item-icon">
      <svg
        class="pf-v6-svg"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
      >
        <path d="M29 17H3a1 1 0 0 1 0-2h26a1 1 0 0 1 0 2Z" />
      </svg>
    </span>
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Indeterminate:</span>
      This is indeterminate helper text
    </span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-warning">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Warning:</span>
      This is warning helper text
    </span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-success">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Success:</span>
      This is success helper text
    </span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-error">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Error:</span>
      This is error helper text
    </span>
  </div>
</div>

```

### Multiple items

You can include multiple `HelperTextItem` components inside a single `HelperText` container.

```html
<ul class="pf-v6-c-helper-text" role="list">
  <li class="pf-v6-c-helper-text__item">
    <span class="pf-v6-c-helper-text__item-text">This is default helper text</span>
  </li>
  <li class="pf-v6-c-helper-text__item">
    <span
      class="pf-v6-c-helper-text__item-text"
    >This is another default helper text in the same block</span>
  </li>
  <li class="pf-v6-c-helper-text__item">
    <span
      class="pf-v6-c-helper-text__item-text"
    >And this is more default text in the same block</span>
  </li>
</ul>

```

### Dynamic

If the `HelperTextItem` components are expected or intended to dynamically update in some way, you should use a dynamic `HelperText` container.

```html
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-text">This is default helper text</span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-indeterminate pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-icon">
      <svg
        class="pf-v6-svg"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
      >
        <path d="M29 17H3a1 1 0 0 1 0-2h26a1 1 0 0 1 0 2Z" />
      </svg>
    </span>
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Indeterminate:</span>
      This is indeterminate helper text
    </span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-warning pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Warning:</span>
      This is warning helper text
    </span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-success pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Success:</span>
      This is success helper text
    </span>
  </div>
</div>
<div class="pf-v6-c-helper-text">
  <div class="pf-v6-c-helper-text__item pf-m-error pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Error:</span>
      This is error helper text
    </span>
  </div>
</div>

```

### Dynamic list

```html
<ul class="pf-v6-c-helper-text" role="list">
  <li class="pf-v6-c-helper-text__item pf-m-success pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Success:</span>
      Must be at least 14 characters
    </span>
  </li>
  <li class="pf-v6-c-helper-text__item pf-m-error pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Error:</span>
      Cannot contain any variation of the word "redhat"
    </span>
  </li>
  <li class="pf-v6-c-helper-text__item pf-m-success pf-m-dynamic">
    <span class="pf-v6-c-helper-text__item-icon">
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
    <span class="pf-v6-c-helper-text__item-text">
      <span class="pf-v6-screen-reader">Success:</span>
      Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols
    </span>
  </li>
</ul>

```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-helper-text` | `<div>`, `<ul>` |  Initiates the helper text component. **Required** |
| `.pf-v6-c-helper-text__item` | `<div>`, `<li>` |  Initiates a helper text item. **Required** |
| `.pf-v6-c-helper-text__item-icon` | `<span>` |  Initiates a helper text item icon. **Required when used in `.pf-v6-c-helper-text__item.pf-m-dynamic`** |
| `.pf-v6-c-helper-text__item-text` | `<span>` |  Initiates a helper text item text. **Required** |
| `.pf-m-dynamic` | `.pf-v6-c-helper-text__item` |  Modifies a helper text item to be dynamic. For use when the item changes state as the form field the text is associated with is updated. |
| `.pf-m-indeterminate` | `.pf-v6-c-helper-text__item` |  Modifies a helper text item for indeterminate state styles. |
| `.pf-m-warning` | `.pf-v6-c-helper-text__item` |  Modifies a helper text item for warning state styles. |
| `.pf-m-success` | `.pf-v6-c-helper-text__item` |  Modifies a helper text item for success state styles. |
| `.pf-m-error` | `.pf-v6-c-helper-text__item` |  Modifies a helper text item for error state styles. |
| `.pf-m-hidden` | `.pf-v6-c-helper-text` | Hides helper text. |
