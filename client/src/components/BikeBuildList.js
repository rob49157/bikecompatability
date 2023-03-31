import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BikeView from "../components/BikeView";

const BikeBuildList = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/bikeBuild/")
      .then(({ data }) => {
        setBikes(data);
        console.log(bikes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function deleteBike(id) {
    axios
      .delete("http://localhost:3001/bikeBuild/" + id)
      .then((res) => {
        if (res.status === 200) {
          alert("Bike successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  }

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(bikes).map(([obj, bike]) => (
            <tr>
              <td>{bike.bikeBuildId}</td>
              <td>${bike.total}</td>
              <Link
                to={`/bike/view/${bike.bikeBuildId}`}
                className="btn btn-info"
              >
                Edit
              </Link>
              <Button
                onClick={() => deleteBike(bike.bikeBuildId)}
                className="btn btn-danger"
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BikeBuildList;
