import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class Switch extends Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    if (this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  toggleChecked = () => {
    this.setState((prevState) => ({ checked: !prevState.checked }));
  };

  handleClick = (e) => {
    e.preventDefault();
    this.toggleChecked();
    this.props.onSwitch();
  };

  render() {
    let Switch = `Switch`;
    if (this.state.checked) Switch += ` swicheck`;
    if (this.props.className) Switch += ` ${this.props.className}`;
    return (
      <div className={Switch}>
        <label className="switchLabel" htmlFor="swithumb">
          {this.props.label}
        </label>

        <div className="swiButton">
          <div className="switrick"></div>
          <input
            className="swithumb"
            onClick={this.handleClick}
            name="swithumb"
            id="swithumb"
            type="button"
          ></input>
        </div>
      </div>
    );
  }
}

Switch.propTypes = {
  onSwitch: PropTypes.func,
  className: PropTypes.string,
};

export default Switch;
