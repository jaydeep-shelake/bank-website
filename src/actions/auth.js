import { auth, db, firestore } from "../firebase";
import { ERROR, SIGN_UP,AUTH_STATE, SIGN_IN, LOG_OUT } from "./types";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import {setDoc,doc,getDoc} from "@firebase/firestore";
//action creator for signup
export const signUp=(name,email,password,setLoading,navigate)=>async(dispatch,getState)=>{
    try {
   const user= await createUserWithEmailAndPassword(auth,email,password)
   console.log(user)
    const data = await  setDoc(doc(firestore,db.users,email),{
     name,
     email,
     userId:user.user.uid,
    })
    dispatch({type:SIGN_UP,payload:{name,
        email,
        userId:user.user.uid,}})
        navigate("/")
        setLoading(false)
   } catch (error) {
       
       dispatch({type:ERROR,payload:error.message})
       setLoading(false)
   }
  
}

// login action

export const login =(email,password,setLoading,navigate)=>async(dispatch,getState)=>{
    try {
        // setLoading(true)
        const user = await signInWithEmailAndPassword(auth,email,password)
  const docRef = doc(firestore,db.users,email)
  const docSnap = await getDoc(docRef)
   .then(doc=>{
  dispatch({type:SIGN_IN,payload:db.formatedDoc(doc)})
  navigate("/")
  setLoading(false)
})
        
    } catch (error) {
        dispatch({type:ERROR,payload:error})
        setLoading(false)

    }

}


//ogout state

export const logout =()=>async dispatch=>{
   await signOut(auth)
   console.log('looged out')
   dispatch({type:LOG_OUT,payload:null})
   
}

//uesr Sate changed

export const userStateChange=(user)=>{
 return {type:AUTH_STATE,payload:user}
}