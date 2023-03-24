
import React, { useState, useEffect } from "react";
import axios from "axios"
import Options from "../pages/Options"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import BikeBuild from "../components/Bikebuild"

function BikeComponent( ) {

    const [apiComponent, setApiComponent] = useState("")
    const [bikeparts, setbikeparts] =useState ([])
    const [bikePart, setBikePart] = useState([])

    const onChangeOption = (value) =>{
        setApiComponent(value)
    }

    useEffect(() => {
        fetch(`http://localhost:3001/${apiComponent}`)
            .then(response => response.json())
            .then(data => setbikeparts(data[apiComponent]))
    })

    function onAdd(bikePart) {
        setBikePart(bikePart)
    }

     return (
     <div>
       <Options onChangeOption={onChangeOption}/>
       <Table>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                {Object.entries(bikeparts).map(([obj, part]) => (
                    <tr>
                        <td>{part.name}</td>
                        <td>{part.model}</td>
                        <td>${part.price}</td>
                        <Button variant="outline-success" onClick={() => onAdd(part)}><td>+ Add to Bike</td></Button>
                    </tr>
                ))}
            </tbody>
        </Table>
        <BikeBuild apiComponent={apiComponent} bikePart={bikePart}/>
     </div>
     )
}

export default BikeComponent