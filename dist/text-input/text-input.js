"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = exports.TextInputType = void 0;
const react_1 = __importStar(require("react"));
var TextInputType;
(function (TextInputType) {
    TextInputType["TEXT"] = "text";
    TextInputType["SEARCH"] = "search";
    TextInputType["URL"] = "url";
    TextInputType["EMAIL"] = "email";
    TextInputType["TEL"] = "tel";
    TextInputType["PASSWORD"] = "password";
    TextInputType["NUMBER"] = "number";
})(TextInputType || (exports.TextInputType = TextInputType = {}));
exports.TextInput = react_1.default.forwardRef((props, ref) => {
    const { label, id, value, onChange: customOnChange, onBlur, onFocus, className, disabled, error, children, disableCaret = false, onKeyDown, placeholder, readOnly, type = TextInputType.TEXT, match, } = props;
    const classNames = [className];
    if (error) {
        classNames.push("error");
    }
    const style = {};
    if (disableCaret) {
        style["caretColor"] = "transparent";
    }
    const onChange = (0, react_1.useCallback)((e) => {
        if (!match || e.target.value.match(match)) {
            customOnChange && customOnChange(e.target.value, e);
        }
    }, [match, customOnChange]);
    return (react_1.default.createElement("div", { className: classNames.join(" ") },
        label && react_1.default.createElement("label", null, label),
        react_1.default.createElement("input", { ref: ref, id: id, type: type, readOnly: readOnly, disabled: disabled, placeholder: placeholder, value: value, style: style, onKeyDown: onKeyDown, onFocus: onFocus ? e => onFocus(e.target.value, e) : undefined, onChange: onChange, onBlur: onBlur ? e => onBlur(e.target.value, e) : undefined }),
        children,
        error && react_1.default.createElement("div", { className: "error" }, error)));
});
//# sourceMappingURL=text-input.js.map