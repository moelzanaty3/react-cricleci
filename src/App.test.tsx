import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders subscribe like link', () => {
  render(<App />);
  const linkElement = screen.getByText(/subscribe like/i);
  expect(linkElement).toBeInTheDocument();
});
