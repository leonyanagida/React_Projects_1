import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onInputChange(event) {
    // Set userInput to event.target.value when the user types somethign
    this.setState({ userInput: event.target.value })
  }

  handleClick(event) {
    // Prevent page from refreshing on submit
    event.preventDefault();

    this.setState({ userInput: '' });
    // Takes the props and pass it to the searchGifs function
    this.props.onSearchGifs(this.state.userInput);
  }


  render() {
    return (
      <div className="container">
        <div className="searchBar">
          <form className="input-group">
            <input
              className="form-control"
              placeholder="Search Gifs"
              onChange={ this.onInputChange }
             />
            <span className="input-group-btn">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={ this.handleClick } >
                <i className="fa fa-search" />
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
