import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { TextInput } from "../text-input/text-input";
import escapeRegExp from "lodash/escapeRegExp";

type Value = string | number | null;
type Text = string;

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

export const Select: SelectInterface = props => {
  const {
    id,
    className,
    label,
    options: allOptions,
    value,
    children,
    placeholder,
    onSelect,
    searchable = false,
  } = props;
  const [isFocused, changeIsFocused] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const [isCurrent, changeIsCurrent] = useState(0);
  const [searchedOptions, changeSearchedOptions] = useState<Option[] | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      if (!searchedOptions) {
        return;
      } else {
        changeSearchedOptions(null);
      }
    } else {
      const newSearchedOptions = allOptions.filter(option => {
        const regexp = new RegExp(escapeRegExp(`${search.toLowerCase()}`));
        const isMatch = !!option.text.toLowerCase().match(regexp);

        return isMatch;
      });

      changeIsCurrent(0);
      changeSearchedOptions(newSearchedOptions);
    }
  }, [search]);

  const options = searchedOptions || allOptions;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const key = e.key;

    if (key === "ArrowDown") {
      e.preventDefault();

      const newIsCurrent = isCurrent + 1;

      if (newIsCurrent >= options.length) {
        changeIsCurrent(0);
      } else {
        changeIsCurrent(newIsCurrent);
      }
    } else if (key === "ArrowUp") {
      e.preventDefault();

      const newIsCurrent = isCurrent - 1;

      if (newIsCurrent < 0) {
        changeIsCurrent(options.length - 1);
      } else {
        changeIsCurrent(newIsCurrent);
      }
    } else if (key === "Enter") {
      e.preventDefault();

      const currentOption = options[isCurrent];
      if (!currentOption) {
        return;
      }

      setSearch("");
      onSelect(currentOption.value);
      ref.current?.blur();
    }
  };

  const currentOption = useMemo(
    () =>
      options.find(option => {
        return option.value === value;
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
      value={isFocused && searchable ? search : currentOption?.text || ""}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      {...(searchable && {
        onChange: value => setSearch(value),
      })}
      readOnly={!searchable}
    >
      {isFocused && (
        <ul>
          {options.map((option, index) => {
            const { value, text, jsx } = option;
            const className = isCurrent === index ? "current" : undefined;

            return (
              <li
                key={value}
                className={className}
                onMouseDown={e => {
                  e.preventDefault();
                }}
                onClick={() => {
                  setSearch("");
                  onSelect(value);
                  ref.current?.blur();
                }}
              >
                {jsx || text}
              </li>
            );
          })}
        </ul>
      )}
      {children}
    </TextInput>
  );
};
