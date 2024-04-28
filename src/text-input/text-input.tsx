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
        type="text"
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange ? e => onChange(e.target.value, e) : undefined}
        onBlur={onBlur ? e => onBlur(e.target.value, e) : undefined}
        onFocus={onFocus ? e => onFocus(e.target.value, e) : undefined}
        style={style}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
});
