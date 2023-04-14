import React from "react";
import "./UsersList.css";

const UsersList = ({ userList }) => {
  return (
    <div className="userList_table">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {userList.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UsersList;
