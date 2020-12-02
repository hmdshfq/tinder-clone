import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxRMzAORZ9uhmamBhfKfO_7vZZlgq9KiQ",
  authDomain: "tinder-clone-59db5.firebaseapp.com",
  databaseURL: "https://tinder-clone-59db5.firebaseio.com",
  projectId: "tinder-clone-59db5",
  storageBucket: "tinder-clone-59db5.appspot.com",
  messagingSenderId: "77700263034",
  appId: "1:77700263034:web:3234109b166ccabac0dfc3"
};

const project = firebase.initializeApp(firebaseConfig);
const database = project.firestore();

export default database;