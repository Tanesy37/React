import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      name: "isaac",
      age: 99
    }
  }

  changeMessage() {
    this.setState((state) => {
      return {
        name: state.name === "manful" ? "isaac" : "manful",
        age: state.age === 77 ? 99 : 77
      }
    })
  }


  render() {
    return (
      <>
        <h1>{this.state.age}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeMessage()} >cick me</button>
      </>
    );
  }

}
export default Welcome;
