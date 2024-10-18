import React from 'react'
import { Link } from 'react-router-dom'

function Dashbord() {
  return (
    <div>
      <h1>Dashbord</h1>
      {/* <nav></nav>
      <div className='dashbord'>
        <div className='menu'>
        </div>
        <div className='product'></div>
      </div> */}
      <Link to='/login'>Login</Link><br/>
      <Link to='/usestate'>UseState</Link>

    </div>
  )
}

export default Dashbord
