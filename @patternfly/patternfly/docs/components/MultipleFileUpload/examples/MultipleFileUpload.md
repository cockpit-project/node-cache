---
id: 'Multiple file upload'
section: components
subsection: file-upload
cssPrefix: pf-v6-c-multiple-file-upload
---## Examples

### Basic

```html
<div class="pf-v6-c-multiple-file-upload">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
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
            d="M11.293 6.707a.999.999 0 0 1 0-1.414l3.646-3.646a1.501 1.501 0 0 1 2.121 0l3.646 3.646a.999.999 0 1 1-1.414 1.414l-2.293-2.293V12a1 1 0 0 1-2 0V4.414l-2.293 2.293a.999.999 0 0 1-1.414 0ZM31 17.5v11c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h27c.827 0 1.5.673 1.5 1.5ZM14.125 23c0-.621-.504-1.125-1.125-1.125H8a1.125 1.125 0 0 0 0 2.25h5c.621 0 1.125-.504 1.125-1.125Zm10.755.016a1.874 1.874 0 1 0-3.749-.001 1.874 1.874 0 0 0 3.749.001Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### Drag over

```html
<div class="pf-v6-c-multiple-file-upload pf-m-drag-over">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
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
            d="M11.293 6.707a.999.999 0 0 1 0-1.414l3.646-3.646a1.501 1.501 0 0 1 2.121 0l3.646 3.646a.999.999 0 1 1-1.414 1.414l-2.293-2.293V12a1 1 0 0 1-2 0V4.414l-2.293 2.293a.999.999 0 0 1-1.414 0ZM31 17.5v11c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h27c.827 0 1.5.673 1.5 1.5ZM14.125 23c0-.621-.504-1.125-1.125-1.125H8a1.125 1.125 0 0 0 0 2.25h5c.621 0 1.125-.504 1.125-1.125Zm10.755.016a1.874 1.874 0 1 0-3.749-.001 1.874 1.874 0 0 0 3.749.001Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### Horizontal

```html
<div class="pf-v6-c-multiple-file-upload pf-m-horizontal">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
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
            d="M11.293 6.707a.999.999 0 0 1 0-1.414l3.646-3.646a1.501 1.501 0 0 1 2.121 0l3.646 3.646a.999.999 0 1 1-1.414 1.414l-2.293-2.293V12a1 1 0 0 1-2 0V4.414l-2.293 2.293a.999.999 0 0 1-1.414 0ZM31 17.5v11c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h27c.827 0 1.5.673 1.5 1.5ZM14.125 23c0-.621-.504-1.125-1.125-1.125H8a1.125 1.125 0 0 0 0 2.25h5c.621 0 1.125-.504 1.125-1.125Zm10.755.016a1.874 1.874 0 1 0-3.749-.001 1.874 1.874 0 0 0 3.749.001Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### Horizontal drag over

```html
<div class="pf-v6-c-multiple-file-upload pf-m-horizontal pf-m-drag-over">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
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
            d="M11.293 6.707a.999.999 0 0 1 0-1.414l3.646-3.646a1.501 1.501 0 0 1 2.121 0l3.646 3.646a.999.999 0 1 1-1.414 1.414l-2.293-2.293V12a1 1 0 0 1-2 0V4.414l-2.293 2.293a.999.999 0 0 1-1.414 0ZM31 17.5v11c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h27c.827 0 1.5.673 1.5 1.5ZM14.125 23c0-.621-.504-1.125-1.125-1.125H8a1.125 1.125 0 0 0 0 2.25h5c.621 0 1.125-.504 1.125-1.125Zm10.755.016a1.874 1.874 0 1 0-3.749-.001 1.874 1.874 0 0 0 3.749.001Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
</div>

```

### File upload status

```html
<div class="pf-v6-c-multiple-file-upload">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
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
            d="M11.293 6.707a.999.999 0 0 1 0-1.414l3.646-3.646a1.501 1.501 0 0 1 2.121 0l3.646 3.646a.999.999 0 1 1-1.414 1.414l-2.293-2.293V12a1 1 0 0 1-2 0V4.414l-2.293 2.293a.999.999 0 0 1-1.414 0ZM31 17.5v11c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h27c.827 0 1.5.673 1.5 1.5ZM14.125 23c0-.621-.504-1.125-1.125-1.125H8a1.125 1.125 0 0 0 0 2.25h5c.621 0 1.125-.504 1.125-1.125Zm10.755.016a1.874 1.874 0 1 0-3.749-.001 1.874 1.874 0 0 0 3.749.001Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
  <div class="pf-v6-c-multiple-file-upload__status">
    <div class="pf-v6-c-expandable-section">
      <div class="pf-v6-c-expandable-section__toggle">
        <button
          class="pf-v6-c-button pf-m-link"
          id="-toggle"
          type="button"
          aria-expanded="false"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-expandable-section__toggle-icon">
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
          </span>
          <span class="pf-v6-c-button__text">
            <div class="pf-v6-c-multiple-file-upload__status-progress">
              <div class="pf-v6-c-multiple-file-upload__status-progress-icon">
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
                    d="M31 16c0 8.271-6.729 15-15 15-.806 0-1.614-.064-2.401-.191a1 1 0 0 1 .318-1.974c.683.11 1.384.166 2.083.166 7.168 0 13-5.832 13-13S23.168 3 16 3a1 1 0 1 1 0-2c8.271 0 15 6.729 15 15ZM5.299 23.384a1 1 0 1 0-1.645 1.138 15.011 15.011 0 0 0 3.824 3.824.997.997 0 0 0 1.39-.253 1 1 0 0 0-.254-1.391 13.037 13.037 0 0 1-3.316-3.317ZM2 15a1 1 0 0 0-1 1c0 .802.064 1.61.191 2.401a1 1 0 1 0 1.974-.318A13.199 13.199 0 0 1 2.999 16a1 1 0 0 0-1-1Z"
                  />
                </svg>
              </div>
              <div
                class="pf-v6-c-multiple-file-upload__status-progress-text"
              >0 of 3 files uploaded</div>
            </div>
          </span>
        </button>
      </div>
      <div
        class="pf-v6-c-expandable-section__content"
        hidden
        id="-content"
        role="region"
        aria-labelledby="-toggle"
      >
        <ul class="pf-v6-c-multiple-file-upload__status-list" role="list">
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-progress-png"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-progress-png-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.png</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >40 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">35%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="35"
                  aria-labelledby="multiple-file-upload-status-progress-png-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:35%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-progress-doc"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-progress-doc-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.doc</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >30 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">70%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="70"
                  aria-labelledby="multiple-file-upload-status-progress-doc-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:70%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-progress-pdf"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-progress-pdf-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.pdf</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >25 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">50%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="50"
                  aria-labelledby="multiple-file-upload-status-progress-pdf-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:50%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```

### File upload status expanded

```html
<div class="pf-v6-c-multiple-file-upload">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
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
            d="M11.293 6.707a.999.999 0 0 1 0-1.414l3.646-3.646a1.501 1.501 0 0 1 2.121 0l3.646 3.646a.999.999 0 1 1-1.414 1.414l-2.293-2.293V12a1 1 0 0 1-2 0V4.414l-2.293 2.293a.999.999 0 0 1-1.414 0ZM31 17.5v11c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h27c.827 0 1.5.673 1.5 1.5ZM14.125 23c0-.621-.504-1.125-1.125-1.125H8a1.125 1.125 0 0 0 0 2.25h5c.621 0 1.125-.504 1.125-1.125Zm10.755.016a1.874 1.874 0 1 0-3.749-.001 1.874 1.874 0 0 0 3.749.001Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
  <div class="pf-v6-c-multiple-file-upload__status">
    <div class="pf-v6-c-expandable-section pf-m-expanded">
      <div class="pf-v6-c-expandable-section__toggle">
        <button
          class="pf-v6-c-button pf-m-link"
          id="-toggle"
          type="button"
          aria-expanded="true"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-expandable-section__toggle-icon">
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
          </span>
          <span class="pf-v6-c-button__text">
            <div class="pf-v6-c-multiple-file-upload__status-progress">
              <div class="pf-v6-c-multiple-file-upload__status-progress-icon">
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
                    d="M31 16c0 8.271-6.729 15-15 15-.806 0-1.614-.064-2.401-.191a1 1 0 0 1 .318-1.974c.683.11 1.384.166 2.083.166 7.168 0 13-5.832 13-13S23.168 3 16 3a1 1 0 1 1 0-2c8.271 0 15 6.729 15 15ZM5.299 23.384a1 1 0 1 0-1.645 1.138 15.011 15.011 0 0 0 3.824 3.824.997.997 0 0 0 1.39-.253 1 1 0 0 0-.254-1.391 13.037 13.037 0 0 1-3.316-3.317ZM2 15a1 1 0 0 0-1 1c0 .802.064 1.61.191 2.401a1 1 0 1 0 1.974-.318A13.199 13.199 0 0 1 2.999 16a1 1 0 0 0-1-1Z"
                  />
                </svg>
              </div>
              <div
                class="pf-v6-c-multiple-file-upload__status-progress-text"
              >0 of 3 files uploaded</div>
            </div>
          </span>
        </button>
      </div>
      <div
        class="pf-v6-c-expandable-section__content"
        id="-content"
        role="region"
        aria-labelledby="-toggle"
      >
        <ul class="pf-v6-c-multiple-file-upload__status-list" role="list">
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-expanded-progress-png"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-expanded-progress-png-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.png</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >40 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">35%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="35"
                  aria-labelledby="multiple-file-upload-status-expanded-progress-png-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:35%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-expanded-progress-doc"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-expanded-progress-doc-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.doc</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >30 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">70%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="70"
                  aria-labelledby="multiple-file-upload-status-expanded-progress-doc-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:70%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-expanded-progress-pdf"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-expanded-progress-pdf-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.pdf</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >25 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">50%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="50"
                  aria-labelledby="multiple-file-upload-status-expanded-progress-pdf-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:50%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```

### Horizontal file upload status expanded

```html
<div class="pf-v6-c-multiple-file-upload pf-m-horizontal">
  <div class="pf-v6-c-multiple-file-upload__main">
    <div class="pf-v6-c-multiple-file-upload__title">
      <div class="pf-v6-c-multiple-file-upload__title-icon">
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
            d="M11.293 6.707a.999.999 0 0 1 0-1.414l3.646-3.646a1.501 1.501 0 0 1 2.121 0l3.646 3.646a.999.999 0 1 1-1.414 1.414l-2.293-2.293V12a1 1 0 0 1-2 0V4.414l-2.293 2.293a.999.999 0 0 1-1.414 0ZM31 17.5v11c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h27c.827 0 1.5.673 1.5 1.5ZM14.125 23c0-.621-.504-1.125-1.125-1.125H8a1.125 1.125 0 0 0 0 2.25h5c.621 0 1.125-.504 1.125-1.125Zm10.755.016a1.874 1.874 0 1 0-3.749-.001 1.874 1.874 0 0 0 3.749.001Z"
          />
        </svg>
      </div>
      <div class="pf-v6-c-multiple-file-upload__title-text">
        Drag and drop files here
        <div class="pf-v6-c-multiple-file-upload__title-text-separator">or</div>
      </div>
    </div>
    <div class="pf-v6-c-multiple-file-upload__upload">
      <button class="pf-v6-c-button pf-m-secondary" type="button">
        <span class="pf-v6-c-button__text">Upload</span>
      </button>
    </div>
    <div
      class="pf-v6-c-multiple-file-upload__info"
    >Accepted file types: JPEG, Doc, PDF, PNG</div>
  </div>
  <div class="pf-v6-c-multiple-file-upload__status">
    <div class="pf-v6-c-expandable-section pf-m-expanded">
      <div class="pf-v6-c-expandable-section__toggle">
        <button
          class="pf-v6-c-button pf-m-link"
          id="-toggle"
          type="button"
          aria-expanded="true"
        >
          <span class="pf-v6-c-button__icon pf-m-start">
            <span class="pf-v6-c-expandable-section__toggle-icon">
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
          </span>
          <span class="pf-v6-c-button__text">
            <div class="pf-v6-c-multiple-file-upload__status-progress">
              <div class="pf-v6-c-multiple-file-upload__status-progress-icon">
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
                    d="M31 16c0 8.271-6.729 15-15 15-.806 0-1.614-.064-2.401-.191a1 1 0 0 1 .318-1.974c.683.11 1.384.166 2.083.166 7.168 0 13-5.832 13-13S23.168 3 16 3a1 1 0 1 1 0-2c8.271 0 15 6.729 15 15ZM5.299 23.384a1 1 0 1 0-1.645 1.138 15.011 15.011 0 0 0 3.824 3.824.997.997 0 0 0 1.39-.253 1 1 0 0 0-.254-1.391 13.037 13.037 0 0 1-3.316-3.317ZM2 15a1 1 0 0 0-1 1c0 .802.064 1.61.191 2.401a1 1 0 1 0 1.974-.318A13.199 13.199 0 0 1 2.999 16a1 1 0 0 0-1-1Z"
                  />
                </svg>
              </div>
              <div
                class="pf-v6-c-multiple-file-upload__status-progress-text"
              >0 of 3 files uploaded</div>
            </div>
          </span>
        </button>
      </div>
      <div
        class="pf-v6-c-expandable-section__content"
        id="-content"
        role="region"
        aria-labelledby="-toggle"
      >
        <ul class="pf-v6-c-multiple-file-upload__status-list" role="list">
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-horizontal-expanded-progress-png"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-horizontal-expanded-progress-png-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.png</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >40 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">35%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="35"
                  aria-labelledby="multiple-file-upload-status-horizontal-expanded-progress-png-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:35%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-horizontal-expanded-progress-doc"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-horizontal-expanded-progress-doc-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.doc</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >30 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">70%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="70"
                  aria-labelledby="multiple-file-upload-status-horizontal-expanded-progress-doc-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:70%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
          <li class="pf-v6-c-multiple-file-upload__status-item">
            <div class="pf-v6-c-multiple-file-upload__status-item-icon">
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
                  d="M4.275 8.875a.738.738 0 0 1 .195-.405l7-7a.738.738 0 0 1 .405-.195v7.6h-7.6ZM26.5 1.25H14.125V9.5c0 .896-.729 1.625-1.625 1.625H4.25V29.5c0 .689.561 1.25 1.25 1.25h21c.689 0 1.25-.561 1.25-1.25v-27c0-.689-.561-1.25-1.25-1.25Z"
                />
              </svg>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-main">
              <div
                class="pf-v6-c-progress"
                id="multiple-file-upload-status-horizontal-expanded-progress-pdf"
              >
                <div
                  class="pf-v6-c-progress__description"
                  id="multiple-file-upload-status-horizontal-expanded-progress-pdf-description"
                >
                  <span
                    class="pf-v6-c-multiple-file-upload__status-item-progress"
                  >
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-text"
                    >filename.pdf</span>
                    <span
                      class="pf-v6-c-multiple-file-upload__status-item-progress-size"
                    >25 mb</span>
                  </span>
                </div>
                <div class="pf-v6-c-progress__status" aria-hidden="true">
                  <span class="pf-v6-c-progress__measure">50%</span>
                </div>
                <div
                  class="pf-v6-c-progress__bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="50"
                  aria-labelledby="multiple-file-upload-status-horizontal-expanded-progress-pdf-description"
                >
                  <div class="pf-v6-c-progress__indicator" style="width:50%;"></div>
                </div>
              </div>
            </div>
            <div class="pf-v6-c-multiple-file-upload__status-item-close">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Remove from list"
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-multiple-file-upload` | `<div>` | Initiates the multiple file upload component. **Required** |
| `.pf-v6-c-multiple-file-upload__main` | `<div>` | Defines the main section. |
| `.pf-v6-c-multiple-file-upload__title` | `<div>` | Defines the title. |
| `.pf-v6-c-multiple-file-upload__title-icon` | `<div>` | Defines the title icon. |
| `.pf-v6-c-multiple-file-upload__title-text` | `<div>` | Defines the title text. |
| `.pf-v6-c-multiple-file-upload__title-text-separator` | `<div>` | Defines the title text separator. |
| `.pf-v6-c-multiple-file-upload__upload` | `<div>` | Defines the upload button. |
| `.pf-v6-c-multiple-file-upload__info` | `<div>` | Defines the info section. |
| `.pf-v6-c-multiple-file-upload__status` | `<div>` | Defines the status section. |
| `.pf-v6-c-multiple-file-upload__status-progress` | `<div>` | Defines the status toggle progress. |
| `.pf-v6-c-multiple-file-upload__status-progress-icon` | `<div>` | Defines the status toggle progress icon. |
| `.pf-v6-c-multiple-file-upload__status-progress-text` | `<div>` | Defines the status toggle progress text. |
| `.pf-v6-c-multiple-file-upload__status-list` | `<div>` | Defines the status item list. |
| `.pf-v6-c-multiple-file-upload__status-item` | `<div>` | Defines a status item. |
| `.pf-v6-c-multiple-file-upload__status-item-icon` | `<div>` | Defines the status item icon. |
| `.pf-v6-c-multiple-file-upload__status-item-main` | `<div>` | Defines the status item main progress section. |
| `.pf-v6-c-multiple-file-upload__status-item-close` | `<div>` | Defines the status item close button. |
| `.pf-v6-c-multiple-file-upload__status-item-progress` | `<div>` | Defines the status item progress description. |
| `.pf-v6-c-multiple-file-upload__status-item-progress-text` | `<div>` | Defines the status item progress description text. |
| `.pf-v6-c-multiple-file-upload__status-item-progress-size` | `<div>` | Defines the status item progress description size. |
