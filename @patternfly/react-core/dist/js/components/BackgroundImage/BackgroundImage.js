"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundImage = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const background_image_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/BackgroundImage/background-image"));
const BackgroundImage = (_a) => {
    var { className } = _a, 
    // src,
    props = tslib_1.__rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(background_image_1.default.backgroundImage, className), 
        /* eslint-disable camelcase */
        style: {
        // [c_background_image_BackgroundImage.name as string]: `url(${src})`
        } }, props)));
};
exports.BackgroundImage = BackgroundImage;
exports.BackgroundImage.displayName = 'BackgroundImage';
//# sourceMappingURL=BackgroundImage.js.map