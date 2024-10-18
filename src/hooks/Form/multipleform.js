import React, { useState } from 'react'

function Multipleform() {
    const[userdetails,setUserdetails]=useState({
        name:"",
        email:"",
        password:""
    })
    const getuserdetails=(event)=>{
      // {key:""}
      setUserdetails({...userdetails,[event.target.name]:[event.target.value]})
    }
    
  return (
    <div>
      <input type='text' name='name' onChange={getuserdetails} /><br/>
      <input type='text' name='email' onChange={getuserdetails} /><br/>
      <input type='text' name='password' onChange={getuserdetails} /><br/>
      <h1>{userdetails.name}</h1>
      <h1>{userdetails.email}</h1>
      <h1>{userdetails.password}</h1>
    </div>
  )
}

export default Multipleform
