import React, { useState, useEffect } from "react";
import Options from "./Options"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import BikeBuild from "../components/Bikebuild"

function BikeComponent( ) {

    const [apiComponent, setApiComponent] = useState()
    const [bikeParts, setbikeParts] =useState ([])
    const [bikePart, setBikePart] = useState([])
    const [total, setTotal] = useState(0)

    const onChangeOption = (value) =>{
        setApiComponent(value)
    }

    useEffect(() => {
        fetch(`http://localhost:3001/${apiComponent}`)
            .then(response => response.json())
            .then(data => setbikeParts(data[apiComponent]))
            .then(d => console.log(d))
    }, [apiComponent])

    function onAdd(bikePart) {
        setBikePart(bikePart)
        setTotal(bikePart.price + total)
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
                {Object.entries(bikeParts).map(([obj, part]) => (
                    <tr>
                        <td>{part.name}</td>
                        <td>{part.model}</td>
                        <td>${part.price}</td>
                        <Button variant="outline-success" onClick={() => onAdd(part)}><td>+ Add to Bike</td></Button>
                    </tr>
                ))}
            </tbody>
        </Table>
        Total: ${total}
        <BikeBuild apiComponent={apiComponent} bikePart={bikePart} total={total}/>
     </div>
     )
}

export default BikeComponent