import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import { UserIdContext } from './AppContext';
const Post = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const [description, setDescription] = useState("")
    const [file, setFile] = useState()
    const id = useContext(UserIdContext)
    

    const handlePicture = (e) => {
        setImageUrl(URL.createObjectURL(e.target.files[0]))

        setFile(e.target.files[0])
    }
    
    const log =(e)=> {
        e.preventDefault()
        if (description) {
            const data = new FormData()
            data.append("userId" , id)
            data.append("description", description)
            data.append("image", file)
            

            axios.post("http://localhost:3000/api/poste", data)
            .then(res=> console.log(res))
            .catch(err => console.log(err))

            window.location.reload()
           

        }else{
            alert("veuillez entrez un message")
        }
    }

    const suppr = () =>{
        setFile()
        setImageUrl("")
        window.location.reload()
    }
    return (
        <div className="container-global-post-form">
            <h4>Home</h4>
            <div className="content-post">
                <form action="" id="form-data" onSubmit={log}>
                    <textarea name="write" id="write"cols="40" rows="3"  placeholder="Que voulez-vous dire?" onChange={(e) => setDescription(e.target.value)}  value={description}/>

                    <div className="btn-all">
                            <i className="fa-solid fa-image"></i>
                            <input type="file" id="file-upload" name=" file" accept=".jpg, .jpeg, .png"  onChange={(e)=> handlePicture(e)} />
                            <div className='container-delete'><i onClick={suppr} className="fa-solid fa-xmark"></i></div>
                            <input className='btn-post' type="submit" value="Valider" />
                            
                    </div>
                    
                </form>
            </div>
            
        </div>
    );
};

export default Post;