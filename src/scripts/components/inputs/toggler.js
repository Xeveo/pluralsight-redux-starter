import React, { Component, PropTypes } from 'react';


export default class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.checked };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div className="toggler">
        {this.props.label &&
          <label>{this.props.label}</label>
        }
        <input
          type="checkbox"
          disabled={this.props.disabled}
          checked={this.state.checked}
          onChange={this.handleChange}
          data-text-on={this.props.onText}
          data-text-off={this.props.offText}
        />
      </div>
    );
  }
}

Toggler.propTypes = {
  onText: PropTypes.string,
  offText: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

Toggler.defaultProps = {
  onText: '✓',
  offText: '',
};
