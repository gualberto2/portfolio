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
          className="bg-[#E0E0E0] rounded-3xl p-5  grid grid-cols-4 md:grid-cols-8 grid-rows-2 md:grid-rows-1"
        >
          <div
            className="md:col-start-2 md:col-end-3 col-start-1 col-end-5 row-start-1 row-end-2 mb-1"
            onClick={() => navigate(`/article/${post.slug}`)}
          >
            <h2 className="text-xl text-inherit font-normal uppercase cursor-pointer ">
              {post.subTitle}
            </h2>
            <h2
              className="text-4xl text-inherit font-medium cursor-pointer uppercase hover:text-gray-600 transition duration-200 ease-in-out"
              onClick={() => navigate(`/article/${post.slug}`)}
            >
              {post.title}
            </h2>
            <p className="font-light text-md">
              {" "}
              {moment(post.createdAt).format("MM.DD.YY")}
            </p>
            <div className="flex flex-row justify-around py-4 text-xl font-medium uppercase ">
              <p
                onClick={() => (window.location.href = post.github)}
                className="hover:text-gray-500 cursor-pointer transition duration-200 ease-in-out"
              >
                Github
              </p>
              <p
                onClick={() => (window.location.href = post.liveSite)}
                className="hover:text-gray-500 cursor-pointer transition duration-200 ease-in-out"
              >
                Live
              </p>
            </div>
          </div>
          <div className="col-start-1 col-end-5 bg-green-700 flex justify-center items-center rounded-2xl ">
            <p className=" text-xl font-medium tracking-widest text-white p-6">
              {post.excerpt}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
