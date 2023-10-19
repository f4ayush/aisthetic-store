import React from 'react'

function Navbar() {
    
    return (
        <nav className='sticky flex flex-col md:flex-row justify-center'>
            <ul className='flex flex-col md:flex-row justify-around w-full md:w-1/2'>
                <li>
                    <p>
                        Call Us:
                    </p>
                    <p>
                        +123456778
                    </p>
                </li>
                <li>
                    <p>Write to us</p>
                    <p>hello@brandname.co</p>
                </li>
            </ul>
            <ul className='w-full md:w-1/2 flex justify-end md:justify-center'>
                <li className='underline underline-offset-2'>
                    Book an Appointment
                </li>

            </ul>

        </nav>
    )
}

export default Navbar