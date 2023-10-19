import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStoreList } from '../StoreContextProvider';

function StoreDetails() {
    const storeId = useParams().storeId
    const {stores} = useStoreList();
    const [storeData, setStoreData] = useState({})
    useEffect(() => {
        setStoreData(stores.filter(store => store._id == storeId)[0])
        
    }, [storeId])
    
    
  return (
    <div className="items-start bg-white flex flex-col">
      {/* <div className="justify-end items-start bg-white self-stretch flex w-full flex-col px-5 py-4 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1090px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-start flex gap-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-cover object-center w-6 rotate-90 overflow-hidden shrink-0"
            />
            <div className="text-black text-base font-extralight self-center w-[196px] my-auto">
              Back to All store
            </div>
          </div>
          <div className="text-black text-right text-base underline max-w-[586px] grow shrink-0 basis-auto max-md:max-w-full">
            Book an appointment
          </div>
        </div>
      </div> */}
      <div className="self-center w-full max-w-[1089px] mt-28 mb-20 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <div className="flex-col justify-center items-center overflow-hidden relative flex min-h-[645px] grow px-5 py-10 max-md:max-w-full max-md:mt-12">
              <img
                loading="lazy"
                srcSet={storeData.imageUrl}
                className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
              />
              <div className="relative justify-center text-black text-opacity-20 text-center text-5xl italic font-black self-center max-w-[338px] mt-60 mb-44 max-md:text-4xl max-md:mt-52">
                {storeData.name}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-12">
              <div className="items-start flex w-[469px] max-w-full flex-col">
                <div className="justify-center text-black text-4xl italic max-w-[425px] max-md:max-w-full">
                  {storeData.name}
                </div>
                <div className="justify-center text-black text-base font-extralight mt-4 max-md:max-w-full">
                  {storeData.about}
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