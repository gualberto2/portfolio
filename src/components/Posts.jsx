import moment from "moment";

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Posts = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <>
      {posts?.map((post) => (
        <div
          key={post.id}
          className="bg-[#C7DBEB] rounded-3xl p-5  grid grid-cols-4 md:grid-cols-8"
        >
          <div className="md:col-start-2 md:col-end-3 col-start-1 col-end-3">
            <h2
              className="text-3xl font-medium flex flex-row items-center gap-2 hover:bg-red-300/70 rounded-xl"
              onClick={() => navigate(`/article/${post.slug}`)}
            >
              {post.title}
              <FaExternalLinkAlt className="text-lg font-medium " />
            </h2>
            <h3 className="text-xl font-light">
              {moment(post.createdAt).format("MM/DD/YYYY")}
            </h3>
            <p onClick={() => (window.location.href = post.liveSite)}>Live</p>
            <p onClick={() => (window.location.href = post.github)}>Github</p>
          </div>
          <div className="md:col-start-4 md:col-end-8 col-start-3 col-end-5">
            <p className="tracking-widest text-md text-gray-900">
              {post.excerpt}
            </p>
            <p>{post.shortDescriptionOfTheWebsite}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
