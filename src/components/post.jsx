import React, { Component } from 'react';
import User from './user';

class Post extends Component {
  render() {
    const { name, altname, photo, src, alt, descr } = this.props.item;
    return (
      <div className="post">
        <User src={photo} alt={altname} name={name} min />
        <img src={src} alt={alt} />
        <div className="post__name">{name}</div>
        <div className="post__descr">{descr}</div>
      </div>
    );
  }
}

export default Post;
