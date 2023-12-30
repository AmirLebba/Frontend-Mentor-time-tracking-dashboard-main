import React, { useState } from "react";
import BCard from "./BCard/Bcard";
import SCard from "./SCard/SCard";
import data from "../data.json";
import './index.css'


const App = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  const handleButtonClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <div className="parent">
      <BCard onButtonClick={handleButtonClick} />
      <SCard data={data} selectedTimeframe={selectedTimeframe} />
    </div>
  );
};

export default App;
