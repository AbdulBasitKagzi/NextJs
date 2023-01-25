import React from 'react'
import styles from "../styles/EventItem.module.css"
import Link from 'next/link'
import Image from 'next/image'


export default function EventItem({ evt }) {
  console.log('evt--->>',evt)
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats?.thumbnail?.url
              : '/images/event-default.png'
          }
          alt="dj"
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt?.attributes?.date).toLocaleDateString('en-US')} at {evt.attributes.time}
        </span>
        <h3>{evt.attributes.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/event/${evt.attributes.slug}`}>
          <p className='btn'>Details</p>
        </Link>
      </div>
    </div>
  )
}

