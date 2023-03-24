
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BikeComponent from "../components/BikeComponent";
import React, {useState} from 'react';

function Options(props) {
  const [allBikeComponents, setAllBikeComponents] = useState([
            {apiComponent: 'brakes', name: "Brake Sets"},
            {apiComponent: 'fork', name: "Fork"},
            {apiComponent: 'frame', name: "Frame"},
            {apiComponent: 'bottomBracket', name: "bottom Bracket"},
            {apiComponent: 'cassette', name: "Cassette"},
            {apiComponent: 'chain', name: "Chain"},
            {apiComponent: 'grip', name: "Grip"},
            {apiComponent: 'handlebar', name: "Handlebar"},
            {apiComponent: 'headset', name: "Headset"},
            {apiComponent: 'hub', name: "Hub"},
            {apiComponent: 'shock', name: "Shock"},
            {apiComponent: 'rotor', name: "Rotor"},
            {apiComponent: 'saddle', name: "Saddle"},
            {apiComponent: 'dropperpost', name: "Dropperpost"},
            {apiComponent: 'shifter', name: "Shifter"},
            {apiComponent: 'stem', name: "Stem"},
            {apiComponent: 'tires', name: "Tires"},
            {apiComponent: 'wheelsets', name: "Wheelsets"},
          
            
            ])

  const setApiComponentHandler = (event) => {
    props.onChangeOption(event.target.value);
  };

  return (
    <div>
      <select onChange={setApiComponentHandler}>
             {allBikeComponents.map(bikeComponent => (
              <option value={bikeComponent.apiComponent} key={bikeComponent.apiComponent}>
                {bikeComponent.name}
                
              </option>
            ))}
          </select>
    </div>
  )
}

export default Options;