import React from 'react'
import Home from '..'
import EventItem from '../../components/EventItem'
import Layout from '../../components/Layout'



export default function Events({ events }) {
  console.log('events--->', events)
  return (
    <div>
      <Layout>
         Events
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
