import {
  render,
  fireEvent,
  waitFor,
  queryAllByAttribute
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '.'

import { MONTHS } from "@/constants";

describe('Select component', () => {
  it('Renders select component', () => {
    const {container} = render(<Select
        label='Select field'
        options={MONTHS}
      />
    )
    expect(container).toMatchSnapshot();
  });

  it("Renders correct number of options", () => {
    const getById = queryAllByAttribute.bind(null, "id");
    const { container } = render(
      <Select options={MONTHS} name="month" />,
    );
    const selectElement = getById(container, "month");

    expect(selectElement).toBeTruthy();
    
    expect(selectElement[0]?.children).toHaveLength(12);
  });

   it("Renders correct name of options", () => {
    const { getAllByText } = render(
      <Select label="Month" options={MONTHS} defaultValue="4"/>,
    );
    expect(getAllByText("May")).toBeTruthy();
  });

  it("Should call onChange handler with selected value", async () => {
    const onChangeMock = jest.fn(); // Mock the onChange handler

    const { getByTestId } = render(
      <Select
        label="Test Select"
        options={MONTHS}
        onChange={onChangeMock}
        name="month"
      />,
    );

    fireEvent.click(getByTestId("month").firstElementChild as HTMLElement);
    fireEvent.click(getByTestId("month-2"));

    waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(MONTHS[2].value);
    });
  });
})
