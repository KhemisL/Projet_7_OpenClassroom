// import axios from 'axios';
import React from 'react';
import {useContext } from 'react';
import { UserIdContext } from './AppContext';
import VerifyAdminUpdate from './VerifyAdminUpdate';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Like from './Like';
import ( UserIdContext)
const CardThread = ({post, newdel, set}) => {

    const id = useContext(UserIdContext)

    const createDate = (date) =>{
        
        let options = {hour: "2-digit", minute: "2-digit",weekday:"long", year:"numeric", month:"short", day: "numeric"};
        let timeStamp = Date.parse(date)
        let dateData = new Date (timeStamp).toLocaleDateString("fr-FR", options)
        return dateData.toString()
    }

    const [data, setData] =useState("")
    const [updating , setUpdating] = useState(false)
    const [textUpdate, setTextUpdate] = useState(null)

    const modifyPost = () =>{
        axios("http://localhost:3000/api/poste")
                .then((res) => {
                    set(res.data)
                })
                .catch(err => console.log(err))
    }

    const modify = () =>{
        axios({
            method: "put",
            url: `http://localhost:3000/api/poste/${post._id}`,
            data:{
                description: textUpdate
            }   
        })
        .then((res)=>{
            setTextUpdate(res.data.description)
            modifyPost()
        } )
        .catch(err => console.log(err))
        setUpdating(false)  

        
    } 

    const suppr = () =>{
        axios({
            method: "delete",
            url: `http://localhost:3000/api/poste/${post._id}`,
            
        })
        .then((res)=> {
                modifyPost()
        })
        .catch(err => console.log(err))

        
    }
    useEffect(()=>{
        axios(`http://localhost:3000/api/auth/${id}`)
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))
    },[id])

    

    
    return (
        <div className="container-card-thread">
            <div className="pseudo-data"> 
                <span>{createDate(post.createdAt)}</span>
            </div>
                <VerifyAdminUpdate props={id} test={post} set={set}/>

                {/* <div className="content">
                {updating === false && <p className="description">{post.description}</p>}
                {post.imageUrl && <img src={post.imageUrl} alt="image du poste" />}
                {updating && <div className='container-update'><textarea className='update' defaultValue={post.description} onChange={(e) => setTextUpdate(e.target.value)}/> <button onClick={modify}>valider</button></div>}
            </div>
                
               <div className="icon">
                    {data.isAdmin === true ? (<div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>) : (id === post.userId && <div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>)}
                <div className="like">
                    <Like post={post} set={set}/>
                    <p>{post.likes}</p>
                </div>

                    <div className="edit">
                        {data.isAdmin === true ? ( <div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>) : (id === post.userId && <div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>)}
                    </div>


                    
                </div>  */}
            
        </div>
    );
};

export default CardThread;