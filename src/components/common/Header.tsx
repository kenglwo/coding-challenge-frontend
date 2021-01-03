import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import SearchResultList from "./SearchResultList";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { SearchFunction, BestMatches } from "../../model/Query";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/Header.scss";

interface Props extends SearchFunction {
  bestMatches: BestMatches[];
}
interface State {
  bestMatches: BestMatches[];
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      bestMatches: this.props.bestMatches,
    };
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.bestMatches !== prevProps.bestMatches) {
      this.setState({
        bestMatches: this.props.bestMatches,
      });
    }
  }

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
            <HomeRoundedIcon fontSize="large" className="text-white" />
            <span className="align-middle text-white">Home</span>
          </Nav.Link>
        </Nav>
        <Form inline className="position-relative">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-2"
            onChange={this.props.onChangeSearchBox}
          />
          <Button variant="outline-info">Search</Button>
          <SearchResultList bestMatches={this.state.bestMatches} />
        </Form>
      </Navbar>
    );
  }
}

export default Header;
