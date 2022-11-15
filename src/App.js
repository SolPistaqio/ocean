import "./App.css";
import { Component } from "react";
import $ from "jquery";
import "jquery.ripples";

import Welcome from "./components/WelcomeToTheOcean";
import OceanVideo from "./components/OceanVid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
    };
    this.start = this.start.bind(this);
  }

  start() {
    this.setState({ started: true });
  }
  componentDidMount() {
    $(".wrapper").ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {this.state.started ? <OceanVideo /> : <Welcome start={this.start} />}
        </div>
      </div>
    );
  }
}

export default App;
