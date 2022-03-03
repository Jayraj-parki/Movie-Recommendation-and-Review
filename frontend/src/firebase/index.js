import firebase from "firebase/compat/app"
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBwStxxdvp3s4itGXmRR9DRhialV_KHT9E",
    authDomain: "social-media-app-d8daa.firebaseapp.com",
    projectId: "social-media-app-d8daa",
    storageBucket: "social-media-app-d8daa.appspot.com",
    messagingSenderId: "204034438381",
    appId: "1:204034438381:web:defe17100bf03f1fe448e4",
    measurementId: "G-778DDR617V"
  };

firebase.initializeApp(firebaseConfig)

const  storage=firebase.storage()
        
export  {storage,firebase as default}     