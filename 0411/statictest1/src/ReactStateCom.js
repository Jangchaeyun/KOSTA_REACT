import React, { Component } from "react";

class ReactStateCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: this.props.str,
      num: 100,
    };
  }

  stateChange = (e) => {
    this.setState({ num: 200 });
  };

  stateChange2 = (e) => {
    this.setState({ str: "React" });
  };
  render() {
    return (
      <>
        <div style={{ padding: "0px" }}>
          {this.state.str}: {this.state.num}
        </div>
        {/* <button type="button" onClick={() => this.setState({ num: 200 })}>
          200
        </button> */}
        <button type="button" onClick={this.stateChange}>
          200
        </button>
        <button type="button" onClick={this.stateChange2}>
          React
        </button>
      </>
    );
  }
}

export default ReactStateCom;
