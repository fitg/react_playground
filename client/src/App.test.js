import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import fetchMock from 'jest-fetch-mock';

// Mock the Customers component
jest.mock('./Customers', () => () => <div>Mocked Customers Component</div>);

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('renders hello title', async () =>  {
  const mockMessage = { message: 'Hello from the server!' };

  fetch.mockResponseOnce(JSON.stringify(mockMessage));

  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/Hello from the server!/i)).toBeInTheDocument();
  });
});
