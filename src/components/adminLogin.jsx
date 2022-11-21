import React from "react";
import { useState } from "react";
import "../styles/adminLogin.css";
// import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Adminlogin = (props) => {
  // let data=props.email
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let handleSubmit = () => {
    navigate("/adminPortal");
    if (email === "admin@gmail.com" && password === "1234") {
    } else {
      alert("invalid userName or Password");
    }
  };
  return (
    <div className="admlogin">
      <div className="admin">
        <form action="/" classname="login_form" onSubmit={handleSubmit}>
          <div className="head">
            <h1>AdminLogin</h1>
            <p>Hey,enter your details to Signin <br /> to your Account</p>
          </div>
          <div className="email">
            {/* <label htmlFor="username or email">Username or Email</label> */}
            <input
              type="text"
              placeholder="username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgotpass">
            <a href="/">Forgotten Password?</a>
          </div>
          <div className="btnn">
            <button>LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
