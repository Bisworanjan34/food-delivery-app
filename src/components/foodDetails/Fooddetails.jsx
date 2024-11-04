import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Fooddetails.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/createSlice'
const Fooddetails = () => {
    const{id}=useParams()
    let [foodD,setFoodD]=useState({})
    let dispatch=useDispatch()
    axios.get(`http://localhost:3000/food_items/${id}`)
    .then((res)=>{
        // console.log(res.data)
        setFoodD(res.data)
    })

    const addtoCart=(food)=>{
      axios.post(`http://localhost:3000/cart/`,food)
      // .then((t)=>console.log(t.data.foodD))
      dispatch(addToCart(food))
    }
  
    
  return (
    <div>
      <div className="container ">
        <div className="row fd">
            <div className="col-6 px-3">
               <div className="fd-img">
               <img src={foodD.image} alt=""/>
               </div>
            </div>
            <div className="col-6 px-3">
                <div className="fd-title">
                    <h3>{foodD.title}</h3>
                </div>
                <div className="fd-price d-flex gap-4">
                    <h4>${foodD.price}</h4>
                    <p>{foodD.rating}</p>
                </div>
                <div className="fd-description">
                    <p>{foodD.description}</p>
                </div>
                <div className="fd-btn mt-4">
                  <button className='btn btn-warning px-3' onClick={()=>addtoCart(foodD)}>AddCart</button>
                  <button className='btn btn-primary ms-4 px-3'>BuyNow</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fooddetails
