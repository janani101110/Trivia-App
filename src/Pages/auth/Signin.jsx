import "./Login.css";
import React, { useState } from 'react';
import axios from "axios";
import { URL } from "../url"; 
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../images/loginImage.jpg";
import googleIcon from "../images/googleIcon.png";

const Signup=() => {

 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState(false);
 const navigate=useNavigate();
  

  
    const handleRegister=async ()=>{
      
      try {
        const res = await axios.post(URL + "/api/auth/register", { username, email, password });
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setError(false);
        navigate("/login"); 
        
      } catch (err) {
        setError(true);
        console.log(err);
      }
  
    }


  


  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
    

  }

return (
    <div className="login"> 
    <div className="logindiv"> 

        <img src={LoginImage} className="LoginImage" alt = "login" />
  
    </div>

  <div className="logindiv"> 
  <form className="loginForm">
  <div className="loginTextdiv"> 
        <div className="loginText"> Username </div>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" className ="loginInput" id="usernameField" name="username" autoComplete="username" placeholder ="username" />
    </div>
    <br />
    <div className="loginTextdiv"> 
        <div className="loginText"> Email </div>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" className ="loginInput" autoComplete="email" id="emailField" name="email" placeholder ="E-mail" />
    </div>
    
    <br/> 

    <div className="loginTextdiv"> 
        <div className="loginText"> Password </div>
        <input onChange={(e)=>setPassword(e.target.value)} type="password"  className ="loginInput" autoComplete="password" id="passwordField" name="password"  placeholder ="password" />
    </div>    
     <button onClick={handleRegister} className="loginButton"> Signup </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
  </form>

  <div className="loginTextdiv">
      <button onClick={google} className="googleButton"> Signup with Google <img src={googleIcon} alt="google" className="googleIcon" /> </button>
    </div>
    <div className="loginhr">
    <hr className="hrclass" />
  </div>
  <div className="loginTextdiv"> 
        <div className="loginText">  have an account? </div>
        <Link to="/login"> <button className="loginButton"> Login </button></Link>
    </div>

  </div>
   </div>


);

}
export default Signup;
