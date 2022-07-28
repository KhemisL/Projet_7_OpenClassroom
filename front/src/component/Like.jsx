import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserIdContext } from './AppContext';

const Like = ({post, set}) => {

    const[like, setLike] = useState(false)
    const id = useContext(UserIdContext)
    
    const modifyPost = () =>{
        axios("http://localhost:3000/api/poste")
                .then((res) => {
                    set(res.data)
                })
                .catch(err => console.log(err))
    }

const liked = () => {
        axios({
            method: "post",
            url: `http://localhost:3000/api/poste/${post._id}/like`,
            data:{
                id: id,
            }
        })
        .then((res)=> {
            setLike(res.data.likes)
            modifyPost()
        } )
        .catch((err)=> console.log(err))
        setLike(true)
       
    }

    const unliked = () => {
        axios({
            method: "post",
            url: `http://localhost:3000/api/poste/${post._id}/unlike`,
            data:{
                id: id,
            }
        })
        .then((res)=> {
            setLike(res.data.likes)
            modifyPost()
        } )
        .catch((err)=> console.log(err))
        setLike(false)
       
    }
    useEffect(()=>{
        if (post.usersLiked.includes(id)) {
            setLike(true)
        }else{
            setLike(false)
        }
        
    }, [id, post.usersLiked, like ])

    
    return (
        <div>
            {id === null && (<p>Connectez vous pour aimer un post</p>)}
            {id && like === false && (
                <i onClick={liked} className="fa-regular fa-heart"></i> 
            )}

            {id && like === true && (
                <i onClick={unliked} className="fa-solid fa-heart"></i> 
            )}
            
        </div>
    );
};

export default Like;