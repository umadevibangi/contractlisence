import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBtC18YUqSQvuaBI81svQZf18RueZq4L-8",
  authDomain: "react-firebase-auth-318e8.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-318e8.firebaseio.com",
  projectId: "react-firebase-auth-318e8",
  storageBucket: "react-firebase-auth-318e8.appspot.com",
  messagingSenderId: "60379646947",
  appId: "1:60379646947:web:4acec342f47d9c8cb86ed6",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
