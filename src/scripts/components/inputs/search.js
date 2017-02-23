import React, { Component } from 'react';


export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      hasFocus: false,
      value: '',
    };
  }

  focusInput() {
    this.refs.searchInput.focus();
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value.trim() });
  }

  handleBlur() {
    this.setState({ hasFocus: false });
  }

  handleFocus() {
    this.setState({ hasFocus: true });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(`Searching for ${this.state.value}`);
  }

  render() {
    const { value, hasFocus } = this.state;

    return (
      <form
        className="search-form"
        onSubmit={evt => this.handleSubmit(evt)}
        onClick={() => this.focusInput()}
      >
        <input
          ref="searchInput"
          className={(value || hasFocus) ? 'active' : ''}
          onChange={evt => this.handleChange(evt)}
          onBlur={() => this.handleBlur()}
          onFocus={() => this.handleFocus()}
        />
        <button disabled={!value} />
      </form>
    );
  }
}
