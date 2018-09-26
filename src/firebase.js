import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB6e1qzWxg5cyOitKTWONQ-vBx6laYohqQ",
    authDomain: "freedom-4056d.firebaseapp.com",
    databaseURL: "https://freedom-4056d.firebaseio.com",
    projectId: "freedom-4056d",
    storageBucket: "freedom-4056d.appspot.com",
    messagingSenderId: "619590820138"
};

firebase.initializeApp(config);

export default firebase;