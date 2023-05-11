import React from "react";
import "./Card.css";

// Creates Link component that will open a new tab from a link that is part of our returned listing

export const Link = (url) => {
  if (!!url) {
    return (
      <a href={url.url} target="_blank">
        External Link
      </a>
    );
  }
};

// Creates the structure of the individual posts in the subreddit

const Card = ({
  title,
  src,
  description,
  index,
  ups,
  permalink,
  url,
}) => {
  return (
    <div className="card" key={index} data-testid="card" >
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
