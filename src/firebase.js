import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB6e1qzWxg5cyOitKTWONQ-vBx6laYohqQ",
    authDomain: "freedom-4056d.firebaseapp.com",
    projectId: "freedom-4056d",
};

firebase.initializeApp(config);

var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export default firebase;