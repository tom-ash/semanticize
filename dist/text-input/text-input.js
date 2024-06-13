"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = exports.TextInputType = void 0;
const react_1 = __importDefault(require("react"));
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
    const { label, id, value, onChange, onBlur, onFocus, className, disabled, error, children, disableCaret = false, onKeyDown, placeholder, readOnly, type = TextInputType.TEXT, } = props;
    const classNames = [className];
    if (error) {
        classNames.push("error");
    }
    const style = {};
    if (disableCaret) {
        style["caretColor"] = "transparent";
    }
    return (react_1.default.createElement("div", { className: classNames.join(" ") },
        label && react_1.default.createElement("label", null, label),
        react_1.default.createElement("input", { ref: ref, id: id, type: type, readOnly: readOnly, disabled: disabled, placeholder: placeholder, value: value, style: style, onKeyDown: onKeyDown, onFocus: onFocus ? e => onFocus(e.target.value, e) : undefined, onChange: onChange ? e => onChange(e.target.value, e) : undefined, onBlur: onBlur ? e => onBlur(e.target.value, e) : undefined }),
        children,
        error && react_1.default.createElement("div", { className: "error" }, error)));
});
//# sourceMappingURL=text-input.js.map