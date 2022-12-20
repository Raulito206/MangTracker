// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithRedirect } from "firebase/auth";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvSpW9IzSWYA4nDfJvHxXRmvBtw_so82E",
  authDomain: "mangtracker.firebaseapp.com",
  projectId: "mangtracker",
  storageBucket: "mangtracker.appspot.com",
  messagingSenderId: "734044243373",
  appId: "1:734044243373:web:a4cd98d332a3c648508d24",
  measurementId: "G-FTN3M0NESV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Firebase Authentication
const provider = new GoogleAuthProvider();
const auth = getAuth();
export const signInWithGoogle = () =>{
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
    .then((result) => {
            //This gives you a Google Access Token. You can use it to access Google APIs
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
    }).catch((error) =>{
            //We can handle erros here, not sure what we want to implement.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
    })
} 




 

