import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}
