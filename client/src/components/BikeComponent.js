
import React, { useState, useEffect } from "react";
import axios from "axios"
import Options from "../pages/Options"
import Table from 'react-bootstrap/Table';

function Brakes() {

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
                        <td>+ Add</td>
                    </tr>
                ))}
            </tbody>
        </Table>
     </div>
     )
}

export default Brakes