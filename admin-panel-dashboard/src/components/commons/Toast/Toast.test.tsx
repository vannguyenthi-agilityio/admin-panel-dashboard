import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Toast from '.'

// Types
import { TOAST_TYPE } from '@/types';

describe('Toast component', () => {
  it('Renders toast success component', () => {
    const {container} = render(<Toast />)
    expect(container).toMatchSnapshot();
  });

  it('Renders toast warning component', () => {
    const {container} = render(<Toast toastType={TOAST_TYPE.WARNING} />)
    expect(container).toMatchSnapshot();
  });

  it('Renders toast error component', () => {
    const {container} = render(<Toast toastType={TOAST_TYPE.ERROR} />)
    expect(container).toMatchSnapshot();
  });
})
