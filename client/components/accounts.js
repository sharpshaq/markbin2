import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze"; 

class Accounts extends Component {
  componentDidMount() {
    // Render the Blaze accounts form then find the div
    // We just rendered in the "render" method and place
    // The blaze accounts form in that div.
  }

  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those forms ourselves
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Accounts;