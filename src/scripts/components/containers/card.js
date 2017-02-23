import React, { Component } from 'react';


export default class Card extends Component {
  render() {
    return (
      <div className={`${this.props.className} flex-container flex-column card`}>
        {this.props.children}
      </div>
    );
  }
}

Card.defaultProps = {
  className: '',
};
