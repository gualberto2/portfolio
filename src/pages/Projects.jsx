import React, { useEffect, useState } from "react";
import { QUERY_POSTS, graphcms } from "../components/blog-components/queries";
import Posts from "../components/Posts";
import moment from "moment";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    graphcms.request(QUERY_POSTS).then((res) => setPosts(res.posts));
  });
  return (
    <section className="px-2 max-w-[95%] mx-auto lg:max-w-4xl py-20 min-h-screen">
      {/* hdrAnim here */}
      <div className="">
        <h1 className="text-center text-5xl md:text-6xl font-semibold tracking-tighter mb-8">
          Projects
        </h1>
        <h2 className="text-center tracking-widest text-lg">
          Discover the inner workings of my mind and gain insight into my
          creative process.
        </h2>
      </div>

      <div className="my-12">
        <h1 className="text-center font-light text-gray-800 text-md mb-3">
          Checkout the latest big project
        </h1>
        <Posts posts={posts} className="" />
      </div>
    </section>
  );
};

export default Projects;
