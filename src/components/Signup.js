import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const {signUp}=useUserAuth();
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("")
        try{
            console.log(name)
            await signUp(email,password);
            navigate("/")
        }
        catch(err){
            setError(err.message)
        }
    }
    return ( 
        <div className="page">
            <div className="section">
                <div className="left">
                    <h2 className="title">REGISTER</h2>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>  
                        <label htmlFor="name">FULL NAME</label>
                        <input name="name" type="text" onChange={(e)=>setName(e.target.value)}/>
                        <label htmlFor="email">EMAIL</label>
                        <input name="email"type="email" onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">PASSWORD</label>
                        <input name="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        <div className="check_box">
                            <input type="checkbox" name="policy"/>
                            <label className="policy" htmlFor="policy">I agree to all the <span>terms and conditions</span></label>
                        </div>
                        <div className="submit">
                            <button className="btn" type="submit">SIGN UP</button>
                            <Link className="link" to="/">I'm already a member</Link>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <div className="logo">
                        <img src="bulb.png" alt=""/>
                        <p>EduOneTech</p>
                    </div>
                    <div className="text">
                        <h1>Hey!</h1>
                        <p>Enter your details and start your learning journey with us.</p>
                    </div>
                    <div className="img">
                        <img src="illustration.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signup;
