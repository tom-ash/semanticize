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

export const TextInput: TextInputInterface = props => {
  const { label, id, value, onChange, onBlur, className, disabled, error } = props;

  const classNames = [className]

  if (error) {
    classNames.push('error')
  }

  return (
    <div className={classNames.join(' ')}>
      <label>{label}</label>
      <input
        type="text"
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange ? e => onChange(e.target.value, e) : undefined}
        onBlur={onBlur ? e => onBlur(e.target.value, e) : undefined}
      />
      {error && (
        <div className='error'>
          {error}
        </div>
      )}
    </div>
  );
};
