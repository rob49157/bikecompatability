
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BikeComponent from "../components/BikeComponent";
import React from 'react';

class Options extends React.Component {
    state = {
      bikeComponents: [
        {apiComponent: 'brakes', bikePartComponent: 'brakeSets', name: "Brake Sets"},
        {apiComponent: 'fork', bikePartComponent: 'fork', name: "Fork"}
      ],
      apiComponent: '',
      bikePartComponent: ''
  }

  handleChange = (event) => {
    this.setState(
      {
      apiComponent: event.target.value,
      bikePartComponent: event.target.bikepartcomponent,
      })
  }

  render() {
    return (
    <div>
        <BikeComponent apiComponent="brakes" bikePartComponent="brakeSets"/>
        <select onChange={this.handleChange}>
            {this.state.bikeComponents.map(bikeComponent => (
              <option value={bikeComponent.apiComponent} bikePartComponent={bikeComponent.bikePartComponent}>
                {bikeComponent.name}
              </option>
            ))}
          </select>
        </div>
      )
  }
}

export default Options;