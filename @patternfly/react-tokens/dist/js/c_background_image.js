"use strict";
exports.__esModule = true;
exports.c_background_image = {
  ".pf-c-background-image": {
    "c_background_image_BackgroundColor": {
      "name": "--pf-c-background-image--BackgroundColor",
      "value": "#151515",
      "values": [
        "--pf-global--BackgroundColor--dark-100",
        "$pf-global--BackgroundColor--dark-100",
        "$pf-color-black-900",
        "#151515"
      ]
    },
    "c_background_image_BackgroundImage": {
      "name": "--pf-c-background-image--BackgroundImage",
      "value": "url(\"../../assets/images/pfbg-icon.svg\")"
    },
    "c_background_image_BackgroundPosition": {
      "name": "--pf-c-background-image--BackgroundPosition",
      "value": "bottom right"
    },
    "c_background_image_BackgroundSize_min_width": {
      "name": "--pf-c-background-image--BackgroundSize--min-width",
      "value": "200px"
    },
    "c_background_image_BackgroundSize_width": {
      "name": "--pf-c-background-image--BackgroundSize--width",
      "value": "60%"
    },
    "c_background_image_BackgroundSize_max_width": {
      "name": "--pf-c-background-image--BackgroundSize--max-width",
      "value": "600px"
    },
    "c_background_image_BackgroundSize": {
      "name": "--pf-c-background-image--BackgroundSize",
      "value": "clamp(200px, 60%, 600px)",
      "values": [
        "clamp(--pf-c-background-image--BackgroundSize--min-width, --pf-c-background-image--BackgroundSize--width, --pf-c-background-image--BackgroundSize--max-width)",
        "clamp(200px, 60%, 600px)"
      ]
    }
  }
};
exports["default"] = exports.c_background_image;