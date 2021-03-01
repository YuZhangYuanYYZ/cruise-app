import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Building Test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Building/i);
  expect(linkElement).toBeInTheDocument();
});
