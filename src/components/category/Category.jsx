import React, { useState } from 'react'
import './Category.css'
import catadata from '../../data/catadata'
import Categoryitem from '../categoryItem/Categoryitem'
const Category = ({onCategorySelect }) => {
    let [cata,setCata]=useState(catadata)
  return (
    <div>
      <div className="category-main">
        {
            cata.map((c,i)=>{
                return(
                    <div className="div" key={i}>
                        <Categoryitem cata={c} onClick={() => onCategorySelect(c.title)}/>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Category
