import React, { useState, useEffect } from "react";
import BikeComponent from "../components/BikeComponent";
import Table from "react-bootstrap/Table";
import Options from "../pages/Options";
import Button from "react-bootstrap/Button";

function Bikebuild(props) {
  const [items, setItems] = useState([])
  const [bikeBuild, setbikeBuild] = useState({
    fork: "",
    brakes: "",
    frame: "",
    bottomBracket: "",
    cassette: "",
    chain: "",
    chainring: "",
    grip: "",
    handlebar: "",
    hub: "",
    shock: "",
    rotor: "",
    saddle: "",
    dropperpost: "",
    shifter: "",
    stem: "",
    tires: "",
    wheelsets: "",

    
  }
  )
  



  // localStorage.setItem("key","value")
  // const saved =  localStorage.getItem("bikebuild")
  // const initialValue = JSON.parse(saved)
  // return initialValue || ""

  useEffect(() => {
    const bike = { ...bikeBuild };
    bike[props.apiComponent] = props.bikePart;
    setbikeBuild(bike);
    
    //local storage
    
    
    localStorage.setItem("bikebuild", JSON.stringify(bikeBuild))
    const items = JSON.parse(localStorage.getItem("bikebuild"))
    if(items){
      setItems(bikeBuild)
    }

   
  },);


   // local storage
 

 
  
  
  // pass bikeparts state to setbikebuild from bikecomponent
  return (
    <div>
      <Table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {Object.entries(bikeBuild).map(([obj, s]) => (
            <tr>
              <td>{s.name}</td>
              <td>{s.model}</td>
              <td>${s.price}</td>
              <Button variant="danger">Delete</Button>{" "}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Bikebuild;
