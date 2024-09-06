import { render } from "@testing-library/react";

// Mocks
import { MOCK_CUSTOMER, MOCK_COLUMNS } from "@/mocks";

// Components
import TableBody from ".";

// Constants
import { RESULT_NOT_FOUND } from "@/constants";

describe("TableBody", () => {
  const mockProps = {
    data: MOCK_CUSTOMER,
    columns: MOCK_COLUMNS,
  };

  const mockEmptyDataProps = {
    data: [],
    columns: MOCK_COLUMNS,
  };

  it("Should matches snapshot", async () => {
    const { container } = render(
      <table>
        <TableBody {...mockProps} />
      </table>,
    );

    expect(container).toMatchSnapshot();
  });

  it("Should check render with data empty", async () => {
    const { getByText } = render(
      <table>
        <TableBody {...mockEmptyDataProps} />
      </table>,
    );

    expect(getByText(RESULT_NOT_FOUND)).toBeTruthy();
  });
});
