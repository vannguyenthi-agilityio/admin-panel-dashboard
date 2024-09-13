import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ErrorBoundary from '.';

describe('Error Boundary Component', () => {
  test('renders error boundary component', () => {
    const {container} = render(
      <MemoryRouter>
        <ErrorBoundary>
          <div>Content without error</div>
        </ErrorBoundary>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  })
})
