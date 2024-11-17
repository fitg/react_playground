import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Customers from './Customers';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('renders Customers component and fetches data', async () => {
  const mockCustomers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  fetch.mockResponseOnce(JSON.stringify(mockCustomers));

  render(<Customers />);

  expect(screen.getByText(/Customers/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});