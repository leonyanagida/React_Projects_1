import React, { Component } from 'react';
import SearchBar from './search_bar';
import UserCard from './user_card';
import Header from './header';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
    // Default Search when the app loads
    this.searchUser('leonyanagida');
  }

  searchUser(userInput) {
    const ROOT_URL = `https://api.github.com/users/`;
    let url = `${ROOT_URL}${userInput}`;

    // Fetch data from Github API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data })
      }).catch((error) => {
        // Handle Error if API fetch fails
        console.log("Error", error);
      });
  }

  render() {
    // Pass searchUser function to children from parent
    // pass the this.state.data as props to UserCard
    return (
      <div>
        <Header />
        <SearchBar onSearchUser={userInput => this.searchUser(userInput)} />
        <UserCard data={this.state.data} />
        <Footer />
      </div>
    );
  }
}
export default App;
