import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feed from "../component/Feed"
import logo from "../assets/logo-groupomania.PNG"
import { NavLink } from 'react-router-dom';
const EditProfil = ({props}) => {

      
    const [data, setData] =useState("")
    useEffect(()=>{
        axios(`http://localhost:3000/api/auth/${props}`)
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))
    },[props])


    return (
        <div >
            <div className="bg-profil">
                <Feed/>
            </div>
            
            <div className="container-profil">
                <div className="container-header">
                    <img src={logo} alt="logo entreprise" />
                    <NavLink className="close-profil" to="/home"><div className="container-profil-close"> <i className="fa-solid fa-xmark"></i></div></NavLink>
                </div>
                
                <div className="information">
                    <h2>Pseudo</h2>
                    <h3>{data.pseudo}</h3>
                    <h2>Nom</h2>
                    <h3>{data.lastName}</h3>
                    <h2>Prénom</h2>
                    <h3>{data.firstName}</h3>
                </div>
            </div>
        </div>
    );
};

export default EditProfil;