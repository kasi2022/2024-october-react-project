import { useState } from "react"

function UseSate() {
    // const num=[1,2,3,4,5]
    // const [a,b]=num;
    // initile state, updatedState
    const[cout,setCount]=useState(0) //data type number,bool,object,array
    // hooks
    //  shoud be must  written inside the top level of the function component
    
    const decrement = ()=>{
        setCount(cout-1);
    }
  return (
    <div>
      <h1>{cout}</h1><br/>
      {/* inline function */}
      <button onClick={()=>{setCount(cout+1)}}>+</button >

      <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseSate
