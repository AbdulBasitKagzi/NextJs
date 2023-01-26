import React from 'react'
import EventItem from '../../components/EventItem'
import Layout from '../../components/Layout'
import { API_URL, per_page } from '../../components/configs'
import Pagination from '../../components/Pagination'





export default function Events({ events, page, total }) {

  const lastPage = Math.ceil(total / per_page)
  console.log("lastpage", lastPage, total)

  return (
    <div>
      <Layout>
        Events
        {events.data?.map((evt) => {
          return <>
            <EventItem evt={evt} />
          </>

        })}

        {/* pagination component */}
        <Pagination page={page} lastPage={lastPage} />
        {/* {+page === 1 ? "Next" : +page > 1 && +page < lastPage ? "Next+Prev" : "Prev"} */}
      </Layout>
    </div>
  )
}

// run each time when user visits the homepage
export async function getServerSideProps({ query: { page = 1 } }) {

  // to skip the fetched data from getting fetched.
  const start = +page === 1 ? 0 : ((+page - 1) * per_page)

  const totalEvents = await fetch(`${API_URL}/events`)
  const data = await totalEvents.json()

  // length of total events
  const total = data.data.length

  // to get only required data based on pagination and limit
  const res = await fetch(`${API_URL}/events?pagination[limit]=${per_page}&pagination[start]=${start}`)
  const events = await res.json()

  return {
    props: { events, page, total }
  }
}
