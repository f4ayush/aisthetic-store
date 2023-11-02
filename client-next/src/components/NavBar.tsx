"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Navbar() {

    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            console.log(window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="justify-between items-start flex flex-col md:flex-row py-5 gap-5 max-md:flex-wrap bg-white sticky top-0 z-10 px-5 lg:px-48">
            {!pathname.includes('store-details') && <div className={`items-start gap-10 self-start flex-col md:flex-row ${isScrolled ? "hidden" : "flex"} md:flex ease-in duration-500`}>
                <div className="text flex-black text-base font-extralight flex-1">
                    {!isScrolled && <p>Call us</p>}
                    <p className={`${isScrolled ? "hidden" : "block"} md:block`}> +1123476778</p>
                </div>
                <div className="text-black text-base font-extralight flex-1">
                    {!isScrolled && <p>Write to us</p>}
                    <p>hello@brandname.co</p>

                </div>
            </div>}
            <div className={`items-start gap-10 self-start flex-col md:flex-row ${pathname.includes('store-details') ? "flex" : "hidden"}`}>
                <Link href={'/'} className='flex'>
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/back--v1.png" alt="back--v1"/> Back to All Store
                </Link>
            </div>
            <div className="text-black  self-end text-right text-base underline max-w-[586px] grow shrink-0 basis-auto max-md:max-w-full">
                Book an appointment
            </div>
        </div>
    )
}

export default Navbar