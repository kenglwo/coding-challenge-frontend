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
interface State extends QueryData {
  ifSearchResultTableShown: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      keywords: "",
      bestMatches: [],
    };

    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
  }

  public onChangeSearchBox(e: React.ChangeEvent<HTMLInputElement>) {
    const keywords: string = e.target.value;
    this.setState({ keywords: keywords });
  }

  public onClickSearchButton() {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.keywords}&apikey=${process.env.REACT_APP_API_KEY}`;

    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then(
        (result) => {
          const data = result.hasOwnProperty("bestMatches")
            ? result["bestMatches"]
            : [];
          this.setState({
            bestMatches: data,
          });
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
              <Header
                onChangeSearchBox={this.onChangeSearchBox}
                onClickSearchButton={this.onClickSearchButton}
                bestMatches={this.state.bestMatches}
              />
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
