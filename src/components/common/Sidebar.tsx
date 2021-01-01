import React from "react";
import Button from "react-bootstrap/Button";
// import Button from "@material-ui/core/Button";
import "../../assets/styles/Sidebar.scss";

interface Props {}
interface State {}

// <Button color="primary" variant="outlined">
class SideBar extends React.Component<Props, State> {
  public render() {
    return (
      <div id="sidebar" className="p-2">
        <Button className="font-weight-bold" variant="dark" block href="#">
          Overview
        </Button>
        <Button className="font-weight-bold" variant="dark" block href="#">
          History
        </Button>
      </div>
    );
  }
}

export default SideBar;
