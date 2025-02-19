import React from "react";
import "./Home.css";
import pic from "../assets/building_background.png";
import TextCycle from "./TextCycle";

function Home() {
  return (
    <div className="homeContainer">
      <div className="textContent">
        <TextCycle />
      </div>
      <div 
        className="imageSection"
        style={{ backgroundImage: `url(${pic})` }}
      ></div>
    </div>
  );
}

export default Home;