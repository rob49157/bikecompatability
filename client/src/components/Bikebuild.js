import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Bikebuild(props) {
  const [bikeBuild, setBikeBuild] = useState(
    {
      bottomBracket: "",
      brakeset: "",
      cassette: "",
      chain: "",
      chainring: "",
      crankset: "",
      dropperpost: "",
      fork: "",
      frame: "",
      grip: "",
      handlebar: "",
      headset: "",
      hub: "",
      rotor: "",
      saddle: "",
      shifter: "",
      shock: "",
      stem: "",
      tire: "",
      wheelset: "",
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
      brakesetId: bikeBuild["brakeset"]["brakesetId"],
      cassetteId: bikeBuild["cassette"]["cassetteId"],
      chainId: bikeBuild["chain"]["chainId"],
      chainringId: bikeBuild["chainring"]["chainringId"],
      cranksetId: bikeBuild["crankset"]["cranksetId"],
      forkId: bikeBuild["fork"]["forkId"],
      frameId: bikeBuild["frame"]["frameId"],
      gripsId: bikeBuild["grip"]["gripsId"],
      handlebarId: bikeBuild["handlebar"]["handlebarId"],
      headsetId: bikeBuild["headset"]["headsetId"],
      hubsId: bikeBuild["hub"]["hubsId"],
      rotorId: bikeBuild["rotor"]["rotorId"],
      saddleId: bikeBuild["saddle"]["saddleId"],
      dropperpostId: bikeBuild["dropperpost"]["dropperPostId"],
      shifterId: bikeBuild["shifter"]["shifterId"],
      shockId: bikeBuild["shock"]["shockId"],
      stemId: bikeBuild["stem"]["stemId"],
      tireId: bikeBuild["tire"]["tireId"],
      wheelsetId: bikeBuild["wheelset"]["wheelsetId"],
    };
    data["total"] = props.total;
    fetch("http://localhost:3001/bikeBuild", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Bike successfully created");
          window.location.href = "/bikes";
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
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
