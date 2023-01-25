
import EventItem from '../components/EventItem'
import { API_URL } from '../components/configs'
import Layout from '../components/Layout'

export default function Home({ events }) {
  console.log(API_URL)
  console.log('events--->', events.data)
  return (
    <div>
      <Layout>
        Upcoming events

        {events.data.length && events.data?.map((evt) => {
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
  console.log(API_URL)
  const res = await fetch(`${API_URL}/events`)
  const events = await res.json()

  return {
    props: { events }
  }
}
