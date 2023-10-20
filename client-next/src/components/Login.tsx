"use client";
import React, { useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseService from '@/services/firebase.service';
import { useRouter } from 'next/navigation';


function Login() {
    const router = useRouter();
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
    
            }).catch((error) => {
                throw new Error('Something went wrong!')
            });
    };

    const authStateListener = () => {
        firebaseService.auth.onAuthStateChanged(async (user: any) => {
            if (!user) {
                return localStorage.setItem("accessToken", "");
            }
            router.push('/');
            console.info(user.accessToken, 'token')
            localStorage.setItem("accessToken", user.accessToken);
        });
    };

    useEffect(() => {
        authStateListener();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-3'>
            <h1 className='font-[roboto] font-extrabold'>Brand Logo/Name</h1>
            <button onClick={signInWithGoogle} className='border border-black w-fit flex items-center px-10 py-1 '>
                <img width="30" height="30" className="mx-2" src="https://img.icons8.com/papercut/60/google-logo.png" alt="google-logo"/>
                <span>Sign In with Google</span>
            </button>
        </div>
    )
}

export default Login