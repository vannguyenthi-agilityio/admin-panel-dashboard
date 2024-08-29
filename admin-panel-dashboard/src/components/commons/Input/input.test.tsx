import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '.'

describe('Input component', () => {
  it('Renders input component', () => {
    const {container} = render(<Input
      name='Input field'
      type='text'/>
    )
    expect(container).toMatchSnapshot();
  });

  it('Handles defaultValue and onChange event', () => {
    const handleChange = jest.fn();
    render(<Input
      defaultValue='Initial value'
      onChange={handleChange}
      name='Input field'
      label='Input field'
      id="Input field"
      type='text'/>
    )

    const inputElement = screen.getByLabelText('Input field');
    expect(inputElement).toHaveValue('Initial value');

    // Simulate a change event
    fireEvent.change(inputElement, { target: { value: 'New value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should show error message when have error message', () => {
    render(<Input
      errorMessage='This is an error'
      name='Input field'
      type='text'
    />);
    const errorMessage = screen.getByText('This is an error');
    expect(errorMessage).toBeInTheDocument();
  })

  it('Should not render error message when have not error message', () => {
    render(<Input
      name='Input field'
      type='text'
    />);
    const errorMessage = screen.queryByText('This is an error');
    expect(errorMessage).not.toBeInTheDocument();
  })
})
