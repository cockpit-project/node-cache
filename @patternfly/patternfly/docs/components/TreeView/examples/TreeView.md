---
id: Tree view
section: components
cssPrefix: pf-v6-c-tree-view
---## Examples

### Single selectable

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View single selectable example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <div class="pf-v6-c-tree-view__node pf-m-disabled" tabindex="0">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle pf-m-disabled">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span
                  class="pf-v6-c-tree-view__node-text"
                >Application 2 (disabled item and toggle)</span>
              </span>
            </div>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <div class="pf-v6-c-tree-view__node" tabindex="0">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </div>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </button>
      </div>
    </li>
  </ul>
</div>

```

### Multiselectable

A tree view can be setup to allow multiple nodes to be selected. When a tree view is intended to allow multiple selection, `aria-multiselectable="true"` must be passed to the root `ul[role="tree"]` element.

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-multiselectable="true"
    aria-label="Tree View multiselectable example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 2</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="true"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node pf-m-current">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </button>
      </div>
    </li>
  </ul>
</div>

```

### With search

A search input can be used to filter tree view items. It is recommended that a tree view with more than 7 nodes includes a search input.

```html
<div class="pf-v6-c-tree-view">
  <div class="pf-v6-c-tree-view__search">
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
            aria-label="Search input"
          />
        </span>
      </div>
    </div>
  </div>
  <hr class="pf-v6-c-divider" />
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View  with search example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 2</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </button>
      </div>
    </li>
  </ul>
</div>

```

### With checkboxes

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View with checkboxes example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-checked="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <label
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          for="check-tree-view-checkboxes-1"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-checkboxes-1"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-checkboxes-1 text-tree-view-checkboxes-1"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <span class="pf-v6-c-tree-view__node-check">
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="check-tree-view-checkboxes-1"
                  aria-label="Select"
                  aria-labelledby="check-tree-view-checkboxes-1 text-tree-view-checkboxes-1"
                />
              </div>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-checkboxes-1"
            >Application launcher</span>
          </span>
        </label>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-checked="true"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <label
              class="pf-v6-c-tree-view__node pf-m-selectable"
              tabindex="0"
              for="check-tree-view-checkboxes-2"
            >
              <span class="pf-v6-c-tree-view__node-container">
                <button
                  class="pf-v6-c-tree-view__node-toggle"
                  id="toggle-tree-view-checkboxes-2"
                  aria-label="Toggle"
                  aria-labelledby="toggle-tree-view-checkboxes-2 text-tree-view-checkboxes-2"
                >
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </button>
                <span class="pf-v6-c-tree-view__node-check">
                  <div class="pf-v6-c-check pf-m-standalone">
                    <input
                      class="pf-v6-c-check__input"
                      type="checkbox"
                      checked
                      id="check-tree-view-checkboxes-2"
                      aria-label="Select"
                      aria-labelledby="check-tree-view-checkboxes-2 text-tree-view-checkboxes-2"
                    />
                  </div>
                </span>
                <span
                  class="pf-v6-c-tree-view__node-text"
                  id="text-tree-view-checkboxes-2"
                >Application 1</span>
              </span>
            </label>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-checked="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <label
                  class="pf-v6-c-tree-view__node"
                  tabindex="0"
                  for="check-tree-view-checkboxes-3"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-check">
                      <div class="pf-v6-c-check pf-m-standalone">
                        <input
                          class="pf-v6-c-check__input"
                          type="checkbox"
                          checked
                          id="check-tree-view-checkboxes-3"
                          aria-label="Select"
                          aria-labelledby="check-tree-view-checkboxes-3 text-tree-view-checkboxes-3"
                        />
                      </div>
                    </span>
                    <span
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-checkboxes-3"
                    >Settings</span>
                  </span>
                </label>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-checked="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <label
                  class="pf-v6-c-tree-view__node"
                  tabindex="0"
                  for="check-tree-view-checkboxes-4"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-check">
                      <div class="pf-v6-c-check pf-m-standalone">
                        <input
                          class="pf-v6-c-check__input"
                          type="checkbox"
                          checked
                          id="check-tree-view-checkboxes-4"
                          aria-label="Select"
                          aria-labelledby="check-tree-view-checkboxes-4 text-tree-view-checkboxes-4"
                        />
                      </div>
                    </span>
                    <span
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-checkboxes-4"
                    >Loader</span>
                  </span>
                </label>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-checked="true"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <label
                  class="pf-v6-c-tree-view__node pf-m-selectable"
                  tabindex="0"
                  for="check-tree-view-checkboxes-5"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <button
                      class="pf-v6-c-tree-view__node-toggle"
                      id="toggle-tree-view-checkboxes-5"
                      aria-label="Toggle"
                      aria-labelledby="toggle-tree-view-checkboxes-5 text-tree-view-checkboxes-5"
                    >
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </button>
                    <span class="pf-v6-c-tree-view__node-check">
                      <div class="pf-v6-c-check pf-m-standalone">
                        <input
                          class="pf-v6-c-check__input"
                          type="checkbox"
                          checked
                          id="check-tree-view-checkboxes-5"
                          aria-label="Select"
                          aria-labelledby="check-tree-view-checkboxes-5 text-tree-view-checkboxes-5"
                        />
                      </div>
                    </span>
                    <span
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-checkboxes-5"
                    >Loader</span>
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-checked="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <label
              class="pf-v6-c-tree-view__node pf-m-selectable"
              tabindex="0"
              for="check-tree-view-checkboxes-6"
            >
              <span class="pf-v6-c-tree-view__node-container">
                <button
                  class="pf-v6-c-tree-view__node-toggle"
                  id="toggle-tree-view-checkboxes-6"
                  aria-label="Toggle"
                  aria-labelledby="toggle-tree-view-checkboxes-6 text-tree-view-checkboxes-6"
                >
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </button>
                <span class="pf-v6-c-tree-view__node-check">
                  <div class="pf-v6-c-check pf-m-standalone">
                    <input
                      class="pf-v6-c-check__input"
                      type="checkbox"
                      id="check-tree-view-checkboxes-6"
                      aria-label="Select"
                      aria-labelledby="check-tree-view-checkboxes-6 text-tree-view-checkboxes-6"
                    />
                  </div>
                </span>
                <span
                  class="pf-v6-c-tree-view__node-text"
                  id="text-tree-view-checkboxes-6"
                >Application 2</span>
              </span>
            </label>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-checked="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <label
                  class="pf-v6-c-tree-view__node pf-m-selectable"
                  tabindex="0"
                  for="check-tree-view-checkboxes-7"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <button
                      class="pf-v6-c-tree-view__node-toggle"
                      id="toggle-tree-view-checkboxes-7"
                      aria-label="Toggle"
                      aria-labelledby="toggle-tree-view-checkboxes-7 text-tree-view-checkboxes-7"
                    >
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </button>
                    <span class="pf-v6-c-tree-view__node-check">
                      <div class="pf-v6-c-check pf-m-standalone">
                        <input
                          class="pf-v6-c-check__input"
                          type="checkbox"
                          id="check-tree-view-checkboxes-7"
                          aria-label="Select"
                          aria-labelledby="check-tree-view-checkboxes-7 text-tree-view-checkboxes-7"
                        />
                      </div>
                    </span>
                    <span
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-checkboxes-7"
                    >Settings</span>
                  </span>
                </label>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-checked="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <label
                  class="pf-v6-c-tree-view__node"
                  tabindex="0"
                  for="check-tree-view-checkboxes-8"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-check">
                      <div class="pf-v6-c-check pf-m-standalone">
                        <input
                          class="pf-v6-c-check__input"
                          type="checkbox"
                          id="check-tree-view-checkboxes-8"
                          aria-label="Select"
                          aria-labelledby="check-tree-view-checkboxes-8 text-tree-view-checkboxes-8"
                        />
                      </div>
                    </span>
                    <span
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-checkboxes-8"
                    >Settings</span>
                  </span>
                </label>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-checked="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <label
                  class="pf-v6-c-tree-view__node pf-m-selectable"
                  tabindex="0"
                  for="check-tree-view-checkboxes-9"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <button
                      class="pf-v6-c-tree-view__node-toggle"
                      id="toggle-tree-view-checkboxes-9"
                      aria-label="Toggle"
                      aria-labelledby="toggle-tree-view-checkboxes-9 text-tree-view-checkboxes-9"
                    >
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </button>
                    <span class="pf-v6-c-tree-view__node-check">
                      <div class="pf-v6-c-check pf-m-standalone">
                        <input
                          class="pf-v6-c-check__input"
                          type="checkbox"
                          id="check-tree-view-checkboxes-9"
                          aria-label="Select"
                          aria-labelledby="check-tree-view-checkboxes-9 text-tree-view-checkboxes-9"
                        />
                      </div>
                    </span>
                    <span
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-checkboxes-9"
                    >Current</span>
                  </span>
                </label>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-checked="true"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <label
                      class="pf-v6-c-tree-view__node pf-m-selectable"
                      tabindex="0"
                      for="check-tree-view-checkboxes-10"
                    >
                      <span class="pf-v6-c-tree-view__node-container">
                        <button
                          class="pf-v6-c-tree-view__node-toggle"
                          id="toggle-tree-view-checkboxes-10"
                          aria-label="Toggle"
                          aria-labelledby="toggle-tree-view-checkboxes-10 text-tree-view-checkboxes-10"
                        >
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </button>
                        <span class="pf-v6-c-tree-view__node-check">
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              checked
                              id="check-tree-view-checkboxes-10"
                              aria-label="Select"
                              aria-labelledby="check-tree-view-checkboxes-10 text-tree-view-checkboxes-10"
                            />
                          </div>
                        </span>
                        <span
                          class="pf-v6-c-tree-view__node-text"
                          id="text-tree-view-checkboxes-10"
                        >Loader app 1</span>
                      </span>
                    </label>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-checked="true"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <label
                      class="pf-v6-c-tree-view__node"
                      tabindex="0"
                      for="check-tree-view-checkboxes-11"
                    >
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-check">
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              checked
                              id="check-tree-view-checkboxes-11"
                              aria-label="Select"
                              aria-labelledby="check-tree-view-checkboxes-11 text-tree-view-checkboxes-11"
                            />
                          </div>
                        </span>
                        <span
                          class="pf-v6-c-tree-view__node-text"
                          id="text-tree-view-checkboxes-11"
                        >Loader app 2</span>
                      </span>
                    </label>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-checked="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <label
                      class="pf-v6-c-tree-view__node"
                      tabindex="0"
                      for="check-tree-view-checkboxes-12"
                    >
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-check">
                          <div class="pf-v6-c-check pf-m-standalone">
                            <input
                              class="pf-v6-c-check__input"
                              type="checkbox"
                              id="check-tree-view-checkboxes-12"
                              aria-label="Select"
                              aria-labelledby="check-tree-view-checkboxes-12 text-tree-view-checkboxes-12"
                            />
                          </div>
                        </span>
                        <span
                          class="pf-v6-c-tree-view__node-text"
                          id="text-tree-view-checkboxes-12"
                        >Loader app 3</span>
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-checked="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <label
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          for="check-tree-view-checkboxes-13"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-checkboxes-13"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-checkboxes-13 text-tree-view-checkboxes-13"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <span class="pf-v6-c-tree-view__node-check">
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="check-tree-view-checkboxes-13"
                  aria-label="Select"
                  aria-labelledby="check-tree-view-checkboxes-13 text-tree-view-checkboxes-13"
                />
              </div>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-checkboxes-13"
            >Cost management</span>
          </span>
        </label>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-checked="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <label
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          for="check-tree-view-checkboxes-14"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-checkboxes-14"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-checkboxes-14 text-tree-view-checkboxes-14"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <span class="pf-v6-c-tree-view__node-check">
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="check-tree-view-checkboxes-14"
                  aria-label="Select"
                  aria-labelledby="check-tree-view-checkboxes-14 text-tree-view-checkboxes-14"
                />
              </div>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-checkboxes-14"
            >Sources</span>
          </span>
        </label>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-checked="true"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <label
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          for="check-tree-view-checkboxes-15"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-checkboxes-15"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-checkboxes-15 text-tree-view-checkboxes-15"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <span class="pf-v6-c-tree-view__node-check">
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  checked
                  id="check-tree-view-checkboxes-15"
                  aria-label="Select"
                  aria-labelledby="check-tree-view-checkboxes-15 text-tree-view-checkboxes-15"
                />
              </div>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-checkboxes-15"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </label>
      </div>
    </li>
  </ul>
</div>

```

### With icons

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View with icons example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-icon">
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
                  d="m30.979 13.108-3 14.1A1.002 1.002 0 0 1 27 28H2a.977.977 0 0 1-.418-.098c-.038-.017-.066-.046-.101-.068a.98.98 0 0 1-.23-.189c-.013-.015-.033-.021-.046-.037-.021-.027-.023-.062-.041-.091a.951.951 0 0 1-.142-.409C1.018 27.071 1 27.038 1 27V9.5C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h10.19a1 1 0 1 1 0 2h-11a1 1 0 0 1-.979-.792L15.341 6H7.659l-.681 3.208a1 1 0 0 1-.979.792h-3v9.523l1.875-6.885a.999.999 0 0 1 .965-.737h24.16a1.001 1.001 0 0 1 .978 1.208Z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-icon">
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
                      d="m30.979 13.108-3 14.1A1.002 1.002 0 0 1 27 28H2a.977.977 0 0 1-.418-.098c-.038-.017-.066-.046-.101-.068a.98.98 0 0 1-.23-.189c-.013-.015-.033-.021-.046-.037-.021-.027-.023-.062-.041-.091a.951.951 0 0 1-.142-.409C1.018 27.071 1 27.038 1 27V9.5C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h10.19a1 1 0 1 1 0 2h-11a1 1 0 0 1-.979-.792L15.341 6H7.659l-.681 3.208a1 1 0 0 1-.979.792h-3v9.523l1.875-6.885a.999.999 0 0 1 .965-.737h24.16a1.001 1.001 0 0 1 .978 1.208Z"
                    />
                  </svg>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-icon">
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
                          d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                        />
                      </svg>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-icon">
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
                          d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                        />
                      </svg>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node pf-m-disabled">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle pf-m-disabled">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-icon">
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
                      d="m30.979 13.108-3 14.1A1.002 1.002 0 0 1 27 28H2a.977.977 0 0 1-.418-.098c-.038-.017-.066-.046-.101-.068a.98.98 0 0 1-.23-.189c-.013-.015-.033-.021-.046-.037-.021-.027-.023-.062-.041-.091a.951.951 0 0 1-.142-.409C1.018 27.071 1 27.038 1 27V9.5C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h10.19a1 1 0 1 1 0 2h-11a1 1 0 0 1-.979-.792L15.341 6H7.659l-.681 3.208a1 1 0 0 1-.979.792h-3v9.523l1.875-6.885a.999.999 0 0 1 .965-.737h24.16a1.001 1.001 0 0 1 .978 1.208Z"
                    />
                  </svg>
                </span>
                <span
                  class="pf-v6-c-tree-view__node-text"
                >Application 2 (disabled item and toggle)</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-icon">
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
                          d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                        />
                      </svg>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-icon">
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
                          d="m30.979 13.108-3 14.1A1.002 1.002 0 0 1 27 28H2a.977.977 0 0 1-.418-.098c-.038-.017-.066-.046-.101-.068a.98.98 0 0 1-.23-.189c-.013-.015-.033-.021-.046-.037-.021-.027-.023-.062-.041-.091a.951.951 0 0 1-.142-.409C1.018 27.071 1 27.038 1 27V9.5C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h10.19a1 1 0 1 1 0 2h-11a1 1 0 0 1-.979-.792L15.341 6H7.659l-.681 3.208a1 1 0 0 1-.979.792h-3v9.523l1.875-6.885a.999.999 0 0 1 .965-.737h24.16a1.001 1.001 0 0 1 .978 1.208Z"
                        />
                      </svg>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-icon">
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
                              d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                            />
                          </svg>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-icon">
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
                              d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                            />
                          </svg>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-icon">
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
                              d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                            />
                          </svg>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-icon">
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
                  d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-icon">
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
                  d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                />
              </svg>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-icon">
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
                  d="M31 9.5v17c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17C1 8.673 1.673 8 2.5 8h2.69l.681-3.208A1 1 0 0 1 6.85 4h9.301a1 1 0 0 1 .979.792L17.811 8h11.69c.827 0 1.5.673 1.5 1.5Z"
                />
              </svg>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </button>
      </div>
    </li>
  </ul>
</div>

```

### With badges

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View with badges example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
            <span class="pf-v6-c-tree-view__node-count">
              <span class="pf-v6-c-badge pf-m-read">2</span>
            </span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
                <span class="pf-v6-c-tree-view__node-count">
                  <span class="pf-v6-c-badge pf-m-read">2</span>
                </span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 2</span>
                <span class="pf-v6-c-tree-view__node-count">
                  <span class="pf-v6-c-badge pf-m-read">2</span>
                </span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                    <span class="pf-v6-c-tree-view__node-count">
                      <span class="pf-v6-c-badge pf-m-read">2</span>
                    </span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                    <span class="pf-v6-c-tree-view__node-count">
                      <span class="pf-v6-c-badge pf-m-read">2</span>
                    </span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                        <span class="pf-v6-c-tree-view__node-count">
                          <span class="pf-v6-c-badge pf-m-read">2</span>
                        </span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
            <span class="pf-v6-c-tree-view__node-count">
              <span class="pf-v6-c-badge pf-m-read">2</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
            <span class="pf-v6-c-tree-view__node-count">
              <span class="pf-v6-c-badge pf-m-read">2</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
            <span class="pf-v6-c-tree-view__node-count">
              <span class="pf-v6-c-badge pf-m-read">2</span>
            </span>
          </span>
        </button>
      </div>
    </li>
  </ul>
</div>

```

### With action item

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View with action item example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
          </span>
        </button>

        <div class="pf-v6-c-tree-view__action">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Actions"
            tabindex="-1"
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
                  d="M12.25 5c0-2.068 1.683-3.75 3.75-3.75S19.75 2.932 19.75 5 18.067 8.75 16 8.75 12.25 7.068 12.25 5ZM16 12.25c-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.683-3.75-3.75-3.75Zm0 11c-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.683-3.75-3.75-3.75Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
              </span>
            </button>

            <div class="pf-v6-c-tree-view__action">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Copy"
                tabindex="-1"
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
                      d="M25.5 6H23v-.5c0-.827-.673-1.5-1.5-1.5h-1.626C19.429 2.276 17.861 1 16 1s-3.428 1.276-3.874 3H10.5C9.673 4 9 4.673 9 5.5V6H6.5C5.673 6 5 6.673 5 7.5v22c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-22c0-.827-.673-1.5-1.5-1.5ZM11 6h2a1 1 0 0 0 1-1c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 0 0 1 1h2v2H11V6Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 2</span>
              </span>
            </button>

            <div class="pf-v6-c-tree-view__action">
              <button
                class="pf-v6-c-button pf-m-plain"
                type="button"
                aria-label="Action"
                tabindex="-1"
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
                      d="M31 16a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h28a1 1 0 0 1 1 1Zm-1 9H2a1 1 0 1 0 0 2h28a1 1 0 1 0 0-2ZM2 7h28a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </button>

        <div class="pf-v6-c-tree-view__action">
          <button
            class="pf-v6-c-button pf-m-plain"
            type="button"
            aria-label="Actions"
            tabindex="-1"
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
                  d="M12.25 5c0-2.068 1.683-3.75 3.75-3.75S19.75 2.932 19.75 5 18.067 8.75 16 8.75 12.25 7.068 12.25 5ZM16 12.25c-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.683-3.75-3.75-3.75Zm0 11c-2.067 0-3.75 1.682-3.75 3.75s1.683 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.683-3.75-3.75-3.75Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </li>
  </ul>
</div>

```

### With non-expandable top level nodes

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View with non-expandable top level nodes example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 2</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </button>
      </div>
    </li>
  </ul>
</div>

```

### With selectable, expandable nodes

```html
<div class="pf-v6-c-tree-view">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View with selectable, expandable nodes example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <div
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          id="node-tree-view-selectable-expandable-1"
          aria-label="Select"
          aria-labelledby="node-tree-view-selectable-expandable-1 text-tree-view-selectable-expandable-1"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-selectable-expandable-1"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-selectable-expandable-1 text-tree-view-selectable-expandable-1"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <button
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-selectable-expandable-1"
            >Application launcher</button>
          </span>
        </div>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <div
              class="pf-v6-c-tree-view__node pf-m-selectable"
              tabindex="0"
              id="node-tree-view-selectable-expandable-2"
              aria-label="Select"
              aria-labelledby="node-tree-view-selectable-expandable-2 text-tree-view-selectable-expandable-2"
            >
              <span class="pf-v6-c-tree-view__node-container">
                <button
                  class="pf-v6-c-tree-view__node-toggle"
                  id="toggle-tree-view-selectable-expandable-2"
                  aria-label="Toggle"
                  aria-labelledby="toggle-tree-view-selectable-expandable-2 text-tree-view-selectable-expandable-2"
                >
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  class="pf-v6-c-tree-view__node-text"
                  id="text-tree-view-selectable-expandable-2"
                >Application 1</button>
              </span>
            </div>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Options</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <div
                  class="pf-v6-c-tree-view__node pf-m-selectable"
                  tabindex="0"
                  id="node-tree-view-selectable-expandable-3"
                  aria-label="Select"
                  aria-labelledby="node-tree-view-selectable-expandable-3 text-tree-view-selectable-expandable-3"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <button
                      class="pf-v6-c-tree-view__node-toggle pf-m-disabled"
                      id="toggle-tree-view-selectable-expandable-3"
                      aria-label="Toggle"
                      aria-labelledby="toggle-tree-view-selectable-expandable-3 text-tree-view-selectable-expandable-3"
                      disabled
                    >
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-selectable-expandable-3"
                    >Loader (toggle disabled)</button>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <div
              class="pf-v6-c-tree-view__node pf-m-selectable"
              tabindex="0"
              id="node-tree-view-selectable-expandable-4"
              aria-label="Select"
              aria-labelledby="node-tree-view-selectable-expandable-4 text-tree-view-selectable-expandable-4"
            >
              <span class="pf-v6-c-tree-view__node-container">
                <button
                  class="pf-v6-c-tree-view__node-toggle"
                  id="toggle-tree-view-selectable-expandable-4"
                  aria-label="Toggle"
                  aria-labelledby="toggle-tree-view-selectable-expandable-4 text-tree-view-selectable-expandable-4"
                >
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  class="pf-v6-c-tree-view__node-text"
                  id="text-tree-view-selectable-expandable-4"
                >Application 2</button>
              </span>
            </div>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <div
                  class="pf-v6-c-tree-view__node pf-m-selectable"
                  tabindex="0"
                  id="node-tree-view-selectable-expandable-5"
                  aria-label="Select"
                  aria-labelledby="node-tree-view-selectable-expandable-5 text-tree-view-selectable-expandable-5"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <button
                      class="pf-v6-c-tree-view__node-toggle"
                      id="toggle-tree-view-selectable-expandable-5"
                      aria-label="Toggle"
                      aria-labelledby="toggle-tree-view-selectable-expandable-5 text-tree-view-selectable-expandable-5"
                    >
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-selectable-expandable-5"
                    >Settings</button>
                  </span>
                </div>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <div
                  class="pf-v6-c-tree-view__node pf-m-selectable pf-m-disabled"
                  tabindex="0"
                  id="node-tree-view-selectable-expandable-6"
                  aria-label="Select"
                  aria-labelledby="node-tree-view-selectable-expandable-6 text-tree-view-selectable-expandable-6"
                >
                  <span class="pf-v6-c-tree-view__node-container">
                    <button
                      class="pf-v6-c-tree-view__node-toggle"
                      id="toggle-tree-view-selectable-expandable-6"
                      aria-label="Toggle"
                      aria-labelledby="toggle-tree-view-selectable-expandable-6 text-tree-view-selectable-expandable-6"
                    >
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      class="pf-v6-c-tree-view__node-text"
                      id="text-tree-view-selectable-expandable-6"
                    >Loader (disabled item but toggle is enabled)</button>
                  </span>
                </div>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="true"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <div
                      class="pf-v6-c-tree-view__node pf-m-selectable pf-m-current pf-m-disabled"
                      tabindex="0"
                      id="node-tree-view-selectable-expandable-7"
                      aria-label="Select"
                      aria-labelledby="node-tree-view-selectable-expandable-7 text-tree-view-selectable-expandable-7"
                    >
                      <span class="pf-v6-c-tree-view__node-container">
                        <button
                          class="pf-v6-c-tree-view__node-toggle pf-m-disabled"
                          id="toggle-tree-view-selectable-expandable-7"
                          aria-label="Toggle"
                          aria-labelledby="toggle-tree-view-selectable-expandable-7 text-tree-view-selectable-expandable-7"
                          disabled
                        >
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </button>
                        <button
                          class="pf-v6-c-tree-view__node-text"
                          id="text-tree-view-selectable-expandable-7"
                        >Loader app 1 (disabled item and toggle)</button>
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <div
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          id="node-tree-view-selectable-expandable-8"
          aria-label="Select"
          aria-labelledby="node-tree-view-selectable-expandable-8 text-tree-view-selectable-expandable-8"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-selectable-expandable-8"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-selectable-expandable-8 text-tree-view-selectable-expandable-8"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <button
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-selectable-expandable-8"
            >Cost management</button>
          </span>
        </div>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <div
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          id="node-tree-view-selectable-expandable-9"
          aria-label="Select"
          aria-labelledby="node-tree-view-selectable-expandable-9 text-tree-view-selectable-expandable-9"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-selectable-expandable-9"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-selectable-expandable-9 text-tree-view-selectable-expandable-9"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <button
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-selectable-expandable-9"
            >Sources</button>
          </span>
        </div>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <div
          class="pf-v6-c-tree-view__node pf-m-selectable"
          tabindex="0"
          id="node-tree-view-selectable-expandable-10"
          aria-label="Select"
          aria-labelledby="node-tree-view-selectable-expandable-10 text-tree-view-selectable-expandable-10"
        >
          <span class="pf-v6-c-tree-view__node-container">
            <button
              class="pf-v6-c-tree-view__node-toggle"
              id="toggle-tree-view-selectable-expandable-10"
              aria-label="Toggle"
              aria-labelledby="toggle-tree-view-selectable-expandable-10 text-tree-view-selectable-expandable-10"
            >
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </button>
            <button
              class="pf-v6-c-tree-view__node-text"
              id="text-tree-view-selectable-expandable-10"
            >This is a really really really long folder name that overflows from the width of the container.</button>
          </span>
        </div>
      </div>
    </li>
  </ul>
</div>

```

### Guides

```html
<div class="pf-v6-c-tree-view pf-m-guides">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View guides example"
  >
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Application launcher</span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 1</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="true"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-current">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Current</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-text">Application 2</span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Settings</span>
                  </span>
                </button>
              </div>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-text">Loader</span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  aria-expanded="false"
                  tabindex="0"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-toggle">
                          <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                                d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                              />
                            </svg>
                          </span>
                        </span>
                        <span class="pf-v6-c-tree-view__node-text">Loader app 1</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 2</span>
                      </span>
                    </button>
                  </div>
                </li>
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-text">Loader app 3</span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Cost management</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-text">Sources</span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      aria-expanded="false"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span
              class="pf-v6-c-tree-view__node-text"
            >This is a really really really long folder name that overflows from the width of the container.</span>
          </span>
        </button>
      </div>
    </li>
  </ul>
</div>

```

### Compact

```html
<div class="pf-v6-c-tree-view pf-m-compact">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View compact example"
  >
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-content">
              <span class="pf-v6-c-tree-view__node-title">apiVersion</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-content">
              <span class="pf-v6-c-tree-view__node-title">kind</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node pf-m-disabled">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-content">
              <span
                class="pf-v6-c-tree-view__node-title"
              >metadata (disabled item)</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >Standard object metadata</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-content">
              <span class="pf-v6-c-tree-view__node-title">spec</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >Specification of the desired behavior of deployment.</span>
            </span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">minReadySeconds</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">paused</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Indicates that the deployment is paused</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span
                    class="pf-v6-c-tree-view__node-title"
                  >progressDeadlineSeconds</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">replicas</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span
                    class="pf-v6-c-tree-view__node-title"
                  >revisionHistoryLimit</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">Selector</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment</span>
                </span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-disabled">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle pf-m-disabled">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-content">
                      <span
                        class="pf-v6-c-tree-view__node-title"
                      >matchExpressions (disabled item and toggle)</span>
                      <span
                        class="pf-v6-c-tree-view__node-text"
                      >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>
                    </span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-content">
                          <span
                            class="pf-v6-c-tree-view__node-title"
                          >matchLabels</span>
                          <span
                            class="pf-v6-c-tree-view__node-text"
                          >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>
                        </span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-content">
                      <span class="pf-v6-c-tree-view__node-title">matchLabels</span>
                      <span
                        class="pf-v6-c-tree-view__node-text"
                      >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.</span>
                    </span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">matchLabels</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</div>

```

### Compact, no background

```html
<div class="pf-v6-c-tree-view pf-m-compact pf-m-no-background">
  <ul
    class="pf-v6-c-tree-view__list"
    role="tree"
    aria-label="Tree View compact no background example"
  >
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-content">
              <span class="pf-v6-c-tree-view__node-title">apiVersion</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-content">
              <span class="pf-v6-c-tree-view__node-title">kind</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item"
      role="treeitem"
      aria-selected="false"
      tabindex="-1"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node pf-m-disabled">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-content">
              <span
                class="pf-v6-c-tree-view__node-title"
              >metadata (disabled item)</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >Standard object metadata</span>
            </span>
          </span>
        </button>
      </div>
    </li>
    <li
      class="pf-v6-c-tree-view__list-item pf-m-expanded"
      role="treeitem"
      aria-selected="false"
      aria-expanded="true"
      tabindex="0"
    >
      <div class="pf-v6-c-tree-view__content">
        <button class="pf-v6-c-tree-view__node">
          <span class="pf-v6-c-tree-view__node-container">
            <span class="pf-v6-c-tree-view__node-toggle">
              <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                    d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                  />
                </svg>
              </span>
            </span>
            <span class="pf-v6-c-tree-view__node-content">
              <span class="pf-v6-c-tree-view__node-title">spec</span>
              <span
                class="pf-v6-c-tree-view__node-text"
              >Specification of the desired behavior of deployment.</span>
            </span>
          </span>
        </button>
      </div>
      <ul class="pf-v6-c-tree-view__list" role="group">
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">minReadySeconds</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">paused</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Indicates that the deployment is paused</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span
                    class="pf-v6-c-tree-view__node-title"
                  >progressDeadlineSeconds</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">replicas</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span
                    class="pf-v6-c-tree-view__node-title"
                  >revisionHistoryLimit</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item pf-m-expanded"
          role="treeitem"
          aria-selected="false"
          aria-expanded="true"
          tabindex="0"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-toggle">
                  <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                        d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                      />
                    </svg>
                  </span>
                </span>
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">Selector</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment</span>
                </span>
              </span>
            </button>
          </div>
          <ul class="pf-v6-c-tree-view__list" role="group">
            <li
              class="pf-v6-c-tree-view__list-item pf-m-expanded"
              role="treeitem"
              aria-selected="false"
              aria-expanded="true"
              tabindex="0"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node pf-m-disabled">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-toggle pf-m-disabled">
                      <span class="pf-v6-c-tree-view__node-toggle-icon">
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
                            d="M14.35 8.94 6.71 1.29l-.02-.02c-.4-.38-1.03-.37-1.41.02-.38.4-.37 1.03.02 1.41l7.29 7.29-7.29 7.29a1.003 1.003 0 0 0 1.42 1.42l7.65-7.65c.59-.59.59-1.54 0-2.12Z"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="pf-v6-c-tree-view__node-content">
                      <span
                        class="pf-v6-c-tree-view__node-title"
                      >matchExpressions (disabled item and toggle)</span>
                      <span
                        class="pf-v6-c-tree-view__node-text"
                      >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>
                    </span>
                  </span>
                </button>
              </div>
              <ul class="pf-v6-c-tree-view__list" role="group">
                <li
                  class="pf-v6-c-tree-view__list-item"
                  role="treeitem"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <div class="pf-v6-c-tree-view__content">
                    <button class="pf-v6-c-tree-view__node">
                      <span class="pf-v6-c-tree-view__node-container">
                        <span class="pf-v6-c-tree-view__node-content">
                          <span
                            class="pf-v6-c-tree-view__node-title"
                          >matchLabels</span>
                          <span
                            class="pf-v6-c-tree-view__node-text"
                          >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>
                        </span>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
            <li
              class="pf-v6-c-tree-view__list-item"
              role="treeitem"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="pf-v6-c-tree-view__content">
                <button class="pf-v6-c-tree-view__node">
                  <span class="pf-v6-c-tree-view__node-container">
                    <span class="pf-v6-c-tree-view__node-content">
                      <span class="pf-v6-c-tree-view__node-title">matchLabels</span>
                      <span
                        class="pf-v6-c-tree-view__node-text"
                      >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.</span>
                    </span>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li
          class="pf-v6-c-tree-view__list-item"
          role="treeitem"
          aria-selected="false"
          tabindex="-1"
        >
          <div class="pf-v6-c-tree-view__content">
            <button class="pf-v6-c-tree-view__node">
              <span class="pf-v6-c-tree-view__node-container">
                <span class="pf-v6-c-tree-view__node-content">
                  <span class="pf-v6-c-tree-view__node-title">matchLabels</span>
                  <span
                    class="pf-v6-c-tree-view__node-text"
                  >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.</span>
                </span>
              </span>
            </button>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</div>

```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-tree-view` | `<div>` | Initiates the tree view container. **Required** |
| `.pf-v6-c-tree-view__list` | `<ul>` | Initiates a tree view list. **Required** |
| `.pf-v6-c-tree-view__list-item` | `<li>` | Initiates a tree view list item. **Required** |
| `.pf-v6-c-tree-view__content` | `<div>` | Initiates a tree view node. **Required** |
| `.pf-v6-c-tree-view__node` | `<button>`, `<label>` | Initiates a tree view node. **Required** |
| `.pf-v6-c-tree-view__node-container` | `<span>` | Initiates a tree view node container. **Required for compact variant** |
| `.pf-v6-c-tree-view__node-content` | `<span>` | Initiates a tree view node content container used to stack elements. |
| `.pf-v6-c-tree-view__node-count` | `<span>` | Initiates a tree view node count. |
| `.pf-v6-c-tree-view__node-toggle` | `<span>`, `<button>` | Initiates a tree view toggle. |
| `.pf-v6-c-tree-view__node-toggle-icon` | `<span>` | Initiates a tree view toggle icon. |
| `.pf-v6-c-tree-view__node-title` | `<span>` | Initiates a tree view node title. |
| `.pf-v6-c-tree-view__node-text` | `<span>`, `<button>` | Initiates tree view text. **Note:** Use a `<button>` when the node is expandable and selectable. |
| `.pf-v6-c-tree-view__node-icon` | `<span>` | Initiates a tree view icon. |
| `.pf-v6-c-tree-view__node-check` | `<span>` | Initiates a tree view check. |
| `.pf-v6-c-tree-view__action` | `<div>` | Initiates a tree view action wrapper. |
| `.pf-v6-c-tree-view__search` | `<div>` | Initiates a tree view search wrapper. |
| `.pf-m-guides` | `.pf-v6-c-tree-view` | Modifies the tree view to the guides presentation. |
| `.pf-m-compact` | `.pf-v6-c-tree-view` | Modifies the tree view to the compact presentation. |
| `.pf-m-no-background` | `.pf-v6-c-tree-view.pf-m-compact` | Modifies the tree view compact variant node containers to have a transparent background. |
| `.pf-m-current` | `.pf-v6-c-tree-view__node` | Modifies the tree view node to be current. |
| `.pf-m-selectable` | `.pf-v6-c-tree-view__node` | For use on nodes that are expandable and selectable, when the default click action on the node selects it instead of expanding it. |
| `.pf-m-disabled` | `.pf-v6-c-tree-view__node` | Modifies the tree view node to display as disabled. |
| `.pf-m-disabled` | `.pf-v6-c-tree-view__node-toggle` | Modifies the tree view node toggle to display as disabled. |
| `.pf-m-truncate` | `.pf-v6-c-tree-view`, `.pf-v6-c-tree-view__node-title`, `.pf-v6-c-tree-view__node-text` | Modifies the tree view title or text to truncate. |
