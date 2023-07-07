// import {ReactElement, SyntheticEvent, useEffect, useState} from "react"
// import {Link} from "react-router-dom"
// import { signUp }  from "../firebase_setup/config"
// import { type } from "os";

export function SignUp(){
    
}
// const SignUp =(): ReactElement =>{
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [password2, setPassword2] = useState('');
//     const [error, seterror] = useState("");

//     const handleSubmit = async(e: SyntheticEvent) =>{
//         e.preventDefault()
//         if(password !== password2){
//             seterror("Passwords do not match")
//         }else {
//             setEmail = ""
//             setPassword = ""
            
//            const res = await signUp(email, password);
// if (typeof res === 'boolean') {
//   // Handle the case when res is true
// } else if (res.error) {
//   seterror(res.error);
// }
//         }
//     };

//      return (
//         <>
//        <h2>Sign Up</h2>
//        <div>
//        {error ? <div>{error}</div> : null}
//        <form onSubmit = {handleSubmit}>
//          <input
//           type = "email"
//           name = "email"
//           type = {email}
//           placeholder = "Your email"
//           required;
//           onChange = {()=> setEmail(e.target.value)}
//          />

//          <input
//          type= "password"
//          name = "password"
//          value = {password}
//          placeholder = "Your Password"
//          required;
//          onChange = {(e)=> setPassword(e.target.value)}
//          />

//          <button type="submit">Submit</button>
//        </form>

//        <p>
//        Already registered?
//        </p>
//        </div>
//         </>
//      )


// }



