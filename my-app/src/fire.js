  
  import firebase from 'firebase';
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCGB8JrA2Q-VB2UHInv-YV5KG2-LW7t28A",
    authDomain: "login-46e53.firebaseapp.com",
    projectId: "login-46e53",
    storageBucket: "login-46e53.appspot.com",
    messagingSenderId: "158241748631",
    appId: "1:158241748631:web:955e6826f17cf9053b5bd2"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;