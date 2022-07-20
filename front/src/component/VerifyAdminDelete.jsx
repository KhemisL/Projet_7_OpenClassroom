import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const VerifyAdminDelete = ({props, test}) => {
    const [data, setData] =useState("")
     useEffect(()=>{
        axios(`http://localhost:3000/api/auth/${props}`)
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))
    },[])

    const suppr = () =>{
        axios({
            method: "delete",
            url: `http://localhost:3000/api/poste/${test._id}`,
            
        })
        .then((res)=> console.log(res))
        .catch(err => console.log(err))
        
    }
    return (
        <div>
            {data.isAdmin === true ? (<div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>) : (props === test.userId && <div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>)}
        </div>
    );
};

export default VerifyAdminDelete;