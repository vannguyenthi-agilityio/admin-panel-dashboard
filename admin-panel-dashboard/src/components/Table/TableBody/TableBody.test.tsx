import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

// Mocks
import { MOCK_CUSTOMER, MOCK_COLUMNS } from "@/mocks";

// Components
import TableBody from ".";

describe("TableBody", () => {
  const mockActionCutomer = jest.fn();
  const mockProps = {
    data: MOCK_CUSTOMER,
    columns: MOCK_COLUMNS,
    onActionCutomer: mockActionCutomer
  };

  it("Should matches snapshot", async () => {
    const { container } = render(
      <BrowserRouter>
        <table>
          <TableBody {...mockProps} />
        </table>
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
