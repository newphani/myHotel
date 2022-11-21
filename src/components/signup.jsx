import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/signup.css'
const SignUp = () => {
    const location = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const signUpUser ={
            username,
            password
        };
        const url = await fetch("http://localhost:1001/customers",{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(signUpUser),
        })
        console.log(await url.json());
        window.confirm('Registered Successfully')
        location('/userLogin');
    }
    const clear = () =>{
        setUsername('');
        setPassword('');
    }
    return ( 
        <div className="signup">
           <div className="sign">
           <form action="/" classname="signup_form" onSubmit={handleSubmit}>
          <div className="head">
            <h1>CustomerSignup</h1>
          </div>
          <div className="email">
            <label htmlFor="username or email">Username or Email</label>
            <input type="text" placeholder="" value={username} onChange={(e)=>setUsername(e.target.value)} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="bun">
            <button>Signup</button>
            <button onClick={clear}>reset</button>
          </div>
        </form>
           </div>
        </div>
     );
}
 
export default SignUp;