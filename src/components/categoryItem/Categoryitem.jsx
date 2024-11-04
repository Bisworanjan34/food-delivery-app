import React from 'react'
import './Categoryitem.css'
const Categoryitem = ({cata,onClick}) => {
    let {title,img}=cata
  return (
    <div>
      <div className="cata-item-div"onClick={onClick}>
        <div className="cata-img">
            <img src={img} alt="" />
        </div>
        <div className="cata-title">
            <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Categoryitem
