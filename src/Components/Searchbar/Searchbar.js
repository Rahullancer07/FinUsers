import React from "react";
import "./Searchbar.css";

const Searchbar = ({ users, setSearchedUsers, setIsSearched}) => {
  const searchResult = (e) => {
    if (e.target.value.length > 0) {
      setIsSearched(true);
    }
    const filteredUsers = users.filter((user) => {
      if (
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
        return true;
      else return false;
    });
    setSearchedUsers(filteredUsers);
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar_input"
        type="text"
        placeholder="Search User by Name or Email"
        onChange={searchResult}
      />
    </div>
  );
};

export default Searchbar;
