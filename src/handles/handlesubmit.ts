import {addDoc, collection} from "@firebase/firestore"
import { db } from "../firebase_setup/config"


const handleSubmit = (testdata: string)=>{
   console.log(testdata)
     const ref = collection(db, "test_data");

     let data = {
        testData : testdata
     }
     try {
        addDoc(ref, data)
     }catch (err){
        console.log(err)
     }
};

export default handleSubmit;