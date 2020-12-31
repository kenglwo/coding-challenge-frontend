import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/Header.scss";

interface Props {}
interface State {}

class Header extends React.Component<Props, State> {
  public render() {
    return (
      <Navbar className="w-100 p-1" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top ml-3"
            alt="React"
          />
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link id="home" href="/">
            <HomeRoundedIcon fontSize="large" />
            <span className="align-middle">Home</span>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
