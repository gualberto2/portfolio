import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QUERY_SELECTED_POST,
  graphcms,
} from "../components/blog-components/queries";

import Post from "../components/Post";

const Article = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    graphcms
      .request(QUERY_SELECTED_POST, { slug })
      .then((res) => setPosts(res.posts));
  }, [slug]);

  return (
    <>
      {posts?.map((post) => (
        <>
          <Post post={post} />
        </>
      ))}
    </>
  );
};
export default Article;
