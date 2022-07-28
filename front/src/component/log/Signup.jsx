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
        const error = document.querySelector(".error");
        const sign = document.querySelector(".sign");

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
            sign.innerHTML = "voter inscription a bien fonctonné, veuillez vous connecter"

        })
        .catch((err)=> error.innerHTML = "Email ou Pseudo déja pris")
    }
    return (
        
        <form  onSubmit={handleSignup} id="log-form">
            <div className="error"></div>
            <div className="sign"></div>
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
            

            <label htmlFor="password" className="password">Mot de passe</label>
            <input type="password" name='password' id='password'  onChange={(e)=> setPassword(e.target.value) } value={password}/>
            
            <input type="submit" value="S'inscrire" className="btn-login" />

        </form>
        
    );
};

export default Signup;