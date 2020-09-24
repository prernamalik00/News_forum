import React from "react";
import InterestSecCard from "./InterestSecCard";
function InterestSection() {
  return (
    <div className="interests-section">
      <div className="row">
        <InterestSecCard />
        <InterestSecCard />
        <InterestSecCard />
      </div>
    </div>
  );
}
export default InterestSection;
