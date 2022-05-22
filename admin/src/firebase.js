import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyCagTP_ZNkiNhqUHjzOGxwEBfuhfYQ8IqM",
  authDomain: "workout-b8892.firebaseapp.com",
  projectId: "workout-b8892",
  storageBucket: "workout-b8892.appspot.com",
  messagingSenderId: "210878183372",
  appId: "1:210878183372:web:91b79a576d53150f77cf69",
  measurementId: "G-DN0LM3WZFQ"

};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
