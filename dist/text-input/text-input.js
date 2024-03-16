"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const react_1 = __importDefault(require("react"));
exports.TextInput = react_1.default.forwardRef((props, ref) => {
    const { label, id, value, onChange, onBlur, onFocus, className, disabled, error, children, disableCaret = false, onKeyDown, } = props;
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
        react_1.default.createElement("input", { ref: ref, type: "text", id: id, disabled: disabled, value: value, onChange: onChange ? e => onChange(e.target.value, e) : undefined, onBlur: onBlur ? e => onBlur(e.target.value, e) : undefined, onFocus: onFocus ? e => onFocus(e.target.value, e) : undefined, style: style, onKeyDown: onKeyDown }),
        children,
        error && react_1.default.createElement("div", { className: "error" }, error)));
});
//# sourceMappingURL=text-input.js.map