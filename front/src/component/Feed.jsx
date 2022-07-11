import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import EditProfil from './EditProfil';
import Logout from './log/Logout';
import Post from './Post';
import PostFeed from './PostFeed';

const feed = () => {
    return (
        <div className="container-global-feed">
            <div className="content">
                <div className="post">
                    <Post/>
                </div>
                <div className="feed">
                    <PostFeed/>
                </div>
               
            </div>
            <div className="nav-link">
            <NavLink to="/profil"><i className="fa-solid fa-user"></i></NavLink> 
                
             
             <Logout/>
            </div>
            
             
        </div>
    );
};

export default feed;