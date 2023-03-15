import React, { useState, useEffect } from "react";

class BikeComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    bikeParts: []
  }

  componentDidMount() {
    fetch(`http://localhost:3001/${this.props.apiComponent}`)
      .then((response) => response.json())
      .then(bikePart => {
        this.setState({bikeParts: bikePart[`${this.props.bikePartComponent}`]})
      })
  }

  render() {
    return (
    <div>
      <ul>
         {Object.entries(this.state.bikeParts).map(([obj, part]) => (
          <li key={part.id}>{part.name}</li>
         ))}
         </ul>
    </div>
    )
  }
}
export default BikeComponent