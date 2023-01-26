import React from 'react'
import { useState, useContext } from 'react'
import Layout from '../../components/Layout'
import { ToastContainer, toast } from 'react-toastify'
import Link from 'next/link'
import styles from "../../styles/AuthForm.module.css"
import AuthContext from '../../context/AuthContext'


function Register() {

    const [authCredentials, setAuthCredentials] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
    const { register } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        register(authCredentials)
    }

    return (
        <Layout title='User Registration'>
            <div className={styles.auth}>
                <h1>
                    Register
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            value={authCredentials.username}
                            onChange={(e) => setAuthCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            id='email'
                            value={authCredentials.email}
                            onChange={(e) => setAuthCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            value={authCredentials.password}
                            onChange={(e) => setAuthCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label htmlFor='passwordConfirm'>Confirm Password</label>
                        <input
                            type='password'
                            id='passwordConfirm'
                            value={authCredentials.passwordConfirm}
                            onChange={(e) => setAuthCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))}
                        />
                    </div>

                    <input type='submit' value='Register' className='btn' />
                </form>

                <p>
                    Already have an account? <Link href='/accounts/Login'>Login</Link>
                </p>
            </div>
        </Layout>
    )
}

export default Register