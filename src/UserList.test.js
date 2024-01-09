// src/UserList.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import UserList from './UserList';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

jest.mock('axios');

describe('UserList', () => {
  test('calls onSuccess function after fetching users', async () => {
    const mockOnSuccess = jest.fn();
    const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

    axios.get.mockResolvedValue({ data: users });

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <UserList onSuccess={mockOnSuccess} />
      </QueryClientProvider>
    );

    // Wait for axios to be called
    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    // Wait for the onSuccess to be called and log the arguments
    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalled();
      console.log('onSuccess called with:', mockOnSuccess.mock.calls);
    });
  });
});
