import axios from 'axios';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserIdContext } from './AppContext';
import Like from './Like';
import ( UserIdContext)
const CardThread = ({post}) => {

    const [data, setData] = useState("")
    const id = useContext(UserIdContext)
    const [updating , setUpdating] = useState(false)
    const [textUpdate, setTextUpdate] = useState(null)

    const createDate = (date) =>{
        
        let options = {hour: "2-digit", minute: "2-digit",weekday:"long", year:"numeric", month:"short", day: "numeric"};
        let timeStamp = Date.parse(date)
        let dateData = new Date (timeStamp).toLocaleDateString("fr-FR", options)
        return dateData.toString()
    }

    const modify = () =>{
        axios({
            method: "put",
            url: `http://localhost:3000/api/poste/${post._id}`,
            data:{
                description: textUpdate
            }   
        })
        .then((res)=> setTextUpdate(res.data.description))
        .catch(err => console.log(err))
        setUpdating(false)    
    }



    const suppr = () =>{
        axios({
            method: "delete",
            url: `http://localhost:3000/api/poste/${post._id}`,
            
        })
        .then((res)=> console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios(`http://localhost:3000/api/auth`)
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))
    },[])
    
    return (
        <div className="container-card-thread">

           
            <div className="pseudo-data">
               
                <span>{createDate(post.createdAt)}</span>
            </div>
            
            <div className="content">
                {updating === false && <p className="description">{post.description}</p>}
                {updating && <div><textarea defaultValue={post.description} onChange={(e) => setTextUpdate(e.target.value)}/> <button onClick={modify}>valider</button></div>    }
                
                {post.imageUrl && <img src={post.imageUrl} alt="image du poste" />}
                 
            </div>
            <div className="icon">
                 {id === post.userId && <i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i> }
                <div className="like">
                <Like post={post}/>
                <p>{post.likes}</p>
                </div>
                
            <div className="edit">
                
                {id === post.userId && <i onClick={suppr} className="fa-solid fa-xmark"></i> }
            </div>
                
            </div>
        </div>
    );
};

export default CardThread;