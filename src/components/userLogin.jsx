import React from "react";
import { useState } from "react";
import "../styles/userlogin.css";
import { useNavigate } from "react-router-dom";
function Customerlogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let handleSubmit = () =>{
    if(email=="user@gmail.com"&&password==1234){
      navigate("/userPortal")
    }
  }
  return (
    <div className="usrlogin">
      <div className="user">
        <form action="/" classname="login_form" onSubmit={handleSubmit}>
          <div className="head">
            <h1>CustomerLogin</h1>
          </div>
          <div className="email">
            <label htmlFor="username or email">Username or Email</label>
            <input type="text" placeholder="" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="forgotpass">
            <a href="/">Forgotten Password?</a>
          </div>
          <div className="bun">
            <button>LOG IN</button >
          </div>
        </form>
      </div>
    </div>
  );
}

export default Customerlogin;
