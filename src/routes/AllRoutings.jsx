import React, { useContext } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Food from '../components/food/Food'
import Fooddetails from '../components/foodDetails/Fooddetails'
import Cart from '../components/cart/Cart'
import Login from '../pages/login/Login'
import { LoginContext } from '../pages/login/LoginContext'

const AllRoutings = () => {
    let {login,setLogin}=useContext(LoginContext)
  return (
    <div>
       <Navbar/>
  <Routes>
     <Route path='/' element={login ?<Home/>:<Login/>}/>
     <Route path='/food' element={<Food/>}/>
     <Route path='/fooddetails/:id' element={<Fooddetails/>}/>
     <Route path='/cart' element={<Cart/>}/>
  </Routes>
    </div>
  )
}

export default AllRoutings
