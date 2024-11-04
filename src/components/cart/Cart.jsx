import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus, faDumpster, faHome, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../redux/createSlice';
import './cart.css'
const Cart = () => {
  const [count,setCount] = useState({});
  let dispatch=useDispatch()
  let data = useSelector((s) => s.reducer1.cart)
const [cart, setCart] = useState([]);

useEffect(() => {
  setCart(data);
}, [data]);

  const addQuantity = (id) => {
    const item = cart.find((item) => (item.id) === id);
    if (item) {
      const prevCount = count[id] || 0;
      setCount((prevCountState) => ({ ...prevCountState, [id]: prevCount + 1 }));
      const updatedCart = cart.map((cartItem) =>
        (cartItem.id) === id ? { ...cartItem, totalPrice: cartItem.price * (prevCount + 1) } : cartItem
      );
      setCart(updatedCart);
      console.log(updatedCart)
    }
  };
  
  
  

  const removeQuantity = (id) => {
    if(1<=count[id]){

      const item = cart.find((item) => (item.id) === id);
      if (item && count[id] > 1) {
        setCount((prevCount) => ({ ...prevCount, [id]: prevCount[id] - 1 }));
      }
    }
  };
  
  let deleteitem=(i)=>{
    // setCart((item)=>item.filter((f,index)=>index!== i))
    dispatch(removeCart(i))
  }




  return (
    <div>
  
         <div className="cart-main " >
          <div className="container">
            {
              cart.length > 0 ? cart.map((c,i)=>{
                let {title,image,rating,price,id,totalPrice=price}=c
                return(
                 <div className="row my-3 shadow bg-white align-items-center py-2 rounded" key={i}>
                  <div className="col">
                    <img src={image} alt="" height={70} width={120}/>
                  </div>
                  <div className="col">
                    <p>{title}</p>
                  </div>
                  <div className="col">
                    <b>${totalPrice}</b>
                    <p>{rating}</p>
                  </div>
                  <div className="col">
                    <div className="cart-quantity  d-flex d-inline-block w-50 justify-content-around ">
                     <h3 onClick={()=>removeQuantity(id)} 
                     className='text-danger'><FontAwesomeIcon icon={faCircleMinus}/></h3>
                     <b>{count[id] ||0}</b>
                     <h3 onClick={()=>addQuantity(id)} className='text-success'><FontAwesomeIcon icon={faCirclePlus}/></h3>
                    </div>
                  </div>
                  <div className="col">
                    <button className='btn btn-danger' onClick={()=>deleteitem(i)}>
                      <FontAwesomeIcon icon={faTrash}/>
                      Delete</button>
                  </div>
                 </div>
                )
              }):
              <h1>no cart item</h1>
            }
          </div>
         </div>
    </div>
  )
}

export default Cart
