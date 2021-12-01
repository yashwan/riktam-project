import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARpFvvyemKckP8jGDdNskWtFd4ou9Iq3k",
  authDomain: "whatsapp-mern-b8487.firebaseapp.com",
  projectId: "whatsapp-mern-b8487",
  storageBucket: "whatsapp-mern-b8487.appspot.com",
  messagingSenderId: "821717612470",
  appId: "1:821717612470:web:9ab05e1d2750220aeb7317"
};
const Fire = firebase.initializeApp(firebaseConfig);
const db = Fire.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
