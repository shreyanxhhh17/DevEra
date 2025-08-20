import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7VVBtmFNHlwoMY6ISSbr-NTGKCiNny-g",
  authDomain: "devshrey917.firebaseapp.com",
  projectId: "devshrey917",
  storageBucket: "devshrey917.firebasestorage.app",
  messagingSenderId: "17182804864",
  appId: "1:17182804864:web:8c459bd856cef0d91d4f65",
  measurementId: "G-943GF1XKJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ANALYTICS = getAnalytics(app);

import { getAuth } from "firebase/auth";
const auth = getAuth(app);

export { auth };