import React from "react";
type Value = string | number | null;
type Text = string | undefined;
interface Option {
    value: Value;
    text: Text;
}
interface SelectInterface {
    (props: {
        id?: string;
        className?: string;
        label?: string | React.ReactElement;
        options: Option[];
        value: Text;
        onSelect(value: Value): void;
    }): React.ReactElement;
}
export declare const Select: SelectInterface;
export {};
//# sourceMappingURL=select.d.ts.map