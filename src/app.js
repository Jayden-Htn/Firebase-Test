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