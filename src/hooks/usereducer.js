import React, { useReducer } from 'react'

const initialState={
  count:0,
  userdetails:{
    name:"",
    age:"",
  }
}
function reducer (state,action){
  switch(action.type){
    case "increment": return {count:state.count+1}
    case "decrement" :return {count:state.count-1}
    case "handelinput" :return {
      ...state ,userdetails:{
        ...state.userdetails,...action.paylod
      }
    }
    default :return state;
  }
}
function UseReducer() {
  const[state,dispath]=useReducer(reducer,initialState)
  const increment =()=>{
    dispath({type:"increment"})
  }
  const decrement =()=>{
    dispath({type:"decrement"})
  }
  const handelinput=(users)=>{
    dispath({type:"handelinput",paylod:users})
  }
  return (
    <div>
      <button onClick={decrement}>-</button>{state.count}<button onClick={increment}>+</button> <br/>
      <input type='text' onChange={(e)=>{handelinput({name:e.target.value})}}/><br/>
      <input type='text' onChange={(e)=>{handelinput({age:e.target.value})}}/><br/>
      <h1>{state.userdetails.name}</h1>
    </div>
  )
}

export default UseReducer
