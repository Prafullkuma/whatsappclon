import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyArWhe0Q0COyj7NYQctLJ1pgbYU3Hwufxg",
    authDomain: "instagramclon-5e0c1.firebaseapp.com",
    databaseURL: "https://instagramclon-5e0c1.firebaseio.com",
    projectId: "instagramclon-5e0c1",
    storageBucket: "instagramclon-5e0c1.appspot.com",
    messagingSenderId: "973376343459",
    appId: "1:973376343459:web:b71e2ca20d04d824a4de16",
    measurementId: "G-MEDTLBLRKK"
};
const firebaseconf = firebase.initializeApp(firebaseConfig)
const db = firebase.firesotr