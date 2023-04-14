import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ onSaveUserData, users, setShowUserForm }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState();

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: users.length + 1,
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
    };

    onSaveUserData(userData);
    setShowUserForm(false);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
  };

  return (
    <div className="userForm">
      <form onSubmit={submitHandler}>
        <div>
          <div className="userForm_control">
            <label>Name</label>
            <input
              type="text"
              name="name"
              minLength={3}
              onChange={nameHandler}
              value={enteredName}
              required
            />
          </div>
          <div className="userForm_control">
            <label>Email</label>
            <input
              type="email"
              value={enteredEmail}
              onChange={emailHandler}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>
          <div className="userForm_control">
            <label>Phone</label>
            <input
              type="number"
              pattern="[789][0-9]{9}"
              value={enteredPhone}
              onChange={phoneHandler}
              required
            />
          </div>
          <div className="userForm_action">
            <button type="submit" className="userForm_submit">
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
