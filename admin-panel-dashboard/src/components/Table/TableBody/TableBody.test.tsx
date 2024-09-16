import { render } from "@testing-library/react";

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
      <table>
        <TableBody {...mockProps} />
      </table>,
    );

    expect(container).toMatchSnapshot();
  });
});
