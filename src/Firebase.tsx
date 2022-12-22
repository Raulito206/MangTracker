// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const app:FirebaseApp = initializeApp(firebaseConfig);
export const provider:GoogleAuthProvider = new GoogleAuthProvider();
export const auth:Auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth:any) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if(!userSnapshot.exists()){
    const{ displayName, email } = userAuth;
    const createdAt = new Date();

    try{
  await setDoc(userDocRef,{
    displayName,
    email,
    createdAt
  } )
    }catch(error){
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
 }
