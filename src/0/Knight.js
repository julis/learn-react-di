import React, { Component } from "react";
import PropTypes from "prop-types";

export class KnightA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapon: props.weapon
    };
  }

  render() {
    return `Knight with  ${this.state.weapon}`;
  }
}

export class KnightB extends Component {
  state = {};
  setWeapon = weapon => this.setState({ weapon });

  render() {
    return `Knight with  ${this.state.weapon}`;
  }
}

export class KnightC extends Component {
  static propTypes = {
    weapon: PropTypes.any.isRequired
  };
  render() {
    return `Knight with ${this.props.weapon}`;
  }
}
