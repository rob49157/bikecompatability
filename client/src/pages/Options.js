
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BikeComponent from "../components/BikeComponent";
import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.props.setStateOfBikeParts(
      {
      apiComponent: event.target.value,
      })
  }

  render() {
    return (
    <div>
        <select onChange={this.handleChange}>
            {this.props.bikeComponents.map(bikeComponent => (
              <option value={bikeComponent.apiComponent} key={bikeComponent.apiComponent}>
                {bikeComponent.name}
              </option>
            ))}
          </select>
        </div>
      )
  }
}

export default Options;