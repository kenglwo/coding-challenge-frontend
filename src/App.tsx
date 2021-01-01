import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Top from "./components/top/Top";
import { QueryData } from "./model/Query";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.scss";

interface Props {}
interface State extends QueryData {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      queryText: "",
      bestMatches: [],
    };

    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
  }

  public onChangeSearchBox(e: React.ChangeEvent<HTMLInputElement>) {
    const keywords: string = e.target.value;
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.REACT_APP_API_KEY}`;

    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ bestMatches: result });
        },
        (error) => {
          console.log("Error: could not fetch API data");
        }
      );
  }

  public render() {
    return (
      <div className="App">
        <Container className="bg-dark p-0" fluid>
          <BrowserRouter>
            <Row>
              <Header onChangeSearchBox={this.onChangeSearchBox} />
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
}

export default App;
