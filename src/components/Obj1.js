import React, { Component } from "react";

class Welcome extends Component {
  render(props) {
    return (
      <>
        <div>
          hej {this.props.names} you are{this.props.age}
        </div>
      </>
    );
  }
}

export default Welcome;
