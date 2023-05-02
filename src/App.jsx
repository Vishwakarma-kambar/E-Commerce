import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import './index.css'

// import Home from './Components'

import Loading from './utilies/Loading'
const Card = lazy(() => import("./Components/Card"))

const Home = lazy(() => import("./Components/Home"))
const Login = lazy(() => import("./Components/Login"))
const SignIn = lazy(() => import("./Components/SignIn"))
const Cart = lazy(() => import("./Components/Cart"))

const App = () => {

  const dispatch = useDispatch()

  const { isLogged } = useSelector(state => state.LoginReducer)

  useEffect(() => {
    const user = localStorage.getItem("Login");
    if (user) {
      dispatch({type: "LOGIN", payload: user})
    }
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={isLogged ? <Home /> : <Login />} />
        <Route path='/login' element={isLogged ? <Home /> : <Login />} />
        <Route path='/signin' element={isLogged ? <Home /> : <SignIn />} />
        <Route path='/cart' element={isLogged ? <Cart /> : <SignIn />} />
        <Route path='/card' element={<Card/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App