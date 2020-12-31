import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/common/Header";
import logo from "./assets/images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Container className="p-0" fluid>
        <Row>
          <Header />
        </Row>
      </Container>
    </div>
  );
}

export default App;
