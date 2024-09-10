import {
  render
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '.'

describe('Modal component', () => {
  it('Renders modal component', () => {
    const {container} = render(<Modal children={<p className="py-4"> Modal body text goes here.</p>} />)
    expect(container).toMatchSnapshot();
  });
})
