import React, { useState } from 'react'

function Singleform() {

    const [name,setname]=useState("john") 
    const [email,setEmail]=useState("")
  return (
    <div>
      <h1>Single Form</h1>
      <input type='text' name="name"
      
       onChange={(event)=>{setname(event.target.value)}} />
      <h1>{name}</h1>
      <input type='type' name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
      <h1>Email:{email}</h1>
    </div>
  )
}

export default Singleform
