import { useState } from "react";
import "../styles/adddish.css";
const AddDish = () => {
  const [img,setImg] = useState('')
  const [dishname, setDishname] = useState("");
  const [gravy, setGravy] = useState("");
  const [rating, setRating] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postBook = {
      img,
      dishname,
      gravy,
      rating,
    };
    const url = await fetch("http://localhost:1001/dishes", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(postBook),
    });
    console.log(await url.json());
    window.confirm("added successfully");
    window.location.reload();
  };
  const reset = () => {
    setDishname("");
    setGravy("");
    setRating("");
  };
  return (
    <div className="adddish">
      <div className="formdish">
        <form action="/" className="addd" onSubmit={handleSubmit}>
          <div className="dishname">
            <h1>Add Dish</h1>
            <label htmlFor="dishname">Image Url</label>
            <input
              type="url"
              placeholder="Enter image url" className="url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <label htmlFor="dishname">DishName</label>
            <input
              type="text"
              placeholder="Enter dish Name"
              value={dishname}
              onChange={(e) => setDishname(e.target.value)}
            />
          </div>
          <div className="dishname">
            <label htmlFor="gravy">Gravy</label>
            <input
              type="text"
              placeholder="Enter the Garvy"
              value={gravy}
              onChange={(e) => setGravy(e.target.value)}
            />
          </div>
          <div className="dishname">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              min={1}
              max={10}
              placeholder="Enter rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        <div className="userbtn">
            <div className="addbtn">
              <button>Add Dish</button>
            </div>
            <div className="resetbtn">
              <button className="fav1" type="reset" onClick={reset}>
                Reset
              </button>
            </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddDish;
