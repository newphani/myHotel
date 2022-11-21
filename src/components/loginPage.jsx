import React from 'react'
import "../styles/loginpage.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="mainpage">
            <h1>LoginPage</h1>
        <div className="page">
          <div className="adminn">
            <img
              src="https://cdn.icon-icons.com/icons2/3256/PNG/96/admin_lock_padlock_icon_205891.png"
              alt=""
              className="imagg"
            />
            <Link to="/adminLogin" className="icons">Admin</Link>
          </div>
          <div className="adminn">
            <img
              src="https://cdn.icon-icons.com/icons2/632/PNG/96/user_icon-icons.com_57997.png"
              alt=""
              className="imagg"
            />
            <Link to="/userLogin" className="icons">Customer</Link>
          </div>
          {/* <div className="adminn">
            <img
              src="https://cdn.icon-icons.com/icons2/1340/PNG/96/chef_87588.png"
              alt=""
              className="imagg"
            />
            <Link to="/chefLogin" className="icons">Chef</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
