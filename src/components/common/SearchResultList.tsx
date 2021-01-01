import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "@material-ui/core/Button";
import "../../assets/styles/Header.scss";

interface Props {}
interface State {}

class SearchResultList extends React.Component<Props, State> {
  public render() {
    return (
      <ListGroup id="search_result_list" className="position-absolute">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default SearchResultList;
