import React, { useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {registerNewUser} from '../actions/userAction'
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Register() {
  const registerstate= useSelector(state=>state.registerNewUserReducer)
  const{loading,error,success}=registerstate
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
 const dispatch = useDispatch();
  function register(e) {

    e.preventDefault()
    const user={
        name : name ,
        email : email , 
        password : password
    }

    if(password==cpassword)
    {
        dispatch(registerNewUser(user))
    }
    else{
        alert('passwords not matched')
    }
    
  }
  return (
    <div>
      <div class="row justify-content-center">
        <div className="col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
          <div className="div">
            <h2 style={{ display: "inline",padding:'4px' }} className="text-center m-3">
              Register
            </h2>
            {loading && (<Loader/>)}
            {error && (<Error error='Email already registered'/>)}
            {success && (<Success success='Registration Successful. Please Login.'/>)}
            <i
              style={{ fontSize: "25px" }}
              className="fa fa-user-plus"
              aria-hidden="true"
            ></i>{" "}
          <form onSubmit={register}>
          <input
              type="text"
              placeholder="name"
              className="form-control"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              required
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <div className="text-right">
              <button type="submit" className="btn mt-3">
                REGISTER
              </button>
            </div>
            
          </form>
          {/* <a href='/login'>Click Here To Login</a>  */}
          </div>
          <a style={{color: 'black'}} href="/login" className='m-9'>Click Here To Login</a>

        </div>
      </div>
    </div>
  );
}
