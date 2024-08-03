import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const context = useGlobalContext();
  const { hits, nbPages } = context;
  return (
    <div>
      <h2>My Tech Posts</h2>
      <div className="stories-div">
      {hits.map((hit) => {
        const {title, author, objectID, url, num_comments} = hit;
        return (
          <>
          <div className="card" key={objectID} >
            <h2>{title}</h2>
            <p>
              By <span> {author} </span>  | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              <a href={url} target="_blank" >Read More</a>
              <a href="#">Remove</a>
            </div>
          </div>
          </>
        );
      })}
      </div>
    </div>
  );
};

export default Stories;
