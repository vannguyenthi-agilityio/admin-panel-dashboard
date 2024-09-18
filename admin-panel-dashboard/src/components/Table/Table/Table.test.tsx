import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

// Mocks
import { MOCK_CUSTOMER, MOCK_COLUMNS } from "@/mocks";

// Components
import Table from ".";

describe("Table", () => {
  const mockActionCutomer = jest.fn();
  const mockProps = {
    data: MOCK_CUSTOMER,
    search: {
      field: "id",
      param: "page",
      valueParam: "1",
      placeholder: "Search..."
    },
    columns: MOCK_COLUMNS,
    onActionCustomer: mockActionCutomer,
    onSortFieldCustomer: mockActionCutomer,
  };

  it("Should matches snapshot", async () => {
    const { container } = render(
      <BrowserRouter>
        <Table {...mockProps} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
