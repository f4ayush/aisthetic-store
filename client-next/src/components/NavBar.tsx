"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {

    const pathname = usePathname();

    return (
        <>
            <div className="top flex justify-around px-48" style={{ display: pathname.includes('store-details') ? 'none' : 'flex' }}>
                <div className="left flex flex-grow gap-24">
                    <p>Call Us:</p>
                    <p>
                        Write to us
                    </p>
                </div>
                <div className="right">
                    <div />
                </div>
            </div>
            <div className="bottom px-48 flex sticky top-0 z-10 bg-white h-[60px] mt-2">
                <div className="left flex flex-grow gap-24" style={{ display: pathname.includes('store-details') ? 'none' : 'flex' }}>
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