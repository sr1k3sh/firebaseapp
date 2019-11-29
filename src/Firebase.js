import firebase from 'firebase';

const config = {
    apiKey: "unreadablestuff",
    authDomain: "fir-app-ec7f1.firebaseapp.com",
    databaseURL: "https://fir-app-ec7f1.firebaseio.com",
    projectId: "fir-app-ec7f1",
    storageBucket: "fir-app-ec7f1.appspot.com",
    messagingSenderId: "0112358132134"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;