import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevState) => {
      return [...prevState, {id:Math.random().toString() ,'username': username, 'age': age}];
    });
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
