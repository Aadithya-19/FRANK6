import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAsiQ1PBWP4_Uz3787jeZpSbRpRbdZApTk",
    authDomain: "frank-74b84.firebaseapp.com",
    projectId: "frank-74b84",
    storageBucket: "frank-74b84.appspot.com",
    messagingSenderId: "72261430838",
    appId: "1:72261430838:web:dcd4a278ee990f6098b297"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
