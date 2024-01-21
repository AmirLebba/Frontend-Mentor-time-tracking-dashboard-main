import React, { useState } from "react";
import Profile from "../assets/image-jeremy.png";
import "./Bcard.css";

const Bcard = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState("daily");

  const handleButtonClick = (timeframe) => {
    setActiveButton(timeframe);
    onButtonClick(timeframe);
  };

  return (
    <div className="Bcard">
      <div className="Header">
        <img src={Profile} alt="Profile Pic" className="img" />
        <div className="title">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <button
        onClick={() => handleButtonClick("daily")}
        className={activeButton === "daily" ? "active" : ""}
      >
        Daily
      </button>
      <button
        onClick={() => handleButtonClick("weekly")}
        className={activeButton === "weekly" ? "active" : ""}
      >
        Weekly
      </button>
      <button
        onClick={() => handleButtonClick("monthly")}
        className={activeButton === "monthly" ? "active" : ""}
      >
        Monthly
      </button>
    </div>
  );
};

export default Bcard;
