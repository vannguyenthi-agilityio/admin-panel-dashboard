import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import BreadCrumb from '.'

// Constants
import { ICON_ITEM_BREADCRUMB } from '@/constants';

describe('BreadCrumb component', () => {
  it('Renders breadcrumb default component', () => {
    const {container} = render(<BreadCrumb />)
    expect(container).toMatchSnapshot();
  });

  it('Renders breadCrumb with Icon Item component', () => {
    const {container} = render(<BreadCrumb itemsBreadcrumb={ICON_ITEM_BREADCRUMB} />)
    expect(container).toMatchSnapshot();
  });
})
