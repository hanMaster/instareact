import React, { Component } from "react";
import User from "./user";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://wisetoast.com/wp-content/uploads/2015/10/Katherine-Elizabeth-Upton-most-beautiful-woman.jpg"
          alt="user"
          name="Beauliful girl"
          min
        />
        <img src={this.props.src} alt={this.props.alt} />
        <div className="post__name">Some_account</div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          possimus accusamus beatae excepturi in eius cumque sed aut rem eaque
          fuga, quasi, cupiditate vel dolor quia, voluptatem natus suscipit
          illo!
        </div>
      </div>
    );
  }
}

export default Post;
