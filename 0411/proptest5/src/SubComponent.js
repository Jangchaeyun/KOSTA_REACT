import React, { Component } from "react";
import datatype from "prop-types";

class SubComponent extends Component {
  render() {
    let { str, num, boolean, obj, arr, func } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        <p>string props : {str}</p>
        <p>number props : {num}</p>
        <span>bool props : {boolean.toString()}</span>
        <p>obj props : {JSON.stringify(obj)}</p>
        <p>arr props : {arr.toString()}</p>
        <p>func props : {func}</p>
      </div>
    );
  }
}

SubComponent.propTypes = {
  str: datatype.string,
  num: datatype.number,
  boolean: datatype.bool,
  obj: datatype.object,
  func: datatype.func,
};

export default SubComponent;
