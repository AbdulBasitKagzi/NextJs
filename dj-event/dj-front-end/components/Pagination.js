import React from 'react'
import Link from 'next/link'

function Pagination({ page, lastPage }) {
    return (
        <>
            {+page > 1 && (
                <Link href={`/event?page=${+page - 1}`}>Prev</Link>
            )}
            {
                +page < lastPage && (
                    <Link href={`/event?page=${+page + 1}`}>Next</Link>
                )
            }
        </>
    )
}

export default Pagination