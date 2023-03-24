
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BikeComponent from "../components/BikeComponent";
import React, {useState} from 'react';

function Options(props) {
  const [allBikeComponents, setAllBikeComponents] = useState([
            {apiComponent: 'brakes', name: "Brake Sets"},
            {apiComponent: 'fork', name: "Fork"},
            {apiComponent: 'frame', name: "Frame"},
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