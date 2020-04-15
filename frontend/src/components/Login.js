import React, { useState } from "react";
import LoginService from "../services/LoginService";

const Login = () => {
  const [logined, setLogined] = useState(false);
  const [searchUsername, setSearchUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onChangeSearchUsername = e => {
    const searchUsername = e.target.value;
    setSearchUsername(searchUsername);
  }

  const onChangePassword = e => {
    const userPassword = e.target.value;
    setUserPassword(userPassword);
  }

  const findByUsername = () => {
    LoginService.login(searchUsername)
      .then(response => {
        console.log(response.data);
        if (response.data.password === userPassword)
          setLogined(true)
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      {logined ? (
        <div>
          <h4>Login successfully!</h4>
        </div>
      ) : (
      <div>
        <h4>Login with your username and password</h4>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={searchUsername}
            onChange={onChangeSearchUsername}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="password"
            value={userPassword}
            onChange={onChangePassword}
          />
        </div>

        <button onClick={findByUsername} className="btn btn-success">
          Submit
        </button>
      </div>
      )}  
    </div>
  );
};

export default Login;