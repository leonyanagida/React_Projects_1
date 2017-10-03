import React, { Component } from 'react';
import validator from 'validator';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // State is empty (will be filled with userInput)
      userInput: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // For future functionality
  onInputChange(event) {
    // Create another functionality with live searching of data
    this.setState({ userInput: event.target.value });
  };

  handleClick(event) {
    // Prevent submit from refreshing the page
    event.preventDefault();
		// We must sanitize user input here //
		// Regex checks for invalid characters //
		let regexValidate = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\s/;
		let newInput = '';
		// Validate using validator package //
		// Could also be done without a package //
		newInput = validator.blacklist(this.state.userInput, regexValidate);
		// If the state is empty do not submit get request //
		if (validator.isEmpty(newInput)) return;
    // Take the prop and pass it to the onSearchUser function in App.js
		this.props.onSearchUser(newInput);
  }

  render() {
    return (
      <div className="container">
        <div className="searchBar">
          <form className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              onChange={ this.onInputChange }
              value={ this.state.userInput }
            />
            <span className="input-group-btn">
              <button
                type="submit"
                className="btn searchBtn"
                onClick={ this.handleClick }>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
