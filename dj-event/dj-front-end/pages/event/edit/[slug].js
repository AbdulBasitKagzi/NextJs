import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { ToastContainer, toast } from 'react-toastify'
import Link from 'next/link'
import styles from "../../../styles/Form.module.css"
import { useRouter } from 'next/router'
import { API_URL } from '../../../components/configs'
import moment from 'moment'

function Editevent({ event }) {
    const router = useRouter()

    const [values, setValues] = useState({
        name: event.attributes.name,
        slug: event.attributes.slug,
        performers: event.attributes.performers,
        venue: event.attributes.venue,
        address: event.attributes.address,
        date: event.attributes.date,
        time: event.attributes.name,
        description: event.attributes.description,
        image: "fsafsdfsdf"
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation
        const hasEmptyFields = Object.values(values).some(
            (element) => element === ''
        )

        if (hasEmptyFields) {
            toast.error('Please fill in all fields')
            return
        }

        const res = await fetch(`${API_URL}/events/${event.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify({
                // data need to be passe in this way only
                // compulsory to add data:{}
                data: {
                    name: values.name,
                    slug: values.slug,
                    performers: values.performers,
                    venue: values.venue,
                    address: values.address,
                    date: values.date,
                    description: values.description,
                    time: values.time
                }
            }),
        })

        if (!res.ok) {
            if (res.status === 403 || res.status === 401) {
                toast.error('No token included')
                return
            }
            // toast.error('Something Went Wrong')
        } else {
            const evt = await res.json()
            router.push(`/event/${evt.data.attributes.slug}`)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <Layout title='Edit event'>
            <Link href={`/event/${event.attributes.slug}`}>Go Back</Link>
            <h1>Add Event</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor='name'>Event Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={values.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='name'>slug</label>
                        <input
                            type='text'
                            id='slug'
                            name='slug'
                            value={values.slug}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='performers'>Performers</label>
                        <input
                            type='text'
                            name='performers'
                            id='performers'
                            value={values.performers}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='venue'>Venue</label>
                        <input
                            type='text'
                            name='venue'
                            id='venue'
                            value={values.venue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input
                            type='text'
                            name='address'
                            id='address'
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            name='date'
                            id='date'
                            value={moment(values.date).format('yyyy-MM-DD')}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='time'>Time</label>
                        <input
                            type='text'
                            name='time'
                            id='time'
                            value={values.time}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor='description'>Event Description</label>
                    <textarea
                        type='text'
                        name='description'
                        id='description'
                        value={values.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <input type='submit' value='Save' className='btn' />
            </form>
        </Layout>
    )
}


export async function getServerSideProps({ params: { slug }, req }) {
    console.log('cookie-->', req.headers.cookie)
    const res = await fetch(`${API_URL}/events?filters[slug][$eq]=${slug}`)
    const event = await res.json()

    return {
        props: { event: event.data[0] }
    }
}

export default Editevent        