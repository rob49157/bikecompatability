
import React, { useState, useEffect } from "react";
import axios from "axios"
import Options from "../pages/Options"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BikeComponent() {

    const [apiComponent, setApiComponent] = useState("")
    const [bikeparts, setbikeparts] =useState ([])

    const onChangeOption = (value) =>{
        setApiComponent(value)
    }

    useEffect(() => {
        fetch(`http://localhost:3001/${apiComponent}`)
            .then(response => response.json())
            .then(data => setbikeparts(data[apiComponent]))
    })

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
                        <Button variant="outline-success"><td>+ Add</td></Button>
                    </tr>
                ))}
            </tbody>
        </Table>
     </div>
     )
}

export default BikeComponent