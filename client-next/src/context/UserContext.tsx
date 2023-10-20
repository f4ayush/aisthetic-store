"use client";


import { createContext, useContext, useEffect, useState } from "react";
import {
    signOut
} from "firebase/auth";
import firebaseService from "@/services/firebase.service";



const userAuthContext = createContext<any>([]);

export function UserAuthContextProvider({ children }: any) {
    const [user, setUser] = useState<any>("");
    const [loading, setLoading] = useState(true);


    function logOut() {
        return signOut(firebaseService.auth);
    }

    const authStateListener = () => {
        firebaseService.auth.onAuthStateChanged(async (user: any) => {
            if (!user) {
                setLoading(false);
                localStorage.setItem("accessToken", "");
                return setUser("");
            }
            localStorage.setItem("accessToken", user.accessToken);
            setLoading(false);
            return setUser(user);
        });
    };

    useEffect(() => {
        authStateListener();
        console.log(user)
    }, [authStateListener]);

    return (
        <userAuthContext.Provider
            value={{ user, loading, setUser }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}