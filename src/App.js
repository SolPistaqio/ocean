import "./App.css";
import { Component } from "react";
import $ from "jquery";
import "jquery.ripples";

// import Welcome from "./components/WelcomeToTheOcean";
import OceanVideo from "./components/OceanVid";

class App extends Component {
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
          {/* <Welcome /> */}
          <OceanVideo />
        </div>
      </div>
    );
  }
}

export default App;
