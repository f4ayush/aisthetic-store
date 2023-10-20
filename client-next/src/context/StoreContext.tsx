"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAllStores } from "@/services/api.service";
import { useUserAuth } from '@/context/UserContext';

const storeContext = createContext<any>([]);

export function StoreContextProvider({ children }: any) {
    const [stores, setStores] = useState([])
    const { user, loading } = useUserAuth();
    useEffect(() => {
        async function getStores() {
            const { data } = await getAllStores();
            setStores(data)
        }
        if (user) {
            getStores();
        }
        
    }, [user])

    return (
        <storeContext.Provider
            value={{ stores }}
        >
            {children}
        </storeContext.Provider>
    );
}

export function useStoreList() {
    return useContext(storeContext);
}