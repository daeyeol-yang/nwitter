
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBAf8ErEBGME4iEFJHjOvpR4CmU7skZ1k",
  authDomain: "nwitter-reloaded-b9350.firebaseapp.com",
  projectId: "nwitter-reloaded-b9350",
  storageBucket: "nwitter-reloaded-b9350.appspot.com",
  messagingSenderId: "428070930018",
  appId: "1:428070930018:web:94555e0a184b4d3e71f33b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);