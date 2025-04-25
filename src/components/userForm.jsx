import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/usersSlice'; // Import addUser

const UserForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addUser({ name })); // Dispatch the addUser action
      setName('');
      setError('');
    } else {
      setError('Please enter a valid name.');
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAdd} disabled={!name.trim()}>
        Add User
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UserForm;
