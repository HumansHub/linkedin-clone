import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDodmU4JBhBxdIJpr2o2Tx4WkcZiLaVWTY",
    authDomain: "linkedin-clone-a9e16.firebaseapp.com",
    projectId: "linkedin-clone-a9e16",
    storageBucket: "linkedin-clone-a9e16.appspot.com",
    messagingSenderId: "769674964991",
    appId: "1:769674964991:web:47a671b2ddeaac595101ca"
  }

  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  export { db, auth, app };
