import React, { ChangeEvent, KeyboardEventHandler, ReactNode } from "react";
interface TextInputProps {
    id?: string;
    className?: string;
    label?: string | React.ReactElement;
    value?: string;
    disabled?: boolean;
    error?: string;
    children?: ReactNode;
    onChange?(newValue: string, changeEvent?: ChangeEvent): void;
    onFocus?(currentValue: string, changeEvent?: ChangeEvent): void;
    onBlur?(currentValue: string, changeEvent?: ChangeEvent): void;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    disableCaret?: boolean;
    placeholder?: string;
    readOnly?: boolean;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=text-input.d.ts.map