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
});
