import React from 'react';

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders the correct greeting message', () => {
  render(<Greeting name="Tony" />);
  const greetingElement = screen.getByText(/Hello, Tony!/i);
  expect(greetingElement).toBeInTheDocument();
});