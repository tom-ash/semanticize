import React from "react";
import { describe, expect, test } from "@jest/globals";
import { Select } from "../../../src/select/select";
import renderer, { act } from "react-test-renderer";

const options = [
  { value: "foo", text: "Foo" },
  { value: "bar", text: "Bar" },
  { value: "baz", text: "Baz" },
];

const onSelect = value => console.log(value);

const requiredProps = {
  options,
  value: "foo",
  onSelect,
};

describe("Select", () => {
  describe("label", () => {
    describe("when the provided label is string", () => {
      test("renders with the provided label", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the provided label is ReactElement", () => {
      test("renders with the provided label", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when no label is provided", () => {
      test("renders without a label", () => {
        const component = renderer.create(<Select {...requiredProps} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("options", () => {
    describe("when the select's text input is not focused", () => {
      test("does not show options", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the select's text input is focused", () => {
      test("shows options", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        act(() => {
          component.root.findByType("input").props.onFocus({ target: { value: "" } });
        });

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("value", () => {
    describe("when an option is selected", () => {
      test("it sets the text input value to option text", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when an option is not selected", () => {
      test("it sets the text input value to an empty string", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...{ ...requiredProps, value: null }}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("children", () => {
    describe("when children are not provided", () => {
      test("it renders the component without children", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when children are provided", () => {
      test("it renders the component with children", () => {
        const component = renderer.create(
          <Select
            label="Test"
            children={<>TEST</>}
            {...{ ...requiredProps, value: null }}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("placeholder", () => {
    describe("when a placeholder is not provided", () => {
      test("it renders the component without a placeholder", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when a placeholder is provided", () => {
      test("it renders the component with a placeholder", () => {
        const component = renderer.create(
          <Select
            label="Test"
            placeholder="Test"
            children={<>TEST</>}
            {...{ ...requiredProps, value: null }}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("search", () => {
    describe("when the component is not searchable", () => {
      test("renders the underlying text input as read only", () => {
        const component = renderer.create(
          <Select
            label="Test"
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the component is searchable", () => {
      test("renders the underlying text input as writable", () => {
        const component = renderer.create(
          <Select
            label="Test"
            searchable={true}
            {...requiredProps}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      describe("when the search input is provided", () => {
        test("renders only options matching the search input", () => {
          const component = renderer.create(
            <Select
              label="Test"
              searchable={true}
              {...requiredProps}
            />
          );

          act(() => {
            component.root.findByType("input").props.onFocus({ target: { value: "" } });
            component.root.findByType("input").props.onChange({ target: { value: "f" } });
          });

          const tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        });

        test("marks the first searched option as current", () => {
          const component = renderer.create(
            <Select
              label="Test"
              searchable={true}
              {...requiredProps}
            />
          );

          act(() => {
            component.root.findByType("input").props.onFocus({ target: { value: "" } });
            component.root.findByType("input").props.onChange({ target: { value: "b" } });
          });

          const tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        });
      });
    });
  });

  describe("jsx options", () => {
    describe("when the jsx options are provided", () => {
      test("it renders the options using the provided jsxs instead of texts", () => {
        const options = [
          { value: "foo", text: "Foo", jsx: <div>Foo</div> },
          { value: "bar", text: "Bar", jsx: <div>Bar</div> },
          { value: "baz", text: "Baz", jsx: <div>Baz</div> },
        ];

        const component = renderer.create(
          <Select
            label="Test"
            options={options}
            value="foo"
            onSelect={onSelect}
          />
        );

        act(() => {
          component.root.findByType("input").props.onFocus({ target: { value: "" } });
        });

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
