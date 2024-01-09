// src/App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserList from './UserList';

const queryClient = new QueryClient();

function App() {
  const onSuccess=()=>{
    console.log("test")
  }
  return (
    <QueryClientProvider client={queryClient}>
      <UserList onSuccess={onSuccess} />
    </QueryClientProvider>
  );
}

export default App;
