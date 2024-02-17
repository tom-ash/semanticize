import React, { ChangeEvent } from "react";
interface TextInputInterface {
    (props: {
        label: string | React.ReactElement;
        id?: string;
        value?: string;
        onChange?(newValue: string, changeEvent?: ChangeEvent): void;
        onBlur?(currentValue: string, changeEvent?: ChangeEvent): void;
        className?: string;
        disabled?: boolean;
        error?: string;
    }): React.ReactElement;
}
export declare const TextInput: TextInputInterface;
export {};
//# sourceMappingURL=text-input.d.ts.map