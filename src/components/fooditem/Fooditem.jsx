import React from 'react'
import './Fooditem.css'
import { Link } from 'react-router-dom'
const Fooditem = ({food}) => {
    let {title,image,rating,price,id}=food
  return (
    <div>
         <Link to={`/fooddetails/${id}`}> 
      <div className="food-item">
        
              <img src={image} alt=""  />

                <div className="fi-title">
                    <p>{title}</p>
                </div>
                <div className="fi-price d-flex gap-3">
                    <b>${price}</b>
                    <p>{rating}</p>
                </div>
            </div>
       
     </Link>
    </div>
  )
}

export default Fooditem
