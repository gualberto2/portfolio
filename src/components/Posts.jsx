import moment from "moment";

import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiLogoFirebase } from "react-icons/bi";

const Posts = ({ posts, teams, categories }) => {
  const navigate = useNavigate();

  return (
    <>
      {posts?.map((post) => (
        <div
          key={post.id}
          backgroundImage={post.featuredImage.url}
          className="bg-[#CCCCCC] hover:greenTextLinks transition ease-in-out duration-200  rounded-3xl p-5  grid grid-cols-4 md:grid-cols-8  md:grid-rows-2 w-full postLink"
        >
          =
          <div
            className="relative md:col-start-2 md:col-end-3 col-start-1 col-end-5 row-start-1 row-end-2 mb-1"
            onClick={() => navigate(`/article/${post.slug}`)}
          >
            <h2 className="text-xl text-inherit font-normal uppercase  ">
              {post.subTitle}
            </h2>
            <h2
              className="text-4xl text-inherit font-medium cursor-pointer uppercase hover:text-gray-600 transition duration-200 ease-in-out"
              onClick={() => navigate(`/article/${post.slug}`)}
            >
              {post.title}
            </h2>
          </div>
          <div className="flex flex-row justify-around py-4 text-xl row-start-2 row-end-3 font-medium uppercase md:col-start-2 md:col-end-3 ">
            <p
              onClick={() => (window.location.href = post.github)}
              className="hover:underline cursor-pointer text-green-700 transition duration-200 ease-in-out"
            >
              Github
            </p>
            <p
              onClick={() => (window.location.href = post.liveSite)}
              className=" hover:underline cursor-pointer text-green-700 transition duration-200 ease-in-out"
            >
              Live
            </p>
          </div>
          <div className="md:col-start-7 md:col-end-8 md:row-start-1 md:row-end-2 flex flex-row items-center justify-end space-x-4">
            {post.teams?.map((team, index) => (
              <div
                key={team.id}
                style={{
                  marginLeft: index !== 0 ? "-10px" : "0", // Adjust the overlap amount as needed
                }}
                className="author-container"
              >
                <div className="rounded-full w-16 h-16 overflow-hidden">
                  <img
                    src={team.authorImg.url}
                    alt={team.authorName}
                    className="w-full h-full object-cover author-icon author-grow-on-hover cursor-pointer"
                    title={team.authorName}
                    onClick={() => (window.location.href = team.authorSite)}
                  />
                </div>
                <div className="author-text">{team.authorName}</div>
              </div>
            ))}
          </div>
          <div className="md:col-start-7 md:col-end-8 md:row-start-2 md:row-end-3 whitespace-nowrap ">
            <p className="flex flex-row justify-end items-center gap-2 font-medium whitespace-nowrap pt-5 cursor-pointer hover:text-gray-500 transition ">
              5 min read
              <BsArrowRight className="text-3xl" />
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
