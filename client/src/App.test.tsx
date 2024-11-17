import { render, screen, waitFor } from '@testing-library/react';
import App from './App.tsx';
import fetchMock from 'jest-fetch-mock';
import { jest, test, beforeEach, expect } from '@jest/globals';
import React from 'react';

// Mock the Customers component
// eslint-disable-next-line react/display-name
jest.mock('./Customers', () => () => <div>Mocked Customers Component</div>);

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('renders hello title', async () => {
  const mockMessage = { message: 'Hello from the server!' };

  fetch.mockResponseOnce(JSON.stringify(mockMessage));

  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/Hello from the server!/i)).toBeInTheDocument();
  });
});