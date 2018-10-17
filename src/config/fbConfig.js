import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiqu2mmlh814hzFMKkgTrkyCkkDfc0P5s",
  authDomain: "marioplan-25971.firebaseapp.com",
  databaseURL: "https://marioplan-25971.firebaseio.com",
  projectId: "marioplan-25971",
  storageBucket: "marioplan-25971.appspot.com",
  messagingSenderId: "468893336566"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
