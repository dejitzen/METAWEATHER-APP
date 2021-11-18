import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders main page', () => {
  const { container } = render(<App />)

  expect(container).toBeInTheDocument()
});
