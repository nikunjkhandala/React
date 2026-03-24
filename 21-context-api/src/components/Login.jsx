import React, { useState, UseContext } from "react";
import UserContext from "../context/UseContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlSubmit = () => {};

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.traget.value);
        }}
        type="text"
        placeholder="username "
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.traget.value);
        }}
        type="text"
        placeholder="Passwords "
      />
      <button onClick={handlSubmit}>Submit</button>
    </div>
  );
};

export default Login;
