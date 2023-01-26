
import EventItem from '../components/EventItem'
import { API_URL } from '../components/configs'
import Layout from '../components/Layout'

export default function Home({ events }) {

  return (
    <div>
      <Layout>
        Upcoming events

        {events.data.length && events.data?.map((evt) => {
          return <>
            <EventItem key={evt.id} evt={evt} />
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
