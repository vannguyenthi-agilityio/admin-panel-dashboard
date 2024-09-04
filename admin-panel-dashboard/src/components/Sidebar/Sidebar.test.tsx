import { fireEvent, render } from "@testing-library/react";

// Constants
import { ROUTES } from "@/constants";

// Component
import Sidebar from ".";

describe("Sidebar component", () => {
  const mockFunction = jest.fn();

  const propsDefault = {
    isCollapse: false,
    pathname: "",
    toggleSidebar: mockFunction,
  };

  const sidebar = () => {
    return render(<Sidebar {...propsDefault} />);
  };

  it("Should render Sidebar snapshot correctly", () => {
    expect(sidebar()).toMatchSnapshot();
  });

  it("Should call toggleSidebar when clicked outside", () => {
    const toggleSidebar = jest.fn();
    const { container } = render(
      <div>
        <div id="outside-element">Outside Element</div>
        <Sidebar
          isCollapse={true}
          toggleSidebar={toggleSidebar}
          pathname={ROUTES.HOME}
        />
      </div>,
    );

    const outsideElement = container.querySelector("#outside-element");
    fireEvent.mouseDown(outsideElement!);

    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
});
