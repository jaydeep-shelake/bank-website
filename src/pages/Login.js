import React ,{useState}from 'react'
import { Link,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { connect } from 'react-redux'
import { login} from '../actions/auth'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Header from '../components/Header';
import Loader from '../components/Loader'
import '../styles/auth.css'
const Login = (props) => {
console.log(props)
    const [isLoading,setLoading]=useState(false)
     const navigate=useNavigate()
    let schema = yup.object().shape({
        email:yup.string("Please Enter your Email").required().email(),
        password:yup.string().required("Please Enter your password")
        .test(
            "regex",
            "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
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
    const handleLogin=(data)=>{
        setLoading(true)
        props.login(data.email,data.password,setLoading,navigate)
        navigate("/")
    }

    console.log(props)

    return (
        <>
        <Header/>
        <div className="signup-page">
        <div className="signup">
            <form onSubmit={handleSubmit(handleLogin)}>
                <h2>Login</h2>
                {props?.errMsg&&<div className="err-msg">{props?.errMsg.code==='auth/user-not-found'?'The email account does not exist':'Inccorect Email or Password'}</div>}
              <div className="inputs login">
                  <input type="email" placeholder="Email" name="email" {...register('email', { required: true })}/>
                  {errors&&<p className="err">{errors?.email?.message}</p>}
                  <input type="password" placeholder="Password"  name="password" {...register('password', { required: true })}/>
                 {errors&&<p className="err">{errors?.password?.message}</p>}

              </div>
              <button type="submit">{isLoading?<Loader/>:'Login'}</button>
              <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
            </form>
            <div className="img">
                <img src="https://firebasestorage.googleapis.com/v0/b/bubble-byte.appspot.com/o/auth%2FSign%20In.gif?alt=media&token=50448638-c065-4a0a-8758-709f5c82d47d" alt="" />
            </div>
         </div> 
     </div>
     </>
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{errMsg:state?.user.err}
}
export default connect(mapStateToProps,{login})(Login)