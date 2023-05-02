import React from "react"
import ReactDOM from 'react-dom/client'
import App from "./App"
import GlobalStore from "./redux/Store"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <GlobalStore>
        <App />
        </GlobalStore>
)