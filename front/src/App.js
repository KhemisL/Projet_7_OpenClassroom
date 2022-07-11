import {BrowserRouter, Routes, Route} from "react-router-dom"
import Profil from "./pages/Profil";
import "../src/styles/index.scss"
import Home from "./pages/Home";
import EditProfil from "./component/EditProfil";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { UserIdContext } from "./component/AppContext";
function App() {
 const [uid, setUid] = useState(null)

 useEffect( () =>{

      axios("http://localhost:3000/jwtid", {withCredentials: true})
     .then((res) => setUid(res.data))
     .catch((err)=> console.log(err))
     

     
 },[uid])

  return (

    
      <UserIdContext.Provider value={uid}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Profil/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profil" element={<EditProfil props={uid}/>}/>
          </Routes>
        </BrowserRouter>
        </UserIdContext.Provider>
    
    
    
      
        
      
      
    
  );
}

export default App;
