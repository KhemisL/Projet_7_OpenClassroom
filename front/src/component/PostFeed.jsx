import React from 'react';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import CardThread from "../component/CardThread"
const PostFeed = () => {
    const [post, setPoste] = useState([])

    // useEffect(() =>{
    //     axios({
    //             method: "get",
    //             url:"http://localhost:3000/api/poste"
    //         })
    //         .then((res) => setPoste(res.data))
    //         .catch(err => console.log(err))
    // },[])
    
    useEffect(() =>{
        axios("http://localhost:3000/api/poste")
        .then((res) => setPoste(res.data))
        .catch(err => console.log(err))
    },[post])
    
 

   

    
    return (
        <div className="container-post-feed">
            
            <ul>
                {post.map((poste)=>(
                    <CardThread key={poste._id} post={poste} />
                ))}
            </ul>
                
            
                
           
        </div>
    );
};

export default PostFeed;