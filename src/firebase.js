// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  addDoc,
  getDocs,
  setDoc,
  doc,
  collection
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import {
  userValidation
} from "./userValidation.js";

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
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  console.log('cambio en la autenticación')
  if (user) {
    //const uid = user.uid;
    // ...
    userValidation(true)
  } else {
    // User is signed out
    // ...
    userValidation(false)
  }
});

export async function getShoes() {
  const allShoes = [];
  const querySnapshot = await getDocs(collection(db, "nike-shoes"));
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data().name}`);
    allShoes.push({
      ...doc.data(),
      id: doc.id
    })
  });
  return allShoes
}

export async function addUserToDb(userInfo, id) {
  try {
    await setDoc(doc(db, "users", id), userInfo);
    console.log("user written with ID: ", id);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
}

export async function createUser(userInfo) {
  try {
    //Sign up
    const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    const user = userCredential.user
    console.log(user)

    //Subir Imagen
    //const url = await uploadFile(user.id + userInfo.picture.name, userInfo.picture, 'profilePicture')

    //Crear usuario en DB
    const dbInfo = {
      //url: userInfo.url,
      email: userInfo.email,
      birthday: userInfo.birthday,
      username: userInfo.username
    }
    addUserToDb(dbInfo, user.id)
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
    // ..
  }
}

export async function uploadFile(name, file, folder) {
  const taskImgRef = ref(storage, `${folder}/${name}`);

  try {
    await uploadBytes(taskImgRef, file);
    const url = await getDownloadURL(taskImgRef);
    return url;
  } catch (error) {
    console.log("error creando imagen ->", error);
  }
}

export async function logInUser(email, password) {

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    return {
      status: true,
      info: user.uid
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      status: false,
      info: errorMessage
    }
  };
}

export async function logOut() {
  try {
    await signOut(auth)
  } catch {
    console.error(error)
  }
}