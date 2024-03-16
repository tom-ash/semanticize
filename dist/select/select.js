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
exports.Select = void 0;
const react_1 = __importStar(require("react"));
const text_input_1 = require("../text-input/text-input");
const Select = props => {
    const { id, className, label, options, value, onSelect } = props;
    const [isFocused, changeIsFocused] = (0, react_1.useState)(false);
    const ref = react_1.default.useRef(null);
    const [isCurrent, changeIsCurrent] = (0, react_1.useState)(0);
    const onKeyDown = (e) => {
        var _a;
        const key = e.key;
        if (key === "ArrowDown") {
            const newIsCurrent = isCurrent + 1;
            if (newIsCurrent >= options.length) {
                changeIsCurrent(0);
            }
            else {
                changeIsCurrent(newIsCurrent);
            }
        }
        else if (key === "ArrowUp") {
            const newIsCurrent = isCurrent - 1;
            if (newIsCurrent < 0) {
                changeIsCurrent(options.length - 1);
            }
            else {
                changeIsCurrent(newIsCurrent);
            }
        }
        else if (key === "Enter") {
            const currentOptionValue = options[isCurrent].value;
            onSelect(currentOptionValue);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    };
    return (react_1.default.createElement(text_input_1.TextInput, { ref: ref, id: id, className: className, label: label, onFocus: () => changeIsFocused(true), onBlur: () => {
            changeIsFocused(false);
        }, value: value, disableCaret: true, onKeyDown: onKeyDown }, isFocused && (react_1.default.createElement("ul", null, options.map((option, index) => {
        const { value, text } = option;
        const className = isCurrent === index ? "current" : undefined;
        return (react_1.default.createElement("li", { key: value, className: className, onMouseDown: e => {
                e.preventDefault();
            }, onClick: () => {
                var _a;
                onSelect(value);
                (_a = ref.current) === null || _a === void 0 ? void 0 : _a.blur();
            } }, text));
    })))));
};
exports.Select = Select;
//# sourceMappingURL=select.js.map