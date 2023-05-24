// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, getDocs, setDoc, doc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQygL6PEQrh_0bVxDzcjesRiGAMTEpBWo",
  authDomain: "nike-web-catalog.firebaseapp.com",
  projectId: "nike-web-catalog",
  storageBucket: "nike-web-catalog.appspot.com",
  messagingSenderId: "567954088221",
  appId: "1:567954088221:web:e75d6997770c6aec9b41f4",
  measurementId: "G-PVG0FTHGKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getShoes(){
    const allShoes = [];
    const querySnapshot = await getDocs(collection(db, "nike-shoes"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    allShoes.push({...doc.data(), id: doc.id})
    });
    return allShoes
}