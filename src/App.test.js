import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ALB text', () => {
  render(<App />);
  const textElement = screen.getByText(/Agustin Leon Barranco/);
  expect(textElement).toBeInTheDocument();
});
