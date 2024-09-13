// Libs
import { useForm } from "react-hook-form";
import { render } from "@testing-library/react";

// Components
import CustomerInfo from ".";

// Types
import { ICustomerData } from "@/types";

const mockControllerNonError = (name: string, rule: Object) => ({
  field: {
    name: name,
    rules: rule,
    onChange: jest.fn(),
    value: [],
  },
  formState: { errors: {} },
  fieldState: { error: {} },
});

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  // Mock the useForm hook
  useForm: jest.fn(() => {
    return {
      formState: {
        errors: {},
      },
    };
  }),
  // Mock the Controller component
  Controller: (props: any) =>
    props.render(mockControllerNonError(props.name, props.rule)),
}));

describe("UserInfo Component", () => {
  const { control } = useForm<ICustomerData>();

  const renderCustomerInfoComponent = () =>
    render(
      <CustomerInfo
        control={control}
      />,
    );

  it("should match snapshot", () => {
    const { container } = renderCustomerInfoComponent();
    expect(container).toMatchSnapshot();
  });
});
