import React,{useState} from 'react'
import BikeComponent from "../components/BikeComponent";
import Table from 'react-bootstrap/Table';


function Bikebuild() {
    const [ bikebuild, setbikebuild] = useState ({ "fork": "", "brakes": "", "frame":""})


const handleSubmit = (event) => {
  event.prevetDefault()
  setbikebuild(event.target.value)
}

  return (
    <div>   </div>
  )
}

export default Bikebuild