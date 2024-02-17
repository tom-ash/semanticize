"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const react_1 = __importDefault(require("react"));
const TextInput = props => {
    const { label, id, value, onChange, onBlur, className, disabled, error } = props;
    const classNames = [className];
    if (error) {
        classNames.push('error');
    }
    return (react_1.default.createElement("div", { className: classNames.join(' ') },
        react_1.default.createElement("label", null, label),
        react_1.default.createElement("input", { type: "text", id: id, disabled: disabled, value: value, onChange: onChange ? e => onChange(e.target.value, e) : undefined, onBlur: onBlur ? e => onBlur(e.target.value, e) : undefined }),
        error && (react_1.default.createElement("div", { className: 'error' }, error))));
};
exports.TextInput = TextInput;
//# sourceMappingURL=text-input.js.map