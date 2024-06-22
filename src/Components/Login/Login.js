import React from 'react'
import "./Login.css";
import {   doSignInWithGoogle } from '../../Firebase/auths'
import { useAuth } from '../../Context/authContext';
import { Navigate } from 'react-router-dom';
function Login() {
const {logedin} = useAuth();


const onGooglelogin = (e)=>{
  e.preventDefault();
doSignInWithGoogle().catch(err=>{
  console.log("signin error ");
})



}
  return (
    <div className='login'>
      {/* {logedin && (<Navigate to={'/'} replace= {true}/>)}
      this is login 
      <button onClick={(e)=> onGooglelogin(e)}>Sign in with google</button> */}

 {logedin && (<Navigate to={'/'} replace= {true}/>)}

<div className='lgr '>Login</div>

<form>

  {/* <!-- Email input --> */}
  <div data-mdb-input-init className="form-outline mb-4">
    <input placeholder='Email Address' type="email" id="form2Example1" className="form-control" />
    {/* <label className="form-label" for="form2Example1">Email address</label> */}
  </div>

  {/* <!-- Password input --> */}
  <div data-mdb-input-init className="form-outline mb-4">
    <input placeholder='Password' type="password" id="form2Example2" className="form-control" />
    {/* <label className="form-label" for="form2Example2">Password</label> */}
  </div>
 
   <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>

<div className='btns'>
<button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
<p>OR </p>
  <button  onClick={(e)=> onGooglelogin(e)} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in with google</button>


</div>


</form>


    </div>
  )
}

export default Login

