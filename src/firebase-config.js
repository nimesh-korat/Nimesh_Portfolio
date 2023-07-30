import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import { getFirestore } from "firebase/firestore";

const apkey = process.env.REACT_APP_API_KEY;
const audo = process.env.REACT_APP_AUTHDOMAIN;
const daur = process.env.REACT_APP_DATABASEURL;
const prid = process.env.REACT_APP_PROJECTID;
const stbu = process.env.REACT_APP_STORAGEBUCKET;
const meseid = process.env.REACT_APP_MESSAGINGSENDERID;
const apid = process.env.REACT_APP_APPID;
const meid = process.env.REACT_APP_MEASUREMENTID;

const firebaseConfig = {
    apiKey: apkey,
    authDomain: audo,
    databaseURL: daur,
    projectId: prid,
    storageBucket: stbu,
    messagingSenderId: meseid,
    appId: apid,
    measurementId: meid
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const db = getFirestore();
export default firebase