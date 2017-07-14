import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount() { // life cycle metho <-- automaticallu called once
    this.props.fetchPosts();
  }

  renderPosts() {
    // lodash allows you to map through objects
    return _.map(this.props.posts, post => {
      return (
        <Link to={ `/posts/${post.id}` }>
        <li className="list-group-item" key={ post.id }>
            { post.title }
        </li>
      </Link>
      );
    });
  }


  render() {
    //console.log(this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3>Public Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
