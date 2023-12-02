import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <>
      {posts?.map((post) => (
        <div key={post.id}>
          <Link to={`/article/${post.slug}`}>
            <div
              className="project-card rounded-lg p-10 shadow-sm transition ease-in-out duration-200  cursor-pointer"
              // onClick={() => navigate(`/post/${post.slug}`)}
            >
              <div className="grid grid-cols-10 grid-rows-2 content-center">
                <p className="font-medium text-xl row-start-1 row-end-2 col-start-1 col-end-8 self-center">
                  {post.title}
                </p>
                <p className="font-normal text-base row-start-2 row-end-3 col-start-1 col-end-8 pt-2 self-center">
                  {post.excerpt}
                </p>
                <div className="col-start-9 col-end-11 row-span-2 flex flex-row items-center justify-end space-x-4">
                  {post.teams?.map((team, index) => (
                    <div
                      key={team.id}
                      style={{
                        marginLeft: index !== 0 ? "-10px" : "0", // Adjust the overlap amount as needed
                      }}
                      className="author-container"
                    >
                      <div className="rounded-full w-10 h-10 md:w-16 md:h-16 overflow-hidden">
                        <img
                          src={team.authorImg.url}
                          alt={team.authorName}
                          className="w-full h-full object-cover author-icon author-grow-on-hover cursor-pointer"
                          title={team.authorName}
                          onClick={() =>
                            (window.location.href = team.authorSite)
                          }
                        />
                      </div>
                      <div className="author-text">{team.authorName}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Posts;
