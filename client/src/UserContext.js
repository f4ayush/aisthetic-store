import { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import firebaseService from "./services/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    function logOut() {
        return signOut(firebaseService);
    }
    const authStateListener = () => {
        firebaseService.auth.onAuthStateChanged(async (user) => {
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