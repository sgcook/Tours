import React from "react";
import "./Loading.css";
import loadingTime from "./loading-time.jpg";

const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      <img src={loadingTime} alt="loading bar half complete" />
    </div>
  );
};

export default Loading;
