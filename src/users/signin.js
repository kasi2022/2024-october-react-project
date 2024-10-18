import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const navigator =useNavigate();

  
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={()=>{navigator("/login")}} >Signin</button>
      {/* <Singleform/> */}
      
    </div>
  )
}

export default Signin
