// Card.js
import React from "react";


const Card = ({ title, timeframes, cardId, selectedTimeframe }) => {
  const getTimeframeData = () => {
    switch (selectedTimeframe) {
      case "daily":
        return timeframes.daily;
      case "weekly":
        return timeframes.weekly;
      case "monthly":
        return timeframes.monthly;
      default:
        return timeframes.daily;
    }
  };

  const timeframeData = getTimeframeData();

  return (
    <div className={`card ${cardId}`} >
      <div className="sidebar">
        <header id="header">
          <strong>{title}</strong>
          <button>
            <i className="fi fi-rr-menu-dots"></i>
          </button>
        </header>
        <div>
          <h1>{timeframeData.current}hrs</h1>
          <p>Last Week - {timeframeData.previous}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
