import React, { Component } from "react";
import Tbl from "./components/tbl";
import axios from "axios";

class App extends Component {
  state = {
    dataSet: []
  };

  componentDidMount = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/data.json",
      crossDomain: true
    }).then(resp => {
      this.setState({ dataSet: resp.data });
    });
  };

  render() {
    return <Tbl dataSet={this.state.dataSet} />;
  }
}

export default App;
