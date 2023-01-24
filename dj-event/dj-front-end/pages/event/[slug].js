import React from 'react'

import Layout from '../../components/Layout'

function MyEvent({events}) {
    return (
        <Layout>MyEvent
            {events.name}
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/events')
    const events = await res.json()

    const paths = events.map((evt) => ({
        params: { slug: evt.slug }
    }))

    console.log('path--->', paths)

    return {
        paths,
        fallback: true
    }
}


export async function getStaticProps({params:{slug}}) {
    const res = await fetch(`http://localhost:3000/api/events/${slug}`)
    const events = await res.json()

    console.log(events)
    return {
        props:{
            events:events[0]
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