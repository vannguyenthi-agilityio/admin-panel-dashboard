import { render } from "@testing-library/react";

// Components
import Loading from "./Loading";

describe("Loading component", () => {
  it("Should render Loading snapshot correctly", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it("Should render Loading snapshot full width", () => {
    const { container } = render(<Loading isFullWidth={true} />);
    expect(container).toMatchSnapshot();
  });
});
