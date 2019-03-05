import React, { Component } from "react";
import PropTypes from "prop-types";

export class FancyAlertMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.alert.message}</p>
      </div>
    );
  }
}
