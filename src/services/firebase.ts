import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMxHdA4hpCYrb3lopxkAWNQ2_JE0igDyA",
  authDomain: "flames-a5eb0.firebaseapp.com",
  projectId: "flames-a5eb0",
  storageBucket: "flames-a5eb0.firebasestorage.app",
  messagingSenderId: "950990009756",
  appId: "1:950990009756:web:75a9faf26017d8644f0459",
  measurementId: "G-YWVGR0463F"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
