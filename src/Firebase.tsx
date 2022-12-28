// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, Firestore, DocumentReference, DocumentData } from "firebase/firestore";
import { FacebookAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { User } from 'firebase/auth'
import * as functions from 'firebase/functions'

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
//Different types of authentication
export const googleProvider:GoogleAuthProvider = new GoogleAuthProvider();
export const githubProvider:GithubAuthProvider = new GithubAuthProvider();
export const facebookProvider:FacebookAuthProvider = new FacebookAuthProvider();
export const auth:Auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db:Firestore = getFirestore(app);

// Exposes functions for onCall
export const functionsFromApp = functions.getFunctions(app, "us-central1");

/**
 * Upsert a given user into the database
 * @example
 * A user with a UID of nVqasdf7hyWeMI12M8x2lJW56w52 
 * will have a document name as the ID be inserted to the database
 * @params firebase/auth.User
 * @returns Promise<DocumentReference<DocumentData>>; DocumentReference of the user
 */
export const createUserDocument = async(user:User): Promise<DocumentReference<DocumentData>> => {

  // Document reference to users/user.uid where uid is the document name
  const userDocRef = doc(db, 'users', user.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If user is new and not in database, insert user into database
  if(userSnapshot.exists()) {
    return;
  }
  const{ uid, displayName, email } = user;
  const createdAt = new Date();

  try{

    await setDoc(userDocRef,
      {
        uid,
        displayName,
        email,
        createdAt
      });

  } catch(error) {
    console.log('error creating the user', error.message);
  } 

  // Return document reference of the user
  return userDocRef
 }


export const createBookmark = (user:User) => {
  const uid = user.uid;

  const userDocRef = doc(db, 'users', uid);

  

}

