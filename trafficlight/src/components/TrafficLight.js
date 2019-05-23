import React from "react";

class TrafficLight extends React.Component {
  constructor() {
    super();
    this.state = {
      theValue: null
    };
  }

  render() {
    console.log(this.state);

    let redSelected = "";
    if (this.state.theValue === "red") {
      redSelected = "selected";
    }

    let yellowSelected = "";
    if (this.state.theValue === "yellow") {
      yellowSelected = "selected";
    }

    let greenSelected = "";
    if (this.state.theValue === "green") {
      greenSelected = "selected";
    }
    return (
      <div>
        <div id="trafficLight" />
        <div id="container">
          <div
            className={"red light " + redSelected}
            onClick={() => this.setState({ theValue: "red" })}
          />
          <div
            className={"yellow light " + yellowSelected}
            onClick={() => this.setState({ theValue: "yellow" })}
          />
          <div
            className={"green light " + greenSelected}
            onClick={() => this.setState({ theValue: "green" })}
          />
        </div>
      </div>
    );
  }
}

export default TrafficLight;
