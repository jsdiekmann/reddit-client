import React from "react";
import Card from "./Card";


// Renders a component that contains the cards with the information from the Reddit JSON API. Will only allow the rendering of a card that passes the filter for the title and description attributes

const CardContainer = ({ listings, filteredTerm }) => {
  
  return (
    !!listings &&
    listings.map((listing, index) => {
      if (
        listing.title.toLowerCase().includes(filteredTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(filteredTerm.toLowerCase())
      ) {
        return <Card {...listing} key={index} />;
      } else {
        return null;
      }
    })
  );
};

export default CardContainer;
