import firebase from "firebase/compat/app";
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyB-BNtm7_nXgFDWl8g9_fM9ilmUbmnhadk",
    authDomain: "myportfoliodata-dae08.firebaseapp.com",
    databaseURL: "https://myportfoliodata-dae08-default-rtdb.firebaseio.com",
    projectId: "myportfoliodata-dae08",
    storageBucket: "myportfoliodata-dae08.appspot.com",
    messagingSenderId: "101778662616",
    appId: "1:101778662616:web:c5c465b0507538894923ad",
    measurementId: "G-QJ0123WHNF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export default firebase