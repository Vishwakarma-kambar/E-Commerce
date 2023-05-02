import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Navbar from '../utilies/Navbar'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import Card from './Card'

const Home = () => {

  const [data, setData] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products`)
      setData(res.data)
      console.log(res.data)
    }
    getProducts()
  }, [])

  // const [flipped, setFlipped] = useState(false);

  // function handleClick() {
  //   setFlipped(!flipped);
  // }

  return (
    <div className='main'>
      <Navbar />
      {/* <Link to={<Card/>}>card</Link> */}
      <div className='container'>
        {
          data.map((e, i) => (
          <div key={i} className='box'>
              <h4>{e.title}</h4>
              <img className='image1' src={e.image} alt={e.title}/>
              <div className='details'>
              <Link  className='cart-link'>View Details </Link>
                <span>${e.price}</span>
              </div>
              <button onClick={() => dispatch({type:"CART", payload: e}) } >Add to cart</button>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
