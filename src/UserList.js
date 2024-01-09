// src/UserList.js
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const UserList = ({ onSuccess }) => {
  const { data, error, isLoading } = useQuery('users', fetchUsers, {
    onSuccess: () => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
