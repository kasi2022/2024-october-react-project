import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './users/signin'
import Login from './users/login'
import Dashbord from './dashbord/dashbord'
import UseSate from './hooks/useState'
import HomeForm from './hooks/Form/homefor,'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}  />
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='/usestate' element={<UseSate/>}/>
        <Route path='/homeform' element={<HomeForm/>}/>


      </Routes>
      
    </div>
  )
}

export default Routing
