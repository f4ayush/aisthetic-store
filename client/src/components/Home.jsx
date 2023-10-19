import React, { useEffect, useState } from 'react'
import { getAllStores } from '../api';
import { Link } from 'react-router-dom';
import { useStoreList } from '../StoreContextProvider';


function Home() {
    
    
    const {stores} = useStoreList();
        
    return (
        <div className="items-start flex flex-col px-5">
      <div className="self-center flex w-full max-w-[1090px] flex-col mt-6 mb-24 max-md:max-w-full">
            {
                stores.map((store, index) => (
                    <Link key={index} to={`store-details/${store._id}`}>
                    <div className="self-center flex w-full max-w-[966px] grow flex-col mt-36 max-md:max-w-full">
                        <div className="self-stretch max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                                    <div className="flex-col justify-center items-center overflow-hidden relative flex min-h-[645px] grow px-5 py-10 max-md:max-w-full max-md:mt-12">
                                        <img
                                            loading="lazy"
                                            srcSet={store.imageUrl}
                                            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                        />
                                        <div className="relative justify-center text-black text-opacity-20 text-center text-5xl italic font-black self-center max-w-[338px] mt-60 mb-44 max-md:text-4xl max-md:mt-52">
                                            {store.name}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="justify-center items-start self-stretch flex flex-col my-auto max-md:mt-52">
                                        <div className="items-start flex w-[296px] max-w-full flex-col">
                                            <div className="justify-center self-stretch text-black text-2xl italic">
                                                {store.name}
                                            </div>
                                            <div className="justify-center self-stretch text-black text-base font-extralight mt-4">
                                                Street/Area name,
                                                <br />
                                                Code/State,
                                                <br />
                                                Country
                                            </div>
                                            <div className="justify-center self-stretch text-black text-base font-extralight underline mt-4">
                                                {store.phone_number}
                                                <br />
                                                {store.email}
                                            </div>
                                        </div>
                                        <div className="items-start flex w-[186px] max-w-full gap-0 mt-6">
                                            <div className="justify-center self-stretch text-black text-base w-[174px]">
                                                Open - Closes at 8 PM
                                            </div>
                                            <img loading="lazy" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1" className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"/>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </Link>
                ))
            }
        </div>
        </div>
    )
}

export default Home