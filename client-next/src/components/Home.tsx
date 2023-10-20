"use client";

import { useStoreList } from '@/context/StoreContext';
import { useUserAuth } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { signOut } from "firebase/auth";
import StoreCard from './StoreCard';
import firebaseService from '@/services/firebase.service';


export default function HomeComponent() {

    const router = useRouter();

    const { stores, error } = useStoreList();

    const { user, loading } = useUserAuth();
    console.log(process.env.DB_HOST)

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user || error) {
        signOut(firebaseService.auth);
        router.push('/login');
        return null;
    }

    return (
        <div className="items-start flex flex-col px-5 ">
            <div className="self-center flex w-full max-w-[1090px] flex-col mb-2 max-md:max-w-full">
                {
                    stores.map((store: any, index: number) => (
                        <StoreCard key={index} store={store} />
                    ))
                }
            </div>
        </div>
    )
}