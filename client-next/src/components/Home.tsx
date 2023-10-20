"use client";

import Link from 'next/link'
import { useStoreList } from '@/context/StoreContext';
import { useUserAuth } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import StoreCard from './StoreCard';


export default function HomeComponent() {

    const router = useRouter();

    const { stores } = useStoreList();
    const { user, loading } = useUserAuth();
    console.log(process.env.DB_HOST)

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user) {
        router.push('/login');
        return null;
    }

    return (
        <div className="items-start flex flex-col px-5">
            <div className="self-center flex w-full max-w-[1090px] flex-col mb-2 max-md:max-w-full">
                {
                    stores.map((store: any, index: number) => (
                        <StoreCard key={index} store={store}/>
                    ))
                }
            </div>
        </div>
    )
}