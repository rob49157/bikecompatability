import React, { useState, useEffect } from "react";
import BikeComponent from "../components/BikeComponent";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Bikebuild(props) {
  const [bikeBuild, setBikeBuild] = useState(
    {
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
    },
    []
  );

  useEffect(() => {
    const bike = { ...bikeBuild };
    bike[props.apiComponent] = props.bikePart;
    setBikeBuild(bike);
  }, [props.apiComponent, props.bikePart]);

  function saveBikeBuild() {
    const data = {'bottomBracketId': bikeBuild["bottomBracket"]["bottomBracketId"]}
    fetch("http://localhost:3001/bikeBuild", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

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
      <Button variant="success" onClick={saveBikeBuild}>
        Save
      </Button>
    </div>
  );
}
export default Bikebuild;
