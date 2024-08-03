import React from "react";
import { describe, expect, test } from "@jest/globals";
import { TextInput, TextInputType } from "../../../src/text-input/text-input";
import renderer, { act } from "react-test-renderer";

describe("Text Input", () => {
  describe("label", () => {
    describe("when the provided label is string", () => {
      test("renders with the provided label", () => {
        const component = renderer.create(<TextInput label="Test" />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the provided label is ReactElement", () => {
      test("renders with the provided label", () => {
        const component = renderer.create(<TextInput label={<div>Test</div>} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("controlled input", () => {
    describe("when value and onChange callback are provided", () => {
      test("renders with the provided value and callback", () => {
        const component = renderer.create(
          <TextInput
            label="Test"
            value="test"
            onChange={newValue => console.log(newValue)}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("className", () => {
    describe("when className is provided", () => {
      test("renders with the provided className", () => {
        const component = renderer.create(
          <TextInput
            label="Test"
            value="test"
            onChange={newValue => console.log(newValue)}
            className="test"
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("id", () => {
    describe("when id is provided", () => {
      test("renders with the provided id", () => {
        const component = renderer.create(
          <TextInput
            id="test"
            label="Test"
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("disabled", () => {
    describe("when disabled is provided", () => {
      test("renders with the provided disabled", () => {
        const component = renderer.create(
          <TextInput
            disabled={true}
            label="Test"
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("placeholder", () => {
    describe("when a placeholder is not provided", () => {
      test("renders the component without the placeholder", () => {
        const component = renderer.create(<TextInput />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when a placeholder is provided", () => {
      test("renders the component with the placeholder", () => {
        const component = renderer.create(<TextInput placeholder="Test" />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("readOnly", () => {
    describe("when the readOnly attribute is not provided", () => {
      test("renders the component as writeable", () => {
        const component = renderer.create(<TextInput />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the readOnly attribute is provided and set to false", () => {
      test("renders the component as writeable", () => {
        const component = renderer.create(<TextInput readOnly={false} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the readOnly attribute is provided and set to true", () => {
      test("renders the component as read only", () => {
        const component = renderer.create(<TextInput readOnly={true} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("type", () => {
    describe("when no type is provided", () => {
      test("sets the type to text", () => {
        const component = renderer.create(<TextInput />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the type is provided", () => {
      test("sets the type to the provided value", () => {
        const component = renderer.create(<TextInput type={TextInputType.EMAIL} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("match regex", () => {
    describe("when no match property is provided", () => {
      test("allows any input", () => {
        let value = "";

        const component = renderer.create(
          <TextInput
            value={value}
            onChange={newValue => {
              value = newValue;
            }}
          />
        );

        act(() => {
          component.root.findByType("input").props.onChange({ target: { value: "a" } });
        });

        expect(value).toBe("a");
      });
    });

    describe("when the match property is provided", () => {
      describe("when the input matches the match property regex", () => {
        test("allows the input", () => {
          let value = "";

          const component = renderer.create(
            <TextInput
              value={value}
              match={/a/}
              onChange={newValue => {
                value = newValue;
              }}
            />
          );

          act(() => {
            component.root.findByType("input").props.onChange({ target: { value: "a" } });
          });

          expect(value).toBe("a");
        });
      });

      describe("when the input does not match the match property regex", () => {
        test("disallows the input", () => {
          let value = "";

          const component = renderer.create(
            <TextInput
              value={value}
              match={/a/}
              onChange={newValue => {
                value = newValue;
              }}
            />
          );

          act(() => {
            component.root.findByType("input").props.onChange({ target: { value: "b" } });
          });

          expect(value).toBe("");
        });
      });
    });
  });
});
