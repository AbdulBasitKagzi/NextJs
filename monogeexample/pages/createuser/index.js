import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

function createUser() {
    const route = useRouter()

    const createName = async (e) => {
        e.preventDefault();

        const res = await fetch(`api/name`, {
            method: "POST",
            headers: {
                "content-type": "Application/Json",
            },
            body: JSON.stringify({
                name: "jim",
                email: 'jim@gmail.com',
                password: '123456',
                role: 'user'
            }),
        });

        const data = await res.json();

        if (data.acknowledged) route.push('/')
    };

    return (
        <>
            <div>Create User</div>
            <button
                onClick={(e) => {
                    createName(e);
                }}
            >
                Create Name
            </button>
        </>
    )
}

export default createUser