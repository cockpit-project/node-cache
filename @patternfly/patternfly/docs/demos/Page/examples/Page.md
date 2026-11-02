---
id: Page
section: components
wrapperTag: div
---import './Page.css'

## Demos

### Basic

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-basic">
  <div class="pf-v6-c-skip-to-content">
    <a class="pf-v6-c-button pf-m-primary" href="#main-content-page-demo-basic">
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-basic-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-basic-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-basic-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-basic-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-basic-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-basic-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-basic"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Multiple sidebar body elements

```html isFullscreen
<div class="pf-v6-c-page" id="multiple-sidebar-body-elements-demo">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-multiple-sidebar-body-elements-demo"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header
    class="pf-v6-c-masthead"
    id="multiple-sidebar-body-elements-demo-docked"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-multiple-sidebar-body-elements-demo-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-multiple-sidebar-body-elements-demo-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-multiple-sidebar-body-elements-demo-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="multiple-sidebar-body-elements-demo-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar pf-m-expanded">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body pf-m-page-insets">
        <div class="pf-v6-c-content">
          <p>Custom sidebar content</p>
        </div>
      </div>
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="multiple-sidebar-body-elements-demo-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="pf-v6-c-page__sidebar-body pf-m-fill pf-m-page-insets">
        <div class="pf-v6-c-content">
          <p>Custom sidebar content</p>
        </div>
      </div>
      <div class="pf-v6-c-page__sidebar-body pf-m-no-fill pf-m-page-insets">
        <div class="pf-v6-c-content">
          <p>&copy;&nbsp;Copyright</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-multiple-sidebar-body-elements-demo"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Sticky horizontal subnav

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-sticky-top-horizontal-subnav">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-sticky-top-horizontal-subnav"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header
    class="pf-v6-c-masthead"
    id="page-demo-sticky-top-horizontal-subnav-docked"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-sticky-top-horizontal-subnav-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-horizontal-subnav-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-horizontal-subnav-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-sticky-top-horizontal-subnav-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-sticky-top-horizontal-subnav-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-sticky-top-horizontal-subnav"
    >
      <section
        class="pf-v6-c-page__main-subnav pf-m-limit-width pf-m-sticky-top"
      >
        <div class="pf-v6-c-page__main-body">
          <nav
            class="pf-v6-c-nav pf-m-horizontal pf-m-subnav"
            aria-label="Local"
          >
            <ul class="pf-v6-c-nav__list" role="list">
              <li class="pf-v6-c-nav__item">
                <a
                  href="#"
                  class="pf-v6-c-nav__link pf-m-current"
                  aria-current="page"
                >
                  <span class="pf-v6-c-nav__link-text">Horizontal subnav item 1</span>
                </a>
              </li>
              <li class="pf-v6-c-nav__item">
                <a href="#" class="pf-v6-c-nav__link">
                  <span class="pf-v6-c-nav__link-text">Horizontal subnav item 2</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Sticky breadcrumb

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-sticky-top-breadcrumb">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-sticky-top-breadcrumb"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-sticky-top-breadcrumb-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-sticky-top-breadcrumb-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-breadcrumb-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-breadcrumb-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-sticky-top-breadcrumb-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-sticky-top-breadcrumb-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-sticky-top-breadcrumb"
    >
      <section
        class="pf-v6-c-page__main-breadcrumb pf-m-limit-width pf-m-sticky-top"
      >
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Sticky breadcrumb on medium

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-sticky-top-breadcrumb">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-sticky-top-breadcrumb"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-sticky-top-breadcrumb-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-sticky-top-breadcrumb-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-breadcrumb-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-breadcrumb-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-sticky-top-breadcrumb-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-sticky-top-breadcrumb-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-sticky-top-breadcrumb"
    >
      <section
        class="pf-v6-c-page__main-breadcrumb pf-m-limit-width pf-m-sticky-top-on-md-height"
      >
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Sticky section group

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-sticky-top-section-group">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-sticky-top-section-group"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header
    class="pf-v6-c-masthead"
    id="page-demo-sticky-top-section-group-docked"
  >
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-sticky-top-section-group-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-section-group-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-sticky-top-section-group-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-sticky-top-section-group-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-sticky-top-section-group-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-sticky-top-section-group"
    >
      <div class="pf-v6-c-page__main-group pf-m-sticky-top">
        <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
          <div class="pf-v6-c-page__main-body">
            <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
              <ol class="pf-v6-c-breadcrumb__list" role="list">
                <li class="pf-v6-c-breadcrumb__item">
                  <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
                </li>
                <li class="pf-v6-c-breadcrumb__item">
                  <span class="pf-v6-c-breadcrumb__item-divider">
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

                  <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
                </li>
                <li class="pf-v6-c-breadcrumb__item">
                  <span class="pf-v6-c-breadcrumb__item-divider">
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

                  <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
                </li>
                <li class="pf-v6-c-breadcrumb__item">
                  <span class="pf-v6-c-breadcrumb__item-divider">
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

                  <a
                    href="#"
                    class="pf-v6-c-breadcrumb__link pf-m-current"
                    aria-current="page"
                  >Section landing</a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <section
          class="pf-v6-c-page__main-section pf-m-limit-width"
          aria-labelledby="main-title"
        >
          <div class="pf-v6-c-page__main-body">
            <h1
              class="pf-v6-c-content--h1 pf-m-page-title"
              id="main-title"
            >Main title</h1>
            <p class="pf-v6-c-content--p">This is a full page demo.</p>
          </div>
        </section>
      </div>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Sticky section bottom

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-sticky-section-bottom">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-sticky-section-bottom"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-sticky-section-bottom-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-sticky-section-bottom-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-sticky-section-bottom-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-sticky-section-bottom-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-sticky-section-bottom-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-sticky-section-bottom-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-sticky-section-bottom"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <footer class="pf-v6-c-page__footer">
    <div class="pf-v6-c-page__main-body">custom footer</div>
  </footer>
</div>

```

### Overflow scroll

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-overflow-scroll">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-overflow-scroll"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-overflow-scroll-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-overflow-scroll-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-overflow-scroll-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-overflow-scroll-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-overflow-scroll-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-overflow-scroll-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-overflow-scroll"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-shadow-bottom pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-overflow-scroll pf-m-limit-width"
        tabindex="0"
      >
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <footer class="pf-v6-c-page__footer">
    <div class="pf-v6-c-page__main-body">custom footer</div>
  </footer>
</div>

```

### Centered section

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-centered-section">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-centered-section"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-centered-section-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-centered-section-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-centered-section-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-centered-section-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-centered-section-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-centered-section-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-centered-section"
    >
      <section
        class="pf-v6-c-page__main-section pf-m-align-center pf-m-limit-width"
        aria-labelledby="centered-page-sections-title"
      >
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-c-content">
            <h1 id="centered-page-sections-title">Centering page sections</h1>
            <p>
              When a width limited page section is wider than the value of
              <code>--pf-v6-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main section.
            </p>
            <p>All of the page sections on this page are centered.</p>
          </div>
        </div>
      </section>
      <hr class="pf-v6-c-divider" />
      <section
        class="pf-v6-c-page__main-section pf-m-align-center pf-m-limit-width"
        aria-label="Gallery cards section"
      >
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
      <hr class="pf-v6-c-divider" />
      <section
        class="pf-v6-c-page__main-section pf-m-align-center pf-v6-u-text-align-center pf-m-limit-width"
        aria-label="Centered text section"
      >
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-c-card">
            <div class="pf-v6-c-card__body">
              <p>
                The content in this section is also centered using the
                <code>.pf-v6-u-text-align-center</code> utility class.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Context selector in sidebar

```html isFullscreen
<div class="pf-v6-c-page" id="page-context-selector">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-context-selector"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-context-selector-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-context-selector-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-context-selector-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-context-selector-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-context-selector-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body pf-m-context-selector">
        <button
          class="pf-v6-c-menu-toggle pf-m-full-width"
          type="button"
          aria-expanded="false"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <svg
              class="pf-v6-svg"
              fill="currentColor"
              viewBox="0 0 640 512"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
            >
              <path
                d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-menu-toggle__text">Administrator</span>
          <span class="pf-v6-c-menu-toggle__controls">
            <span class="pf-v6-c-menu-toggle__toggle-icon">
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
                  d="m17.65 8.76-6.674 5.72a1.496 1.496 0 0 1-.976.365c-.347 0-.694-.122-.978-.366l-6.673-5.72A1 1 0 0 1 3 7h14a1 1 0 0 1 .65 1.76Z"
                />
              </svg>
            </span>
          </span>
        </button>
      </div>
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-context-selector-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-context-selector"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Context selector expanded in sidebar

```html isFullscreen
<div class="pf-v6-c-page" id="page-context-selector-expanded">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-context-selector-expanded"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-context-selector-expanded-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-context-selector-expanded-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-context-selector-expanded-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-context-selector-expanded-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-context-selector-expanded-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body pf-m-context-selector">
        <button
          class="pf-v6-c-menu-toggle pf-m-full-width pf-m-expanded"
          type="button"
          aria-expanded="true"
        >
          <span class="pf-v6-c-menu-toggle__icon">
            <svg
              class="pf-v6-svg"
              fill="currentColor"
              viewBox="0 0 640 512"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
            >
              <path
                d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
              />
            </svg>
          </span>
          <span class="pf-v6-c-menu-toggle__text">Administrator</span>
          <span class="pf-v6-c-menu-toggle__controls">
            <span class="pf-v6-c-menu-toggle__toggle-icon">
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
                  d="m17.65 8.76-6.674 5.72a1.496 1.496 0 0 1-.976.365c-.347 0-.694-.122-.978-.366l-6.673-5.72A1 1 0 0 1 3 7h14a1 1 0 0 1 .65 1.76Z"
                />
              </svg>
            </span>
          </span>
        </button>
        <div class="pf-v6-c-menu">
          <div class="pf-v6-c-menu__content">
            <ul class="pf-v6-c-menu__list" role="menu">
              <li class="pf-v6-c-menu__list-item" role="none">
                <button
                  class="pf-v6-c-menu__item"
                  type="button"
                  role="menuitem"
                >
                  <span class="pf-v6-c-menu__item-main">
                    <span class="pf-v6-c-menu__item-icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
                        />
                      </svg>
                    </span>
                    <span class="pf-v6-c-menu__item-text">Administrator</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-menu__list-item" role="none">
                <button
                  class="pf-v6-c-menu__item"
                  type="button"
                  role="menuitem"
                >
                  <span class="pf-v6-c-menu__item-main">
                    <span class="pf-v6-c-menu__item-icon">
                      <i class="fas fa-fw fa-code" aria-hidden="true"></i>
                    </span>
                    <span class="pf-v6-c-menu__item-text">Developer</span>
                  </span>
                </button>
              </li>
              <li class="pf-v6-c-menu__list-item" role="none">
                <button
                  class="pf-v6-c-menu__item"
                  type="button"
                  role="menuitem"
                >
                  <span class="pf-v6-c-menu__item-main">
                    <span class="pf-v6-c-menu__item-icon">
                      <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
                    </span>
                    <span class="pf-v6-c-menu__item-text">User</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-context-selector-expanded-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-context-selector-expanded"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Sidebar collapsed

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-sidebar-collapsed">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-sidebar-collapsed"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-sidebar-collapsed-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-sidebar-collapsed-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-sidebar-collapsed-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-sidebar-collapsed-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-sidebar-collapsed-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar pf-m-collapsed">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-sidebar-collapsed-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-sidebar-collapsed"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Sidebar expanded

```html isFullscreen
<div class="pf-v6-c-page" id="page-demo-sidebar-expanded">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-sidebar-expanded"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-sidebar-expanded-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-sidebar-expanded-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-sidebar-expanded-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-sidebar-expanded-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-sidebar-expanded-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__sidebar pf-m-expanded">
    <div class="pf-v6-c-page__sidebar-main">
      <div class="pf-v6-c-page__sidebar-body">
        <nav
          class="pf-v6-c-nav"
          id="page-demo-sidebar-expanded-primary-nav"
          aria-label="Global"
        >
          <ul class="pf-v6-c-nav__list" role="list">
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">System panel</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a
                href="#"
                class="pf-v6-c-nav__link pf-m-current"
                aria-current="page"
              >
                <span class="pf-v6-c-nav__link-text">Policy</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Authentication</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Network services</span>
              </a>
            </li>
            <li class="pf-v6-c-nav__item">
              <a href="#" class="pf-v6-c-nav__link">
                <span class="pf-v6-c-nav__link-text">Server</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-sidebar-expanded"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### No sidebar

```html isFullscreen
<div class="pf-v6-c-page pf-m-no-sidebar" id="page-demo-no-sidebar">
  <div class="pf-v6-c-skip-to-content">
    <a
      class="pf-v6-c-button pf-m-primary"
      href="#main-content-page-demo-no-sidebar"
    >
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-no-sidebar-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-no-sidebar-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-no-sidebar-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-no-sidebar-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-no-sidebar-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-no-sidebar"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### No sidebar or masthead

```html isFullscreen
<div class="pf-v6-c-page pf-m-no-sidebar" id="page-demo-no-sidebar-masthead">
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-no-sidebar-masthead"
    >
      <section class="pf-v6-c-page__main-breadcrumb pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <nav class="pf-v6-c-breadcrumb" aria-label="breadcrumb">
            <ol class="pf-v6-c-breadcrumb__list" role="list">
              <li class="pf-v6-c-breadcrumb__item">
                <a href="#" class="pf-v6-c-breadcrumb__link">Section home</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a href="#" class="pf-v6-c-breadcrumb__link">Section title</a>
              </li>
              <li class="pf-v6-c-breadcrumb__item">
                <span class="pf-v6-c-breadcrumb__item-divider">
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

                <a
                  href="#"
                  class="pf-v6-c-breadcrumb__link pf-m-current"
                  aria-current="page"
                >Section landing</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section
        class="pf-v6-c-page__main-section pf-m-limit-width"
        aria-labelledby="main-title"
      >
        <div class="pf-v6-c-page__main-body">
          <h1
            class="pf-v6-c-content--h1 pf-m-page-title"
            id="main-title"
          >Main title</h1>
          <p class="pf-v6-c-content--p">This is a full page demo.</p>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-limit-width">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-l-gallery pf-m-gutter">
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
            <div class="pf-v6-c-card">
              <div class="pf-v6-c-card__body">This is a card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

```

### Plain

```html isFullscreen
<div class="pf-v6-c-page pf-m-plain" id="page-demo-plain">
  <div class="pf-v6-c-skip-to-content">
    <a class="pf-v6-c-button pf-m-primary" href="#main-content-page-demo-plain">
      <span class="pf-v6-c-button__text">Skip to content</span>
    </a>
  </div>

  <header class="pf-v6-c-masthead" id="page-demo-plain-docked">
    <div class="pf-v6-c-masthead__main">
      <span class="pf-v6-c-masthead__toggle">
        <button
          class="pf-v6-c-button pf-m-hamburger pf-m-plain"
          type="button"
          aria-label="Global navigation"
        >
          <span class="pf-v6-c-button__icon">
            <svg
              viewBox="0 0 10 10"
              class="pf-v6-c-button--hamburger-icon pf-v6-svg"
              width="1em"
              height="1em"
            >
              <path class="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1" />
              <path
                class="pf-v6-c-button--hamburger-icon--middle"
                d="M1,5 L9,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--arrow"
                d="M1,5 L1,5 L1,5"
              />
              <path
                class="pf-v6-c-button--hamburger-icon--bottom"
                d="M9,9 L1,9"
              />
            </svg>
          </span>
        </button>
      </span>
      <div class="pf-v6-c-masthead__brand">
        <a class="pf-v6-c-masthead__logo" href="#">
          <svg height="37px" viewBox="0 0 679 158">
            <title>PatternFly</title>
            <defs>
              <linearGradient
                x1="68%"
                y1="2.25860997e-13%"
                x2="32%"
                y2="100%"
                id="linearGradient-page-demo-plain-docked"
              >
                <stop stop-color="#2B9AF3" offset="0%" />
                <stop
                  stop-color="#73BCF7"
                  stop-opacity="0.502212631"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(206.000000, 45.750000)"
                fill="var(--pf-t--global--text--color--regular)"
                fill-rule="nonzero"
              >
                <path
                  d="M0,65.25 L0,2.25 L33.21,2.25 C37.35,2.25 41.025,3.135 44.235,4.905 C47.445,6.675 49.98,9.09 51.84,12.15 C53.7,15.21 54.63,18.72 54.63,22.68 C54.63,26.46 53.7,29.865 51.84,32.895 C49.98,35.925 47.43,38.31 44.19,40.05 C40.95,41.79 37.29,42.66 33.21,42.66 L15.48,42.66 L15.48,65.25 L0,65.25 Z M15.48,29.88 L31.41,29.88 C33.69,29.88 35.52,29.22 36.9,27.9 C38.28,26.58 38.97,24.87 38.97,22.77 C38.97,20.61 38.28,18.855 36.9,17.505 C35.52,16.155 33.69,15.48 31.41,15.48 L15.48,15.48 L15.48,29.88 Z"
                />
                <path
                  d="M77.04,66.06 C73.68,66.06 70.695,65.43 68.085,64.17 C65.475,62.91 63.435,61.17 61.965,58.95 C60.495,56.73 59.76,54.18 59.76,51.3 C59.76,46.74 61.485,43.215 64.935,40.725 C68.385,38.235 73.2,36.99 79.38,36.99 C83.1,36.99 86.7,37.44 90.18,38.34 L90.18,36 C90.18,31.26 87.15,28.89 81.09,28.89 C77.49,28.89 72.69,30.15 66.69,32.67 L61.47,21.96 C69.15,18.48 76.56,16.74 83.7,16.74 C90.3,16.74 95.43,18.315 99.09,21.465 C102.75,24.615 104.58,29.04 104.58,34.74 L104.58,65.25 L90.18,65.25 L90.18,62.37 C88.26,63.69 86.235,64.635 84.105,65.205 C81.975,65.775 79.62,66.06 77.04,66.06 Z M73.62,51.03 C73.62,52.53 74.28,53.7 75.6,54.54 C76.92,55.38 78.75,55.8 81.09,55.8 C84.69,55.8 87.72,55.05 90.18,53.55 L90.18,47.43 C87.42,46.71 84.54,46.35 81.54,46.35 C79.02,46.35 77.07,46.755 75.69,47.565 C74.31,48.375 73.62,49.53 73.62,51.03 Z"
                />
                <path
                  d="M137.25,65.88 C125.73,65.88 119.97,60.84 119.97,50.76 L119.97,29.79 L110.34,29.79 L110.34,17.64 L119.97,17.64 L119.97,5.4 L134.55,2.25 L134.55,17.64 L147.87,17.64 L147.87,29.79 L134.55,29.79 L134.55,47.88 C134.55,49.98 135.015,51.465 135.945,52.335 C136.875,53.205 138.51,53.64 140.85,53.64 C143.01,53.64 145.2,53.31 147.42,52.65 L147.42,64.44 C146.1,64.86 144.42,65.205 142.38,65.475 C140.34,65.745 138.63,65.88 137.25,65.88 Z"
                />
                <path
                  d="M177.57,65.88 C166.05,65.88 160.29,60.84 160.29,50.76 L160.29,29.79 L150.66,29.79 L150.66,17.64 L160.29,17.64 L160.29,5.4 L174.87,2.25 L174.87,17.64 L188.19,17.64 L188.19,29.79 L174.87,29.79 L174.87,47.88 C174.87,49.98 175.335,51.465 176.265,52.335 C177.195,53.205 178.83,53.64 181.17,53.64 C183.33,53.64 185.52,53.31 187.74,52.65 L187.74,64.44 C186.42,64.86 184.74,65.205 182.7,65.475 C180.66,65.745 178.95,65.88 177.57,65.88 Z"
                />
                <path
                  d="M217.62,66.15 C212.76,66.15 208.365,65.055 204.435,62.865 C200.505,60.675 197.4,57.72 195.12,54 C192.84,50.28 191.7,46.11 191.7,41.49 C191.7,36.87 192.795,32.7 194.985,28.98 C197.175,25.26 200.16,22.305 203.94,20.115 C207.72,17.925 211.92,16.83 216.54,16.83 C221.22,16.83 225.36,17.955 228.96,20.205 C232.56,22.455 235.395,25.53 237.465,29.43 C239.535,33.33 240.57,37.8 240.57,42.84 L240.57,46.44 L206.64,46.44 C207.6,48.66 209.1,50.475 211.14,51.885 C213.18,53.295 215.58,54 218.34,54 C222.42,54 225.6,52.8 227.88,50.4 L237.51,58.95 C234.51,61.47 231.435,63.3 228.285,64.44 C225.135,65.58 221.58,66.15 217.62,66.15 Z M206.37,36.27 L226.26,36.27 C225.48,33.99 224.205,32.16 222.435,30.78 C220.665,29.4 218.61,28.71 216.27,28.71 C213.87,28.71 211.8,29.37 210.06,30.69 C208.32,32.01 207.09,33.87 206.37,36.27 Z"
                />
                <path
                  d="M247.41,65.25 L247.41,17.64 L261.99,17.64 L261.99,22.41 C265.23,18.51 269.4,16.56 274.5,16.56 C277.08,16.62 278.91,17.01 279.99,17.73 L279.99,30.42 C277.95,29.46 275.64,28.98 273.06,28.98 C270.78,28.98 268.665,29.505 266.715,30.555 C264.765,31.605 263.19,33.09 261.99,35.01 L261.99,65.25 L247.41,65.25 Z"
                />
                <path
                  d="M286.29,65.25 L286.29,17.64 L300.87,17.64 L300.87,20.88 C304.47,18.12 308.73,16.74 313.65,16.74 C317.37,16.74 320.655,17.55 323.505,19.17 C326.355,20.79 328.59,23.04 330.21,25.92 C331.83,28.8 332.64,32.13 332.64,35.91 L332.64,65.25 L318.06,65.25 L318.06,37.89 C318.06,35.25 317.28,33.15 315.72,31.59 C314.16,30.03 312.06,29.25 309.42,29.25 C305.76,29.25 302.91,30.51 300.87,33.03 L300.87,65.25 L286.29,65.25 Z"
                />
                <polygon
                  points="342 65.25 342 2.25 392.04 2.25 392.04 15.66 357.48 15.66 357.48 27.45 380.52 27.45 380.52 40.41 357.48 40.41 357.48 65.25"
                />
                <polygon
                  points="399.96 65.25 399.96 2.25 414.54 0 414.54 65.25"
                />
                <path
                  d="M429.21,84.69 C428.07,84.69 426.96,84.645 425.88,84.555 C424.8,84.465 423.9,84.33 423.18,84.15 L423.18,71.73 C424.38,71.97 425.88,72.09 427.68,72.09 C432.36,72.09 435.51,70.05 437.13,65.97 L437.13,65.88 L418.86,17.64 L434.97,17.64 L445.5,47.61 L457.74,17.64 L473.49,17.64 L452.16,67.68 C450.42,71.82 448.5,75.135 446.4,77.625 C444.3,80.115 441.87,81.915 439.11,83.025 C436.35,84.135 433.05,84.69 429.21,84.69 Z"
                />
              </g>
              <g transform="translate(0.000000, 0.000000)">
                <path
                  d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                  fill="#0066CC"
                />
                <path
                  d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                  fill="url(#linearGradient-page-demo-plain-docked)"
                />
                <path
                  d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                  fill="url(#linearGradient-page-demo-plain-docked)"
                  transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="pf-v6-c-masthead__content">
      <div
        class="pf-v6-c-toolbar pf-m-static"
        id="page-demo-plain-docked-toolbar"
      >
        <div class="pf-v6-c-toolbar__content">
          <div class="pf-v6-c-toolbar__content-section">
            <div
              class="pf-v6-c-toolbar__group pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain"
            >
              <div
                class="pf-v6-c-toolbar__group pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain"
              >
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-settings pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
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
                          d="M26.463 16.845a9.635 9.635 0 0 0-.002-1.688l3.41-1.974a.5.5 0 0 0 .235-.548 14.47 14.47 0 0 0-4.142-7.167.5.5 0 0 0-.594-.07l-3.404 1.97c-.469-.326-.96-.61-1.466-.85V2.58a.5.5 0 0 0-.356-.48 14.662 14.662 0 0 0-8.288 0 .5.5 0 0 0-.356.48v3.944c-.513.245-1.003.528-1.462.846L6.63 5.397a.5.5 0 0 0-.594.07 14.47 14.47 0 0 0-4.142 7.168.5.5 0 0 0 .236.548l3.407 1.972a9.635 9.635 0 0 0 .002 1.688l-3.41 1.974a.5.5 0 0 0-.235.548 14.47 14.47 0 0 0 4.142 7.167c.16.154.405.18.594.07l3.404-1.97c.469.326.96.61 1.466.85v3.938a.5.5 0 0 0 .356.48c1.333.398 2.728.6 4.144.6s2.81-.202 4.144-.6a.5.5 0 0 0 .356-.48v-3.944a10.449 10.449 0 0 0 1.462-.846l3.408 1.973a.5.5 0 0 0 .594-.07 14.47 14.47 0 0 0 4.142-7.168.5.5 0 0 0-.236-.548l-3.407-1.972ZM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="pf-v6-c-toolbar__item">
                  <button
                    class="pf-v6-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <span class="pf-v6-c-menu-toggle__icon">
                      <svg
                        class="pf-v6-svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                      >
                        <path
                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="pf-v6-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v6-c-page__main-container" tabindex="-1">
    <main
      class="pf-v6-c-page__main"
      tabindex="-1"
      id="main-content-page-demo-plain"
    >
      <section class="pf-v6-c-page__main-section pf-m-plain pf-m-no-padding">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-c-panel pf-m-glass pf-m-bordered">
            <div class="pf-v6-c-panel__main">
              <div class="pf-v6-c-panel__main-body">
                <div class="pf-v6-c-content">
                  <h1>Page title</h1>
                  <p>This is a full page demo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pf-v6-c-page__main-section pf-m-plain pf-m-no-padding">
        <div class="pf-v6-c-page__main-body">
          <div class="pf-v6-c-card pf-m-expanded pf-m-glass">
            <div class="pf-v6-c-card__header">
              <div class="pf-v6-c-card__header-toggle">
                <button
                  class="pf-v6-c-button pf-m-plain"
                  id="page-demo-plain-expandable-status-card-1-toggle"
                  type="button"
                  aria-labelledby="page-demo-plain-expandable-status-card-1-title page-demo-plain-expandable-status-card-1-toggle"
                  aria-label="Details"
                >
                  <span class="pf-v6-c-button__icon pf-m-start">
                    <span class="pf-v6-c-card__header-toggle-icon">
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
                </button>
              </div>
              <div class="pf-v6-c-card__actions">
                <button
                  class="pf-v6-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Menu toggle"
                  id="page-demo-plain-expandable-status-card-1-action-kebab"
                >
                  <span class="pf-v6-c-menu-toggle__icon">
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
              <div
                class="pf-v6-c-card__title"
                id="page-demo-plain-expandable-status-card-1-title"
              >
                <h2 class="pf-v6-c-title pf-m-xl">Improve recommended pathways</h2>
              </div>
            </div>
            <div class="pf-v6-c-card__expandable-content">
              <div class="pf-v6-l-flex pf-m-column pf-m-row-on-md">
                <div
                  class="pf-v6-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
                >
                  <div class="pf-v6-c-card pf-m-plain">
                    <div class="pf-v6-c-card__body">
                      <div
                        class="pf-v6-l-flex pf-m-column pf-v6-u-h-100 pf-m-space-items-sm"
                      >
                        <div
                          class="pf-v6-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
                        >
                          <div class="pf-v6-c-label-group">
                            <div class="pf-v6-c-label-group__main">
                              <ul
                                class="pf-v6-c-label-group__list"
                                role="list"
                                aria-label="Group of labels"
                              >
                                <li class="pf-v6-c-label-group__list-item">
                                  <span
                                    class="pf-v6-c-label pf-m-outline pf-m-blue"
                                  >
                                    <span class="pf-v6-c-label__content">
                                      <span class="pf-v6-c-label__icon">
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
                                            d="M23 23.917a1.62 1.62 0 0 1-1.149-.475L9 10.59l-6.204 6.205a1.127 1.127 0 0 1-1.592-1.592L7.85 8.557a1.629 1.629 0 0 1 2.299 0L23 21.409l6.204-6.205a1.127 1.127 0 0 1 1.592 1.592l-6.646 6.646a1.624 1.624 0 0 1-1.149.475Z"
                                          />
                                        </svg>
                                      </span>
                                      <span
                                        class="pf-v6-c-label__text"
                                      >Performance</span>
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <a href="#">378 systems</a>
                        </div>
                        <div class="pf-v6-l-flex__item pf-m-spacer-md">
                          <p>Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities and issues with system performance</p>
                        </div>
                        <div
                          class="pf-v6-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
                          style="row-gap: var(--pf-6-global--spacer--md);"
                        >
                          <div
                            class="pf-v6-l-flex__item"
                            style="margin-block-end: -.25em"
                          >
                            <span class="pf-v6-c-label pf-m-danger">
                              <span class="pf-v6-c-label__content">
                                <span class="pf-v6-c-label__icon">
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
                                <span class="pf-v6-c-label__text">Incident</span>
                              </span>
                            </span>
                          </div>
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
                            style="row-gap: var(--pf-6-global--spacer--md);"
                          >
                            <span class="pf-v6-c-icon">
                              <span class="pf-v6-c-icon__content pf-m-danger">
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
                                    d="M19 16c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3ZM3 16c0-3.472 1.353-6.737 3.808-9.192a.999.999 0 1 0-1.414-1.414C2.561 8.227 1 11.994 1 16s1.561 7.773 4.394 10.606a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414A12.918 12.918 0 0 1 3 16ZM26.606 5.394a.999.999 0 1 0-1.414 1.414C27.647 9.264 29 12.528 29 16s-1.353 6.737-3.808 9.192a.999.999 0 1 0 1.414 1.414C29.439 23.773 31 20.006 31 16s-1.561-7.773-4.394-10.606ZM11.05 9.636a.999.999 0 0 0-1.414 0c-3.509 3.509-3.509 9.219 0 12.728a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414 7.008 7.008 0 0 1 0-9.899.999.999 0 0 0 0-1.414Zm11.314 0a.999.999 0 1 0-1.414 1.414 7.008 7.008 0 0 1 0 9.899.999.999 0 1 0 1.414 1.414c3.509-3.509 3.509-9.219 0-12.728Z"
                                  />
                                </svg>
                              </span>
                            </span>
                            <p class="pf-v6-u-color-200">
                              System reboot
                              <b class="pf-v6-u-color-100">is</b> required
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v6-c-card__footer">
                      <a class="pf-v6-c-button pf-m-inline pf-m-link" href="#">
                        <span class="pf-v6-c-button__text">View pathway</span>
                        <span class="pf-v6-c-button__icon pf-m-end">
                          <svg
                            class="pf-v6-svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr class="pf-v6-c-divider pf-m-vertical-on-md pf-m-inset-3xl" />
                <div
                  class="pf-v6-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
                >
                  <div class="pf-v6-c-card pf-m-plain">
                    <div class="pf-v6-c-card__body">
                      <div
                        class="pf-v6-l-flex pf-m-column pf-v6-u-h-100 pf-m-space-items-sm"
                      >
                        <div
                          class="pf-v6-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
                        >
                          <div class="pf-v6-c-label-group">
                            <div class="pf-v6-c-label-group__main">
                              <ul
                                class="pf-v6-c-label-group__list"
                                role="list"
                                aria-label="Group of labels"
                              >
                                <li class="pf-v6-c-label-group__list-item">
                                  <span
                                    class="pf-v6-c-label pf-m-outline pf-m-blue"
                                  >
                                    <span class="pf-v6-c-label__content">
                                      <span class="pf-v6-c-label__icon">
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
                                            d="M16 30.856a1 1 0 0 1-.5-.134l-12-6.929a1 1 0 0 1-.5-.866V9.072c0-.357.19-.688.5-.866l12-6.929a1.003 1.003 0 0 1 1 0l12 6.929a1 1 0 0 1 .5.866v13.855c0 .357-.19.688-.5.866l-12 6.929a1 1 0 0 1-.5.134ZM5 22.351l11 6.352 11-6.352V9.65L16 3.298 5 9.65v12.701Zm23 .577h.01H28Z"
                                          />
                                        </svg>
                                      </span>
                                      <span
                                        class="pf-v6-c-label__text"
                                      >Stablility</span>
                                    </span>
                                  </span>
                                </li>
                                <li class="pf-v6-c-label-group__list-item">
                                  <button
                                    class="pf-v6-c-label pf-m-overflow"
                                    type="button"
                                  >
                                    <span class="pf-v6-c-label__content">
                                      <span class="pf-v6-c-label__text">1 more</span>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <a href="#">211 systems</a>
                        </div>
                        <div class="pf-v6-l-flex__item pf-m-spacer-md">
                          <p>Adjust your networking configuration to get ahead of network perfomance degradations and packet losses</p>
                        </div>
                        <div
                          class="pf-v6-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
                          style="row-gap: var(--pf-6-global--spacer--md);"
                        >
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
                            style="row-gap: var(--pf-6-global--spacer--md);"
                          >
                            <span class="pf-v6-c-icon">
                              <span class="pf-v6-c-icon__content pf-m-success">
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
                                    d="M19 16c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3ZM3 16c0-3.472 1.353-6.737 3.808-9.192a.999.999 0 1 0-1.414-1.414C2.561 8.227 1 11.994 1 16s1.561 7.773 4.394 10.606a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414A12.918 12.918 0 0 1 3 16ZM26.606 5.394a.999.999 0 1 0-1.414 1.414C27.647 9.264 29 12.528 29 16s-1.353 6.737-3.808 9.192a.999.999 0 1 0 1.414 1.414C29.439 23.773 31 20.006 31 16s-1.561-7.773-4.394-10.606ZM11.05 9.636a.999.999 0 0 0-1.414 0c-3.509 3.509-3.509 9.219 0 12.728a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414 7.008 7.008 0 0 1 0-9.899.999.999 0 0 0 0-1.414Zm11.314 0a.999.999 0 1 0-1.414 1.414 7.008 7.008 0 0 1 0 9.899.999.999 0 1 0 1.414 1.414c3.509-3.509 3.509-9.219 0-12.728Z"
                                  />
                                </svg>
                              </span>
                            </span>
                            <p class="pf-v6-u-color-200">
                              System reboot
                              <b class="pf-v6-u-color-100">is not</b> required
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v6-c-card__footer">
                      <a class="pf-v6-c-button pf-m-inline pf-m-link" href="#">
                        <span class="pf-v6-c-button__text">View pathway</span>
                        <span class="pf-v6-c-button__icon pf-m-end">
                          <svg
                            class="pf-v6-svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr class="pf-v6-c-divider pf-m-vertical-on-md pf-m-inset-3xl" />
                <div
                  class="pf-v6-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
                >
                  <div class="pf-v6-c-card pf-m-plain">
                    <div class="pf-v6-c-card__body">
                      <div
                        class="pf-v6-l-flex pf-m-column pf-v6-u-h-100 pf-m-space-items-sm"
                      >
                        <div
                          class="pf-v6-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
                        >
                          <div class="pf-v6-c-label-group">
                            <div class="pf-v6-c-label-group__main">
                              <ul
                                class="pf-v6-c-label-group__list"
                                role="list"
                                aria-label="Group of labels"
                              >
                                <li class="pf-v6-c-label-group__list-item">
                                  <span
                                    class="pf-v6-c-label pf-m-outline pf-m-blue"
                                  >
                                    <span class="pf-v6-c-label__content">
                                      <span class="pf-v6-c-label__icon">
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
                                            d="M22 17v3.5c0 .827-.673 1.5-1.5 1.5H17a1 1 0 1 1 0-2h1.596l-3.302-3.292s-3.186-3.174-4.109-4.098c-.905-.906-2.109-1.404-3.39-1.404s-2.485.498-3.391 1.404C3.499 13.515 3 14.719 3 16s.499 2.484 1.404 3.39c.905.906 2.109 1.404 3.391 1.404s2.484-.498 3.39-1.404l1.109-1.107a.999.999 0 1 1 1.412 1.416l-1.107 1.105c-1.283 1.284-2.989 1.99-4.804 1.99s-3.521-.706-4.805-1.99C1.707 19.521 1 17.815 1 16s.707-3.521 1.99-4.804c1.283-1.284 2.989-1.99 4.805-1.99s3.521.706 4.804 1.99c.924.924 4.107 4.096 4.107 4.096L20 18.576V17a1 1 0 1 1 2 0Zm7.01-5.804c-1.283-1.284-2.989-1.991-4.805-1.991s-3.521.707-4.804 1.991L18.295 12.3a.999.999 0 1 0 1.41 1.418l1.11-1.108c.905-.906 2.109-1.405 3.39-1.405s2.485.499 3.391 1.405C28.501 13.515 29 14.719 29 16s-.499 2.484-1.404 3.39a4.748 4.748 0 0 1-2.732 1.36 1 1 0 1 0 .273 1.98 6.727 6.727 0 0 0 3.873-1.927C30.293 19.52 31 17.814 31 15.999s-.707-3.521-1.99-4.804Z"
                                          />
                                        </svg>
                                      </span>
                                      <span
                                        class="pf-v6-c-label__text"
                                      >Availability</span>
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <a href="#">166 systems</a>
                        </div>
                        <div class="pf-v6-l-flex__item pf-m-spacer-md">
                          <p>Fine tune your Oracle DB configuration to improve database performance and avoid process failure</p>
                        </div>
                        <div
                          class="pf-v6-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
                          style="row-gap: var(--pf-6-global--spacer--md);"
                        >
                          <div
                            class="pf-v6-l-flex__item"
                            style="margin-block-end: -.25em"
                          >
                            <span class="pf-v6-c-label pf-m-danger">
                              <span class="pf-v6-c-label__content">
                                <span class="pf-v6-c-label__icon">
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
                                <span class="pf-v6-c-label__text">Incident</span>
                              </span>
                            </span>
                          </div>
                          <div
                            class="pf-v6-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
                            style="row-gap: var(--pf-6-global--spacer--md);"
                          >
                            <span class="pf-v6-c-icon">
                              <span class="pf-v6-c-icon__content pf-m-danger">
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
                                    d="M19 16c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3ZM3 16c0-3.472 1.353-6.737 3.808-9.192a.999.999 0 1 0-1.414-1.414C2.561 8.227 1 11.994 1 16s1.561 7.773 4.394 10.606a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414A12.918 12.918 0 0 1 3 16ZM26.606 5.394a.999.999 0 1 0-1.414 1.414C27.647 9.264 29 12.528 29 16s-1.353 6.737-3.808 9.192a.999.999 0 1 0 1.414 1.414C29.439 23.773 31 20.006 31 16s-1.561-7.773-4.394-10.606ZM11.05 9.636a.999.999 0 0 0-1.414 0c-3.509 3.509-3.509 9.219 0 12.728a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414 7.008 7.008 0 0 1 0-9.899.999.999 0 0 0 0-1.414Zm11.314 0a.999.999 0 1 0-1.414 1.414 7.008 7.008 0 0 1 0 9.899.999.999 0 1 0 1.414 1.414c3.509-3.509 3.509-9.219 0-12.728Z"
                                  />
                                </svg>
                              </span>
                            </span>
                            <p class="pf-v6-u-color-200">
                              System reboot
                              <b class="pf-v6-u-color-100">is</b> required
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v6-c-card__footer">
                      <a class="pf-v6-c-button pf-m-inline pf-m-link" href="#">
                        <span class="pf-v6-c-button__text">View pathway</span>
                        <span class="pf-v6-c-button__icon pf-m-end">
                          <svg
                            class="pf-v6-svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="pf-v6-l-gallery pf-m-gutter">
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-empty-state"
        >
          <div class="pf-v6-l-bullseye">
            <div class="pf-v6-c-empty-state pf-m-xs">
              <div class="pf-v6-c-empty-state__content">
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
                      d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1Zm7 16.125h-5.875V23a1.125 1.125 0 0 1-2.25 0v-5.875H9a1.125 1.125 0 0 1 0-2.25h5.875V9a1.125 1.125 0 0 1 2.25 0v5.875H23a1.125 1.125 0 0 1 0 2.25Z"
                    />
                  </svg>
                </div>
                <div class="pf-v6-c-card__title">
                  <h2
                    class="pf-v6-c-card__title-text pf-m-md"
                  >Add a new card to your page</h2>
                </div>
                <button class="pf-v6-c-button pf-m-link" type="button">
                  <span class="pf-v6-c-button__text">Add card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-1"
        >
          <div class="pf-v6-c-card__header">
            <img src="/assets/images/PF-IconLogo.svg" alt="PatternFly logo" />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-1-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-1-check"
                  name="card-view-basic-example-gallery-card-1-check"
                  aria-labelledby="card-view-basic-example-gallery-card-1-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-1-check-label"
            >Patternfly</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >PatternFly is a community project that promotes design commonality and improves user experience.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-2"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/activemq-core_200x150.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-2-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-2-check"
                  name="card-view-basic-example-gallery-card-2-check"
                  aria-labelledby="card-view-basic-example-gallery-card-2-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-2-check-label"
            >ActiveMq</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-3"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/camel-spark_200x150.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-3-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-3-check"
                  name="card-view-basic-example-gallery-card-3-check"
                  aria-labelledby="card-view-basic-example-gallery-card-3-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-3-check-label"
            >Apache Spark</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >This documentation page covers the Apache Spark component for the Apache Camel.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-4"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/camel-avro_200x150.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-4-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-4-check"
                  name="card-view-basic-example-gallery-card-4-check"
                  aria-labelledby="card-view-basic-example-gallery-card-4-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-4-check-label"
            >Avro</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >This component provides a dataformat for avro, which allows serialization and deserialization of messages using Apache Avro’s binary dataformat. Moreover, it provides support for Apache Avro’s rpc, by providing producers and consumers endpoint for using avro over netty or http.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-selected-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-5"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/FuseConnector_Icons_AzureServices.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-5-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-5-check"
                  name="card-view-basic-example-gallery-card-5-check"
                  aria-labelledby="card-view-basic-example-gallery-card-5-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-5-check-label"
            >Azure Services</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >The Camel Components for Windows Azure Services provide connectivity to Azure services from Camel.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-non-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-6"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/camel-saxon_200x150.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-6-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-6-check"
                  name="card-view-basic-example-gallery-card-6-check"
                  disabled
                  aria-labelledby="card-view-basic-example-gallery-card-6-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-6-check-label"
            >Crypto</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >For providing flexible endpoints to sign and verify exchanges using the Signature Service of the Java Cryptographic Extension.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-7"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/camel-dropbox_200x150.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-7-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-7-check"
                  name="card-view-basic-example-gallery-card-7-check"
                  aria-labelledby="card-view-basic-example-gallery-card-7-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-7-check-label"
            >DropBox</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >The dropbox: component allows you to treat Dropbox remote folders as a producer or consumer of messages.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-8"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/camel-infinispan_200x150.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-8-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-8-check"
                  name="card-view-basic-example-gallery-card-8-check"
                  aria-labelledby="card-view-basic-example-gallery-card-8-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-8-check-label"
            >JBoss Data Grid</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >Read or write to a fully-supported distributed cache and data grid for faster integration services.</div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-9"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/FuseConnector_Icons_REST.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-9-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-9-check"
                  name="card-view-basic-example-gallery-card-9-check"
                  aria-labelledby="card-view-basic-example-gallery-card-9-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-9-check-label"
            >Rest</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div class="pf-v6-c-card__body">
            The rest component allows to define REST endpoints (consumer) using the Rest DSL and plugin to other Camel components as the REST transport.
            From Camel 2.18 onwards the rest component can also be used as a client (producer) to call REST services.
          </div>
        </div>
        <div
          class="pf-v6-c-card pf-m-selectable-raised pf-m-compact pf-m-glass"
          id="card-view-basic-example-gallery-card-10"
        >
          <div class="pf-v6-c-card__header">
            <img
              src="/assets/images/camel-swagger-java_200x150.png"
              width="60px"
              alt="Logo"
            />
            <div class="pf-v6-c-card__actions">
              <button
                class="pf-v6-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Menu toggle"
                id="card-view-basic-example-gallery-card-10-toggle"
              >
                <span class="pf-v6-c-menu-toggle__icon">
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
              <div class="pf-v6-c-check pf-m-standalone">
                <input
                  class="pf-v6-c-check__input"
                  type="checkbox"
                  id="card-view-basic-example-gallery-card-10-check"
                  name="card-view-basic-example-gallery-card-10-check"
                  aria-labelledby="card-view-basic-example-gallery-card-10-check-label"
                />
              </div>
            </div>
          </div>
          <div class="pf-v6-c-card__title">
            <h2
              class="pf-v6-c-card__title-text"
              id="card-view-basic-example-gallery-card-10-check-label"
            >SWAGGER</h2>
            <div class="pf-v6-c-content">
              <small>Provided by Red Hat</small>
            </div>
          </div>
          <div
            class="pf-v6-c-card__body"
          >Expose REST services and their APIs using Swagger specification.</div>
        </div>
      </div>
    </main>
  </div>
  <footer class="pf-v6-c-page__footer">
    <div class="pf-v6-c-page__main-body">custom footer</div>
  </footer>
</div>

```
