import React,{useState} from 'react'
import { useUserAuth } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import  auth  from "../services/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Login() {
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

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
    <div>
        <h1>Brand Logo/Name</h1>
        <button onClick={signInWithGoogle}>
      Sign In with Google
    </button>
        
    </div>
  )
}

export default Login