import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, legacy_createStore as createStore } from 'redux'

import CartReducer from './CartReducer'
import LoginReducer from './LoginReducer'

const reducer = combineReducers({
    CartReducer,
    LoginReducer
})

const store = createStore(reducer)

const GlobalStore = ({ children }) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default GlobalStore