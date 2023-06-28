import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Telefone: {user.phone}</p>
    </div>
  );
};

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const App = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
    },
  ];

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;