---
id: Wizard
section: components
wrapperTag: div
---## Demos

### Basic

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-basic-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-basic-example"
    >Skip to content</a>
  </div>
  <header class="pf-v5-c-masthead" id="wizard-basic-example-masthead">
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-basic-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-basic-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-basic-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-basic-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-basic-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-basic-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-basic-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-basic-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-basic-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-basic-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-l-gallery pf-m-gutter">
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<div class="pf-v5-c-backdrop">
  <div class="pf-v5-l-bullseye">
    <div
      class="pf-v5-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
      <div class="pf-v5-c-wizard">
        <div class="pf-v5-c-wizard__header">
          <div class="pf-v5-c-wizard__close">
            <button
              class="pf-v5-c-button pf-m-plain"
              type="button"
              aria-label="Close"
            >
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pf-v5-c-wizard__title">
            <h1 class="pf-v5-c-wizard__title-text">Wizard title</h1>
          </div>
          <div
            class="pf-v5-c-wizard__description"
          >Here is where the description goes</div>
        </div>
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle"
          aria-expanded="false"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-disabled"
                    aria-disabled="true"
                    tabindex="-1"
                  >Review</button>
                </li>
              </ol>
            </nav>
            <main class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-wizard__main-body">
                <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="-wizard-form-field1"
                      >
                        <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-wizard-form-field1"
                          name="-wizard-form-field1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="-wizard-form-field2"
                      >
                        <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-wizard-form-field2"
                          name="-wizard-form-field2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="-wizard-form-field3"
                      >
                        <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-wizard-form-field3"
                          name="-wizard-form-field3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="-wizard-form-field4"
                      >
                        <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-wizard-form-field4"
                          name="-wizard-form-field4"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="-wizard-form-field5"
                      >
                        <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-wizard-form-field5"
                          name="-wizard-form-field5"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="-wizard-form-field6"
                      >
                        <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-wizard-form-field6"
                          name="-wizard-form-field6"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="-wizard-form-field7"
                      >
                        <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-wizard-form-field7"
                          name="-wizard-form-field7"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
          <footer class="pf-v5-c-wizard__footer">
            <button class="pf-v5-c-button pf-m-secondary" type="button">Back</button>
            <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
            <div class="pf-v5-c-wizard__footer-cancel">
              <button class="pf-v5-c-button pf-m-link" type="button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Nav expanded (mobile)

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-nav-expanded-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-nav-expanded-example"
    >Skip to content</a>
  </div>
  <header class="pf-v5-c-masthead" id="wizard-nav-expanded-example-masthead">
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-nav-expanded-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-nav-expanded-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-nav-expanded-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-nav-expanded-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-nav-expanded-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-nav-expanded-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-nav-expanded-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-nav-expanded-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-nav-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-nav-expanded-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-l-gallery pf-m-gutter">
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<div class="pf-v5-c-backdrop">
  <div class="pf-v5-l-bullseye">
    <div
      class="pf-v5-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Wizard with expanded mobile nav"
    >
      <div class="pf-v5-c-wizard">
        <div class="pf-v5-c-wizard__header">
          <div class="pf-v5-c-wizard__close">
            <button
              class="pf-v5-c-button pf-m-plain"
              type="button"
              aria-label="Close"
            >
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pf-v5-c-wizard__title">
            <h1 class="pf-v5-c-wizard__title-text">Wizard title</h1>
          </div>
          <div
            class="pf-v5-c-wizard__description"
          >Here is where the description goes</div>
        </div>
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle pf-m-expanded"
          aria-expanded="true"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav pf-m-expanded" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-disabled"
                    aria-disabled="true"
                    tabindex="-1"
                  >Review</button>
                </li>
              </ol>
            </nav>
            <main class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-wizard__main-body">
                <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field1">
                        <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field1"
                          name="-form-field1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field2">
                        <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field2"
                          name="-form-field2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field3">
                        <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field3"
                          name="-form-field3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field4">
                        <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field4"
                          name="-form-field4"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field5">
                        <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field5"
                          name="-form-field5"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field6">
                        <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field6"
                          name="-form-field6"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field7">
                        <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field7"
                          name="-form-field7"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
          <footer class="pf-v5-c-wizard__footer">
            <button class="pf-v5-c-button pf-m-secondary" type="button">Back</button>
            <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
            <div class="pf-v5-c-wizard__footer-cancel">
              <button class="pf-v5-c-button pf-m-link" type="button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With drawer, closed

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-with-drawer-closed-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-closed-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="wizard-with-drawer-closed-example-masthead"
  >
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-with-drawer-closed-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-with-drawer-closed-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-with-drawer-closed-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-closed-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-closed-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-closed-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-closed-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-with-drawer-closed-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-with-drawer-closed-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-with-drawer-closed-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-l-gallery pf-m-gutter">
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<div class="pf-v5-c-backdrop">
  <div class="pf-v5-l-bullseye">
    <div
      class="pf-v5-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
      <div class="pf-v5-c-wizard">
        <div class="pf-v5-c-wizard__header">
          <div class="pf-v5-c-wizard__close">
            <button
              class="pf-v5-c-button pf-m-plain"
              type="button"
              aria-label="Close"
            >
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pf-v5-c-wizard__title">
            <h1 class="pf-v5-c-wizard__title-text">Wizard title</h1>
          </div>
          <div
            class="pf-v5-c-wizard__description"
          >Here is where the description goes</div>
        </div>
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle"
          aria-expanded="false"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link" disabled>Review</button>
                </li>
              </ol>
            </nav>
            <main class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-drawer pf-m-inline">
                <div class="pf-v5-c-drawer__main">
                  <div class="pf-v5-c-drawer__content">
                    <div class="pf-v5-c-wizard__main-body">
                      <button
                        class="pf-v5-c-button pf-v5-u-hidden pf-m-link pf-m-inline pf-v5-u-float-right pf-v5-u-ml-md"
                        type="button"
                      >Open drawer</button>
                      <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field1"
                            >
                              <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field1"
                                name="-wizard-form-field1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field2"
                            >
                              <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field2"
                                name="-wizard-form-field2"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field3"
                            >
                              <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field3"
                                name="-wizard-form-field3"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field4"
                            >
                              <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field4"
                                name="-wizard-form-field4"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field5"
                            >
                              <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field5"
                                name="-wizard-form-field5"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field6"
                            >
                              <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field6"
                                name="-wizard-form-field6"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field7"
                            >
                              <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field7"
                                name="-wizard-form-field7"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class="pf-v5-c-drawer__panel pf-m-light-200 pf-m-width-33"
                    hidden
                  >
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-drawer__head">
                        <h2
                          class="pf-v5-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
                        <div class="pf-v5-c-drawer__actions">
                          <div class="pf-v5-c-drawer__close">
                            <button
                              class="pf-v5-c-button pf-m-plain"
                              type="button"
                              aria-label="Close drawer panel"
                            >
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>

                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>

                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer class="pf-v5-c-wizard__footer">
                  <button
                    class="pf-v5-c-button pf-m-secondary"
                    type="button"
                  >Back</button>
                  <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
                  <div class="pf-v5-c-wizard__footer-cancel">
                    <button
                      class="pf-v5-c-button pf-m-link"
                      type="button"
                    >Cancel</button>
                  </div>
                </footer>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With drawer, expanded

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-with-drawer-expanded-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-expanded-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="wizard-with-drawer-expanded-example-masthead"
  >
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-with-drawer-expanded-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-with-drawer-expanded-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-with-drawer-expanded-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-expanded-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-expanded-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-expanded-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-expanded-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-with-drawer-expanded-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-with-drawer-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-with-drawer-expanded-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-l-gallery pf-m-gutter">
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<div class="pf-v5-c-backdrop">
  <div class="pf-v5-l-bullseye">
    <div
      class="pf-v5-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
      <div class="pf-v5-c-wizard">
        <div class="pf-v5-c-wizard__header">
          <div class="pf-v5-c-wizard__close">
            <button
              class="pf-v5-c-button pf-m-plain"
              type="button"
              aria-label="Close"
            >
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pf-v5-c-wizard__title">
            <h1 class="pf-v5-c-wizard__title-text">Wizard title</h1>
          </div>
          <div
            class="pf-v5-c-wizard__description"
          >Here is where the description goes</div>
        </div>
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle"
          aria-expanded="false"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link" disabled>Review</button>
                </li>
              </ol>
            </nav>
            <main class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-drawer pf-m-expanded pf-m-inline">
                <div class="pf-v5-c-drawer__main">
                  <div class="pf-v5-c-drawer__content">
                    <div class="pf-v5-c-wizard__main-body">
                      <button
                        class="pf-v5-c-button pf-v5-u-hidden pf-m-link pf-m-inline pf-v5-u-float-right pf-v5-u-ml-md"
                        type="button"
                      >Open drawer</button>
                      <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field1"
                            >
                              <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field1"
                                name="-wizard-form-field1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field2"
                            >
                              <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field2"
                                name="-wizard-form-field2"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field3"
                            >
                              <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field3"
                                name="-wizard-form-field3"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field4"
                            >
                              <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field4"
                                name="-wizard-form-field4"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field5"
                            >
                              <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field5"
                                name="-wizard-form-field5"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field6"
                            >
                              <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field6"
                                name="-wizard-form-field6"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="-wizard-form-field7"
                            >
                              <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="-wizard-form-field7"
                                name="-wizard-form-field7"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class="pf-v5-c-drawer__panel pf-m-light-200 pf-m-width-33"
                  >
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-drawer__head">
                        <h2
                          class="pf-v5-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
                        <div class="pf-v5-c-drawer__actions">
                          <div class="pf-v5-c-drawer__close">
                            <button
                              class="pf-v5-c-button pf-m-plain"
                              type="button"
                              aria-label="Close drawer panel"
                            >
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>

                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>

                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer class="pf-v5-c-wizard__footer">
                  <button
                    class="pf-v5-c-button pf-m-secondary"
                    type="button"
                  >Back</button>
                  <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
                  <div class="pf-v5-c-wizard__footer-cancel">
                    <button
                      class="pf-v5-c-button pf-m-link"
                      type="button"
                    >Cancel</button>
                  </div>
                </footer>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### With drawer and informational step

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-with-drawer-info-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-info-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="wizard-with-drawer-info-example-masthead"
  >
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-with-drawer-info-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-with-drawer-info-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-with-drawer-info-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-info-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-info-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-info-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-info-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-with-drawer-info-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-with-drawer-info-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-with-drawer-info-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-l-gallery pf-m-gutter">
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
          <div class="pf-v5-c-card">
            <div class="pf-v5-c-card__body">This is a card</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<div class="pf-v5-c-backdrop">
  <div class="pf-v5-l-bullseye">
    <div
      class="pf-v5-c-modal-box pf-m-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Basic wizard"
    >
      <div class="pf-v5-c-wizard">
        <div class="pf-v5-c-wizard__header">
          <div class="pf-v5-c-wizard__close">
            <button
              class="pf-v5-c-button pf-m-plain"
              type="button"
              aria-label="Close"
            >
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pf-v5-c-wizard__title">
            <h1 class="pf-v5-c-wizard__title-text">Wizard title</h1>
          </div>
          <div
            class="pf-v5-c-wizard__description"
          >Here is where the description goes</div>
        </div>
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle"
          aria-expanded="false"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link" disabled>Review</button>
                </li>
              </ol>
            </nav>
            <main class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-drawer pf-m-inline">
                <div class="pf-v5-c-drawer__main">
                  <div class="pf-v5-c-drawer__content">
                    <div class="pf-v5-c-wizard__main-body">
                      <button
                        class="pf-v5-c-button pf-v5-u-hidden pf-m-link pf-m-inline pf-v5-u-float-right pf-v5-u-ml-md"
                        type="button"
                      >Open drawer</button>
                      <div class="pf-v5-c-content">
                        <h1>Information step content</h1>
                        <p>
                          Wizard description goes here. If you need more assistance,
                          <button
                            class="pf-v5-c-button pf-m-inline pf-m-link"
                            type="button"
                            aria-expanded="false"
                          >see more information</button>
                          in the side drawer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="pf-v5-c-drawer__panel pf-m-light-200 pf-m-width-33"
                    hidden
                  >
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-drawer__head">
                        <h2
                          class="pf-v5-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
                        <div class="pf-v5-c-drawer__actions">
                          <div class="pf-v5-c-drawer__close">
                            <button
                              class="pf-v5-c-button pf-m-plain"
                              type="button"
                              aria-label="Close drawer panel"
                            >
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>

                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>

                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer class="pf-v5-c-wizard__footer">
                  <button
                    class="pf-v5-c-button pf-m-secondary"
                    type="button"
                  >Back</button>
                  <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
                  <div class="pf-v5-c-wizard__footer-cancel">
                    <button
                      class="pf-v5-c-button pf-m-link"
                      type="button"
                    >Cancel</button>
                  </div>
                </footer>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### In page

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-in-page-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-in-page-example"
    >Skip to content</a>
  </div>
  <header class="pf-v5-c-masthead" id="wizard-in-page-example-masthead">
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-in-page-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-in-page-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-in-page-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-in-page-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-in-page-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-in-page-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-in-page-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-in-page-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-in-page-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-in-page-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-wizard">
      <div class="pf-v5-c-wizard">
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle"
          aria-expanded="false"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-disabled"
                    aria-disabled="true"
                    tabindex="-1"
                  >Review</button>
                </li>
              </ol>
            </nav>
            <div class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-wizard__main-body">
                <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="wizard-in-page-example-wizard-form-field1"
                      >
                        <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="wizard-in-page-example-wizard-form-field1"
                          name="wizard-in-page-example-wizard-form-field1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="wizard-in-page-example-wizard-form-field2"
                      >
                        <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="wizard-in-page-example-wizard-form-field2"
                          name="wizard-in-page-example-wizard-form-field2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="wizard-in-page-example-wizard-form-field3"
                      >
                        <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="wizard-in-page-example-wizard-form-field3"
                          name="wizard-in-page-example-wizard-form-field3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="wizard-in-page-example-wizard-form-field4"
                      >
                        <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="wizard-in-page-example-wizard-form-field4"
                          name="wizard-in-page-example-wizard-form-field4"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="wizard-in-page-example-wizard-form-field5"
                      >
                        <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="wizard-in-page-example-wizard-form-field5"
                          name="wizard-in-page-example-wizard-form-field5"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="wizard-in-page-example-wizard-form-field6"
                      >
                        <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="wizard-in-page-example-wizard-form-field6"
                          name="wizard-in-page-example-wizard-form-field6"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label
                        class="pf-v5-c-form__label"
                        for="wizard-in-page-example-wizard-form-field7"
                      >
                        <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="wizard-in-page-example-wizard-form-field7"
                          name="wizard-in-page-example-wizard-form-field7"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer class="pf-v5-c-wizard__footer">
            <button class="pf-v5-c-button pf-m-secondary" type="button">Back</button>
            <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
            <div class="pf-v5-c-wizard__footer-cancel">
              <button class="pf-v5-c-button pf-m-link" type="button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  </main>
</div>

```

### In page nav expanded (mobile)

```html isFullscreen
<div class="pf-v5-c-page" id="in-page-nav-expanded-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-in-page-nav-expanded-example"
    >Skip to content</a>
  </div>
  <header class="pf-v5-c-masthead" id="in-page-nav-expanded-example-masthead">
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="in-page-nav-expanded-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="in-page-nav-expanded-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="in-page-nav-expanded-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="in-page-nav-expanded-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="in-page-nav-expanded-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="in-page-nav-expanded-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="in-page-nav-expanded-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="in-page-nav-expanded-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="in-page-nav-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-in-page-nav-expanded-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-wizard">
      <div class="pf-v5-c-wizard">
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle pf-m-expanded"
          aria-expanded="true"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav pf-m-expanded" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-disabled"
                    aria-disabled="true"
                    tabindex="-1"
                  >Review</button>
                </li>
              </ol>
            </nav>
            <div class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-wizard__main-body">
                <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field1">
                        <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field1"
                          name="-form-field1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field2">
                        <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field2"
                          name="-form-field2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field3">
                        <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field3"
                          name="-form-field3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field4">
                        <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field4"
                          name="-form-field4"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field5">
                        <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field5"
                          name="-form-field5"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field6">
                        <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field6"
                          name="-form-field6"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pf-v5-c-form__group">
                    <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="-form-field7">
                        <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                          class="pf-v5-c-form__label-required"
                          aria-hidden="true"
                        >&#42;</span></label>
                    </div>
                    <div class="pf-v5-c-form__group-control">
                      <div class="pf-v5-c-form-control">
                        <input
                          required
                          type="text"
                          id="-form-field7"
                          name="-form-field7"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer class="pf-v5-c-wizard__footer">
            <button class="pf-v5-c-button pf-m-secondary" type="button">Back</button>
            <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
            <div class="pf-v5-c-wizard__footer-cancel">
              <button class="pf-v5-c-button pf-m-link" type="button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  </main>
</div>

```

### With drawer, in page

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-with-drawer-in-page-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-in-page-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="wizard-with-drawer-in-page-example-masthead"
  >
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-with-drawer-in-page-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-with-drawer-in-page-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-with-drawer-in-page-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-in-page-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-in-page-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-in-page-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-in-page-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-with-drawer-in-page-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-with-drawer-in-page-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-with-drawer-in-page-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-wizard pf-m-light-200">
      <div class="pf-v5-c-wizard">
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle"
          aria-expanded="false"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link" disabled>Review</button>
                </li>
              </ol>
            </nav>
            <main class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-drawer pf-m-inline">
                <div class="pf-v5-c-drawer__main">
                  <div class="pf-v5-c-drawer__content">
                    <div class="pf-v5-c-wizard__main-body">
                      <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-example-wizard-form-field1"
                            >
                              <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-example-wizard-form-field1"
                                name="wizard-with-drawer-in-page-example-wizard-form-field1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-example-wizard-form-field2"
                            >
                              <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-example-wizard-form-field2"
                                name="wizard-with-drawer-in-page-example-wizard-form-field2"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-example-wizard-form-field3"
                            >
                              <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-example-wizard-form-field3"
                                name="wizard-with-drawer-in-page-example-wizard-form-field3"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-example-wizard-form-field4"
                            >
                              <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-example-wizard-form-field4"
                                name="wizard-with-drawer-in-page-example-wizard-form-field4"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-example-wizard-form-field5"
                            >
                              <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-example-wizard-form-field5"
                                name="wizard-with-drawer-in-page-example-wizard-form-field5"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-example-wizard-form-field6"
                            >
                              <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-example-wizard-form-field6"
                                name="wizard-with-drawer-in-page-example-wizard-form-field6"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-example-wizard-form-field7"
                            >
                              <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-example-wizard-form-field7"
                                name="wizard-with-drawer-in-page-example-wizard-form-field7"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class="pf-v5-c-drawer__panel pf-m-light-200 pf-m-width-33"
                    hidden
                  >
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-drawer__head">
                        <h2
                          class="pf-v5-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
                        <div class="pf-v5-c-drawer__actions">
                          <div class="pf-v5-c-drawer__close">
                            <button
                              class="pf-v5-c-button pf-m-plain"
                              type="button"
                              aria-label="Close drawer panel"
                            >
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>
                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <footer class="pf-v5-c-wizard__footer">
            <button class="pf-v5-c-button pf-m-secondary" type="button">Back</button>
            <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
            <div class="pf-v5-c-wizard__footer-cancel">
              <button class="pf-v5-c-button pf-m-link" type="button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  </main>
</div>

```

### With drawer, in page, expanded

```html isFullscreen
<div class="pf-v5-c-page" id="wizard-with-drawer-in-page-expanded-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-wizard-with-drawer-in-page-expanded-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="wizard-with-drawer-in-page-expanded-example-masthead"
  >
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <picture
          class="pf-v5-c-brand pf-m-picture"
          style="--pf-v5-c-brand--Width: 180px; --pf-v5-c-brand--Width-on-md: 180px; --pf-v5-c-brand--Width-on-2xl: 220px;"
        >
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/logo__pf--reverse-on-md.svg"
          />
          <source srcset="/assets/images/logo__pf--reverse--base.svg" />
          <img
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          />
        </picture>
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="wizard-with-drawer-in-page-expanded-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <nav
                    class="pf-v5-c-app-launcher"
                    aria-label="Application launcher"
                    id="wizard-with-drawer-in-page-expanded-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="wizard-with-drawer-in-page-expanded-example-masthead-application-launcher-button"
                      aria-expanded="false"
                      aria-label="Application launcher"
                    >
                      <i class="fas fa-th" aria-hidden="true"></i>
                    </button>
                    <div
                      class="pf-v5-c-app-launcher__menu pf-m-align-right"
                      hidden
                    >
                      <div class="pf-v5-c-app-launcher__menu-search">
                        <div class="pf-v5-c-text-input-group">
                          <div class="pf-v5-c-text-input-group__main pf-m-icon">
                            <span class="pf-v5-c-text-input-group__text">
                              <span class="pf-v5-c-text-input-group__icon">
                                <i class="fas fa-fw fa-search"></i>
                              </span>
                              <input
                                class="pf-v5-c-text-input-group__text-input"
                                type="text"
                                placeholder="Filer by name"
                                value
                                aria-label="Search input"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Favorites</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider" />
                      <section class="pf-v5-c-app-launcher__group">
                        <h1 class="pf-v5-c-app-launcher__group-title">Group 1</h1>
                        <ul role="list">
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 1
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite"
                          >
                            <a class="pf-v5-c-app-launcher__menu-item">
                              Link 2
                              <span
                                class="pf-v5-c-app-launcher__menu-item-external-icon"
                              >
                                <i
                                  class="fas fa-external-link-alt"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span
                                class="pf-v5-screen-reader"
                              >(opens new window)</span>
                            </a>
                            <button
                              class="pf-v5-c-app-launcher__menu-item pf-m-action"
                              type="button"
                              aria-label="Favorite"
                            >
                              <i class="fas fa-star" aria-hidden="true"></i>
                            </button>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </nav>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-in-page-expanded-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-in-page-expanded-example-masthead-settings-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Settings</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Use the beta release</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <div class="pf-v5-c-dropdown">
                    <button
                      class="pf-v5-c-dropdown__toggle pf-m-plain"
                      id="wizard-with-drawer-in-page-expanded-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="wizard-with-drawer-in-page-expanded-example-masthead-help-button"
                      hidden
                    >
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Support options</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >Open support case</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-dropdown__menu-item"
                          type="button"
                        >API documentation</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <div
                    class="pf-v5-c-menu pf-m-drilldown pf-m-align-right"
                    hidden
                  >
                    <div class="pf-v5-c-menu__content">
                      <section class="pf-v5-c-menu__group pf-m-hidden-on-sm">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div class="pf-v5-u-font-size-sm">Username:</div>
                                <div class="pf-v5-u-font-size-md">ned_username</div>
                              </span>
                            </button>
                          </li>
                          <li
                            class="pf-v5-c-menu__list-item pf-m-disabled"
                            role="none"
                          >
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              disabled
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-description">
                                <div
                                  class="pf-v5-u-font-size-sm"
                                >Account number:</div>
                                <div class="pf-v5-u-font-size-md">123456789</div>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-divider" role="separator"></li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">My profile</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >User management</span>
                              </span>
                            </button>
                          </li>
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-text">Logout</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </section>
                      <hr class="pf-v5-c-divider pf-m-hidden-on-sm" />
                      <section class="pf-v5-c-menu__group">
                        <ul class="pf-v5-c-menu__list" role="menu">
                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-cog"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Settings</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-cog"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Settings</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Customer support</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >About</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                              aria-expanded="false"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i
                                    class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span class="pf-v5-c-menu__item-text">Help</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__content">
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item pf-m-drill-up"
                                    role="none"
                                  >
                                    <button
                                      class="pf-v5-c-menu__item"
                                      type="button"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-toggle-icon"
                                        >
                                          <i class="fas fa-angle-left"></i>
                                        </span>
                                        <span class="pf-v5-c-menu__item-icon">
                                          <i
                                            class="fas fa-fw fa-pf-v5-pficon pf-v5-pficon-help"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Help</span>
                                      </span>
                                    </button>
                                  </li>
                                  <li class="pf-v5-c-divider" role="separator"></li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Support options</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Open support case</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >API documentation</span>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="pf-v5-c-menu__list-item" role="none">
                            <button
                              class="pf-v5-c-menu__item"
                              type="button"
                              role="menuitem"
                            >
                              <span class="pf-v5-c-menu__item-main">
                                <span class="pf-v5-c-menu__item-icon">
                                  <i class="fas fa-fw fa-th" aria-hidden="true"></i>
                                </span>
                                <span
                                  class="pf-v5-c-menu__item-text"
                                >Application launcher</span>
                                <span class="pf-v5-c-menu__item-toggle-icon">
                                  <i class="fas fa-angle-right"></i>
                                </span>
                              </span>
                            </button>
                            <div class="pf-v5-c-menu" hidden>
                              <div class="pf-v5-c-menu__header">
                                <button
                                  class="pf-v5-c-menu__item"
                                  type="button"
                                  role="menuitem"
                                >
                                  <span class="pf-v5-c-menu__item-main">
                                    <span
                                      class="pf-v5-c-menu__item-toggle-icon"
                                    >
                                      <i class="fas fa-angle-left"></i>
                                    </span>
                                    <span class="pf-v5-c-menu__item-icon">
                                      <i
                                        class="fas fa-fw fa-th"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    <span
                                      class="pf-v5-c-menu__item-text"
                                    >Application launcher</span>
                                  </span>
                                </button>
                              </div>
                              <div class="pf-v5-c-menu__search">
                                <div class="pf-v5-c-menu__search-input">
                                  <div class="pf-v5-c-text-input-group">
                                    <div
                                      class="pf-v5-c-text-input-group__main pf-m-icon"
                                    >
                                      <span
                                        class="pf-v5-c-text-input-group__text"
                                      >
                                        <span
                                          class="pf-v5-c-text-input-group__icon"
                                        >
                                          <i class="fas fa-fw fa-search"></i>
                                        </span>
                                        <input
                                          class="pf-v5-c-text-input-group__text-input"
                                          type="text"
                                          placeholder="Search"
                                          value
                                          aria-label="Search input"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Favorites</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                              <hr class="pf-v5-c-divider" />
                              <section class="pf-v5-c-menu__group">
                                <h1 class="pf-v5-c-menu__group-title">Group 1</h1>
                                <ul class="pf-v5-c-menu__list" role="menu">
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 1</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite"
                                      type="button"
                                      aria-label="Not starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                  <li
                                    class="pf-v5-c-menu__list-item"
                                    role="none"
                                  >
                                    <a
                                      class="pf-v5-c-menu__item"
                                      href="#"
                                      role="menuitem"
                                      target="_blank"
                                    >
                                      <span class="pf-v5-c-menu__item-main">
                                        <span
                                          class="pf-v5-c-menu__item-text"
                                        >Link 2</span>
                                        <span
                                          class="pf-v5-c-menu__item-external-icon"
                                        >
                                          <i
                                            class="fas fa-external-link-alt"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span
                                          class="pf-v5-screen-reader"
                                        >(opens new window)</span>
                                      </span>
                                    </a>
                                    <button
                                      class="pf-v5-c-menu__item-action pf-m-favorite pf-m-favorited"
                                      type="button"
                                      aria-label="Starred"
                                    >
                                      <span
                                        class="pf-v5-c-menu__item-action-icon"
                                      >
                                        <i
                                          class="fas fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </section>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <div
                class="pf-v5-c-dropdown pf-m-full-height"
                style="--pf-v5-c-dropdown--MaxWidth: 20ch;"
              >
                <button
                  class="pf-v5-c-dropdown__toggle"
                  id="wizard-with-drawer-in-page-expanded-example-masthead-profile-button"
                  aria-expanded="false"
                  type="button"
                >
                  <span class="pf-v5-c-dropdown__toggle-image">
                    <img
                      class="pf-v5-c-avatar"
                      alt="Avatar image"
                      src="/assets/images/img_avatar-light.svg"
                    />
                  </span>
                  <span class="pf-v5-c-dropdown__toggle-text">Ned Username</span>
                  <span class="pf-v5-c-dropdown__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-dropdown__menu" hidden>
                  <section class="pf-v5-c-dropdown__group">
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Account number:</div>
                      <div>123456789</div>
                    </div>
                    <div class="pf-v5-c-dropdown__menu-item pf-m-text">
                      <div class="pf-v5-u-font-size-sm">Username:</div>
                      <div>mshaksho@redhat.com</div>
                    </div>
                  </section>
                  <hr class="pf-v5-c-divider" />
                  <section class="pf-v5-c-dropdown__group">
                    <ul>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >My profile</a>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-dropdown__menu-item"
                          href="#"
                        >User management</a>
                      </li>
                      <li>
                        <a class="pf-v5-c-dropdown__menu-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="wizard-with-drawer-in-page-expanded-example-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-wizard-with-drawer-in-page-expanded-example"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-wizard pf-m-light-200">
      <div class="pf-v5-c-wizard">
        <button
          aria-label="Wizard Header Toggle"
          class="pf-v5-c-wizard__toggle"
          aria-expanded="false"
        >
          <span class="pf-v5-c-wizard__toggle-list">
            <span class="pf-v5-c-wizard__toggle-list-item">
              <span class="pf-v5-c-wizard__toggle-num">2</span>
              Configuration
              <i
                class="fas fa-angle-right pf-v5-c-wizard__toggle-separator"
                aria-hidden="true"
              ></i>
            </span>
            <span class="pf-v5-c-wizard__toggle-list-item">Substep B</span>
          </span>
          <span class="pf-v5-c-wizard__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-wizard__outer-wrap">
          <div class="pf-v5-c-wizard__inner-wrap">
            <nav class="pf-v5-c-wizard__nav" aria-label="Steps">
              <ol class="pf-v5-c-wizard__nav-list" role="list">
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Information</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button
                    class="pf-v5-c-wizard__nav-link pf-m-current"
                  >Configuration</button>
                  <ol class="pf-v5-c-wizard__nav-list" role="list">
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep A</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button
                        class="pf-v5-c-wizard__nav-link pf-m-current"
                        aria-current="page"
                      >Substep B</button>
                    </li>
                    <li class="pf-v5-c-wizard__nav-item">
                      <button class="pf-v5-c-wizard__nav-link">Substep C</button>
                    </li>
                  </ol>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link">Additional</button>
                </li>
                <li class="pf-v5-c-wizard__nav-item">
                  <button class="pf-v5-c-wizard__nav-link" disabled>Review</button>
                </li>
              </ol>
            </nav>
            <main class="pf-v5-c-wizard__main" tabindex="0">
              <div class="pf-v5-c-drawer pf-m-expanded pf-m-inline">
                <div class="pf-v5-c-drawer__main">
                  <div class="pf-v5-c-drawer__content">
                    <div class="pf-v5-c-wizard__main-body">
                      <form class="pf-v5-c-form pf-m-limit-width" novalidate>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-expanded-example-wizard-form-field1"
                            >
                              <span class="pf-v5-c-form__label-text">Field 1</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-expanded-example-wizard-form-field1"
                                name="wizard-with-drawer-in-page-expanded-example-wizard-form-field1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-expanded-example-wizard-form-field2"
                            >
                              <span class="pf-v5-c-form__label-text">Field 2</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-expanded-example-wizard-form-field2"
                                name="wizard-with-drawer-in-page-expanded-example-wizard-form-field2"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-expanded-example-wizard-form-field3"
                            >
                              <span class="pf-v5-c-form__label-text">Field 3</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-expanded-example-wizard-form-field3"
                                name="wizard-with-drawer-in-page-expanded-example-wizard-form-field3"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-expanded-example-wizard-form-field4"
                            >
                              <span class="pf-v5-c-form__label-text">Field 4</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-expanded-example-wizard-form-field4"
                                name="wizard-with-drawer-in-page-expanded-example-wizard-form-field4"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-expanded-example-wizard-form-field5"
                            >
                              <span class="pf-v5-c-form__label-text">Field 5</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-expanded-example-wizard-form-field5"
                                name="wizard-with-drawer-in-page-expanded-example-wizard-form-field5"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-expanded-example-wizard-form-field6"
                            >
                              <span class="pf-v5-c-form__label-text">Field 6</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-expanded-example-wizard-form-field6"
                                name="wizard-with-drawer-in-page-expanded-example-wizard-form-field6"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="pf-v5-c-form__group">
                          <div class="pf-v5-c-form__group-label"><label
                              class="pf-v5-c-form__label"
                              for="wizard-with-drawer-in-page-expanded-example-wizard-form-field7"
                            >
                              <span class="pf-v5-c-form__label-text">Field 7</span>&nbsp;<span
                                class="pf-v5-c-form__label-required"
                                aria-hidden="true"
                              >&#42;</span></label>
                          </div>
                          <div class="pf-v5-c-form__group-control">
                            <div class="pf-v5-c-form-control">
                              <input
                                required
                                type="text"
                                id="wizard-with-drawer-in-page-expanded-example-wizard-form-field7"
                                name="wizard-with-drawer-in-page-expanded-example-wizard-form-field7"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class="pf-v5-c-drawer__panel pf-m-light-200 pf-m-width-33"
                  >
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-drawer__head">
                        <h2
                          class="pf-v5-c-title pf-m-xl"
                        >Register with Red Hat connector</h2>
                        <div class="pf-v5-c-drawer__actions">
                          <div class="pf-v5-c-drawer__close">
                            <button
                              class="pf-v5-c-button pf-m-plain"
                              type="button"
                              aria-label="Close drawer panel"
                            >
                              <i class="fas fa-times" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-drawer__body">
                      <div class="pf-v5-c-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.</p>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.</p>
                        <p>
                          Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt.
                          <a
                            href="#"
                          >Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                        </p>
                        <a href="#">
                          <span
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap"
                          >
                            <span>Learn about Red Hat connector</span>
                            <i
                              class="fas fa-external-link-alt"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <footer class="pf-v5-c-wizard__footer">
            <button class="pf-v5-c-button pf-m-secondary" type="button">Back</button>
            <button class="pf-v5-c-button pf-m-primary" type="submit">Next</button>
            <div class="pf-v5-c-wizard__footer-cancel">
              <button class="pf-v5-c-button pf-m-link" type="button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  </main>
</div>

```
