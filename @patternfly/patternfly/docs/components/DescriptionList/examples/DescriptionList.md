---
id: 'Description list'
section: components
cssPrefix: pf-v6-c-description-list
---## Examples

### Default

```html
<dl class="pf-v6-c-description-list" aria-label="Default example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Term help text

```html
<dl class="pf-v6-c-description-list" aria-label="Term help text example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Default, two column

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col"
  aria-label="Default, two column example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div
        class="pf-v6-c-description-list__text"
      >This is a long description that should wrap to multiple lines in a multi-column layout.</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Default, three column on lg breakpoint

```html
<dl
  class="pf-v6-c-description-list pf-m-3-col-on-lg"
  aria-label="Default, three column on lg breakpoint example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal"
  aria-label="Horizontal example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, two column

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-2-col"
  aria-label="Horizontal, two column example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, three column on lg breakpoint

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-3-col-on-lg"
  aria-label="Horizontal, three column on lg breakpoint example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Compact

```html
<dl class="pf-v6-c-description-list pf-m-compact" aria-label="Compact example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Compact horizontal

```html
<dl
  class="pf-v6-c-description-list pf-m-compact pf-m-horizontal pf-m-2-col"
  aria-label="Compact horizontal example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Fluid horizontal

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-fluid pf-m-2-col"
  aria-label="Fluid horizontal example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Column fill

Column fill will modify the default placement of description list groups to fill from top to bottom using css column-count, instead of left to right. **Note:** using this modifier will change the layout so that horizontally adjacent groups are no longer aligned in the same row.

```html
<dl
  class="pf-v6-c-description-list pf-m-fill-columns pf-m-2-col pf-m-3-col-on-lg"
  aria-label="Column fill example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div
        class="pf-v6-c-description-list__text"
      >This is a long description that should wrap to multiple lines in a multi-column layout.</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Auto fit

### Auto-fit basic

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-fit"
  aria-label="Auto-fit basic example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Auto-fit, min width modified, grid template columns

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-fit"
  aria-label="Auto-fit, min width modified, grid template columns example"
  style="--pf-v6-c-description-list--GridTemplateColumns--min: 200px;"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Auto-fit, min width modified, responsive grid template columns

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-fit"
  aria-label="Auto-fit, min width modified, responsive grid template columns example"
  style="--pf-v6-c-description-list--GridTemplateColumns--min-on-md: 100px; --pf-v6-c-description-list--GridTemplateColumns--min-on-lg: 150px; --pf-v6-c-description-list--GridTemplateColumns--min-on-xl: 200px; --pf-v6-c-description-list--GridTemplateColumns--min-on-2xl: 300px;"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Responsive column definitions

### Default, responsive columns

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col-on-lg pf-m-3-col-on-xl"
  aria-label="Default, responsive columns example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, responsive columns

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl"
  aria-label="Horizontal, responsive columns example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Responsive, horizontal, vertical group layout

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-vertical-on-md pf-m-horizontal-on-lg pf-m-vertical-on-xl pf-m-horizontal-on-2xl"
  aria-label="Responsive, horizontal, vertical group layout example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Auto-column-width

### Default, auto columns width

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-column-widths pf-m-3-col"
  aria-label="Default, auto columns width example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, auto column width

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg"
  aria-label="Horizontal, auto column width example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Inline grid

### Default, inline grid

```html
<dl
  class="pf-v6-c-description-list pf-m-3-col pf-m-inline-grid"
  aria-label="Default, inline grid example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display variant

```html
<dl
  class="pf-v6-c-description-list pf-m-display-lg pf-m-2-col-on-lg"
  aria-label="Display variant example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Card variants

Cards can be used as description list group wrappers. Using cards in this way applies the card body padding directly to the card and enables the use of card modifiers within description list groups.

### Description list group wrapper as card

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col-on-lg"
  aria-label="Description list group wrapper as card example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display lg and card variant

```html
<dl
  class="pf-v6-c-description-list pf-m-display-lg pf-m-2-col-on-lg"
  aria-label="Display lg and card variant example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display 2xl and card variant

```html
<dl
  class="pf-v6-c-description-list pf-m-display-2xl pf-m-2-col-on-lg"
  aria-label="Display 2xl and card variant example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display and card variant, three column on lg breakpoint

```html
<dl
  class="pf-v6-c-description-list pf-m-3-col-on-lg pf-m-display-lg"
  aria-label="Display and card variant, three column on lg breakpoint example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
</dl>

```

### Display and card variant, horizontal, modified term width

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col-on-lg pf-m-display-lg pf-m-horizontal"
  aria-label="Display and card variant, horizontal, modified term width example"
  style="--pf-v6-c-description-list__term--width: 10ch;"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
</dl>

```

<!-- ## Auto term with is only supported in FF currently

### Horizontal 2 col auto term width
```hbs
{{> description-list__example 
description-list--aria-label="Horizontal 2 column auto term width example" description-list--modifier="pf-m-horizontal pf-m-auto-term-widths pf-m-2-col"}}
``` -->

## With icons

### Icons on terms

```html
<dl class="pf-v6-c-description-list" aria-label="Icons on terms example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
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
            d="M4 3v26a1 1 0 1 1-2 0V3a1 1 0 1 1 2 0Zm25-1a1 1 0 0 0-1 1v26a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM18.5 8H10a1 1 0 1 0 0 2h8.5c2.481 0 4.5 2.019 4.5 4.5S20.981 19 18.5 19h-7.086l2.293-2.293a.999.999 0 1 0-1.414-1.414l-3.646 3.646c-.283.283-.439.66-.439 1.061s.156.777.439 1.061l3.646 3.646a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 21H18.5c3.584 0 6.5-2.916 6.5-6.5S22.084 8 18.5 8Z"
          />
        </svg>
      </span>
      <span
        class="pf-v6-c-description-list__text"
      >This is a long description that should wrap to multiple lines in cases where the viewport is quite narrow.</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
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
            d="M6.586 22.414 14.172 30H3.507c-.827 0-1.5-.673-1.5-1.5v-17c0-.827.673-1.5 1.5-1.5H6v11a2 2 0 0 0 .586 1.414ZM28.5 10H26v11a2 2 0 0 1-.586 1.414L17.828 30H28.5c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5ZM8.073 21.073l6.5 6.5a.25.25 0 0 0 .427-.177V10.104a.25.25 0 0 0-.073-.177l-6.5-6.5A.25.25 0 0 0 8 3.604v17.293c0 .066.026.13.073.177Zm15.5-17.646-6.5 6.5a.249.249 0 0 0-.073.177v17.293a.25.25 0 0 0 .427.177l6.5-6.5a.249.249 0 0 0 .073-.177V3.604a.25.25 0 0 0-.427-.177Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
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
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
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
            d="M20.875 16c0 1.348-.126 2.685-.358 4h-9.034c-.232-1.315-.358-2.652-.358-4s.126-2.685.358-4h9.034c.232 1.315.358 2.652.358 4Zm-12 0c0-1.347.126-2.682.338-4H1.558C1.204 13.276 1 14.613 1 16s.204 2.724.558 4h7.655a25.177 25.177 0 0 1-.338-4Zm3.057 6A23.465 23.465 0 0 0 16 30.223 23.457 23.457 0 0 0 20.068 22h-8.135Zm8.136-12A23.465 23.465 0 0 0 16 1.777 23.457 23.457 0 0 0 11.932 10h8.135Zm2.311 12a25.655 25.655 0 0 1-4.011 8.794A15.031 15.031 0 0 0 29.739 22h-7.36ZM9.621 22h-7.36a15.03 15.03 0 0 0 11.371 8.794A25.663 25.663 0 0 1 9.621 22Zm0-12a25.655 25.655 0 0 1 4.011-8.794A15.031 15.031 0 0 0 2.261 10h7.36Zm20.821 10c.354-1.276.558-2.613.558-4s-.204-2.724-.558-4h-7.655c.212 1.318.338 2.653.338 4s-.126 2.682-.338 4h7.655Zm-8.063-10h7.36a15.03 15.03 0 0 0-11.371-8.794A25.663 25.663 0 0 1 22.379 10Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
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
                d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
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
            d="m27.978 2.209-3 14A1 1 0 0 1 24 17H6v13a1 1 0 1 1-2 0V2.5C4 1.673 4.673 1 5.5 1H27a.997.997 0 0 1 .977 1.209Z"
          />
        </svg>
      </span>
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label` | `.pf-v6-c-description-list` | Provides an accessible title for the description list. **Required** |
| `tabindex="0"` | `.pf-v6-c-description-list__text.pf-m-help-text` | Inserts the `.pf-v6-c-description-list__text` into the tab order of the page so that it is focusable. **Required when the element is clickable** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-description-list` | `<dl>` | Initiates the description list component. **Required** |
| `.pf-v6-c-description-list__group` | `<div>` | Initiates a description list component group. **Required** |
| `.pf-v6-c-description-list__term` | `<dt>` | Initiates a description list component term. **Required** |
| `.pf-v6-c-description-list__description` | `<dd>` | Initiates a description list component description. **Required** |
| `.pf-v6-c-description-list__text` | `<span>`, `<div>` | Initiates a description list component text element. Use a `<span>` when a child of `.pf-v6-c-description-list__term`. **Required** |
| `.pf-v6-c-description-list__term-icon` | `<span>` | Initiates a description list component term icon element. |
| `.pf-m-compact` | `.pf-v6-c-description-list` | Modifies the description list for compact horizontal and vertical spacing. |
| `.pf-m-display-lg` | `.pf-v6-c-description-list` | Modifies the description list to have large display styling. |
| `.pf-m-display-2xl` | `.pf-v6-c-description-list` | Modifies the description list to have 2xl display styling. |
| `.pf-m-fluid` | `.pf-v6-c-description-list.pf-m-horizontal` | Modifies the description list term width to be fluid. |
| `.pf-m-help-text` | `.pf-v6-c-description-list__text` | Indicates there is more information available for the description list component term text. |
| `.pf-m-horizontal{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-description-list` | Modifies the description list component term and description pair to a horizontal layout. |
| `.pf-m-vertical{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-description-list` | Modifies the description list component term and description pair to a vertical layout. |
| `.pf-m-fill-columns` | `.pf-v6-c-description-list` | Modifies the description list groups to fill columns from top to bottom, instead of rows from left to right. |
| `.pf-m-auto-column-widths` | `.pf-v6-c-description-list` | Modifies the description list to format automatically. |
| `.pf-m-inline-grid` | `.pf-v6-c-description-list` | Modifies the description list display to inline-grid. |
| `.pf-m-{1,2,3}-col{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-description-list` | Modifies the description list number of columns. |
| `--pf-v6-c-description-list--GridTemplateColumns--min{-on-[breakpoint]}: {width}` | `.pf-v6-c-description-list` | Modifies the min value of the `grid-template-columns` declaration at optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
| `--pf-v6-c-description-list--m-horizontal__term--width{-on-[breakpoint]}: {width}` | `.pf-v6-c-description-list.pf-m-horizontal` | Modifies the description list term width at optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |

<!-- | `.pf-m-order[0-12]{-on-[breakpoint]}` | `.pf-v6-c-description-list__group` | Modifies the order of the flex layout element. |
| `.pf-m-order-first{-on-[breakpoint]}` | `.pf-v6-c-description-list__group` | Modifies the order of the flex layout element to -1. |
| `.pf-m-order-last{-on-[breakpoint]}` | `..pf-v6-c-description-list__group` | Modifies the order of the flex layout element to $limit + 1. | -->
