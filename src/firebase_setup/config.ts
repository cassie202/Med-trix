// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getFirestore} from "firebase/firestore";
import {  getAuth, signOut as firebaseSignOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential} from "firebase/auth";
import {addDoc, collection} from "firebase/firestore";
    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwpMljloTh2ChuodB_E19_862vGsPAr7c",
  authDomain: "care-finder-98ce2.firebaseapp.com",
  projectId: "care-finder-98ce2",
  storageBucket: "care-finder-98ce2.appspot.com",
  messagingSenderId: "17935235621",
  appId: "1:17935235621:web:80db06dab537e27ebeddcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


// export const signOut = async()=>{
//   const auth = getAuth();
//   try {
// await firebaseSignOut(auth);
// return true;
// } catch (error) {
// return false;
// }
// };

// export const signIn = async(email: string, password: string)=>{
//   const auth = getAuth();
// try{
//   const UserCredential = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//    const user = UserCredential.user;
//    return true;
// }catch (error){
//   return {error: (error as Error).message}
// }
// };

// export const signUp = async(email: string, password: string) =>{
//   const auth = getAuth();
//   try{
//       const UserCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//       );
//       const user = UserCredential.user;
//       await addDoc(collection(db, "users"), {
//           uid: user.uid,
//           email: user.email,
//       });
//       return true    
//   }catch(error){
//       return{error: (error as Error).message}
//   };
// }


