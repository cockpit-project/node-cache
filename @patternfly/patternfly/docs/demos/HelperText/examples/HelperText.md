---
id: 'Helper text'
section: components
---## Examples

### Helper text on a form

```html
<form class="pf-v6-c-form" novalidate>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-name">
        <span class="pf-v6-c-form__label-text">Name</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required">
        <input
          required
          type="text"
          id="helper-text-form-name"
          name="helper-text-form-name"
          aria-describedby="helper-text-form-name-helper"
        />
      </span>
      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-name-helper"
      >
        <div class="pf-v6-c-helper-text">
          <div class="pf-v6-c-helper-text__item">
            <span
              class="pf-v6-c-helper-text__item-text"
            >This is helper text on a form field.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-email">
        <span class="pf-v6-c-form__label-text">E-mail</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required pf-m-warning">
        <input
          required
          type="text"
          id="helper-text-form-email"
          name="helper-text-form-email"
          aria-describedby="helper-text-form-email-helper"
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

      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-email-helper"
      >
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
              This is helper text for a warning.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-address">
        <span class="pf-v6-c-form__label-text">Address</span>&nbsp;<span class="pf-v6-c-form__label-required" aria-hidden="true">&#42;</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-required pf-m-error">
        <input
          required
          type="text"
          id="helper-text-form-address"
          name="helper-text-form-address"
          aria-invalid="true"
          aria-describedby="helper-text-form-address-helper"
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

      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-address-helper"
      >
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
              This criteria has been met.
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
              This criteria has not been met.
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
              This criteria has been met.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-form__group">
    <div class="pf-v6-c-form__group-label"><label class="pf-v6-c-form__label" for="helper-text-form-comment">
        <span class="pf-v6-c-form__label-text">Comment</span></label>
    </div>
    <div class="pf-v6-c-form__group-control">
      <span class="pf-v6-c-form-control pf-m-success">
        <input
          value="This is a valid comment"
          type="text"
          id="helper-text-form-comment"
          name="helper-text-form-comment"
          aria-describedby="helper-text-form-comment-helper"
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

      <div
        class="pf-v6-c-form__helper-text"
        aria-live="polite"
        id="helper-text-form-comment-helper"
      >
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
              This is dynamic helper text with an icon showing success.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

```

## Documentation

When adding helper text to a form field, place it within the form helper text element.
