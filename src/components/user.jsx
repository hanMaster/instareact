import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <Link to="/profile" className={this.props.min ? 'user min' : 'user'}>
        <img src={this.props.src} alt={this.props.alt} />
        <div className="user__name">{this.props.name}</div>
      </Link>
    );
  }
}

export default User;
