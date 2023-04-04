import React from "react";
import "./card.css";

const Link = (url) => {
  if(!!url) {
    return (<a href={url.url} target="_blank">
      External Link
    </a>)
  }
};

const Card = ({ title, src, description, index, ups, downs, permalink, url }) => {

  return (
    <div className="card" key={index}>
      <Link url={url}/>
      <a href={`https://www.reddit.com${permalink}`} target="_blank">
        <h1>{title}</h1>
      </a>
      {src !== "self" && src!== "default" && <img src={src} />}
      <p>{description}</p>
      <div className="votes">
        <p>Ups: {ups}</p>
        <p>Downs: {downs}</p>
      </div>
    </div>
  );
};

export default Card;
