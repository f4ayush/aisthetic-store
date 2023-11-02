"use client";

import React, { useEffect, useState } from 'react'
import { useStoreList } from '@/context/StoreContext';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '@/context/UserContext';
import Timings from './Timings';
import { signOut } from 'firebase/auth';
import firebaseService from '@/services/firebase.service';

interface Store {
    _id: string;
    name: string;
    address: string;
    about: string;
    phone_number: string;
    email: string;
    opening_hours: {
        day: string;
        open_time: string;
        close_time: string;
        _id: string;
    }[];
    __v: number;
    imageUrl: string;
}

function StoreDetails({ storeId }: any) {
    const router = useRouter();
    const { user, loading } = useUserAuth();

    const { stores, error } = useStoreList();
    const [storeData, setStoreData] = useState<Store>()
    useEffect(() => {
        setStoreData(stores.filter((store: any) => store._id == storeId)[0]);
    })

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user || error) {
        signOut(firebaseService.auth);
        router.push('/login');
        return null;
    }


    return (
        <>
            <div className="flex flex-col w-full px-5 lg:px-48">
                <div className="self-center w-full mt-2 mb-2 max-md:max-w-full">
                    <div className="flex flex-col lg:flex-row max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch grow max-md:w-full max-md:ml-0">
                            <div className="flex-col bg-white bg-opacity-70 justify-center items-center overflow-hidden relative flex min-h-[645px] grow px-5 py-10 max-md:max-w-full max-md:mt-12">
                                <img
                                    loading="lazy"
                                    srcSet={storeData?.imageUrl}
                                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                />
                                <div className="relative justify-center text-black text-opacity-20 text-center text-5xl italic font-black self-center max-w-[338px] mt-60 mb-44 max-md:text-4xl max-md:mt-52">
                                    {storeData?.name}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center grow items-center w-full lg:w-[50%] lg:px-24">
                            <div className="items-start flex flex-col my-auto max-md:max-w-full max-lg:mt-12">
                                <div className="items-start flex max-w-full flex-col">
                                    <div className="justify-center text-black text-4xl italic max-w-[425px] max-md:max-w-full">
                                        {storeData?.name}
                                    </div>
                                    <div className="justify-center text-black text-base font-extralight mt-4 max-w-full">
                                        {storeData?.about}
                                    </div>
                                </div>
                                <div className="max-w-full mt-6">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
                                            <div className="items-start self-stretch flex flex-col w-[193px] max-md:mt-4">
                                                <div className="justify-center text-black text-base self-stretch w-full">
                                                    Contact Details
                                                </div>
                                                <div className="justify-center text-black text-base font-extralight self-stretch w-full mt-4">
                                                    {storeData?.address.split(",").map((place: string, index: number) => (
                                                        <p key={index}>{place},</p>
                                                    ))}
                                                </div>
                                                <div className="justify-center text-black text-base font-extralight underline self-stretch w-full mt-4">
                                                    {storeData?.phone_number}
                                                    <br />
                                                    {storeData?.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                                            <div className="justify-center items-start flex grow flex-col max-md:mt-4">
                                                <div className="justify-center text-black text-base w-[207px]">
                                                    Store Timings
                                                </div>
                                                {
                                                    storeData && <Timings timings={storeData.opening_hours} />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreDetails