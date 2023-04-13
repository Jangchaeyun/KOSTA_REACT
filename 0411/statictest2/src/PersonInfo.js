import React, { Component } from "react";

class PersonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hong",
      age: 20,
      height: 173.5,
      weight: 65,
    };
  }

  nameChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <label>이름:</label>
        <input type="text" name="name" onChange={this.nameChange}></input>
        <label>나이:</label>
        <input type="text" name="age" onChange={this.nameChange}></input>
        <label>키:</label>
        <input type="text" name="height" onChange={this.nameChange}></input>
        <label>몸무게:</label>
        <input type="text" name="weight" onChange={this.nameChange}></input>
        <h1>{`이름: ${this.state.name}, 나이: ${this.state.age}, 키: ${this.state.height}, 몸무게: ${this.state.weight}`}</h1>
      </>
    );
  }
}

export default PersonInfo;
