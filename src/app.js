 // import the required functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMLrGPyIPUGYloFz4557BISXRTPeW18BU",
    authDomain: "test-1b0f2.firebaseapp.com",
    projectId: "test-1b0f2",
    storageBucket: "test-1b0f2.appspot.com",
    messagingSenderId: "264901120368",
    appId: "1:264901120368:web:d0769cd3fc9e4e561dffb5",
    measurementId: "G-CX69RZTTXJ"
  };
 
// initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// database reference
const databaseRef = firebase.database().ref();
const contactRef = databaseRef.child('contacts');

// gui contact placeholder
const contactListUI = document.getElementById("contactList");
contactRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = contact.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", contactClicked)
});

contactClicked(e) {
  const contactID = e.target.getAttribute("child-key");
  const contactRef = dbRef.child('contacts/' + contactID);
  const contactDetail = document.getElementById("contactDetail");
}



/*
import { collection, doc } from 'firebase/firestore;'

const staffCollectionReference = collection(db, 'users;');
//for short

const staffCol = collection(db, 'users;');

//set single staff info
const userDoc = doc(db, 'users/jaydenhoughton;');
*/