import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from "../styles/Header.module.css"
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

function Header() {

  const { user } = useContext(AuthContext)

  useEffect(() => {
    console.log('user', user)
  }, [user])
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <p>DJ Events</p>
        </Link>
      </div>

      <nav>
        <ul>
          {
            user ? (
              <>
                <li>
                  <Link href='/event'>
                    <p>Events</p>
                  </Link>
                </li>
                <li>
                  <Link href='/event/add'>
                    <p>Add Events</p>
                  </Link>
                </li>
                <li>
                  <Link href='/event/add'>
                    <p>Logout</p>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href='/accounts/Login'>
                    <p>Login</p>
                  </Link>
                </li>
              </>
            )
          }

        </ul>
      </nav>
    </header>
  )
}

export default Header