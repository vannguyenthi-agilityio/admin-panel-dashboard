import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

// Components
import CustomerList from ".";

describe("CustomerListTable", () => {
  it("Should matches snapshot", async () => {
    act(() => {
      render(
        <BrowserRouter>
          <CustomerList />
        </BrowserRouter>
    )});
    expect(screen.findByText('New Customer'));
  });
});
