import React, { Component, PropTypes } from 'react';


export default class DefaultButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.children}
      </button>
    );
  }
}

DefaultButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

DefaultButton.defaultProps = {
  onClick: () => {},
  type: 'button',
};
