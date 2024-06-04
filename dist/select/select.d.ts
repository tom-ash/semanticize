import React, { ReactNode } from "react";
type Value = string | number | null;
type Text = string | undefined;
interface Option {
    value: Value;
    text: Text;
    jsx?: React.ReactElement;
}
interface SelectInterface {
    (props: {
        id?: string;
        className?: string;
        label?: string | React.ReactElement;
        options: Option[];
        value: Value;
        children?: ReactNode;
        onSelect(value: Value): void;
        placeholder?: string;
        searchable?: boolean;
    }): React.ReactElement;
}
export declare const Select: SelectInterface;
export {};
//# sourceMappingURL=select.d.ts.map