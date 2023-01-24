import React from 'react'
import styles from "../styles/Layout.module.css"
import Footer from './Footer'
import Header from './Header'
import Showcase from './ShowCase'
import { useRouter } from 'next/router'

function Layout({ children }) {
    const router=useRouter()
    return (
        <div>
            <Header/>
          {router.pathname==='/' &&  <Showcase/>}
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout