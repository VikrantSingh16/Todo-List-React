import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyClSsOwESsZ4QVrHUazkzFV_msrMV6LZ_M",
    authDomain: "todoapp-ceea7.firebaseapp.com",
    projectId: "todoapp-ceea7",
    storageBucket: "todoapp-ceea7.appspot.com",
    messagingSenderId: "325435809845",
    appId: "1:325435809845:web:97cd9c31435f4d4390117c"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export {db};