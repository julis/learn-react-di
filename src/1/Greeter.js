import React, { Component } from "react";
import PropTypes from "prop-types";

import { FancyAlertMessage } from "../FancyAlertMessage";

export class GreeterConcrete extends Component {
  state = {
    alert: undefined
  };

  render() {
    const { alert } = this.state;
    const myAlert = {
      message: "Good Morning"
    };
    return (
      <div>
        {alert && <FancyAlertMessage alert={alert} />}
        <button onClick={() => this.showAlert(myAlert)}>Show Alert</button>
      </div>
    );
  }

  showAlert = alert => {
    this.setState({
      alert
    });
  };
}
