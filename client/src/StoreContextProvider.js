import { createContext, useContext, useEffect, useState } from "react";
import { getAllStores } from "./api";

const storeContext = createContext();

export function StoreContextProvider({ children }) {
    const [stores, setStores] = useState([])
    useEffect(() => {
        async function getStores() {
            const { data } = await getAllStores();
            setStores(data)
        }
        getStores();
    }, [])

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