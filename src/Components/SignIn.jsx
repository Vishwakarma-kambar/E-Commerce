import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
  name: "",
  email: "",
  password: "",
  cfPassword: ""
}

const SignIn = () => {

  const history = useNavigate()

  const [form, setForm] = useState(initialState)

  const [err, setErr] = useState("")

  useEffect(() => {
    if (!form.name || !form.email || !form.password || !form.cfPassword) {
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
    if (form.password !== form.cfPassword) {
      return setErr("Passwords are not matching")
    }
    return setErr("")
  }, [form])

  const handleSubmit = async () => {
    if (!err) {
      const res = await axios.post('http://127.0.0.1:3000/Signin', form)
      if (res.data.msg === "Register Successfull") {
        history('/login')
      }
    }
  }

  return (
    <div>
      <div className="sign-main">
            <div className="sign-container">
                <div className="sign-inputs">
                    <h1 className="">Sign up</h1>
                    {
                      err ? <div className=''>{err}</div> : ""
                    }
                    <input 
                        type="text"
                        className=""
                        name="fullname"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        placeholder="Full Name" />

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
                    <input 
                        type="password"
                        className=""
                        name="confirm_password"
                        value={form.cfPassword}
                        onChange={(e) => setForm({...form, cfPassword: e.target.value})}
                        placeholder="Confirm Password" />

                    <button onClick={handleSubmit}
                        type="submit"
                        className=""
                    >Create Account</button>
                </div>

                <div className="">
                        By signing up, you agree to the 
                        <Link className="" to="#">
                            Terms of Service
                        </Link> and 
                        <Link className="" to="#">
                            Privacy Policy
                        </Link>
                    </div>

                <div className="">
                    Already have an account? 
                    <Link className="" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn