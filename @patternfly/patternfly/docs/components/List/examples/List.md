---
id: List
section: components
cssPrefix: pf-v6-c-list
---## Examples

### Unordered

```html
<ul class="pf-v6-c-list" role="list">
  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li>
    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
    <ul class="pf-v6-c-list" role="list">
      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li>
        Ut venenatis, nisl scelerisque.
        <ol class="pf-v6-c-list" role="list">
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
          <li>Integer in volutpat libero.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Ut non enim metus.</li>
</ul>

```

### Ordered

```html
<ol class="pf-v6-c-list" role="list">
  <li>Donec blandit a lorem id convallis.</li>
  <li>Cras gravida arcu at diam gravida gravida.</li>
  <li>Integer in volutpat libero.</li>
  <li>Donec a diam tellus.</li>
  <li>
    Etiam auctor nisl et.
    <ul class="pf-v6-c-list" role="list">
      <li>Donec blandit a lorem id convallis.</li>
      <li>Cras gravida arcu at diam gravida gravida.</li>
      <li>
        Integer in volutpat libero.
        <ol class="pf-v6-c-list" role="list">
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Aenean nec tortor orci.</li>
  <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
  <li>Vivamus maximus ultricies pulvinar.</li>
</ol>

```

### Inline

```html
<ul class="pf-v6-c-list pf-m-inline" role="list">
  <li>Inline list item 1</li>
  <li>Inline list item 2</li>
  <li>Inline list item 3</li>
</ul>

```

### Plain

```html
<ul class="pf-v6-c-list pf-m-plain" role="list">
  <li>Donec blandit a lorem id convallis.</li>
  <li>Integer in volutpat libero.</li>
  <li>
    Donec a diam tellus.
    <ul class="pf-v6-c-list" role="list">
      <li>Donec blandit a lorem id convallis.</li>
      <li>Cras gravida arcu at diam gravida gravida.</li>
      <li>Integer in volutpat libero.</li>
    </ul>
  </li>
  <li>Aenean nec tortor orci.</li>
  <li>Vivamus maximus ultricies pulvinar.</li>
</ul>

```

### With horizontal rules

```html
<ul class="pf-v6-c-list pf-m-plain pf-m-bordered" role="list">
  <li>Donec blandit a lorem id convallis.</li>
  <li>Integer in volutpat libero.</li>
  <li>Donec a diam tellus.</li>
  <li>Aenean nec tortor orci.</li>
  <li>Vivamus maximus ultricies pulvinar.</li>
</ul>

```

### With small icons

```html
<ul class="pf-v6-c-list pf-m-plain" role="list">
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
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
          d="M28.5 10H17v20h11.5c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5ZM23 26.125h-2a1.125 1.125 0 0 1 0-2.25h2a1.125 1.125 0 0 1 0 2.25Zm3-5h-5a1.125 1.125 0 0 1 0-2.25h5a1.125 1.125 0 0 1 0 2.25Zm0-5h-5a1.125 1.125 0 0 1 0-2.25h5a1.125 1.125 0 0 1 0 2.25ZM6.586 22.414 14.172 30H3.507c-.827 0-1.5-.673-1.5-1.5v-17c0-.827.673-1.5 1.5-1.5H6v11a2 2 0 0 0 .586 1.414Zm8.341-12.487c.047.047.073.11.073.177v17.293a.25.25 0 0 1-.427.177l-6.5-6.5A.249.249 0 0 1 8 20.897V3.604a.25.25 0 0 1 .427-.177l6.5 6.5Z"
        />
      </svg>
    </span>
    <span class="pf-v6-c-list__item-text">List item one</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
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
          d="M30.707 7.707a.999.999 0 0 1-1.414 0L27 5.414 23.914 8.5l3.793 3.793a.999.999 0 1 1-1.414 1.414L22.5 9.914 19.414 13l2.293 2.293a.999.999 0 1 1-1.414 1.414L18 14.414l-4.293 4.293c-.037.037-.085.054-.127.084A6.955 6.955 0 0 1 15 23c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.581 0 3.036.533 4.209 1.42.03-.041.047-.089.084-.127L25.939 3.646a1.501 1.501 0 0 1 2.121 0l2.646 2.646a.999.999 0 0 1 0 1.414Z"
        />
      </svg>
    </span>
    <span class="pf-v6-c-list__item-text">List item two</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
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
          d="M29.5 3h-27C1.673 3 1 3.673 1 4.5v17c0 .827.673 1.5 1.5 1.5H12v4H8a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2h-4v-4h9.5c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5ZM18 27h-4v-4h4v4Zm11-6H3V5h26v16Z"
        />
      </svg>
    </span>
    <span class="pf-v6-c-list__item-text">List item three</span>
  </li>
</ul>

```

### With large icons

```html
<ul class="pf-v6-c-list pf-m-plain pf-m-icon-lg" role="list">
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
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
          d="M28.5 10H17v20h11.5c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5ZM23 26.125h-2a1.125 1.125 0 0 1 0-2.25h2a1.125 1.125 0 0 1 0 2.25Zm3-5h-5a1.125 1.125 0 0 1 0-2.25h5a1.125 1.125 0 0 1 0 2.25Zm0-5h-5a1.125 1.125 0 0 1 0-2.25h5a1.125 1.125 0 0 1 0 2.25ZM6.586 22.414 14.172 30H3.507c-.827 0-1.5-.673-1.5-1.5v-17c0-.827.673-1.5 1.5-1.5H6v11a2 2 0 0 0 .586 1.414Zm8.341-12.487c.047.047.073.11.073.177v17.293a.25.25 0 0 1-.427.177l-6.5-6.5A.249.249 0 0 1 8 20.897V3.604a.25.25 0 0 1 .427-.177l6.5 6.5Z"
        />
      </svg>
    </span>
    <span class="pf-v6-c-list__item-text">List item one</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
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
          d="M30.707 7.707a.999.999 0 0 1-1.414 0L27 5.414 23.914 8.5l3.793 3.793a.999.999 0 1 1-1.414 1.414L22.5 9.914 19.414 13l2.293 2.293a.999.999 0 1 1-1.414 1.414L18 14.414l-4.293 4.293c-.037.037-.085.054-.127.084A6.955 6.955 0 0 1 15 23c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.581 0 3.036.533 4.209 1.42.03-.041.047-.089.084-.127L25.939 3.646a1.501 1.501 0 0 1 2.121 0l2.646 2.646a.999.999 0 0 1 0 1.414Z"
        />
      </svg>
    </span>
    <span class="pf-v6-c-list__item-text">List item two</span>
  </li>
  <li class="pf-v6-c-list__item">
    <span class="pf-v6-c-list__item-icon">
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
          d="M29.5 3h-27C1.673 3 1 3.673 1 4.5v17c0 .827.673 1.5 1.5 1.5H12v4H8a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2h-4v-4h9.5c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5ZM18 27h-4v-4h4v4Zm11-6H3V5h26v16Z"
        />
      </svg>
    </span>
    <span class="pf-v6-c-list__item-text">List item three</span>
  </li>
</ul>

```

## Documentation

### Overview

Non-inline lists can be nested up to any level.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-list` | `<ul>, <ol>` | Initiates a list. **Required**  |
| `.pf-m-inline` | `.pf-v6-c-list` | Displays list items inline. |
| `.pf-m-plain` | `.pf-v6-c-list` |  Removes the list marker and base indentation. |
| `.pf-m-bordered` | `.pf-v6-c-list` | Add horizontal divider between items in a list. |
| `.pf-m-icon-lg` | `.pf-v6-c-list` | Show all the icons or logos in the list large. |
