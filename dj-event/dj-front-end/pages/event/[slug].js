import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { API_URL } from '../../components/configs'

import styles from "../../styles/Event.module.css"
import { ToastContainer, toast } from 'react-toastify'

function MyEvent({ events }) {
    const router = useRouter()

    const deleteEvent = async (e) => {
        e.preventDefault()

        if (confirm("Are you you sure you want to delete the event")) {
            const res = await fetch(`${API_URL}/events/${events.id}`, {
                method: 'DELETE',
            })
            const data = await res.json()

            if (!res.ok) toast.error(data.message)
            router.push('/event')
        }

    }
    return (
        <Layout>
            <Link href={`/event/edit/${events.attributes.slug}`}>Edit Event</Link>

            <button onClick={deleteEvent}>Delete Event</button>
            <ToastContainer />
            <div className={styles.event}>
                <span>
                    {new Date(events.attributes.date).toLocaleDateString('en-US')} at {events.attributes.time}
                </span>
                <h1>{events.attributes.name}</h1>
                {/* <ToastContainer /> */}
                <div className={styles.image}>
                    <Image
                        src=

                        '/images/event-default.png'

                        width={960}
                        height={600}
                        alt="event image"
                    />
                </div>


                <h3>Performers:</h3>
                <p>{events.attributes.performers}</p>
                <h3>Description:</h3>
                <p>{events.attributes.description}</p>
                <h3>Venue: {events.attributes.venue}</h3>
                <p>{events.attributes.address}</p>

                {/* <EventMap evt={evt} /> */}

                <Link href='/event'>
                    <p className={styles.back}>{'<'} Go Back</p>
                </Link>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/events`)
    const events = await res.json()

    const paths = events.data.map((evt) => ({
        params: { slug: evt.attributes.slug }
    }))


    return {
        paths,
        fallback: true
    }
}


export async function getStaticProps({ params: { slug } }) {

    const res = await fetch(`${API_URL}/events?filters[slug][$eq]=${slug}`)
    const events = await res.json()

    // const event = events.data.filter((evt) => evt.attributes.slug !== slug)
    // console.log('remaining evnet--->', event)
    return {
        props: {
            events: events.data[0]
        }
    }
}


// export async function getServerSideProps({query:{slug}}){
//     console.log('slug--->',slug)
//  return {
//     props:{}
//  }

// }

export default MyEvent