import { fireEvent, render, waitFor } from "@testing-library/react";

// Components
import BirthDayField from ".";

// Types
import { BirthDay } from "@/types";

describe("BirthDayField", () => {
  const mockOnChange = jest.fn();

  const renderComponent = () =>
    render(
      <BirthDayField
        required
        onChange={mockOnChange}
        value={{ months: 1, date: 26, years: 2001 }}
      />,
    );

  it("Match snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });

  it("Match snapshot with empty value", () => {
    const { container } = render(
      <BirthDayField onChange={mockOnChange} value={{} as BirthDay} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("handles month change", () => {
    const { getByTestId, getAllByTestId } = renderComponent();

    fireEvent.click(getByTestId("month").firstElementChild as HTMLElement);
    fireEvent.click(getAllByTestId("option-1")[1]);

    waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({
        months: 1,
      });
    });
  });

  it("Not call change month", () => {
    const { getByTestId } = renderComponent();

    const monthSelect = getByTestId("month").parentElement?.querySelector(
      "select",
    ) as Element;

    fireEvent.change(monthSelect, {
      target: { value: "" },
    });

    expect(mockOnChange).not.toHaveBeenCalledWith({
      months: "",
    });
  });

  it("Not call change date", () => {
    const { getByTestId } = renderComponent();

    const dateSelect = getByTestId("date").parentElement?.querySelector(
      "select",
    ) as Element;

    fireEvent.change(dateSelect, {
      target: { value: 0 },
    });

    expect(mockOnChange).not.toHaveBeenCalledWith({
      date: 0,
    });
  });

  it("Not call change value", () => {
    const { getByTestId } = renderComponent();
    const yearSelect = getByTestId("year").parentElement?.querySelector(
      "select",
    ) as Element;

    fireEvent.change(yearSelect, {
      target: { value: 0 },
    });

    expect(mockOnChange).not.toHaveBeenCalledWith({
      years: 0,
    });
  });
});
