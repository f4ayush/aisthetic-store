"use client";

import React, { useEffect, useState } from 'react'
import { useStoreList } from '@/context/StoreContext';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '@/context/UserContext';

function StoreDetails({ storeId }: any) {
    const router = useRouter();


    const { user, loading } = useUserAuth();

    const { stores } = useStoreList();
    const [storeData, setStoreData] = useState<any>({})
    useEffect(() => {
        setStoreData(stores.filter((store: any) => store._id == storeId)[0]);
    })

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user) {
        router.push('/login');
        return null;
    }


    return (
        <div className="items-start bg-white flex flex-col">
            <div className="self-center w-full max-w-[1089px] mt-28 mb-20 px-5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                        <div className="flex-col justify-center items-center overflow-hidden relative flex min-h-[645px] grow px-5 py-10 max-md:max-w-full max-md:mt-12">
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
                    <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-12">
                            <div className="items-start flex w-[469px] max-w-full flex-col">
                                <div className="justify-center text-black text-4xl italic max-w-[425px] max-md:max-w-full">
                                    {storeData?.name}
                                </div>
                                <div className="justify-center text-black text-base font-extralight mt-4 max-md:max-w-full">
                                    {storeData?.about}
                                </div>
                            </div>
                            <div className="w-[425px] max-w-full mt-6">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                                        <div className="items-start self-stretch flex flex-col w-[193px] max-md:mt-4">
                                            <div className="justify-center text-black text-base self-stretch w-full">
                                                Contact Details
                                            </div>
                                            <div className="justify-center text-black text-base font-extralight self-stretch w-full mt-4">
                                                Street/Area name,
                                                <br />
                                                Code/State,
                                                <br />
                                                Country
                                            </div>
                                            <div className="justify-center text-black text-base font-extralight underline self-stretch w-full mt-4">
                                                +1234653111
                                                <br />
                                                hello@loaction.co
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                                        <div className="justify-center items-start flex grow flex-col max-md:mt-4">
                                            <div className="justify-center text-black text-base w-[207px]">
                                                Store Timings
                                            </div>
                                            <div className="justify-center items-start flex w-[216px] max-w-full grow flex-col mt-4">
                                                <div className="items-start flex w-[182px] max-w-full gap-0">
                                                    <div className="justify-center text-black text-base self-center w-[170px] my-auto">
                                                        Open - Closes at 8 PM
                                                    </div>
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                                                    />
                                                </div>
                                                <div className="justify-center items-start flex w-full grow flex-col mt-4">
                                                    <div className="items-start self-stretch flex justify-between gap-0">
                                                        <div className="justify-center text-black text-base self-stretch w-[129px]">
                                                            Monday
                                                        </div>
                                                        <div className="justify-center text-black text-base self-stretch">
                                                            10AM - 8PM
                                                        </div>
                                                    </div>
                                                    <div className="items-start self-stretch flex justify-between gap-0 mt-2">
                                                        <div className="justify-center text-black text-base font-light self-stretch w-[129px]">
                                                            Tuesday
                                                        </div>
                                                        <div className="justify-center text-black text-base font-light self-stretch">
                                                            10AM - 8PM
                                                        </div>
                                                    </div>
                                                    <div className="items-start self-stretch flex justify-between gap-0 mt-2">
                                                        <div className="justify-center text-black text-base font-light self-stretch w-[129px]">
                                                            Wednesday
                                                        </div>
                                                        <div className="justify-center text-black text-base font-light self-stretch">
                                                            10AM - 8PM
                                                        </div>
                                                    </div>
                                                    <div className="items-start self-stretch flex justify-between gap-0 mt-2">
                                                        <div className="justify-center text-black text-base font-light self-stretch w-[129px]">
                                                            Thursday
                                                        </div>
                                                        <div className="justify-center text-black text-base font-light self-stretch">
                                                            10AM - 8PM
                                                        </div>
                                                    </div>
                                                    <div className="items-start self-stretch flex justify-between gap-0 mt-2">
                                                        <div className="justify-center text-black text-base font-light self-stretch w-[129px]">
                                                            Friday
                                                        </div>
                                                        <div className="justify-center text-black text-base font-light self-stretch">
                                                            10AM - 8PM
                                                        </div>
                                                    </div>
                                                    <div className="items-start self-stretch flex justify-between gap-0 mt-2">
                                                        <div className="justify-center text-black text-base font-light self-stretch w-[129px]">
                                                            Saturday
                                                        </div>
                                                        <div className="justify-center text-black text-base font-light self-stretch">
                                                            10AM - 8PM
                                                        </div>
                                                    </div>
                                                    <div className="items-start self-stretch flex justify-between gap-0 mt-2">
                                                        <div className="justify-center text-black text-base font-light self-stretch w-[129px]">
                                                            Sunday
                                                        </div>
                                                        <div className="justify-center text-black text-base font-light self-stretch">
                                                            11AM - 8PM
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreDetails