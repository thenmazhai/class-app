import firebase from 'firebase';

// add SDK Firebase

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZYGBg6UqDBXdf65--D6ZL-j-cW_C2mRc",
    authDomain: "classtest-27d11.firebaseapp.com",
    projectId: "classtest-27d11",
    storageBucket: "classtest-27d11.appspot.com",
    messagingSenderId: "441384539986",
    appId: "1:441384539986:web:bdadbcf69b186a1aaccc8b"
  };
  
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();