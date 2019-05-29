import React, { Component } from 'react';
import Post from './post';
import InstaService from './../services/instaservice';
import ErrorMessage from './errorMessage';

class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = posts => {
    this.setState({ posts });
  };

  onError = err => {
    this.setState({ error: true });
  };

  renderItems(arr) {
    return arr.map(item => {
      return <Post item={item} key={item.id} />;
    });
  }

  render() {
    const { error, posts } = this.state;
    const items = this.renderItems(posts);

    if (error) {
      return <ErrorMessage />;
    }

    return <div className="left">{items}</div>;
  }
}

export default Posts;
