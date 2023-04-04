import React from "react";
import Card from "./Card";

const CardContainer = ({listings}) => {

  return (
    !!listings &&
    listings.map((listing, index) => {
      return (
        
        <Card
          {...listing}
          key={index}
        />
      );
    })

  );
};

export default CardContainer;
