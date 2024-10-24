import React, { useState } from 'react'

function Counthook(initalvalue=0) {
    const [count,setcount]=useState(initalvalue);
    const increment=()=>{setcount(count+1)}
    const decrement=()=>{setcount(count-1)}
    const reset=()=>{setcount(initalvalue)}
  return {increment,decrement,reset}
  
}

export default Counthook
