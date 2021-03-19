import firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBkwJfwWOVWdGTldA_FsR_e8aC_toqPNuI",
    authDomain: "netflix-clone-8b751.firebaseapp.com",
    projectId: "netflix-clone-8b751",
    storageBucket: "netflix-clone-8b751.appspot.com",
    messagingSenderId: "688098081935",
    appId: "1:688098081935:web:f1d41096b7e3691282c4fa",
    measurementId: "G-YBWCXWNGMY"
  };

const fireAuth = firebase.initializeApp(firebaseConfig).auth()
export default fireAuth