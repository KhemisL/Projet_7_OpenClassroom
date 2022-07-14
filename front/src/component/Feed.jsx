import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import EditProfil from './EditProfil';
import Logout from './log/Logout';
import Post from './Post';
import PostFeed from './PostFeed';
import { useState, useEffect } from 'react';
import axios from "axios";

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
                    <Post/>
                </div>
                <div className="feed">
                    <PostFeed post={post}/>
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