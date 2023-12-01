import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAG2LooSCmEOb-_CDuA9vU4mQXekPC3_Ys",
  authDomain: "react-firebase-aut-chat-app.firebaseapp.com",
  projectId: "react-firebase-aut-chat-app",
  storageBucket: "react-firebase-aut-chat-app.appspot.com",
  messagingSenderId: "240527327081",
  appId: "1:240527327081:web:fe0798fa0a2654907a07f8",
};

export const app = initializeApp(firebaseConfig);
