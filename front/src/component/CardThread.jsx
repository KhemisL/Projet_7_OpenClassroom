// import axios from 'axios';
import React from 'react';
import {useContext } from 'react';
import { UserIdContext } from './AppContext';
import VerifyAdminUpdate from './VerifyAdminUpdate';
import ( UserIdContext)
const CardThread = ({post, set}) => {

    const id = useContext(UserIdContext)

    const createDate = (date) =>{
        
        let options = {hour: "2-digit", minute: "2-digit",weekday:"long", year:"numeric", month:"short", day: "numeric"};
        let timeStamp = Date.parse(date)
        let dateData = new Date (timeStamp).toLocaleDateString("fr-FR", options)
        return dateData.toString()
    }

    return (
        <div className="container-card-thread">
            <div className="pseudo-data"> 
                <span>{createDate(post.createdAt)}</span>
            </div>
                <VerifyAdminUpdate props={id} test={post} set={set}/>
        </div>
    );
};

export default CardThread;