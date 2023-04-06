import React from "react";
import "./Card.css";

const Link = (url) => {
  if (!!url) {
    return (
      <a href={url.url} target="_blank">
        External Link
      </a>
    );
  }
};

const Card = ({
  title,
  src,
  description,
  index,
  ups,
  downs,
  permalink,
  url,
}) => {
  return (
    <div className="card" key={index}>
      <a href={`https://www.reddit.com${permalink}`} target="_blank">
        <h3>{title}</h3>
      </a>
      {src !== "self" && src !== "default" && <img src={src} />}
      <p>{description}</p>
      <div className="votes">
        <p>Ups: {ups}</p>
      </div>
      <Link url={url} />
    </div>
  );
};

export default Card;
