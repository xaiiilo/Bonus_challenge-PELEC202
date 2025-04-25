// UserList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';

const UserList = () => {
  const users = useSelector((state) => state.users.data); // Make sure you're accessing `.data`
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button style={{ backgroundColor: 'pink', marginLeft: '10px', textAlign: 'left', color: 'white', borderRadius: '25px' }} onClick={() => dispatch(deleteUser(user.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
