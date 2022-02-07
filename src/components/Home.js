import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { Link } from 'react-router-dom';
const Home = () => {
    const {user,logOut}=useUserAuth();
    const name= user.email.replace(/@.*$/,"");
    const handleLogOut=async()=>{
        try{
            await logOut();
        }
        catch (err){
            console.log(err.message)
        }
    }
    return (
        <div className="page">
            <div className="home-container">
                <h2 className="content">Hey {user && name} !</h2>
                <p>We Provide A Way To Learn Java In Depth. Start Learning Today!</p>
                <div className="button">
                    <button className="btn" type="submit" onClick={handleLogOut}><Link className="link" to="/">LOG OUT</Link></button>
                </div>
            </div>
        </div>
    )
};

export default Home;
