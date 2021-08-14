import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBPaZ2zL3frQkq3izkjhYlr19VtTKZ9XXI",
  authDomain: "abu-app-41d3f.firebaseapp.com",
  projectId: "abu-app-41d3f",
  storageBucket: "abu-app-41d3f.appspot.com",
  messagingSenderId: "392783401469",
  appId: "1:392783401469:web:3cdda579e74b49cc1a4994",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
