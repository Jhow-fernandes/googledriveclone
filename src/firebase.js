import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgSUnphNexpOjjjdzv8Bc8FctrKQheUbc",
    authDomain: "driver-c0533.firebaseapp.com",
    projectId: "driver-c0533",
    storageBucket: "driver-c0533.appspot.com",
    messagingSenderId: "45945935674",
    appId: "1:45945935674:web:cb9e9fbdfbba0496d86203"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };