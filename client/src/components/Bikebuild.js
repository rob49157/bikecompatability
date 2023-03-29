import React, { useState, useEffect } from "react";
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
    const data = {
      bottomBracketId: bikeBuild["bottomBracket"]["bottomBracketId"],
    };
    data["total"] = props.total;
    fetch("http://localhost:3001/bikeBuild", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  }

  function removeBikeComponent(bikePartKey) {
    const data = { ...bikeBuild };
    data[bikePartKey] = "";
    setBikeBuild(data);
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>Bike Component</td>
            <td>Name</td>
            <td>Model</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(bikeBuild).map(([obj, s]) => (
            <tr>
              <td>{obj}</td>
              <td>{s.name}</td>
              <td>{s.model}</td>
              <td>${s.price}</td>
              <Button
                variant="danger"
                onClick={() => {
                  removeBikeComponent(obj);
                }}
              >
                Remove
              </Button>
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
