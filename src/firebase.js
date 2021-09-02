import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAVnXQslgBFDxJ6klDXSGTxyJsg25Y9R4",
  authDomain: "challenge-1d4dc.firebaseapp.com",
  projectId: "challenge-1d4dc",
  storageBucket: "challenge-1d4dc.appspot.com",
  messagingSenderId: "170706441145",
  appId: "1:170706441145:web:882989b9caba81ba339c68",
  measurementId: "G-DLR7SJWHLL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default firebaseApp;
