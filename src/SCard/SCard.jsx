import React from "react";
import Card from "./Card";
import "./card.css";

const SCard = ({ data, selectedTimeframe }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          timeframes={item.timeframes}
          cardId={`card-${index + 1}`}
          selectedTimeframe={selectedTimeframe}
        />
      ))}
    </>
  );
};

export default SCard;
