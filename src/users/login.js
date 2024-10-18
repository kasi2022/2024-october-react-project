import React from 'react'
import { useNavigate } from "react-router-dom";
import '../users/style.css';
function Login() {
    const navigate = useNavigate();
    return (
    <div className='parent' >
      <div className='center-card'>
      <input type='text' />
      <input type='password' />
      <button className='btn' onClick={()=>{
        navigate("/dashbord")}}>Login</button>
      </div>
      
    </div>
  )
}

export default Login
