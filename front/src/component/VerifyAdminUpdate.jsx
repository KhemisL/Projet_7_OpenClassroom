import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Like from './Like';
const VerifyAdmin = ({props, test, set}) => {

    const [data, setData] =useState("")
    const [updating , setUpdating] = useState(false)
    const [textUpdate, setTextUpdate] = useState(null)

    const modifyPost = () =>{
        axios("http://localhost:3000/api/poste")
                .then((res) => set(res.data))
                .catch(err => console.log(err))
    }

    const modify = () =>{
        axios({
            method: "put",
            url: `http://localhost:3000/api/poste/${test._id}`,
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
            url: `http://localhost:3000/api/poste/${test._id}`,
            
        })
        .then((res)=> {
                modifyPost()
        })
        .catch(err => console.log(err))

        
    }
    useEffect(()=>{
        axios(`http://localhost:3000/api/auth/${props}`)
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))
    },[props])

    return (
        <div>
            <div className="content">
                {updating === false && <p className="description">{test.description}</p>}
                {test.imageUrl && <img src={test.imageUrl} alt="image du poste" />}
                {updating && <div className='container-update'><textarea className='update' defaultValue={test.description} onChange={(e) => setTextUpdate(e.target.value)}/> <button onClick={modify}>valider</button></div>}
            </div>
                
               <div className="icon">
                    {data.isAdmin === true ? (<div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>) : (props === test.userId && <div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>)}
                <div className="like">
                    <Like post={test} set ={set}/>
                    <p>{test.likes}</p>
                </div>

                    <div className="edit">
                        {data.isAdmin === true ? ( <div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>) : (props === test.userId && <div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>)}
                    </div>


                    
                </div> 
            

            
            
        </div>
    );
};

export default VerifyAdmin;