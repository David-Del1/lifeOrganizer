import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDPP4zXdkSnbExNgNqM3C_v-OkFOnSyYK0",
  authDomain: "life-organizer-e3b23.firebaseapp.com",
  databaseURL: "https://life-organizer-e3b23-default-rtdb.firebaseio.com",
  projectId: "life-organizer-e3b23",
  storageBucket: "life-organizer-e3b23.appspot.com",
  messagingSenderId: "648711540886",
  appId: "1:648711540886:web:0f09003d76234053d472b7"
});

export { firebaseConfig as firebase };