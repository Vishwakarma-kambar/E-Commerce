import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const initialState = {
  email: "",
  password: "",
}

const Login = () => {

  const history = useNavigate()

  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState)

  const [err, setErr] = useState("")

  useEffect(() => {
    if (!form.email || !form.password) {
      return setErr("Please Enter all the details")
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(form.email)) {
      return setErr("Please Enter a valid email address")
    }
    const pass = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
    if (pass.test(form.password)) {
      return setErr("Password should contain atleast a Uppercase, a lowercase, a digit and a special character ")
    }
    return setErr("")
  }, [form])

  const handleSubmit = async () => {
    if (!err) {

      localStorage.setItem("Login", form.email)
      dispatch({type: "LOGIN", payload: form.email})
      history('/')
      const res = await axios.post('http://127.0.0.1:3000/Signin', form)
      if (res.data.msg === "Register Successfull") {
        history('/login')
      }
    }
  }

  return (
    <div>
      <div className="">
            <div className="login-containr">
                <div className="login-details">
                    <h1 className="">SignIn</h1>
                    {
                      err ? <div className=''>{err}</div> : ""
                    }
                    <input 
                        type="text"
                        className=""
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        placeholder="Email" />
                    <input 
                        type="password"
                        className=""
                        name="password"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}
                        placeholder="Password" />
                    <button onClick={handleSubmit}
                        type="submit"
                        className=""
                    >Login</button>

                </div>

                <div className="">
                    didn't have an account? 
                    <Link className="" to="/SignIn">
                        Create it
                    </Link>.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login