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
          className="bg-[#CCCCCC] hover:greenTextLinks transition ease-in-out duration-200  rounded-3xl p-5  grid grid-cols-4 md:grid-cols-8  md:grid-rows-1 w-full postLink"
        >
          <div>
            <p></p>
          </div>
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

            <div className="flex flex-row justify-around py-4 text-xl font-medium uppercase ">
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
            <img
              src={post.featuredImage.url}
              loading="lazy"
              alt=""
              className=" h-[200px] cursor-pointer w-full object-cover hover:scale-105 transition-scale duration-200 ease-in left-0 bottom-0 rounded-2xl card"
            />
          </div>
          {/* <div className="col-start-1 col-end-5 text-md font-normal tracking-widest">
            <p>{post.shortDescriptionOfTheWebsite}</p>
          </div> */}
        </div>
      ))}
      {posts?.map((post) => (
        <div key={post.id}>
          <div className="">
            <div className="bg-[#a07178] p-12 rounded-3xl">
              <h1 className="text-3xl">{post.title}</h1>
              <h2>{post.shortDescriptionOfTheWebsite}</h2>
              <ul className="grid grid-cols-8 my-3">
                <li className="col-start-1 col-end-2">Github</li>
                <li className="col-start-3 col-end-4">Live</li>
                <li className="col-start-6 col-end-8 whitespace-nowrap">
                  Learn More
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col bg-white rounded-lg p-8 shadow-md">
        <div className="flex items-center justify-center bg-indigo-500 rounded-full h-12 w-12">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Help Scout AI</h3>
        <p className="text-gray-600 mt-2">
          Empowering customer support with AI-powered solutions for faster and
          smarter responses.
        </p>
        <div className="flex justify-between items-center mt-4">
          <a
            href="https://www.helpscout.com/ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Learn More
          </a>
          <div className="flex items-center">
            <span className="text-gray-600">5 mins read</span>
            <span className="text-indigo-500 ml-2">→</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
