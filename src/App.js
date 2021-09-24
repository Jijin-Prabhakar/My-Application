import "./App.css";
import React, { useState, useEffect } from "react";

// Components
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import UserList from "./components/UserList/UserList";
import AddUser from "./components/AddUser/AddUser";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([]);

  // Add User
  const addUserHandler = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  // Delete User
  const removeUser = (id) => {
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUserList);
  };

  // Get items from local storage
  useEffect(() => {
    const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveData) setUsers(retrieveData);
  }, []);

  // Set items to the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <div className="container App">
      <div className="row">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9">
              <AddUser addUserHandler={addUserHandler} />
              <UserList users={users} getUserId={removeUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
