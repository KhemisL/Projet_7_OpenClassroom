import axios from 'axios';
import React from 'react';

const Logout = () => {
    const removeCookie = (key)=>{
        if(window !== undefined){
            removeCookie.remove(key, {expires: 1})
        }
    }
    const logout = async() =>{
        await axios({
            method:"get",
            url: "http://localhost:3000/api/auth/logout",
            withCredentials:true
            
        })
        .then(()=> removeCookie("jwt"), window.location = "/")
        .catch(err => console.log(err))
    }
    return (
        <div onClick={logout}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
    );
};

export default Logout;