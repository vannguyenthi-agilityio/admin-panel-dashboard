import { render } from "@testing-library/react";

// Mocks
import { MOCK_COLUMNS } from "@/mocks";

// Components
import TableHeader from ".";

const mockFunction = jest.fn();

describe("TableHeader", () => {
  const mockProps = {
    columns: MOCK_COLUMNS,
    onSort: mockFunction
  };

  it("Should matches snapshot", async () => {
    const { container } = render(
      <table>
        <TableHeader {...mockProps} />
      </table>,
    );
    expect(container).toMatchSnapshot();
  });
});
