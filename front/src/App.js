import {BrowserRouter, Routes, Route} from "react-router-dom"
import Profil from "./pages/Profil";
import "../src/styles/index.scss"
import EditProfil from "./component/EditProfil";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { UserIdContext } from "./component/AppContext";
import Feed from "./component/Feed";
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
            <Route path="/home" element={<Feed/>}/>
            <Route path="/profil" element={<EditProfil props={uid}/>}/>
          </Routes>
        </BrowserRouter>
        </UserIdContext.Provider>
    
  );
}

export default App;
