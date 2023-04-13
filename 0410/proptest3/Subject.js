import React, { Component } from 'react';

class Subject extends Component {
  render() {
    let subjects = [...this.props.subjects];
     return (
       subjects.map((subject, index) => {
         return (<option key={index}>{subject}</option>)
       })
     );
   }
}

export default Subject;