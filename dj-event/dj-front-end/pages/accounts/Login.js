
import React, { useState, useContext, useEffect } from 'react'
import styles from "../../styles/AuthForm.module.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from "../../components/Layout"
import Link from 'next/link'
import AuthContext from "../../context/AuthContext"


function Login() {

  const [loginCredentials, setLoginCredentials] = useState({
    identifier: "",
    password: ""
  })
  const { login, error } = useContext(AuthContext)

  useEffect(() => {
    console.log(error)
    error && toast.error(error)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()
    login(loginCredentials)
  }

  return (
    <Layout title='User Login'>
      <div className={styles.auth}>
        <h1>
          Log In
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='identifier'
              value={loginCredentials.identifier}
              onChange={(e) => setLoginCredentials((prev) => ({ ...loginCredentials, [e.target.id]: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={loginCredentials.password}
              onChange={(e) => setLoginCredentials((prev) => ({ ...loginCredentials, [e.target.id]: e.target.value }))}
            />
          </div>

          <input type='submit' value='Login' className='btn' />
        </form>

        <p>
          Don&apos;t have an account? <Link href='/accounts/register'>Register</Link>
        </p>
      </div>
    </Layout>
  )
}

export default Login