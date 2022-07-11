import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import illustration from "../../assets/4669613.jpg"
const Log = () => {

    const [signup, setSignup] = useState(true)
    const [login, setLogin] = useState(false)

    const handleModal = (e) =>{
        if (e.target.id === "register") {
            setLogin(false)
            setSignup(true)
        } else if (e.target.id === "login") {
            setLogin(true)
            setSignup(false)
        }
    }
    return (
        <div className='container-global'>
            
            
            <div className='container-content'>
                
                <h1>Bienvenue sur <br /><span>Groupomania</span></h1>
                
                <ul>
                    <li id='register' onClick={handleModal} className={signup ? "active-li" : null}>S'inscrire</li>
                    <li id='login' onClick={handleModal} className={login ? "active-li" : null}>Se connecter</li>

                    
                </ul>
                {signup && <Signup/>}
                {login && <Login/>}
            </div>
            <div className="container-img">
                <img src={illustration} alt="illustration" />
            </div>
        </div>
    );
};

export default Log;