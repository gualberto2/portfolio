import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </>
  );
};

export default Posts;
