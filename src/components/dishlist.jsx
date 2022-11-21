import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
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
        <div className='booklist'>
            <div className="len">
            <h1>DishList:{dish.length}</h1>
            </div>
            <div className="bookList">
                {dish.map((data)=>{
                    return(
                    <div className="list">
                        <button className='btn'>{data.id}</button>
                        <h2>{data.dishname}</h2>
                        <p>{data.gravy}</p>
                        <p>{data.rating}</p>
                        {location.pathname === "/userPortal/dishlist" ? null :(
                        <button className='btn1' onClick={()=>handleDelete(data.id)}>Delete</button>
                )}
                    </div>
                    )
                })}
            </div>
        </div>
     )
}
 
export default DishList;
