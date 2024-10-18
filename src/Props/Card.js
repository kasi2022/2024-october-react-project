import React from 'react'

function Card({products}) {
  // destructer 
  const {id,name,brand,price}=products
  return (
    <div>
      <h1>Card Details</h1>
      <h1>{name}</h1>
      <p>{brand}</p>
      <p>{price}</p>
      <p>{id}</p>
    </div>
  )
}

export default Card

function add (a,b){
  const c=a+b;
  console.log(c)
}
add(10,20)
