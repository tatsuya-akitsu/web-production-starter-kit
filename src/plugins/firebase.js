import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA_LrwF7MSIH760Lsv71fjcQDzheox19b0",
    authDomain: "web-quotation-template.firebaseapp.com",
    databaseURL: "https://web-quotation-template.firebaseio.com",
    projectId: "web-quotation-template",
    storageBucket: "web-quotation-template.appspot.com",
    messagingSenderId: "813503674913"
  })
}

export default firebase