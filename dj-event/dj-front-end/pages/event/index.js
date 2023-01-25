import React from 'react'
import EventItem from '../../components/EventItem'
import Layout from '../../components/Layout'
import { API_URL } from '../../components/configs'




export default function Events({ events }) {
  console.log('events--->', events)
  return (
    <div>
      <Layout>
         Events
        {events.data?.map((evt) => {
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
  const res = await fetch(`${API_URL}/events`)
  const events = await res.json()

  return {
    props: { events }
  }
}
