import React, { useState } from "react";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Username:", userName);
    console.log("Password:", password);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]+$/.test(value) || value === "") {
      setFirstName(value);
      setFirstNameError("");
    } else {
      setFirstNameError("Invalid first name");
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]+$/.test(value) || value === "") {
      setLastName(value);
      setLastNameError("");
    } else {
      setLastNameError("Invalid last name");
    }
  };

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);

    if (value.length < 5 || value.length > 30) {
      setUserNameError("Username must be between 5 and 30 characters.");
    } else if (!/^[a-zA-Z0-9._]+$/.test(value)) {
      setUserNameError(
        "Username can only contain alphanumeric characters, '.', and '_'."
      );
    } else if (!/[._]/.test(value)) {
      setUserNameError("Username must contain at least one '.' or '_'.");
    } else {
      setUserNameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 7 || value.length > 16) {
      setPasswordError("Password must be between 7 and 16 characters.");
    } else if (!/[a-z]/.test(value)) {
      setPasswordError("Password must contain at least one lowercase letter.");
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else if (!/[0-9]/.test(value)) {
      setPasswordError("Password must contain at least one digit.");
    } else if (!/[!@#$%^&*()_+|?~]/.test(value)) {
      setPasswordError("Password must contain at least one special character.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='w-1/2 p-6 border rounded-lg shadow-lg'
      >
        <h2 className='text-2xl font-bold mb-4'>User Registration</h2>
        <div className='mb-4'>
          <label className='block font-medium mb-2'>First Name</label>
          <input
            required
            className={`w-full px-4 py-2 border rounded-md ${
              firstNameError ? "border-red-500" : ""
            }`}
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {firstNameError && (
            <p className='text-red-500 mt-1'>{firstNameError}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-2'>Last Name</label>
          <input
            required
            className={`w-full px-4 py-2 border rounded-md ${
              lastNameError ? "border-red-500" : ""
            }`}
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
          />
          {lastNameError && (
            <p className='text-red-500 mt-1'>{lastNameError}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-2'>Username</label>
          <input
            required
            className={`w-full px-4 py-2 border rounded-md ${
              userNameError ? "border-red-500" : ""
            }`}
            type='text'
            value={userName}
            onChange={handleUserNameChange}
          />
          {userNameError && (
            <p className='text-red-500 mt-1'>{userNameError}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-2'>Password</label>
          <input
            required
            className={`w-full px-4 py-2 border rounded-md ${
              passwordError ? "border-red-500" : ""
            }`}
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className='text-red-500'>{passwordError}</p>}
        </div>
        <button
          className='px-4 py-2 bg-blue-500 text-white rounded-md'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
