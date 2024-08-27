import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the title', () => {
    render(<App />);
    expect(screen.getByText('Simple Storybook, Jest, TypeScript, Eslint, Husky, Vite and TailwindCSS Sample')).toBeInTheDocument();
  });
});
