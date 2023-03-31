import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BikeView = (props) => {
  const [bike, setBike] = useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const params = useParams();
  const bikeId = params["id"];

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`http://localhost:3001/bikeBuild/${bikeId}`);
      response = await response.json();

      const newBike = { ...response };
      setBike(newBike);
      // Fetch all bike components
      Object.entries(newBike).map(async ([api, id]) => {
        if (
          (api !== "bikeBuildId") &
          (api !== "total") &
          (api !== "createdAt") &
          (api !== "updatedAt") &
          (id !== null)
        ) {
          console.log(api.slice(0, -2), id)
          await fetch(`http://localhost:3001/${api.slice(0, -2)}/${id}`)
            .then((res) => res.json())
            .then((data) => {
              newBike[api.slice(0, -2)] = data;
              setBike({ ...bike, ...newBike });
            });
        }
      });
    }
    fetchMyAPI();
    setLoading(false);
  }, []);

  function deleteBike(id) {
    axios
      .delete("http://localhost:3001/bikeBuild/" + id)
      .then((res) => {
        if (res.status === 200) {
          alert("Bike successfully deleted");
          window.location.href = "/bikes";
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  }

  const render = () => {
    if (isLoading) return "Loading...";

    if (bike) {
      return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td>Name</td>
                <td>Model</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Id</td>
                <td>{bike["bikeBuildId"]}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{bike["total"]}</td>
              </tr>
              <tr>
                <td>Bottom Bracket</td>
                <td></td>
                {bike["bottomBracket"] ? (
                  <>
                    <td>{bike["bottomBracket"]["name"]}</td>
                    <td>{bike["bottomBracket"]["model"]}</td>
                    <td>{bike["bottomBracket"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Braketset</td>
                <td></td>
                {bike["brakeset"] ? (
                  <>
                    <td>{bike["brakeset"]["name"]}</td>
                    <td>{bike["brakeset"]["model"]}</td>
                    <td>{bike["brakeset"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Cassette</td>
                <td></td>
                {bike["cassette"] ? (
                  <>
                    <td>{bike["cassette"]["name"]}</td>
                    <td>{bike["cassette"]["model"]}</td>
                    <td>{bike["cassette"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Chainring</td>
                <td></td>
                {bike["chainring"] ? (
                  <>
                    <td>{bike["chainring"]["name"]}</td>
                    <td>{bike["chainring"]["model"]}</td>
                    <td>{bike["chainring"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Chain</td>
                <td></td>
                {bike["chain"] ? (
                  <>
                    <td>{bike["chain"]["name"]}</td>
                    <td>{bike["chain"]["model"]}</td>
                    <td>{bike["chain"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Crankset</td>
                <td></td>
                {bike["crankset"] ? (
                  <>
                    <td>{bike["crankset"]["name"]}</td>
                    <td>{bike["crankset"]["model"]}</td>
                    <td>{bike["crankset"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Fork</td>
                <td></td>
                {bike["fork"] ? (
                  <>
                    <td>{bike["fork"]["name"]}</td>
                    <td>{bike["fork"]["model"]}</td>
                    <td>{bike["fork"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Frame</td>
                <td></td>
                {bike["frame"] ? (
                  <>
                    <td>{bike["frame"]["name"]}</td>
                    <td>{bike["frame"]["model"]}</td>
                    <td>{bike["frame"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Grips</td>
                <td></td>
                {bike["grips"] ? (
                  <>
                    <td>{bike["grips"]["name"]}</td>
                    <td>{bike["grips"]["model"]}</td>
                    <td>{bike["grips"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Handlebar</td>
                <td></td>
                {bike["handlebar"] ? (
                  <>
                    <td>{bike["handlebar"]["name"]}</td>
                    <td>{bike["handlebar"]["model"]}</td>
                    <td>{bike["handlebar"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Headset</td>
                <td></td>
                {bike["headset"] ? (
                  <>
                    <td>{bike["headset"]["name"]}</td>
                    <td>{bike["headset"]["model"]}</td>
                    <td>{bike["headset"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Hubs</td>
                <td></td>
                {bike["hub"] ? (
                  <>
                    <td>{bike["hub"]["name"]}</td>
                    <td>{bike["hub"]["model"]}</td>
                    <td>{bike["hub"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Rotor</td>
                <td></td>
                {bike["rotor"] ? (
                  <>
                    <td>{bike["rotor"]["name"]}</td>
                    <td>{bike["rotor"]["model"]}</td>
                    <td>{bike["rotor"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Saddle</td>
                <td></td>
                {bike["saddle"] ? (
                  <>
                    <td>{bike["saddle"]["name"]}</td>
                    <td>{bike["saddle"]["model"]}</td>
                    <td>{bike["saddle"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Dropperpost</td>
                <td></td>
                {bike["dropperpost"] ? (
                  <>
                    <td>{bike["dropperpost"]["name"]}</td>
                    <td>{bike["dropperpost"]["model"]}</td>
                    <td>{bike["dropperpost"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Shifters</td>
                <td></td>
                {bike["shifter"] ? (
                  <>
                    <td>{bike["shifter"]["name"]}</td>
                    <td>{bike["shifter"]["model"]}</td>
                    <td>{bike["shifter"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Shock</td>
                <td></td>
                {bike["shock"] ? (
                  <>
                    <td>{bike["shock"]["name"]}</td>
                    <td>{bike["shock"]["model"]}</td>
                    <td>{bike["shock"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Stem</td>
                <td></td>
                {bike["stem"] ? (
                  <>
                    <td>{bike["stem"]["name"]}</td>
                    <td>{bike["stem"]["model"]}</td>
                    <td>{bike["stem"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Tire</td>
                <td></td>
                {bike["tire"] ? (
                  <>
                    <td>{bike["tire"]["name"]}</td>
                    <td>{bike["tire"]["model"]}</td>
                    <td>{bike["tire"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td>Wheelset</td>
                <td></td>
                {bike["wheelset"] ? (
                  <>
                    <td>{bike["wheelset"]["name"]}</td>
                    <td>{bike["wheelset"]["model"]}</td>
                    <td>{bike["wheelset"]["price"]}</td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
            </tbody>
          </Table>
          <Button
            onClick={() => deleteBike(bike.bikeBuildId)}
            className="btn btn-danger"
          >
            Delete
          </Button>
        </div>
      );
    }
  };

  return render();
};

export default BikeView;
