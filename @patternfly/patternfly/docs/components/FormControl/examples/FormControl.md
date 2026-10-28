---
id: Form control
section: components
subsection: forms
cssPrefix: pf-v6-c-form-control
---## Examples

### Input

**Note:** In webkit browsers, inputs with status icons that are autocompleted will have their icons removed by the user agent stylesheet. If the field does not need to use autocomplete, turn it off with `autocomplete="off"` to avoid the problem. Otherwise, use [helper text](/components/helper-text/html-demos)  instead to ensure that the status will remain visible if the field is autocompleted.

```html
<span class="pf-v6-c-form-control">
  <input
    type="text"
    value="Standard"
    id="input-standard"
    aria-label="Standard input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control">
  <input
    type="text"
    placeholder="Placeholder"
    id="input-placeholder"
    aria-label="Placeholder input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly">
  <input
    readonly
    type="text"
    value="Readonly"
    id="input-readonly"
    aria-label="Readonly input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly pf-m-plain">
  <input
    readonly
    type="text"
    value="Readonly plain"
    id="input-readonly-plain"
    aria-label="Readonly plain input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-disabled">
  <input
    disabled
    type="text"
    value="Disabled"
    id="input-disabled"
    aria-label="Disabled input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-success">
  <input
    type="text"
    value="Success"
    id="input-success"
    aria-label="Success state input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning">
  <input
    type="text"
    value="Warning"
    id="input-warning"
    aria-label="Warning state input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
</span>
<br />
<span class="pf-v6-c-form-control pf-m-error">
  <input
    required
    type="text"
    value="Error"
    id="input-error"
    aria-invalid="true"
    aria-label="Error state input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
</span>
<br />
<span class="pf-v6-c-form-control pf-m-expanded">
  <input
    type="text"
    value="Expanded"
    id="input-expanded"
    aria-label="Expanded input example"
  />
</span>
<br />
<span class="pf-v6-c-form-control pf-m-icon">
  <input
    type="text"
    value="Calendar"
    id="input-calendar"
    name="input-calendar"
    aria-label="Calendar input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon">
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
          d="M2.01 11.875V6.5c0-.827.673-1.5 1.5-1.5H9V3a1 1 0 1 1 2 0v2h10V3a1 1 0 1 1 2 0v2h5.5c.827 0 1.5.673 1.5 1.5v5.375H2.01Zm6.865 17.414v-6.164H2.711l6.164 6.164ZM2.01 14.125v6.75H9.5c.896 0 1.625.729 1.625 1.625V30H28.5c.827 0 1.5-.673 1.5-1.5V14.125H2.01Z"
        />
      </svg>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning pf-m-icon">
  <input
    type="text"
    value="Clock (invalid)"
    id="input-clock"
    name="input-clock"
    aria-label="Clock input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon">
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
          d="M27 17.125a1.125 1.125 0 0 1 0-2.25h3.943C30.364 7.129 23.891 1 16 1S1.636 7.129 1.057 14.875H5a1.125 1.125 0 0 1 0 2.25H1.057c.551 7.373 6.445 13.267 13.818 13.818V27a1.125 1.125 0 0 1 2.25 0v3.943c7.373-.551 13.267-6.445 13.818-13.818H27Zm-6.205 3.67a1.12 1.12 0 0 1-1.59 0l-4-4a1.125 1.125 0 0 1-.33-.795V7a1.125 1.125 0 0 1 2.25 0v8.534l3.67 3.67a1.126 1.126 0 0 1 0 1.591Z"
        />
      </svg>
    </span>
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
</span>
<br />
<span class="pf-v6-c-form-control pf-m-icon">
  <input
    type="text"
    value="Custom icon"
    id="input-custom-icon"
    name="custom-icon"
    aria-label="Custom icon input example"
  />
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon">
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
          d="M28.75 22v3.5c0 .689-.561 1.25-1.25 1.25h-7.521c.005.084.021.166.021.25 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-.084.016-.166.021-.25H4.5c-.689 0-1.25-.561-1.25-1.25V22a.75.75 0 0 1 .75-.75c1.24 0 2.25-1.009 2.25-2.25v-4c0-4.826 3.528-8.833 8.138-9.605A2.482 2.482 0 0 1 13.5 3.5C13.5 2.122 14.621 1 16 1s2.5 1.122 2.5 2.5c0 .761-.349 1.436-.888 1.895 4.61.772 8.138 4.779 8.138 9.605v4c0 1.241 1.01 2.25 2.25 2.25a.75.75 0 0 1 .75.75Z"
        />
      </svg>
    </span>
  </span>
</span>

```

### Select

```html
<span class="pf-v6-c-form-control pf-m-placeholder">
  <select
    class
    id="select-selectable-placeholder"
    name="select-selectable-placeholder"
    aria-label="Selectable placeholder select example"
  >
    <option value selected>Selectable placeholder</option>
    <option value="Mr">Mr</option>
    <option value="Miss">Miss</option>
    <option value="Mrs">Mrs</option>
    <option value="Ms">Ms</option>
    <option value="Dr">Dr</option>
    <option value="Dr" disabled>Disabled option</option>
    <option value="Other">Other</option>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
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
          d="M29.707 11.707 17.061 24.353c-.292.292-.677.438-1.061.438s-.769-.146-1.061-.438L2.293 11.707A1 1 0 0 1 3 10h26a1 1 0 0 1 .707 1.707Z"
        />
      </svg>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-placeholder">
  <select
    class
    id="select-non-selectable-placeholder"
    name="select-non-selectable-placeholder"
    aria-label="Non-selectable placeholder select example"
  >
    <option value selected disabled>Non-selectable placeholder</option>
    <option value="Mr">Mr</option>
    <option value="Miss">Miss</option>
    <option value="Mrs">Mrs</option>
    <option value="Ms">Ms</option>
    <option value="Dr">Dr</option>
    <option value="Other">Other</option>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
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
          d="M29.707 11.707 17.061 24.353c-.292.292-.677.438-1.061.438s-.769-.146-1.061-.438L2.293 11.707A1 1 0 0 1 3 10h26a1 1 0 0 1 .707 1.707Z"
        />
      </svg>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control">
  <select
    class
    id="select-group"
    name="select-group"
    aria-label="Select group example"
  >
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2" selected>Option groups (second option selected)</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4" disabled>The fourth option (disabled)</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
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
          d="M29.707 11.707 17.061 24.353c-.292.292-.677.438-1.061.438s-.769-.146-1.061-.438L2.293 11.707A1 1 0 0 1 3 10h26a1 1 0 0 1 .707 1.707Z"
        />
      </svg>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-success">
  <select
    class
    id="select-group-success"
    name="select-group-success"
    aria-label="Success state select group example"
  >
    <option value>Valid option</option>
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2">The second option</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4">The fourth option</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
    <span class="pf-v6-c-form-control__toggle-icon">
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
          d="M29.707 11.707 17.061 24.353c-.292.292-.677.438-1.061.438s-.769-.146-1.061-.438L2.293 11.707A1 1 0 0 1 3 10h26a1 1 0 0 1 .707 1.707Z"
        />
      </svg>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning">
  <select
    class
    id="select-group-warning"
    name="select-group-warning"
    aria-label="Warning state select group example"
  >
    <option value>Warning option</option>
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2">The second option</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4">The fourth option</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
    <span class="pf-v6-c-form-control__toggle-icon">
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
          d="M29.707 11.707 17.061 24.353c-.292.292-.677.438-1.061.438s-.769-.146-1.061-.438L2.293 11.707A1 1 0 0 1 3 10h26a1 1 0 0 1 .707 1.707Z"
        />
      </svg>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-error">
  <select
    class
    required
    aria-invalid="true"
    id="select-group-error"
    name="select-group-error"
    aria-label="Error state select group example"
  >
    <option value>Invalid option</option>
    <optgroup label="Group 1">
      <option value="Option 1">The first option</option>
      <option value="Option 2">The second option</option>
    </optgroup>
    <optgroup label="Group 2">
      <option value="Option 3">The third option</option>
      <option value="Option 4">The fourth option</option>
    </optgroup>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
    <span class="pf-v6-c-form-control__toggle-icon">
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
          d="M29.707 11.707 17.061 24.353c-.292.292-.677.438-1.061.438s-.769-.146-1.061-.438L2.293 11.707A1 1 0 0 1 3 10h26a1 1 0 0 1 .707 1.707Z"
        />
      </svg>
    </span>
  </span>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-disabled pf-m-placeholder">
  <select
    class
    disabled
    id="select-disabled"
    name="select-disabled"
    aria-label="Disabled select example"
  >
    <option value selected>Disabled</option>
    <option value="Mr">Mr</option>
    <option value="Miss">Miss</option>
    <option value="Mrs">Mrs</option>
    <option value="Ms">Ms</option>
    <option value="Dr">Dr</option>
    <option value="Other">Other</option>
  </select>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__toggle-icon">
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
          d="M29.707 11.707 17.061 24.353c-.292.292-.677.438-1.061.438s-.769-.146-1.061-.438L2.293 11.707A1 1 0 0 1 3 10h26a1 1 0 0 1 .707 1.707Z"
        />
      </svg>
    </span>
  </span>
</span>

```

### Textarea

```html
<span class="pf-v6-c-form-control pf-m-textarea">
  <textarea
    name="textarea-standard"
    id="textarea-standard"
    aria-label="Standard textarea example"
  >Standard
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly pf-m-textarea">
  <textarea
    readonly
    name="textarea-readonly"
    id="textarea-readonly"
    aria-label="Readonly textarea example"
  >Readonly
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-readonly pf-m-plain pf-m-textarea">
  <textarea
    readonly
    name="textarea-readonly-plain"
    id="textarea-readonly-plain"
    aria-label="Readonly plain textarea example"
  >Readonly plain
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-disabled pf-m-textarea">
  <textarea
    disabled
    name="textarea-disabled"
    id="textarea-disabled"
    aria-label="Disabled textarea example"
  >Disabled
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-success pf-m-textarea">
  <textarea
    name="textarea-success"
    id="textarea-success"
    aria-label="Success state textarea example"
  >Success
</textarea>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
</span>
<br />
<span class="pf-v6-c-form-control pf-m-warning pf-m-textarea">
  <textarea
    name="textarea-warning"
    id="textarea-warning"
    aria-label="Warning state textarea example"
  >Warning
</textarea>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
</span>
<br />
<span class="pf-v6-c-form-control pf-m-error pf-m-textarea">
  <textarea
    required
    name="textarea-error"
    id="textarea-error"
    aria-label="Error state textarea example"
    aria-invalid="true"
  >Error
</textarea>
  <span class="pf-v6-c-form-control__utilities">
    <span class="pf-v6-c-form-control__icon pf-m-status">
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
</span>
<br />
<span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-vertical">
  <textarea
    name="textarea-resize-vertical"
    id="textarea-resize-vertical"
    aria-label="Resize vertical textarea example"
  >Resizes vertically
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-horizontal">
  <textarea
    name="textarea-resize-horizontal"
    id="textarea-resize-horizontal"
    aria-label="Resize horizontal textarea example"
  >Resizes horizontally
</textarea>
</span>
<br />
<span class="pf-v6-c-form-control pf-m-textarea pf-m-resize-both">
  <textarea
    name="textarea-resize-both"
    id="textarea-resize-both"
    aria-label="Resize both textarea example"
  >Resizes in both directions
</textarea>
</span>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `id` | `.pf-v6-c-form-control > input`,`.pf-v6-c-form-control > select`, or `.pf-v6-c-form-control > textarea` | Provides an `id` value that can be used with the `for` attribute on an associated `<label>` element to provide an accessible label for the form control element.
| `aria-invalid="true"` | `.pf-v6-c-form-control > input`,`.pf-v6-c-form-control > select`, or `.pf-v6-c-form-control > textarea` | Indicates that the form control is in the error state and applies error state styling. Use with `.pf-m-error` on the `.pf-v6-c-form-control` to ensure correct styling. |
| `aria-label="descriptive text"` | `.pf-v6-c-form-control > input`,`.pf-v6-c-form-control > select`, or `.pf-v6-c-form-control > textarea` | Provides an accessible label for assistive technology. |
| `aria-expanded="true"` | `.pf-v6-c-form-control > input` | Indicates that clicking in the form control has toggled something else to be expanded. Use with `.pf-m-expanded` on the `.pf-v6-c-form-control` to ensure correct styling. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-form-control` | `<span>` |  Initiates a container for an input, text area or select. For styling of checkboxes or radios see the [checkbox component](/components/forms/checkbox) or [radio component](/components/forms/radio). **Required**  |
| `.pf-v6-c-form-control__utilities` | `<span>` |  Initiates a container for elements like icons to be associated with the form control.  |
| `.pf-v6-c-form-control__icon` | `<span>` |  Creates a container for an icon associated with a form control.  |
| `.pf-v6-c-form-control__toggle-icon` | `<span>` |  Initiates a toggle icon for a form select.  |
| `.pf-m-resize-vertical` | `.pf-v6-c-form-control` | Modifies a form control element containing a text area so it can only be resized vertically. |
| `.pf-m-resize-horizontal` | `.pf-v6-c-form-control` | Modifies a form control element containing a text area so it can only be resized horizontally. |
| `.pf-m-resize-both` | `.pf-v6-c-form-control` | Modifies a `.pf-v6-c-form-control` element containing a text area so it resizes in both directions. |
| `.pf-m-icon` | `.pf-v6-c-form-control` | Modifies a form control to allow for an icon. |
| `.pf-m-readonly` | `.pf-v6-c-form-control` | Modifies a form control for a readonly input, text area, or select.|
| `.pf-m-disabled` | `.pf-v6-c-form-control` | Modifies a form control for a disabled input, text area, or select.|
| `.pf-m-success` | `.pf-v6-c-form-control` | Modifies a form control for the success state. |
| `.pf-m-warning` | `.pf-v6-c-form-control` | Modifies a form control for the warning state. |
| `.pf-m-error` | `.pf-v6-c-form-control` | Modifies a form control for the error (invalid) state. |
| `.pf-m-expanded` | `.pf-v6-c-form-control` | Modifies a form control for the expanded state. This is used when clicking in the text input toggles something open/closed. |
| `.pf-m-placeholder` | `.pf-v6-c-form-control` | Modifies a form select for placeholder styles. This modifier is set programatically based on the chosen option. |
| `.pf-m-plain` | `.pf-v6-c-form-control` | Modifies a form control containing an `<input>` or `<textarea>` with a `readonly` attribute to be presented as normal text. |
| `.pf-m-status`| `.pf-v6-c-form-control__icon` | Modifies a form control icon to show status. |
