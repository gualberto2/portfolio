import moment from "moment";

import React from "react";
import { useNavigate } from "react-router-dom";

const Posts = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <>
      {posts?.map((post) => (
        <div
          key={post.id}
          className="bg-[#C7DBEB] rounded-3xl p-5  grid grid-cols-4 md:grid-cols-8 grid-rows-2 md:grid-rows-1"
        >
          <div
            className="md:col-start-2 md:col-end-3 col-start-1 col-end-5 row-start-1 row-end-2 mb-1"
            onClick={() => navigate(`/article/${post.slug}`)}
          >
            <h2 className="text-xl text-inherit font-normal uppercase ">
              {post.subTitle}
            </h2>
            <h2
              className="text-4xl text-inherit font-medium uppercase"
              onClick={() => navigate(`/article/${post.slug}`)}
            >
              {post.title}
            </h2>
            <p className="font-light text-md">
              {" "}
              {moment(post.createdAt).format("MM.DD.YY")}
            </p>
          </div>
          <div className="col-start-1 col-end-5">
            <p className=" text-xl font-normal tracking-widest">
              {post.excerpt}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
