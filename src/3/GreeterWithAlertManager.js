import React, { Component } from "react";
import PropTypes from "prop-types";

import { FancyAlertMessage } from "../FancyAlertMessage";

export class AlertManager extends Component {
  state = {
    alert: undefined
  };

  render() {
    const { alert } = this.state;
    const { children } = this.props;
    return children({ alert, showAlert: this.showAlert });
  }

  showAlert = alert => {
    this.setState({
      alert
    });
  };
}

export class Greeter extends Component {
  render() {
    const myAlert = { message: "Good Morning", type: "greeting" };
    return (
      <AlertManager>
        {({ alert, showAlert }) => (
          <div>
            {alert && <FancyAlertMessage alert={alert} />}
            <button onClick={() => showAlert(myAlert)}>Show Alert</button>
          </div>
        )}
      </AlertManager>
    );
  }
}
