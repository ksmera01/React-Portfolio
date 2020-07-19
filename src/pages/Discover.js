import React from "react";
import Card from "../components/Card";

function Discover() {
  return (
    <div>
      <h1 className="text-center">My Portfolio</h1>
      <h3 className="text-center">
        Please click around below to view my work!
        </h3>
      <Card image src="assets/portfoliobackground" />
      <h1 className="text-center">
        Project 1
        </h1>
    </div>
  );
}

export default Discover;
