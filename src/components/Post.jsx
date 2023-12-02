import React from "react";

import moment from "moment";

function Post({ post }) {
  console.log(post);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case "list":
        return (
          <ul>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>
                <li>{item}</li>
              </React.Fragment>
            ))}
          </ul>
        );
      default:
        return modifiedText;
    }
  };
  return (
    <article className="mx-auto my-14 max-w-2xl px-8" key={post.id}>
      {/* File path Component */}

      {/* Author Component */}
      <div>
        <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-gray-900">
              <p class="md:text-base  font-primarybody text-gray-500 text-xl">
                {moment(post.createdAt).format("MM/DD/YYYY")}
              </p>
            </div>
          </address>
        </header>
      </div>

      {/* post */}
      <h1 className="font-bold text-4xl leading-snug md:leading-none">
        {post.title}
      </h1>
      <br />
      <p className="font-normal text-lg leading-relaxed selection:bg-purple-500 text-gray-700 text-inherit">
        {post.excerpt}
      </p>
      <img src={post.featuredImage.url} className="my-6 w-[90%] mx-auto" />

      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        );

        return (
          <p className="text-lg leading-relaxed text-gray3-700">
            {getContentFragment(index, children, typeObj, typeObj.type)}
          </p>
        );
      })}

      {/* will work on comments later */}
      <div></div>
    </article>
  );
}

export default Post;
