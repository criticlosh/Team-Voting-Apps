import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyC6Reeq4Y_NDSdQH4prYi6emGrvF9YuXV4",
  authDomain: "team-voting-app-b485d.firebaseapp.com",
  databaseURL: "https://team-voting-app-b485d-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-b485d",
  storageBucket: "team-voting-app-b485d.appspot.com",
  messagingSenderId: "41554255714",
  appId: "1:41554255714:web:3b57c15329fb9b7ea6163b"
};
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
