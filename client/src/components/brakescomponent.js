import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Brakecomponent() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getparts = async () => {
      const res = await fetch("http://localhost:3001/brakes");
      const getdata = await res.json();
      setProduct(getdata);
      console.log(getdata);
    };

    getparts();
  }, []);

  return <div>
   fsadfsadfa
  </div>;
}

export default Brakecomponent;
