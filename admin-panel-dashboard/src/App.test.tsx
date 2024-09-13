import { render, screen, act } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Should render the title', () => {
    act(() => {
      render(<App />)
    });
    expect(screen.findByText('Dashboard'));
  });
});
