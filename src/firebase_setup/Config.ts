import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import {  getAuth} from "firebase/auth";
 
const FirebaseConfig = {
  apiKey: "AIzaSyCwpMljloTh2ChuodB_E19_862vGsPAr7c",
  authDomain: "care-finder-98ce2.firebaseapp.com",
  projectId: "care-finder-98ce2",
  storageBucket: "care-finder-98ce2.appspot.com",
  messagingSenderId: "17935235621",
  appId: "1:17935235621:web:80db06dab537e27ebeddcc"
};
export const app = initializeApp(FirebaseConfig);
export const auth = getAuth(app);





