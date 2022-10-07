import React,{useState} from 'react'
import '../styles/auth.css'
import { Link ,useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { connect } from 'react-redux'
import { signUp } from '../actions/auth'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Loader from '../components/Loader'
import Header from '../components/Header';
const Signup = (props) => {
    const [isLoading,setLoading]=useState(false)
  const navigate=useNavigate()
    let schema = yup.object().shape({
        name:yup.string().required("Please Enter your Name"),
        email:yup.string("Please Enter your Email").required().email(),
        password:yup.string().required("Please Enter your password")
        .test(
            "regex",
            "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
          val => {
            let regExp = new RegExp(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
            )
            return regExp.test(val);
       })   

    })
  

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    })
    const handleSignup=(data)=>{
        setLoading(true)
        props.signUp(data.name,data.email,data.password,setLoading,navigate)
        navigate("/")
    }
// console.log(props)
    return (
        <>
        <Header/>
        <div className="signup-page">
           <div className="signup">
               <form onSubmit={handleSubmit(handleSignup)}>
                   <h2>Sign up</h2>
                  {props.errMsg&&<div className="err-msg">{props.errMsg==='Firebase: Error (auth/email-already-in-use).'?'Email account Alredy exits':props.errMsg}</div>}
                 <div className="inputs">
                     <div className="in">
                     <input type="text" name="name" {...register('name', { required: true })} placeholder="Full Name" />
                     {errors&&<p className="err">{errors?.name?.message}</p>}
                     </div>
                     <div className="in">
                     <input type="email" name="email" {...register('email', { required: true })} placeholder="Email"  />
                     {errors&&<p className="err">{errors?.email?.message}</p>}
                     </div>
                 </div>
                 <input type="password" name="password" {...register('password', { required: true })} className="full-input" placeholder="Password" />
                 {errors&&<p className="err">{errors?.password?.message}</p>}

                 <button type="submit" >{isLoading?<Loader/>:'Sign up'}</button>
                 <p>Already have an account? <Link to="/login">Login</Link></p>
               </form>
               <div className="img">
                   <img src="https://firebasestorage.googleapis.com/v0/b/bubble-byte.appspot.com/o/auth%2FSign%20Up.gif?alt=media&token=ae9b57a7-3aff-44c2-8843-911dd7fa7d5b" alt="" />
               </div>
            </div> 
        </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{errMsg:state?.user.err}
}

export default connect(mapStateToProps,{signUp})(Signup)