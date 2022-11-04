/*import * as firebase from 'firebase'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

//import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase/app'
import settings from './settings'


const app = firebase.initializeApp(settings);
export const auth = app.auth()
export const db = app.database()
export const PROVIDER = new firebase.auth.GoogleAuthProvider()

export default app
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG6lufjaO45L5Db13MI1hbEdkfqLpbVzc",
  authDomain: "trello-vue-b282d.firebaseapp.com",
  projectId: "trello-vue-b282d",
  storageBucket: "trello-vue-b282d.appspot.com",
  messagingSenderId: "171547110441",
  appId: "1:171547110441:web:28695dd3e2293cda4dc038",
  measurementId: "G-LCCDQ561HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = app.auth()
export const db = app.database()
export const PROVIDER = new firebase.auth.GoogleAuthProvider()

export default app