import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BikeComponent from "../components/BikeComponent";
import React, { useState } from "react";

function Options(props) {
  const [allBikeComponents, setAllBikeComponents] = useState([
    { apiComponent: "default", name: "Select One" },
    { apiComponent: "bottomBracket", name: "Bottom Bracket" },
    { apiComponent: "brakeset", name: "Brake Sets" },
    { apiComponent: "cassette", name: "Cassette" },
    { apiComponent: "chain", name: "Chain" },
    { apiComponent: "chainring", name: "Chainring" },
    { apiComponent: "crankset", name: "Crankset" },
    { apiComponent: "dropperpost", name: "Dropperpost" },
    { apiComponent: "fork", name: "Fork" },
    { apiComponent: "frame", name: "Frame" },
    { apiComponent: "grip", name: "Grip" },
    { apiComponent: "handlebar", name: "Handlebar" },
    { apiComponent: "headset", name: "Headset" },
    { apiComponent: "hub", name: "Hubs" },
    { apiComponent: "rotor", name: "Rotor" },
    { apiComponent: "saddle", name: "Saddle" },
    { apiComponent: "shifter", name: "Shifter" },
    { apiComponent: "shock", name: "Shock" },
    { apiComponent: "stem", name: "Stem" },
    { apiComponent: "tire", name: "Tires" },
    { apiComponent: "wheelset", name: "Wheelsets" },
  ]);

  const setApiComponentHandler = (event) => {
    props.onChangeOption(event.target.value);
  };

  return (
    <div>
      <select onChange={setApiComponentHandler}>
        {allBikeComponents.map((bikeComponent) => (
          <option
            value={bikeComponent.apiComponent}
            key={bikeComponent.apiComponent}
          >
            {bikeComponent.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Options;
