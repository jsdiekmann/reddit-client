import React from "react";
import Card from "./Card";

const CardContainer = ({ listings, filteredTerm }) => {
  
  return (
    !!listings &&
    listings.map((listing, index) => {
      if (
        listing.title.toLowerCase().includes(filteredTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(filteredTerm.toLowerCase())
      ) {
        return <Card {...listing} key={index} />;
      }
    })
  );
};

export default CardContainer;
