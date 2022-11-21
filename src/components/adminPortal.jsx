import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./adminnavbar";
import DishList from "./dishlist";
// import AddDish from "./addDish";
const AdminPortal = () => {
  return (
    <div className="adminportal">
      <AdminNavbar />
      <Routes>
        <Route path="/dishlist" element={<DishList />} />
        {/* <Route path="/addDish" element={<AddDish />} /> */}
      </Routes>
      <div className="navbarimag">
        <h1>
          ENJOY A LUXURY <br /> EXPERIENCE WITH FOOD
        </h1>
        <img
          src="https://st2.depositphotos.com/4513173/6704/i/950/depositphotos_67041205-stock-photo-bhelpuri-chat-item.jpg"
          alt=""
        />
      </div>
      <div className="chats">
        <p>
          My favorite place for pani puri and is so for may other people from{" "}
          <br />
          that area. Good for chat items. The chat items server here are more of{" "}
          <br />
          a south indian style (or CBE style) rather than the authentic one.{" "}
          <br />
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

export default AdminPortal;
