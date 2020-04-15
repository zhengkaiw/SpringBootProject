import React, { useState } from "react";
import RegisterService from "../services/RegisterService";

const Register = () => {
  const initialUserState = {
      id: null,
      name: "",
      email: "",
      username: "",
      password: ""
  };

  const [user, setUser] = useState(initialUserState);
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password
    };

    RegisterService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          username: response.data.username,
          password: response.data.password
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <h4>Please fill in your information below:</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
        type="text"
        className="form-control"
        id="name"
        required
        value={user.name}
        onChange={handleInputChange}
        name="name"
      />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        type="text"
        className="form-control"
        id="email"
        required
        value={user.email}
        onChange={handleInputChange}
        name="email"
      />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
        type="text"
        className="form-control"
        id="username"
        required
        value={user.username}
        onChange={handleInputChange}
        name="username"
      />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
        type="text"
        className="form-control"
        id="password"
        required
        value={user.password}
        onChange={handleInputChange}
        name="password"
      />
      </div>

      <button onClick={saveUser} className="btn btn-success">
        Submit
      </button>
    </div>
  );
};

export default Register;