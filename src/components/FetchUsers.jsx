import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';
import { ClipLoader } from 'react-spinners'; // <--- Add this

const FetchUsers = () => {
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Show spinner while loading
  if (status === 'loading') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <ClipLoader size={40} color="#000000" />
      </div>
    );
  }

  if (status === 'failed') return <p>Failed to load users.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default FetchUsers;
