import React, { Component } from 'react';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import error1 from '../images/error1.png'

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: ''
    };
  }

  // Gives each user a new background
  componentWillReceiveProps() {
    let pics = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6
    ];
    let randomNum = Math.floor(Math.random() * pics.length);
    let background = pics[randomNum];

    this.setState({
       background
    });
  }

  checkBio(bio) {
    if (!this.props.data.bio) {
      return <p>Welcome to my Github profile! I am too lazy to write my own bio but I love to write code.</p>
    } else {
      return <p>{ this.props.data.bio }</p>
    }
  }

  checkLocation(location) {
    if (!this.props.data.location) {
      return <p>My Home</p>
    } else {
      return <p>{ this.props.data.location }</p>
    }
  }

  render() {
    if (this.props.data.message === "Not Found") {
      return (
      <div className="userError">
        <p className="errorTxt">User Not Found!</p>
        <img className="error1" src={ error1 } alt="error" />
      </div>
      )
    } else {
      return (
        <div className="container">
          <div className="card">
            <img className="background" src={ this.state.background } alt="background" />
            <div className="user">
              <img className="face" src={ this.props.data.avatar_url } alt="Avatar" />
              <div className="buttons">
                <a href={ this.props.data.html_url } target="_blank" rel="noopener noreferrer">
                  <button type="button" className="btn githubBtn">Github</button>
                </a>
              </div>
            </div>
            <div className="textBox">
              <h1 className="username">{ this.props.data.login }</h1>
              <h4 className="name">{ this.props.data.name }</h4>
              <div className="bio">{ this.checkBio(this.props.data.bio) }</div>
              <div className="location"><span className="green">Located:</span>{ this.checkLocation(this.props.data.location) }</div>
              <p className="followers"><span className="green">Followers:</span> { this.props.data.followers }</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default UserCard;
