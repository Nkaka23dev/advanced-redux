import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSZB-CmomA5mdjICWXAc9YQBH_OlSqQpc",
    authDomain: "initialproject-de653.firebaseapp.com",
    projectId: "initialproject-de653",
    storageBucket: "initialproject-de653.appspot.com",
    messagingSenderId: "608495829670",
    appId: "1:608495829670:web:2e8762606639f20f526a67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const databaseRef = collection(db, 'firabase-dev');

// console.log(databaseRef)

const querySnapshot = await getDocs(databaseRef);

// querySnapshot.forEach((doc) => {
//     console.log(doc.data());
// });

console.log(querySnapshot.doc)

