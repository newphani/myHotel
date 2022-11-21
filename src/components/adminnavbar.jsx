import React from "react";
import {Link} from 'react-router-dom';
import "../styles/usernavbar.css";
// import {useLocation} from 'react-router-dom'
// import DishList from './dishlist';
const AdminNavBar = (props) => {
//  const   location=useLocation();
let email = props.data;
  return (
    <div className="navbar">
      <div className="hotel">
        <div className="icon">
          <div className="admin-portal">
          <h2>myHotel</h2>
          <p>Admin@gmail.com</p>
          </div>
          <img
            src="https://media.istockphoto.com/id/1175402621/vector/hotel-reception-and-travellers-talking-with-receptionists-indoors-interior.jpg?b=1&s=170x170&k=20&c=EU7YntWLWNN4_Y2fXmyFx28u7WdJ2r5JcDNHUw_9wlU="
            alt="Icon of the Hotel"
          />
        </div>
        <div className="logon">
          <ul>
            <li>
              <Link to='/adminPortal' className="logon">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addDish" className="logon">
                AddDish
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hotel-details"></div>
    </div>
  );
};
export default AdminNavBar;
