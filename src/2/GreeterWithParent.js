import React, { Component } from "react";
import PropTypes from "prop-types";

import { FancyAlertMessage } from "../FancyAlertMessage";

export class GreeterContainer extends Component {
  state = {
    alert: undefined
  };

  render() {
    return (
      <Greeter renderAlert={this.renderAlert} showAlert={this.showAlert} />
    );
  }

  renderAlert = () => {
    if (this.state.alert) {
      return <FancyAlertMessage alert={this.state.alert} />;
    }
  };

  showAlert = alert => {
    this.setState({
      alert
    });
  };
}

export class Greeter extends Component {
  render() {
    const myAlert = {
      message: "Good Morning"
    };

    return (
      <div>
        {this.props.renderAlert()}
        <button onClick={() => this.props.showAlert(myAlert)}>
          Show Alert
        </button>
      </div>
    );
  }
}
