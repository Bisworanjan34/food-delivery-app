import React from 'react'
import './Home.css'
import img1 from '../../assets/img8.png'
import img2 from '../../assets/img4.png'
import img3 from '../../assets/img7.png'
import img4 from '../../assets/img10.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home-main'>
      <div className="container-fluid  w-100" style={{height:'100vh'}}>
        <div className="row h-100 home-t-main mx-auto">
            <div className="col-6  home-title ">
             <div className="Q-delivery">
             <p className=' d-inline-block px-3 rounded-4 py-1 my-1 bg-white'>Quick delivery on time</p>
             <img src={img1} alt="" height={30} />

             </div>
                <h1>Fastest Delivery & </h1>
                <h1>Easy Pickup.</h1>
                <h5>order any meal at any time we will deliver</h5>
                <h5>it directly at your home</h5>

                <div className="home-order-btn">
                <Link to={'/food'}> 
                  <button className='btn btn-success '>Make an order </button></Link>
                  <div className="home-anim"></div>

                </div>
                <div className="salat-img">
              <img src={img3} alt="" />
               </div>
                <div className="salat-img2">
              <img src={img4} alt="" />
               </div>
            </div>
            <div className="col-6 home-img  ">
              <div>
                <img src={img2} alt=""/>
              </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Home
