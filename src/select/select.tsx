import React, { useMemo, useState } from "react";
import { TextInput } from "../text-input/text-input";

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
    value: Value;
    onSelect(value: Value): void;
  }): React.ReactElement;
}

export const Select: SelectInterface = props => {
  const { id, className, label, options, value, onSelect } = props;
  const [isFocused, changeIsFocused] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const [isCurrent, changeIsCurrent] = useState(0);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const key = e.key;

    if (key === "ArrowDown") {
      const newIsCurrent = isCurrent + 1;

      if (newIsCurrent >= options.length) {
        changeIsCurrent(0);
      } else {
        changeIsCurrent(newIsCurrent);
      }
    } else if (key === "ArrowUp") {
      const newIsCurrent = isCurrent - 1;

      if (newIsCurrent < 0) {
        changeIsCurrent(options.length - 1);
      } else {
        changeIsCurrent(newIsCurrent);
      }
    } else if (key === "Enter") {
      const currentOptionValue = options[isCurrent].value;

      onSelect(currentOptionValue);
      ref.current?.blur();
    }
  };

  const currentOption = useMemo(
    () => options.find((option) => {
      return option.value === value
    }),
    [options, value]
  );

  return (
    <TextInput
      ref={ref}
      id={id}
      className={className}
      label={label}
      onFocus={() => changeIsFocused(true)}
      onBlur={() => {
        changeIsFocused(false);
      }}
      value={currentOption?.text || ''}
      disableCaret={true}
      onKeyDown={onKeyDown}
    >
      {isFocused && (
        <ul>
          {options.map((option, index) => {
            const { value, text } = option;
            const className = isCurrent === index ? "current" : undefined;

            return (
              <li
                key={value}
                className={className}
                onMouseDown={e => {
                  e.preventDefault();
                }}
                onClick={() => {
                  onSelect(value);
                  ref.current?.blur();
                }}
              >
                {text}
              </li>
            );
          })}
        </ul>
      )}
    </TextInput>
  );
};
