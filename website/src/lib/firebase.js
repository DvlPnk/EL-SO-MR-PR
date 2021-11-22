import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyA_5bECzsZVfhs6VxX5myQC1WVDxdTeBhg",
  authDomain: "proyecto-classroom-5969b.firebaseapp.com",
  projectId: "proyecto-classroom-5969b",
  storageBucket: "proyecto-classroom-5969b.appspot.com",
  messagingSenderId: "818523994946",
  appId: "1:818523994946:web:2530414a6cb3471639e6db",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;