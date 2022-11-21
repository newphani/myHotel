import {useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/dishlist.css'
const DishList = () => {
    let location = useLocation();
    let [dish, setDish] = useState([])
    useEffect(() =>{
        let fetchDishes= async ()=>{
            let response = await fetch("http://localhost:1001/dishes")
            let data = await response.json();
            setDish(data);
            console.log(data);
        }
        fetchDishes();
   },[])
   const handleDelete =(id)=>{
    fetch(`http://localhost:1001/dishes/${id}`,{
        method:'DELETE',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(dish)
    })
    window.location.reload();
   }
    return ( 
        <div className='dishlist'>
            <div className="len">
            <h1>DishList:{dish.length}</h1>
            </div>
            <div className="dishList">
                {dish.map((data)=>{
                    return(
                    <div className="list">
                        <img src={data.img} alt="" />
                        <button className='btn'>{data.id}</button>
                        <h2>{data.dishname}</h2>
                        <p>{data.gravy}</p>
                        <p>{data.rating}</p>
                        {location.pathname === "/userPortal" ? null :(
                        <button className='btn1' onClick={()=>handleDelete(data.id)}>Delete</button>
                )}
                   {location.pathname === "/adminPortal" ? null :(
                      <Link to='/ordernow'><button className='btn1'>orderNow</button></Link>
                )}
                    </div>
                    )
                })}
            </div>
        </div>
     )
}
 
export default DishList;
