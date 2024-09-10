import { render } from "@testing-library/react";

// Components
import HeaderCell from ".";

describe("HeaderCell component", () => {
  const propsHaveSortHeaderCell = {
    title: "Customer",
    isSortable: true,
  };

  it("should render snapshot correctly", () => {
    const { container } = render(
      <HeaderCell {...propsHaveSortHeaderCell} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should have Sort button if isSortable is true", () => {
    const { getByLabelText } = render(
      <HeaderCell {...propsHaveSortHeaderCell} />,
    );

    expect(getByLabelText("Arrow Sort")).toBeTruthy();
  });

  it("should not have Sort button if isSortable is false", () => {
    const propsIncreaseTypeHeaderCell = {
      title: "",
      isSortable: false,
    };

    const { queryByLabelText } = render(
      <HeaderCell {...propsIncreaseTypeHeaderCell} />,
    );

    expect(queryByLabelText("Arrow Sort")).toBeFalsy();
  });
});
