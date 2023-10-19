import React, { useState } from 'react'
import { useUserAuth } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import auth from "../services/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Login() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user, token)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-3'>
      <h1 className='font-[roboto] font-extrabold'>Brand Logo/Name</h1>
      <button onClick={signInWithGoogle} className='border border-black w-64 px-10 py-1 '>
        Sign In with Google
      </button>

    </div>
  )
}

export default Login