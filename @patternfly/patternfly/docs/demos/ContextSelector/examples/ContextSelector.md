---
id: 'Context selector'
section: components
subsection: menus
deprecated: true
---## Examples

### Context selector in masthead

```html isFullscreen
<div class="pf-v5-c-page" id="context-selector-in-masthead">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-context-selector-in-masthead"
    >Skip to content</a>
  </div>
  <header class="pf-v5-c-masthead" id="context-selector-in-masthead-masthead">
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
        id="context-selector-in-masthead-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div class="pf-v5-c-toolbar__item">
              <div class="pf-v5-c-context-selector pf-m-full-height">
                <span
                  id="context-selector-in-masthead-masthead-context-selector-label"
                  hidden
                >Selected project:</span>
                <button
                  class="pf-v5-c-context-selector__toggle"
                  aria-expanded="false"
                  id="context-selector-in-masthead-masthead-context-selector-toggle"
                  aria-labelledby="context-selector-in-masthead-masthead-context-selector-label context-selector-in-masthead-masthead-context-selector-toggle"
                >
                  <span
                    class="pf-v5-c-context-selector__toggle-text"
                  >Context selector</span>
                  <span class="pf-v5-c-context-selector__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>
                <div class="pf-v5-c-context-selector__menu" hidden>
                  <div class="pf-v5-c-context-selector__menu-search">
                    <div class="pf-v5-c-text-input-group">
                      <div class="pf-v5-c-text-input-group__main pf-m-icon">
                        <span class="pf-v5-c-text-input-group__text">
                          <span class="pf-v5-c-text-input-group__icon">
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
                  <ul class="pf-v5-c-context-selector__menu-list" role="list">
                    <li>
                      <a
                        class="pf-v5-c-context-selector__menu-list-item"
                        href="#"
                      >Link</a>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >Action</button>
                    </li>
                    <li>
                      <a
                        class="pf-v5-c-context-selector__menu-list-item pf-m-disabled"
                        href="#"
                        aria-disabled="true"
                        tabindex="-1"
                      >Disabled link</a>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                        disabled
                      >Disabled action</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >My project</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >OpenShift cluster</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >Production Ansible</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >AWS</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >Azure</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >My project</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >OpenShift cluster</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >Production Ansible</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >AWS</button>
                    </li>
                    <li>
                      <button
                        class="pf-v5-c-context-selector__menu-list-item"
                        type="button"
                      >Azure</button>
                    </li>
                  </ul>
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
        id="context-selector-in-masthead-primary-nav"
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
    id="main-content-context-selector-in-masthead"
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

```

### Context selector in sidebar

```html isFullscreen
<div class="pf-v5-c-page" id="context-selector-in-sidebar-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-context-selector-in-sidebar-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="context-selector-in-sidebar-example-masthead"
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
        id="context-selector-in-sidebar-example-masthead-toolbar"
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
                    id="context-selector-in-sidebar-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="context-selector-in-sidebar-example-masthead-application-launcher-button"
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
                      id="context-selector-in-sidebar-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="context-selector-in-sidebar-example-masthead-settings-button"
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
                      id="context-selector-in-sidebar-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="context-selector-in-sidebar-example-masthead-help-button"
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
                  id="context-selector-in-sidebar-example-masthead-profile-button"
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
    <div class="pf-v5-c-page__sidebar-body pf-m-menu">
      <div class="pf-v5-c-context-selector pf-m-page-insets pf-m-large">
        <span
          id="context-selector-collapsed-example-label"
          hidden
        >Selected project:</span>
        <button
          class="pf-v5-c-context-selector__toggle"
          aria-expanded="false"
          id="context-selector-collapsed-example-toggle"
          aria-labelledby="context-selector-collapsed-example-label context-selector-collapsed-example-toggle"
        >
          <span class="pf-v5-c-context-selector__toggle-text">My project</span>
          <span class="pf-v5-c-context-selector__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-context-selector__menu" hidden>
          <div class="pf-v5-c-context-selector__menu-search">
            <div class="pf-v5-c-text-input-group">
              <div class="pf-v5-c-text-input-group__main pf-m-icon">
                <span class="pf-v5-c-text-input-group__text">
                  <span class="pf-v5-c-text-input-group__icon">
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
          <ul class="pf-v5-c-context-selector__menu-list" role="list">
            <li>
              <a class="pf-v5-c-context-selector__menu-list-item" href="#">Link</a>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Action</button>
            </li>
            <li>
              <a
                class="pf-v5-c-context-selector__menu-list-item pf-m-disabled"
                href="#"
                aria-disabled="true"
                tabindex="-1"
              >Disabled link</a>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
                disabled
              >Disabled action</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >My project</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >OpenShift cluster</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Production Ansible</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >AWS</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Azure</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >My project</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >OpenShift cluster</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Production Ansible</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >AWS</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Azure</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="context-selector-in-sidebar-example-primary-nav"
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
    id="main-content-context-selector-in-sidebar-example"
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

```

### Context selector in sidebar expanded

```html isFullscreen
<div class="pf-v5-c-page" id="context-selector-in-sidebar-expanded-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-context-selector-in-sidebar-expanded-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="context-selector-in-sidebar-expanded-example-masthead"
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
        id="context-selector-in-sidebar-expanded-example-masthead-toolbar"
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
                    id="context-selector-in-sidebar-expanded-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="context-selector-in-sidebar-expanded-example-masthead-application-launcher-button"
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
                      id="context-selector-in-sidebar-expanded-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="context-selector-in-sidebar-expanded-example-masthead-settings-button"
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
                      id="context-selector-in-sidebar-expanded-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="context-selector-in-sidebar-expanded-example-masthead-help-button"
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
                  id="context-selector-in-sidebar-expanded-example-masthead-profile-button"
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
    <div class="pf-v5-c-page__sidebar-body pf-m-menu">
      <div
        class="pf-v5-c-context-selector pf-m-expanded pf-m-page-insets pf-m-large"
      >
        <span
          id="context-selector-collapsed-example-label"
          hidden
        >Selected project:</span>
        <button
          class="pf-v5-c-context-selector__toggle"
          aria-expanded="true"
          id="context-selector-collapsed-example-toggle"
          aria-labelledby="context-selector-collapsed-example-label context-selector-collapsed-example-toggle"
        >
          <span class="pf-v5-c-context-selector__toggle-text">My project</span>
          <span class="pf-v5-c-context-selector__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="pf-v5-c-context-selector__menu">
          <div class="pf-v5-c-context-selector__menu-search">
            <div class="pf-v5-c-text-input-group">
              <div class="pf-v5-c-text-input-group__main pf-m-icon">
                <span class="pf-v5-c-text-input-group__text">
                  <span class="pf-v5-c-text-input-group__icon">
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
          <ul class="pf-v5-c-context-selector__menu-list" role="list">
            <li>
              <a class="pf-v5-c-context-selector__menu-list-item" href="#">Link</a>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Action</button>
            </li>
            <li>
              <a
                class="pf-v5-c-context-selector__menu-list-item pf-m-disabled"
                href="#"
                aria-disabled="true"
                tabindex="-1"
              >Disabled link</a>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
                disabled
              >Disabled action</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >My project</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >OpenShift cluster</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Production Ansible</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >AWS</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Azure</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >My project</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >OpenShift cluster</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Production Ansible</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >AWS</button>
            </li>
            <li>
              <button
                class="pf-v5-c-context-selector__menu-list-item"
                type="button"
              >Azure</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="context-selector-in-sidebar-expanded-example-primary-nav"
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
    id="main-content-context-selector-in-sidebar-expanded-example"
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

```

### Context selector in page content

```html isFullscreen
<div class="pf-v5-c-page" id="context-selector-in-page-content-example">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-context-selector-in-page-content-example"
    >Skip to content</a>
  </div>
  <header
    class="pf-v5-c-masthead"
    id="context-selector-in-page-content-example-masthead"
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
        id="context-selector-in-page-content-example-masthead-toolbar"
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
                    id="context-selector-in-page-content-example-masthead-application-launcher"
                  >
                    <button
                      class="pf-v5-c-app-launcher__toggle"
                      type="button"
                      id="context-selector-in-page-content-example-masthead-application-launcher-button"
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
                      id="context-selector-in-page-content-example-masthead-settings-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Settings"
                    >
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="context-selector-in-page-content-example-masthead-settings-button"
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
                      id="context-selector-in-page-content-example-masthead-help-button"
                      aria-expanded="false"
                      type="button"
                      aria-label="Help"
                    >
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                    </button>
                    <ul
                      class="pf-v5-c-dropdown__menu pf-m-align-right"
                      aria-labelledby="context-selector-in-page-content-example-masthead-help-button"
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
                  id="context-selector-in-page-content-example-masthead-profile-button"
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
        id="context-selector-in-page-content-example-primary-nav"
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
    id="main-content-context-selector-in-page-content-example"
  >
    <section
      class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light pf-m-no-padding"
    >
      <div class="pf-v5-c-page__main-body">
        <div
          class="pf-v5-c-toolbar pf-m-inset-none"
          id="toolbar-simple-example"
        >
          <div class="pf-v5-c-toolbar__content">
            <div class="pf-v5-c-toolbar__content-section">
              <div class="pf-v5-c-toolbar__item">
                <div
                  class="pf-v5-c-context-selector pf-m-page-insets pf-m-width-auto"
                  style="--pf-v5-c-context-selector--Width: 270px;"
                >
                  <span
                    id="context-selector-in-page-content-example-context-selector-label"
                    hidden
                  >Selected project:</span>
                  <button
                    class="pf-v5-c-context-selector__toggle pf-m-text pf-m-plain"
                    aria-expanded="false"
                    id="context-selector-in-page-content-example-context-selector-toggle"
                    aria-labelledby="context-selector-in-page-content-example-context-selector-label context-selector-in-page-content-example-context-selector-toggle"
                  >
                    <span
                      class="pf-v5-c-context-selector__toggle-text"
                    >Project: openshift-apple1</span>
                    <span class="pf-v5-c-context-selector__toggle-icon">
                      <i class="fas fa-caret-down" aria-hidden="true"></i>
                    </span>
                  </button>
                  <div class="pf-v5-c-context-selector__menu" hidden>
                    <div class="pf-v5-c-context-selector__menu-search">
                      <div class="pf-v5-c-text-input-group">
                        <div class="pf-v5-c-text-input-group__main pf-m-icon">
                          <span class="pf-v5-c-text-input-group__text">
                            <span class="pf-v5-c-text-input-group__icon">
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
                    <ul class="pf-v5-c-context-selector__menu-list" role="list">
                      <li>
                        <a
                          class="pf-v5-c-context-selector__menu-list-item"
                          href="#"
                        >Link</a>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >Action</button>
                      </li>
                      <li>
                        <a
                          class="pf-v5-c-context-selector__menu-list-item pf-m-disabled"
                          href="#"
                          aria-disabled="true"
                          tabindex="-1"
                        >Disabled link</a>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                          disabled
                        >Disabled action</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >My project</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >OpenShift cluster</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >Production Ansible</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >AWS</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >Azure</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >My project</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >OpenShift cluster</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >Production Ansible</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >AWS</button>
                      </li>
                      <li>
                        <button
                          class="pf-v5-c-context-selector__menu-list-item"
                          type="button"
                        >Azure</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item">
                <div class="pf-v5-c-select">
                  <span
                    id="context-selector-in-page-content-example-select-label"
                    hidden
                  >Choose one</span>

                  <button
                    class="pf-v5-c-select__toggle pf-m-plain"
                    type="button"
                    id="context-selector-in-page-content-example-select-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-labelledby="context-selector-in-page-content-example-select-label context-selector-in-page-content-example-select-toggle"
                  >
                    <div class="pf-v5-c-select__toggle-wrapper">
                      <span class="pf-v5-c-select__toggle-text">All applications</span>
                    </div>
                    <span class="pf-v5-c-select__toggle-arrow">
                      <i class="fas fa-caret-down" aria-hidden="true"></i>
                    </span>
                  </button>

                  <ul
                    class="pf-v5-c-select__menu"
                    role="listbox"
                    aria-labelledby="context-selector-in-page-content-example-select-label"
                    hidden
                  >
                    <li role="presentation">
                      <button
                        class="pf-v5-c-select__menu-item"
                        role="option"
                      >Running</button>
                    </li>
                    <li role="presentation">
                      <button
                        class="pf-v5-c-select__menu-item pf-m-selected"
                        role="option"
                        aria-selected="true"
                      >
                        Stopped
                        <span class="pf-v5-c-select__menu-item-icon">
                          <i class="fas fa-check" aria-hidden="true"></i>
                        </span>
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        class="pf-v5-c-select__menu-item"
                        role="option"
                      >Down</button>
                    </li>
                    <li role="presentation">
                      <button
                        class="pf-v5-c-select__menu-item"
                        role="option"
                      >Degraded</button>
                    </li>
                    <li role="presentation">
                      <button
                        class="pf-v5-c-select__menu-item"
                        role="option"
                      >Needs maintenance</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="pf-v5-c-divider" />
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

```
