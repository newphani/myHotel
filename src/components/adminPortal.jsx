import { Route, Routes } from 'react-router-dom';
import AdminNavbar from './adminnavbar';
import DishList from './dishlist';
import AddDish from './addDish';
const AdminPortal = () => {
    return ( 
        <div className="adminportal">
            <AdminNavbar />
            <Routes>
            <Route path="/dishlist" element={<DishList />} /> 
            <Route path="adminPortal/addDish" element={<AddDish />}/>
            </Routes> 
        </div>
     );
}
 
export default AdminPortal;