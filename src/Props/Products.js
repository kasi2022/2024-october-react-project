import React from 'react'
import Card from './Card'

function Products() {
   const mobiles=[
    {id:1,name:"iphone 13 pro max" ,brand:"Iphone" ,price:75000},
    {id:2,name:"v7 +" ,brand:"vivo" ,price:5000},
    {id:3,name:"12 pro max gold " ,brand:"realme" ,price:50000},
    {id:4,name:"gallexy edg disply" ,brand:"samsung" ,price:51000},
    {id:5,name:"iphone 13" ,brand:"Iphone" ,price:71000},
    {id:6,name:"htc android 12" ,brand:"htc" ,price:80000},
  ]
  return (
    <div>
      <h1>Product screen</h1>
      {
        mobiles.map((mobiles)=>{
           return (
            // key is used to identify the duplicate 
            // obj value which has update  it can (delte,edit,insted)
            <div key={mobiles.id}>
              <Card products={mobiles} />
            </div>
           )
        })
      }
      {/* <Card heading="iphone" name="Iphone 13 pro max" /> */}
    </div>
  )
}

export default Products
