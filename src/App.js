import HomePage from '../src/components/Homepage';
import Loginpage from '../src/components/loginPage';
import CustLogin from '../src/components/userLogin';
import Adminlogin from './components/adminLogin';
import UserPortal from './components/userPortal';
import AdminPortal from './components/adminPortal';
import AddDish from './components/addDish';
import PageNotFound from './components/pageNotFound';
import SignUp from './components/signup';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  let email = "admin@gmail.com"
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/loginPage" element={ <Loginpage /> } />
        <Route path="/userLogin" element={ <CustLogin /> } />
        <Route path="/adminLogin" element={ <Adminlogin /> } />
        <Route path="userPortal/*" element={ <UserPortal /> } />
        <Route path="adminPortal/*" element={ <AdminPortal data={email} />} />
        <Route path="/addDish" element={ <AddDish /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
