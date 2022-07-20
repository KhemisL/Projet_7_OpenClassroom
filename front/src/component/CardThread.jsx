// import axios from 'axios';
import React from 'react';
import {useContext } from 'react';
import { UserIdContext } from './AppContext';
import VerifyAdminUpdate from './VerifyAdminUpdate';
import ( UserIdContext)
const CardThread = ({post}) => {

    const id = useContext(UserIdContext)

    // const [data, setData] = useState("")

    // useEffect(()=>{
    //     axios(`http://localhost:3000/api/auth`)
    //     .then((res)=> setData(res.data))
    //     .catch(err => console.log(err))
    // },[])

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
            
            {/* <div className="content"> */}
                {/* {updating === false && <p className="description">{post.description}</p>} */}
                {/* {updating && <div className='container-update'><textarea className='update' defaultValue={post.description} onChange={(e) => setTextUpdate(e.target.value)}/> <button onClick={modify}>valider</button></div>    } */}
                
                {/* {post.imageUrl && <img src={post.imageUrl} alt="image du poste" />} */}
                {/* <TextPost test={post}/> */}
                 
            {/* </div> */}
            {/* <div className="icon"> */}

                {/* {user.isAdmin === true ? (<div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>) : (id === post.userId && <div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>)} */}

                <VerifyAdminUpdate props={id} test={post}/>
                 {/* {id === post.userId && <div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>} */}
                {/* <div className="like">
                    <Like post={post}/>
                    <p>{post.likes}</p>
                </div> */}
                
            {/* <div className="edit"> */}

                {/* {user.isAdmin === true ? (<div className='container-modify'><i onClick={() =>setUpdating(!updating)} className="fa-solid fa-pen"></i></div>) : (id === post.userId && <div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>)} */}
                {/* <VerifyAdminDelete props={id} test={post}/> */}
                
                {/* {id === post.userId && <div className='container-suppr'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>  } */}
            {/* </div> */}
                
            {/* </div> */}
        </div>
    );
};

export default CardThread;