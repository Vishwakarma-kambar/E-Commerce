import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { username } = useSelector(state => state.LoginReducer)
  const { cart } = useSelector(state => state.CartReducer)

  return (
    <div className='nav-main'>
        <div className='nav-container'>
            <img src="logo.png" alt="logo" />
            <div className='nav-user'>
                <div className='userName'>{username}</div>
                <Link to={'/cart'} className='cart-link'>Cart: <span>{cart}</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar