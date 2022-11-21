import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
// import {useLocation} from 'react-router-dom'
const NavBar = () => {
  //  const   location=useLocation();
  return (
    <div className="navbar">
      <div className="hotel">
        <div className="icon">
          <h2>myHotel</h2>
          <img
            src="https://media.istockphoto.com/id/1175402621/vector/hotel-reception-and-travellers-talking-with-receptionists-indoors-interior.jpg?b=1&s=170x170&k=20&c=EU7YntWLWNN4_Y2fXmyFx28u7WdJ2r5JcDNHUw_9wlU="
            alt="Icon of the Hotel"
          />
        </div>
        <div className="logon">
          <ul>
            <li>
              <a href="/" className="logon">
                Home
              </a>
            </li>
            <li>
              <Link to="/loginPage" className="logon">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbarimag">
        <img
          src="https://st2.depositphotos.com/4513173/6704/i/950/depositphotos_67041205-stock-photo-bhelpuri-chat-item.jpg"
          alt=""
        />
      </div>
      <div className="about">
        <p>
          Rice and jola (sorghum) are the staples of this region. The main food <br />
          items are Jowar and wheat rotis, accompanied by a variety of spicy <br />
          curries, pickles and buttermilk. The South Karnataka cuisine is <br />
          dominated by steamed rice, and ragi (finger millet) and the <br />
          traditional dish is the Ragi ball (Ragi mudde). <br />
        </p>
      </div>
      <div className="hotel-details">
        <div class="footer">
          <p>
            <a href="/">About</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
