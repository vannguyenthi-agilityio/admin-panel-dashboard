import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '.';

const mockOnClick = jest.fn();

describe('Button component', () => {
  it('Renders correctly', () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(container.firstChild).toHaveClass('bg-white');
    expect(container.firstChild).toHaveClass('text-darker');
    expect(container.firstChild).toHaveClass('rounded-lg');
    expect(container.firstChild).toHaveClass('px-4');
  });

  it('Renders correctly with left icon', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👈');
  });

  it('Renders correctly with right icon', () => {
    const { container } = render(
      <Button rightIcon={<span>👉</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👉');
  });

  it('Renders correctly with both icons', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>} rightIcon={<span>👉</span>} />
    );

    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('Renders correctly with label', () => {
    const { container } = render(<Button label="Click Me" />);

    expect(container).toHaveTextContent('Click Me');
  });

  it('Renders correctly with label and left icon', () => {
    const { container } = render(
      <Button
        label="Click Me"
        leftIcon={<span>👈</span>}
        rightIcon={<span>👉</span>}
      />
    );

    expect(container).toHaveTextContent('Click Me');
    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('Render correctly with size prop', () => {
    const { container } = render(<Button size="default" />);

    const { container: containerSmall } = render(<Button size="small" />);

    const { container: containerLarge } = render(<Button size="large" />);

    const { container: containerXXL } = render(<Button size="xxl" />);

    expect(container.firstChild).toHaveClass('text-base');
    expect(containerSmall.firstChild).toHaveClass('text-sm');
    expect(containerLarge.firstChild).toHaveClass('text-lg');
    expect(containerXXL.firstChild).toHaveClass('text-2xl');
  });

  it('Render correctly with rounded prop', () => {
    const { container } = render(<Button rounded="full" />);

    const { container: containerLg } = render(<Button rounded="lg" />);

    const { container: containerNone } = render(<Button rounded="none" />);

    const { container: containerXL } = render(<Button rounded="xl" />);

    const { container: containerXXL } = render(<Button rounded="xxl" />);

    const { container: containerDefault } = render(
      <Button rounded="default" />
    );

    const { container: containerSM } = render(<Button rounded="sm" />);

    expect(container).toMatchSnapshot();
    expect(containerLg).toMatchSnapshot();
    expect(containerNone).toMatchSnapshot();
    expect(containerXL).toMatchSnapshot();
    expect(containerXXL).toMatchSnapshot();
    expect(containerDefault).toMatchSnapshot();
    expect(containerSM).toMatchSnapshot();

    expect(container.firstChild).toHaveClass('rounded-full');
    expect(containerLg.firstChild).toHaveClass('rounded-lg');
    expect(containerNone.firstChild).toHaveClass('rounded-none');
    expect(containerXL.firstChild).toHaveClass('rounded-xl');
    expect(containerXXL.firstChild).toHaveClass('rounded-2xl');
    expect(containerDefault.firstChild).toHaveClass('rounded-md');
    expect(containerSM.firstChild).toHaveClass('rounded-sm');
  });

  it('Render correctly with buttonType prop', () => {

    const { container } = render(<Button buttonType="secondary" />);

    const { container: containerWarning } = render(
      <Button buttonType="warning" />
    );

    const { container: containerError } = render(<Button buttonType="error" />);

    expect(container).toMatchSnapshot();
    expect(containerWarning).toMatchSnapshot();
    expect(containerError).toMatchSnapshot();

    expect(containerWarning.firstChild).toHaveClass(
      'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600'
    );

    expect(containerError.firstChild).toHaveClass(
      'bg-red-500 text-white border-red-500 hover:bg-red-600'
    );
  });

  it('Calls onClick handler when clicked', () => {
    render(<Button onClick={mockOnClick} label='Clickable Button'/>);
    const buttonElement = screen.getByRole('button', { name: /Clickable Button/i });
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
