import firebase from 'firebase/app';


export const firebaseConfig = {
  // Tu configuración de Firebase
  apiKey: "AIzaSyCnchf3ozfQOWyN6MHbk2w04a6LeObtOsQ",
  authDomain: "rutina-6683e.firebaseapp.com",
  projectId: "rutina-6683e",
  storageBucket: "rutina-6683e.appspot.com",
  messagingSenderId: "804990280219",
  appId: "1:804990280219:web:a90a01944256fc6426cebe",
  measurementId: "G-5HGSCQBL3R"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
