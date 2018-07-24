import React, { Component } from "react";

import Header from "./header";
import SearchBar from "./search_bar";
import GifsList from "./gifs_list";
import Footer from "./footer";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    // Default search when the app is loaded
    this.searchGifs("cats");
  }

  searchGifs(userInput) {
    const apiKey = ""; // INSERT API KEY HERE //
    const ROOT_URL = "https://api.giphy.com/v1/gifs/";
    const API_KEY = `${apiKey}`;
    let searchUrl = `${ROOT_URL}search?q=${userInput}&api_key=${API_KEY}&limit=30`;

    fetch(searchUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Data.data to access each object
        this.setState({ data: data.data });
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar onSearchGifs={userInput => this.searchGifs(userInput)} />
        <GifsList data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
