import React from 'react';
import User from './user';
import Palette from './palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://assets.vogue.com/photos/5a0b9d136ed2ed3c2e007e85/master/pass/pine-post-tout.jpg"
        alt="man"
        name="some_cool_man"
      />
      <Palette />
    </div>
  );
};

export default Profile;
