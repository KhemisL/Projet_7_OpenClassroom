import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './log/Logout';
import Post from './Post';
import { useState, useEffect, useContext } from 'react';
import { UserIdContext } from './AppContext';
import axios from "axios";
import CardThread from './CardThread';
import VerifyAdminUpdate from './VerifyAdminUpdate';

const Feed = () => {

    const [post, setPoste] = useState([])
    
    
   
        useEffect(() =>{
             axios("http://localhost:3000/api/poste")
                .then((res) => setPoste(res.data))
                .catch(err => console.log(err)) 
        },[])

        
    

          
    
    
    

    
    
    return (
        <div className="container-global-feed">
            <div className="content">
                <div className="post">
                    <Post post={post} newpost={post} set={setPoste}/>
                </div>
                <div className="feed">
                    <div className="container-post-feed">
                        <ul>
                            {post.map((poste)=>(
                                 <CardThread key={poste._id} post={poste} set={setPoste}/>
                                
                            ))}
                        </ul>
                    </div>
                </div>
               
            </div>
            <div className="nav-link">
            <NavLink to="/profil"><i className="fa-solid fa-user"></i></NavLink>    
             <Logout/>
            </div>
        </div>
    );
};

export default Feed;