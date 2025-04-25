
import React from 'react';
import UserForm from './components/userForm';
import UserList from './components/UserList';
import FetchUsers from './components/FetchUsers';

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm />
      <h2>Fetched Users</h2>
      <FetchUsers />
      <h2>Manually Added Users</h2>
      <UserList />
    </div>
  );
};

export default App;

