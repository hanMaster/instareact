import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHGqXspXAqksxkhLd6bFWzNUynNJRb6ajaTRST91uRQ8LilgE"
          alt="nature"
        />
        <Post
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBxIQAhTzwbHZ5VVkf8wx75u-AzLOUpJidlaAvLb1bNb8Z_yG"
          alt="nature"
        />
      </div>
    );
  }
}

export default Posts;
