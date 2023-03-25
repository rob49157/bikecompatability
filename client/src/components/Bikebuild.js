import React, { useState, useEffect } from "react";
import BikeComponent from "../components/BikeComponent";
import Table from "react-bootstrap/Table";
import Options from "../pages/Options";
import Button from "react-bootstrap/Button";

function Bikebuild(props) {
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
  





  useEffect(() => {
    const bike = { ...bikeBuild };
    bike[props.apiComponent] = props.bikePart;
    setbikeBuild(bike);
    
    localStorage.setItem("bikebuild", JSON.stringify(bikeBuild))
  });


   // local storage
  // localStorage.setItem("key","value")

  const saved =  localStorage.getItem("bikebuild")
  const initialValue = JSON.parse(saved)
  return initialValue || ""
  
  
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
