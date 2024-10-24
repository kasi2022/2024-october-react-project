import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetAllProducts() {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        const getproducts= async ()=>{
            const res=await axios.get("https://api.restful-api.dev/objects")
            // console.log(res)
            setproducts(res.data)
            console.log(products)

        }
        getproducts()
    })
  return (
    <div>
      <h1>Product Details</h1>
      {
        products.map((items)=>{
            return(
                <div key={items.id}>
                    
                  <p>{items.name}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default GetAllProducts
