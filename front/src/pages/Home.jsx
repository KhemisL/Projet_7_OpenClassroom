// import React from 'react';
// import Feed from "../component/Feed"
// import { useState, useEffect } from 'react';
// import axios from "axios";
// const Home = () => {

//     const [post, setPoste] = useState([])

//     // useEffect(() =>{
//     //     axios({
//     //             method: "get",
//     //             url:"http://localhost:3000/api/poste"
//     //         })
//     //         .then((res) => setPoste(res.data))
//     //         .catch(err => console.log(err))
//     // },[])
    
//     useEffect(() =>{
//         axios("http://localhost:3000/api/poste")
//         .then((res) => setPoste(res.data))
//         .catch(err => console.log(err))
//     },[])
//     return (
//         <div>
//             <Feed Feed={post}/>
//         </div>
//     );
// };

// export default Home;