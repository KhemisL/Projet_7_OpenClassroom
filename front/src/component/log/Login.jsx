import React from 'react';
import axios from "axios"
import { useState } from 'react';
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault()
        const emailError = document.getElementsByClassName("email-error");
        const passwordError = document.getElementsByClassName("password-error");

        axios.post("http://localhost:3000/api/auth/login", {email, password}, {withCredentials: true})
        .then((res)=> {
        
            
            
            window.location = "/home"
                
            
        })
        .catch((err)=> console.log(err))
    }

    return (
        <form action="" onSubmit={handleLogin} id="log-form">

            <label htmlFor="email" className='email'>Email</label>
            <input type="text" name='email' id='email'  onChange={(e)=> setEmail(e.target.value) } value={email} />
            <div className="email-error"></div>
            <label htmlFor="password" className='password'>Mot de passe</label>
            <input type="password" name='password' id='password'   onChange={(e)=> setPassword(e.target.value) } value={password}/>
            <div className="password-error"></div>
            <input type="submit" value="Se connecter" className="btn-login" />
        </form>
    );
};

export default Login;