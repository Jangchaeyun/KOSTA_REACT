import React, { Component } from "react";
import datatype from "prop-types";

class DefaultPropCom extends Component {
  render() {
    let { str, num } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {str}
        {num}
      </div>
    );
  }
}

DefaultPropCom.defaultPropCom = {
  num: 10,
};

//  datatype.isRequired : 필수 입력
DefaultPropCom.propTypes = {
  str: datatype.string.isRequired,
};

export default DefaultPropCom;
