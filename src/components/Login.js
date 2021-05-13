import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.username === "student" && data.password === "student") {
      console.log("Login successfully");
      return history.push("/register");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const formStyle = {
    width: "360px",
    height: "auto",
    border: "1px solid #000000",
    margin: "auto",
    marginTop: "250px",
    padding: "40px 30px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 5px",
    marginTop: "5px",
  };

  const submitStyle = {
    padding: "5px",
    marginTop: "15px",
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <form action="" onSubmit={handleSubmit} style={formStyle}>
        <h1 style={{ marginBottom: "20px" }}>Login</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          style={inputStyle}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          style={inputStyle}
        />
        <input type="submit" value="Login" style={submitStyle} />
      </form>
    </div>
  );
};

export default Login;
