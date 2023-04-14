import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import UsersList from "./Components/UsersList/UsersList";
import Searchbar from "./Components/Searchbar/Searchbar";
import UserForm from "./Components/UserForm/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  //getting users from the API
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    getUsers();
  }, []);

  // adding user to the list
  const userHandler = (savedUserData) => {
    setUsers((prevUsers) => {
      return [...prevUsers, savedUserData];
    });
  };
  console.log('users', users)

  return (
    <div>
      <Navbar setShowUserForm={setShowUserForm} />
      <Searchbar
        users={users}
        setSearchedUsers={setSearchedUsers}
        setIsSearched={setIsSearched}
      />
      {showUserForm && <UserForm onSaveUserData={userHandler} users={users} setShowUserForm={setShowUserForm} />}
      <UsersList
        userList={
          searchedUsers.length > 0 || isSearched ? searchedUsers : users
        }
      />
    </div>
  );
};

export default App;
