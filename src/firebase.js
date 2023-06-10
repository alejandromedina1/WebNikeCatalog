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
  collection,
  getDoc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove
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
  userValidation,
  adminAccess
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
const storage = getStorage(app)
const db = getFirestore(app);
const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
  console.log('cambio en la autenticación')
  if (user) {
    //const uid = user.uid;
    // ...

    const userData = await getUserData(user)
    console.log(user.uid)
    console.log(user)
    userValidation(true)
    adminAccess(userData.isAdmin)

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

export async function addShoes(product) {
  try {
    const docRef = await addDoc(collection(db, "nike-shoes"), product);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addShoesWithId(product, id, file) {
  try {
    const imageUrl = await uploadFile(file.name, file, 'nike-shoes');

    await setDoc(doc(db, "nike-shoes", id), {
      ...product,
      urlImage: imageUrl
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addUserToDb(userInfo, id) {
  try {
    await setDoc(doc(db, "users", id), userInfo);
    console.log("user written with ID: ", id);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
}

export async function getUserData(user) {
  const docRef = doc(db, "users", user.uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    return docSnap.data()
  } else {
    console.log('No existe el documento')
  }

}

export async function createUser(userInfo) {
  try {
    //Sign up
    const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    const user = userCredential.user
    console.log(user)

    //Subir Imagen
    const imageUrl = await uploadFile(userInfo.url.name, userInfo.url, 'users')

    //Crear usuario en DB
    const dbInfo = {
      //url: userInfo.url,
      email: userInfo.email,
      imageUrl: imageUrl,
      username: userInfo.username,
      isAdmin: userInfo.isAdmin
    }
    await addUserToDb(dbInfo, user.uid)

    return {
      status: true,
      info: user.uid
    };

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      status: false,
      info: errorMessage
    };
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

export async function sendProductToCart(product) {
try{
  const userRef = doc(db, "users", auth.currentUser.uid)
  console.log(userRef, auth.currentUser.uid)
  await updateDoc(userRef, {
    cart: arrayUnion(product)
  })
} catch (error) {
  console.error(error)
}


}

export async function getProductsFromCart() {
  try {
    console.log(auth.currentUser.uid)
    const user = auth.currentUser.uid
    const userRef = doc(db, "users", user)
    const docSnap = await getDoc(userRef)
  
    if (docSnap.exists()) {
      const allShoes = docSnap.data().cart
      return allShoes  
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error(error)
  }
}

export async function deleteProductFromCart(product) {
  try{
    const userRef = doc(db, "users", auth.currentUser.uid)
    console.log(userRef, auth.currentUser.uid)
    await updateDoc(userRef, {
      cart: arrayRemove(product)
    })
  } catch (error) {
    console.error(error)
  }
}