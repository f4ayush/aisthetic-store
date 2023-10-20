"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {

    const pathname = usePathname();

    return (
        <>
            <div className="top" style={{ display: pathname.includes('store-details') ? 'none' : 'flex' }}>
                <div className="left">
                    <p>Call Us:</p>
                    <p>
                        Write to us
                    </p>
                </div>
                <div className="right">
                    <div />
                </div>
            </div>
            <div className="bottom">
                <div className="left" style={{ display: pathname.includes('store-details') ? 'none' : 'flex' }}>
                    <p>
                        +123456778
                    </p>
                    <p>hello@brandname.co</p>
                </div>
                <div className="left" style={{ display: !pathname.includes('store-details') ? 'none' : 'flex' }}>
                    <Link href={'/'}>
                        Back to All Store
                    </Link>
                </div>
                <div className="right">
                    <Link href={'#'} className='underline underline-offset-2'>
                        Book an Appointment
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Navbar