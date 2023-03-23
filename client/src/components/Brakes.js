
// import React, { useState, useEffect } from "react";
// import axios from "axios"
// import Options from "../pages/Options"

// function Brakes() {

//     const [apiComponent, setApiComponents] = useState({apiComponent: '', name: ""})
//     const [bikeparts, setbikeparts] =useState ([])



//     useEffect (()=>{
//         fetch(`http://localhost:3001/${apiComponent['apiComponent']}`)
//             .then(response => response.json())
//             .then(data => setbikeparts(data[apiComponent['apiComponent']]))
//     },[])

     
//      return (
//      <div>
//        <Options/>
//        {/* {apiComponent} */}
//        <ul>
//           {Object.entries(bikeparts).map(([obj, part]) => (
//            <li key={part.id}>{part.name}</li>
//           ))}
//           </ul>
//      </div>
//      )
  
// }

// export default Brakes