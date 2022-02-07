import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const {logIn,googleSignIn}=useUserAuth();
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("")
        try{
            await logIn(email,password)
            navigate("/home")
        }
        catch(err){
            setError(err.message)
        }
    }
    const handleGoogleSignIn=async(e)=>{
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home")
        }
        catch(err){
            setError(err.message)
        }
    }
    return (
            <div className="page">
            <div className="section">
                <div className="left">
                    <h2 className="title">LOGIN </h2>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>  
                        <label htmlFor="email">EMAIL</label>
                        <input name="email"type="email" onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">PASSWORD</label>
                        <input name="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        <div className="submit">
                            <button className="btn" type="submit">LOG IN</button>
                            <Link className="link" to="/signup">Create an account?</Link>
                        </div>
                    </form>
                    <p className="or">OR</p>
                    <div className="google">
                        <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn}/>
                    </div>
                </div>
                <div className="right">
                    <div className="logo">
                        <img src="bulb.png" alt=""/>
                        <p>EduOneTech</p>
                    </div>
                    <div className="text">
                        <h1>Welcome Back!</h1>
                        <p>Just one step left to buckle up and start learning!</p>
                    </div>
                    <div className="img">
                        <img src="student.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;