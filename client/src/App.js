import "./App.css";
import BikeComponent from "./components/BikeComponent";
import BikeBuildList from "./components/BikeBuildList";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" bg="success" variant="dark">
        <Navbar.Brand Classname="metalgear" href="/" element={BikeComponent}>
          BikeComponent
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/buildBike" element={BikeComponent}>
            Build a Bike
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="/bikes" element={BikeBuildList}>
            Bikes
          </Nav.Link>
        </Nav>
      </Navbar>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/buildBike" element={<BikeComponent />} />
          <Route exact path="/bikes" element={<BikeBuildList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
