import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvumPcpmpMuxL4hpYXDtxWLAEmI3VBycM",
  authDomain: "linkedln-clone-1dc57.firebaseapp.com",
  projectId: "linkedln-clone-1dc57",
  storageBucket: "linkedln-clone-1dc57.appspot.com",
  messagingSenderId: "963623834211",
  appId: "1:963623834211:web:969f2803fb5d7a0fc81e56",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
