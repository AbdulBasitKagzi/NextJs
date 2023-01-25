import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from "../styles/Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <p>DJ Events</p>
        </Link>
      </div>

      <nav>
        <ul>
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
        </ul>
      </nav>
    </header>
  )
}

export default Header