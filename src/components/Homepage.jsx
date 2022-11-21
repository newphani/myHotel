import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
// import {useLocation} from 'react-router-dom'
const Homepage = () => {
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
        <h1>ENJOY A LUXURY <br /> EXPERIENCE WITH FOOD</h1>
        <img
          src="https://st2.depositphotos.com/4513173/6704/i/950/depositphotos_67041205-stock-photo-bhelpuri-chat-item.jpg"
          alt=""
        />
      </div>
      <div className="chats">
        <p>
          My favorite place for pani puri and is so for may other people from <br />
          that area. Good for chat items. The chat items server here are more of <br />
          a south indian style (or CBE style) rather than the authentic one. <br />
        </p>
      </div>
      <div className="millets">
        <img src="https://beru.co.in/uploads/product/pro47280252.jpg" alt="" />
      </div>
      <div className="about">
        <p>
          Rice and jola (sorghum) are the staples of this region. The main food{" "}
          <br />
          items are Jowar and wheat rotis, accompanied by a variety of spicy{" "}
          <br />
          curries, pickles and buttermilk. The South Karnataka cuisine is <br />
          dominated by steamed rice, and ragi (finger millet) and the <br />
          traditional dish is the Ragi ball (Ragi mudde). <br />
        </p>
      </div>
      <div className="about-hotel">
        <div className="company">
          <h1>Company</h1>
          <a href="/">About Us</a>
          <a href="/">Career</a>
          <a href="/">Our Outlets</a>
          <a href="/">Director Message</a>
        </div>
        <div className="company">
          <h1>Help & Support</h1>
          <a href="/">FAQs</a>
          <a href="/">Feedback / Complaint </a>
          <a href="/">Customer Reviews</a>
        </div>
        <div className="company">
          <h1>Partnerships</h1>
          <a href="/">Restaurant Signup</a>
        </div>
      </div>
      <div className="hotel-details">
        <div class="footer">
          <p>
            <a href="/">© Copyright "COMESUM" 2018 All Rights Reserved. </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
