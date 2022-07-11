import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feed from "../component/Feed"
import Profil from '../pages/Profil';
import logo from "../assets/logo-groupomania.PNG"
const EditProfil = ({props}) => {

      
    const [pseudo, setPseudo] = useState("")
    const [lastName, setLastName] = useState("")
    const [fitstName, setFirstName] = useState("")
    const [data, setData] =useState("")
    useEffect(()=>{
        axios(`http://localhost:3000/api/auth/${props}`)
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))
    },[])


    const back = () =>{

        window.location = "/home"
    }

    return (
        <div >
            <div className="bg-profil">
                <Feed/>
            </div>
            
            <div className="container-profil">

                
                
                <img src={logo} alt="" />
                <i onClick={back} className="fa-solid fa-xmark"></i>
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