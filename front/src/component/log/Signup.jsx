import React from 'react';
import { useState } from 'react';
import Login from './Login';
import axios from "axios"
const Signup = () => {


    
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = (e) =>{
        e.preventDefault()
        const emailError = document.querySelector(".email-error");
        const passwordError = document.querySelector(".password-error");

        axios({
            method: "post",
            url: "http://localhost:3000/api/auth/signup",
            data: {
                lastName,
                firstName,
                pseudo,
                email,
                password
            }
        })
        .then((res)=> {
            
            if (!res.data.message) {
                emailError.innerHTML = "res.data.errors.email"
                passwordError.innerHTML = "res.data.errors.password"
            }else{
                 window.location = "/home"
            }
                
            
        })
        .catch((err)=> console.log(err))
    }
    return (
        
            <form action=""  onSubmit={handleSignup} id="log-form">

            <label htmlFor="lastName" className="nom">Nom</label>
            <input type="text" name='lastName' id='lastName' onChange={(e)=> setLastName(e.target.value) } value={lastName} />
            <div className="lastName-error"></div>


            <label htmlFor="firstName" className="prenom">Prénom</label>
            <input type="text" name='firstName' id='firstName' onChange={(e)=> setFirstName(e.target.value) } value={firstName} />
            <div className="firstName-error"></div>

            <label htmlFor="pseudo" className="pseudo">Pseudo</label>
            <input type="text" name='pseudo' id='pseudo' onChange={(e)=> setPseudo(e.target.value) } value={pseudo} />
            <div className="pseudo-error"></div>

            <label htmlFor="email" className="email">Email</label>
            <input type="text" name='email' id='email' onChange={(e)=> setEmail(e.target.value) } value={email} />
            <div className="email-error"></div>

            <label htmlFor="password" className="password">Mot de passe</label>
            <input type="password" name='password' id='password'  onChange={(e)=> setPassword(e.target.value) } value={password}/>
            <div className="password-error"></div>
            <input type="submit" value="Se connecter" className="btn-login" />
        </form>
        
    );
};

export default Signup;