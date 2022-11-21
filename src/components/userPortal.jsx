import DishList from './dishlist';
import Usernavbar from './userNavbar';
import {Routes,Route} from 'react-router-dom' 
const UserPortal = () => {
    return ( 
            <div className="userportal">
                <Usernavbar />
                <Routes>
                    <Route path="userPortal/dishlist" element={<DishList />} />
                </Routes>
            </div>
     );
}
 
export default UserPortal;