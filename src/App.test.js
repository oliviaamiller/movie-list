import { render, screen } from '@testing-library/react';
import App from './App';

test('renders impermanent link', () => {
  render(<App />);
  const linkElement = screen.getByText(/impermanent/i);
  expect(linkElement).toBeInTheDocument();
});
