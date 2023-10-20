"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAllStores } from "@/services/api.service";
import { useUserAuth } from '@/context/UserContext';
import { getAuth, signOut } from "firebase/auth";

const storeContext = createContext<any>([]);

export function StoreContextProvider({ children }: any) {
    const [stores, setStores] = useState([])
    const [error, setError] = useState<any>(null);
    const { user } = useUserAuth();
    useEffect(() => {
        async function getStores() {
            try {
                const { data } = await getAllStores();
                setStores(data)
            } catch (error) {
                setError(error);
            }
        }
        if (user) {
            getStores();
        }

    }, [user])

    return (
        <storeContext.Provider
            value={{ stores: stores, error: error }}
        >
            {children}
        </storeContext.Provider>
    );
}

export function useStoreList() {
    return useContext(storeContext);
}