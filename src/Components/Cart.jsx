import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../utilies/Navbar'

const Cart = () => {

    const { products } = useSelector(state => state.CartReducer)

  return (
    <div className='cart-main'>
        <Navbar/>
        <h1>Cart</h1>
        <div className='cart-container'>
        {
          products.map((e, i) => (
            <div key={i} className='cart-box'>
              <h4>{e.title}</h4>
              <img className='cart-image1' src={e.image} alt={e.title}/>
              <div className=''>
                <div className=''>View Details</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart