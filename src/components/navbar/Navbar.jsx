import React, { useContext } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../pages/login/LoginContext'
import { useSelector } from 'react-redux'
const Navbar = () => {
  let {login,setLogin}=useContext(LoginContext)
  let cart = useSelector((s) => s.reducer1.cart)
  return (
    <div>
      <div className="container " style={{height:'50px'}}>
        <div className="row align-items-center h-100">
            <div className="col-3 align-items-center h-100 d-flex">
                <div className="logo">
                    <h3> <span className='logo-t fw-bold h5'>No1</span>Food</h3>
                </div>
            </div>
            <div className="col-9 d-flex justify-content-center gap-4 align-items-center nav-cont ">
                <Link to={'/'}><p>Home</p></Link>
                <Link to={'/food'}><p>Food</p></Link>
                <Link to={'/service'}><p>service</p></Link>
                <Link to={'/cart'}><p className=' position-relative'>cart
                  <span className='position-absolute top-0 right-0 rounded-circle bg-primary text-white ps-1' style={{height:'15px',width:'15px',fontSize:'10px'}}>{cart && cart.length}</span>
                  </p></Link>
                <Link to={'/'}><p onClick={()=>{
                  setLogin(false)
                  }}>Logout</p></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
