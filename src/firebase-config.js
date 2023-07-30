import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import { getFirestore } from "firebase/firestore";

const apkey = process.env.REACT_APP_JBIAWB;
const audo = process.env.REACT_APP_ANJHBGXN;
const daur = process.env.REACT_APP_UJIDNSL;
const prid = process.env.REACT_APP_PBBUBX;
const stbu = process.env.REACT_APP_IUXAGTT;
const meseid = process.env.REACT_APP_HKGHSDD;
const apid = process.env.REACT_APP_HGXFADSD;
const meid = process.env.REACT_APP_IHCSFCJX;

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