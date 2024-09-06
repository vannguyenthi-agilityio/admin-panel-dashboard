import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Header from '.'

describe('Header component', () => {
  it('Renders header default component', () => {
    const {container} = render(<Header />)
    expect(container).toMatchSnapshot();
  });
})
