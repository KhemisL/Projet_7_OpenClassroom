import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const TextPost = ({test}) => {
    const [updating , setUpdating] = useState(false)
    const [textUpdate, setTextUpdate] = useState(null)

    const modify = () =>{
        axios({
            method: "put",
            url: `http://localhost:3000/api/poste/${test._id}`,
            data:{
                description: textUpdate
            }   
        })
        .then((res)=> setTextUpdate(res.data.description))
        .catch(err => console.log(err))
        setUpdating(false)  
          
    } 
    return (
        <div className='content'>
            {/* {updating === false && <p className="description">{test.description}</p>} */}
            {updating && <div className='container-update'><textarea className='update' defaultValue={test.description} onChange={(e) => setTextUpdate(e.target.value)}/> <button onClick={modify}>valider</button></div>}
            {test.imageUrl && <img src={test.imageUrl} alt="image du poste" />}
        </div>
    );
};

export default TextPost;