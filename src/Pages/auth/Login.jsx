import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext.jsx"
import LoginImage from "../images/loginImage.jpg";
import googleIcon from "../images/googleIcon.png";

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
      console.log(res.data)
      setUser(res.data)
      navigate("/")

    }
    catch(err){
      setError(true)
      console.log(err)

    }

  }
return (
    <div className="login"> 
    <div className="logindiv"> 

        <img src={LoginImage} className="LoginImage" alt = "login" />
  
    </div>

  <div className="logindiv"> 
  <form className="loginForm">
  <div className="loginTextdiv"> 
        <div className="loginText"> Email </div>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" className ="loginInput" placeholder ="email" />
    </div>
    
    <br/> 

    <div className="loginTextdiv"> 
        <div className="loginText"> Password </div>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" className ="loginInput" placeholder ="password" />
    </div>    
    <button onClick={handleLogin}  className="loginButton"> Login </button>
    {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
  </form>

  <div className="loginTextdiv">
      <Link to="/login"> <button className="googleButton"> login with Google <img src={googleIcon} alt="google" className="googleIcon" /> </button></Link>
    </div>
    <div className="loginhr">
    <hr className="hrclass" />
  </div>
  <div className="loginTextdiv"> 
        <div className="loginText"> Don't have an account? </div>
        <Link to="/signup"> <button className="loginButton"> Sign Up </button></Link>
    </div>

  </div>
   </div>

);

}
export default Login;
