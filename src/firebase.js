import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLcagjfkwOSqZxd6H-_IichumMIOevulk",
  authDomain: "clone-app-897a7.firebaseapp.com",
  projectId: "clone-app-897a7",
  storageBucket: "clone-app-897a7.appspot.com",
  messagingSenderId: "161672940254",
  appId: "1:161672940254:web:cee04aa85dac1f79a1104f",
  measurementId: "G-6BH78MQG2D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
