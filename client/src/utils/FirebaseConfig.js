import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAHaA64yewxsfQg_XyAZZpk8IOb-X6G0QE",
    authDomain: "whatsapp-clone-2ecce.firebaseapp.com",
    projectId: "whatsapp-clone-2ecce",
    storageBucket: "whatsapp-clone-2ecce.appspot.com",
    messagingSenderId: "33031670991",
    appId: "1:33031670991:web:69da88ce3ec0ca0c577bba",
    measurementId: "G-KWMVHPEJLE"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);