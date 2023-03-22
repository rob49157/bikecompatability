import React, { useState, useEffect } from "react";
import Options from "../pages/Options"




class BikeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setStateOfBikeParts.bind(this);
    this.fetchBikeParts.bind(this);

    this.state = {
      apiComponent: '', 
      bikeComponents: [
        {apiComponent: 'brakes', name: "Brake Sets"},
        {apiComponent: 'fork', name: "Fork"},
        ],
      bikeParts: []
      };
  } 

 useEffect (()=>{
  let Url=`http://localhost:3001/${this.state.apiComponent}`

  const fetchBikeParts = async () =>{
    try{
      const response= await fetch(Url);
      const json= await response.json();
      console.log(json);
    }catch(error)
   }

 },[])



  //  fetchBikeParts = async () => {
  //   console.log(this.state.apiComponent)
  //   await fetch(`http://localhost:3001/${this.state.apiComponent}`)
  //     .then((response) => response.json())
  //     .then(bikePart => {
  //       this.setState({bikeParts: bikePart[`${this.state.apiComponent}`]})
  //     })
  // };

  // setStateOfBikeParts = async (newApiComponent) => {
  //    this.setState({
  //   apiComponent: newApiComponent.apiComponent
  //   })
  //   fetchBikeParts()
  // };

  render() {
    return (
    <div>
      <Options setStateOfBikeParts={this.setStateOfBikeParts} bikeComponents={this.state.bikeComponents}/>
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