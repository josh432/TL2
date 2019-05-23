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
    return (
      <div>
        <div id="trafficLight" />
        <div id="container">
          <div className="red light" />
          <div className="yellow light" />
          <div className="green light" />
        </div>
      </div>
    );
  }
}

export default TrafficLight;
