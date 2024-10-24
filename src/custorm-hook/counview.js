import React from 'react'
import Counthook from './Counthook'

function ViewCount() {
    const{count,increment,decrement,reset}=Counthook(2)
  return (
    <div>
      <h1>{count}</h1>
      <button onChange={increment}>+</button>
      <button onChange={decrement}>-</button>
      <button onChange={reset}>reset</button>
    </div>
  )
}

export default ViewCount
