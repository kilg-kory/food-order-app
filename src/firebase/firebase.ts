import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

export const app = initializeApp({
  apiKey: "AIzaSyB0dH5gKbWFL41MbmcWxI0WuYqkqqwoRt0",
  authDomain: "study-burger.firebaseapp.com",
  databaseURL: "https://study-burger.firebaseio.com",
  projectId: "study-burger",
  storageBucket: "study-burger.appspot.com",
  messagingSenderId: "888618666916",
  appId: "1:888618666916:web:999164bed30a3e3784cf31"
});

export const db = getFirestore(app)

