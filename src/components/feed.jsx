import React from "react";
import Posts from "./posts";
import Users from "./users";

const Feed = () => {
  return (
    <div className="container feed">
      <Posts />
      <Users />
    </div>
  );
};

export default Feed;
