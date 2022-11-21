import Navbar from '../src/components/NavBar';
import Loginpage from '../src/components/loginPage';
import CustLogin from '../src/components/userLogin';
import Adminlogin from './components/adminLogin';
import Cheflogin from './components/chefLogin';
import UserPortal from './components/userPortal';
import AdminPortal from './components/adminPortal';
import ChefPortal from './components/chefPortal'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  let email = "admin@gmail.com"
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navbar />} />
        <Route path="/loginPage" element={ <Loginpage /> } />
        <Route path="/userLogin" element={ <CustLogin /> } />
        <Route path="/adminLogin" element={ <Adminlogin /> } />
        <Route path="/chefLogin" element={ <Cheflogin /> } />
        <Route path="userPortal/*" element={ <UserPortal /> } />
        <Route path="adminPortal/*" element={ <AdminPortal /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
