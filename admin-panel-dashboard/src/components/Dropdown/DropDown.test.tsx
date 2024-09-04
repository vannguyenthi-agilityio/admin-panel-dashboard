import {
  render
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from '.'

describe('Dropdown component', () => {
  it('Renders dropdown component', () => {
    const {container} = render(<Dropdown />)
    expect(container).toMatchSnapshot();
  });

  it('Renders dropdown not logout component', () => {
    const {container} = render(<Dropdown hasLogOut={false} />)
    expect(container).toMatchSnapshot();
  });
})
