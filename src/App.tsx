import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Top from "./components/top/Top";
import logo from "./assets/images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Container className="bg-dark p-0" fluid>
        <BrowserRouter>
          <Row>
            <Header />
          </Row>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col className="bg-white">
              <Switch>
                <Route exact={true} path={"/"} component={Top} />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
