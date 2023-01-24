import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import EventItem from '../components/EventItem'

import Layout from '../components/Layout'

export default function Home({ events }) {
  console.log('events--->', events)
  return (
    <div>
      <Layout>
        Upcoming events

        {events?.map((evt) => {
          return <>
            <EventItem evt={evt} />
          </>

        })}
      </Layout>

    </div>

  )
}

// run each time when user visits the homepage
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/events')
  const events = await res.json()

  return {
    props: { events }
  }
}
