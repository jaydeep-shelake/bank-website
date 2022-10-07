import React ,{useEffect}from 'react'
import Home from './pages/Home'
import { auth, db, firestore } from './firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc} from '@firebase/firestore';
import Calculator from './pages/Calculator'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { userStateChange } from './actions/auth';
import Login from './pages/Login';
import Signup from './pages/Signup';
const App = (props) => {

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,user=>{
       console.log(user)
       if(user){
       const docRef = doc(firestore,db.users,user.email)
       const docSnap = getDoc(docRef)
       .then(doc=>{
         props.userStateChange(db.formatedDoc(doc))
       })
           
       }
    })
   
    return unsubscribe;
       },[])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/emi-calculator' element={<Calculator/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default connect(null,{userStateChange})(App)