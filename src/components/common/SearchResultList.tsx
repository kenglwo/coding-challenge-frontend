import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "@material-ui/core/Button";
import { BestMatches } from "../../model/Query";

interface Props {
  bestMatches: BestMatches[];
}
interface State {
  bestMatches: BestMatches[];
}

class SearchResultList extends React.Component<Props, State> {
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
    const companyList =
      this.state.bestMatches.length > 0
        ? this.state.bestMatches.map((entry, i) => (
            <ListGroup.Item key={i} className="search_result_item d-flex justify-content-between">
              <span className="font-weight-bold">{`${entry["1. symbol"]}`}</span>
              <span
                id="entry_name"
                className="d-inline-block text-truncate"
              >{`${entry["2. name"]}`}</span>
            </ListGroup.Item>
          ))
        : "";
    return (
      <ListGroup id="search_result_list" className="position-absolute">
        {companyList}
      </ListGroup>
    );
  }
}

export default SearchResultList;
