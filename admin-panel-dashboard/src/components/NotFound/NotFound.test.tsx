import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import NotFound from '.'

describe('NotFound component', () => {
  it('Renders NotFound default component', () => {
    const {container} = render(<NotFound />)
    expect(container).toMatchSnapshot();
  });
})
