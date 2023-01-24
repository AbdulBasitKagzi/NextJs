import Link from 'next/link'
import React from 'react'

function PageNotFound() {
    return (
        <>
            <div>Page Not Found</div>
            <Link href='/'>Go to home</Link>
        </>
    )
}

export default PageNotFound