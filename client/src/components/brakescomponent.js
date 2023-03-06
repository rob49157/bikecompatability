import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Brakescomponent() {
  const [brakes, setBrakes] = useState([]);

  useEffect(() => {
    const getparts = async () => {
      const res = await fetch("http://localhost:3001/brakes");
      const getdata = await res.json();
      setBrakes(getdata);
      console.log(getdata);
    };

    getparts();
  }, []);

  return <div>
 {brakes.map}
  </div>;
}

export default Brakescomponent;
