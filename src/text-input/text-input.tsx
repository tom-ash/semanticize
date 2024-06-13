import React, { ChangeEvent, KeyboardEventHandler, ReactNode } from "react";

export enum TextInputType {
  TEXT = 'text',
  SEARCH = 'search',
  URL = 'url',
  EMAIL = 'email',
  TEL = 'tel',
  PASSWORD = 'password',
  NUMBER = 'number',
}

interface TextInputProps {
  id?: string;
  type?: TextInputType;
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

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    label,
    id,
    value,
    onChange,
    onBlur,
    onFocus,
    className,
    disabled,
    error,
    children,
    disableCaret = false,
    onKeyDown,
    placeholder,
    readOnly,
    type = TextInputType.TEXT,
  } = props;

  const classNames = [className];

  if (error) {
    classNames.push("error");
  }

  const style: React.CSSProperties = {};

  if (disableCaret) {
    style["caretColor"] = "transparent";
  }

  return (
    <div className={classNames.join(" ")}>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        id={id}
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        style={style}
        onKeyDown={onKeyDown}
        onFocus={onFocus ? e => onFocus(e.target.value, e) : undefined}
        onChange={onChange ? e => onChange(e.target.value, e) : undefined}
        onBlur={onBlur ? e => onBlur(e.target.value, e) : undefined}
      />
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
});
