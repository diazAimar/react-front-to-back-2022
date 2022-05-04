import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3sxaf2YLMeeJ5Ytl-7RoODPLV1GYkeiw',
  authDomain: 'inmuebleshmarket.firebaseapp.com',
  projectId: 'inmuebleshmarket',
  storageBucket: 'inmuebleshmarket.appspot.com',
  messagingSenderId: '321582477957',
  appId: '1:321582477957:web:e28b2858048f304dbe6fec',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
