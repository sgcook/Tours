import React from "react";
import loadingTime from "./loading-time.jpg";

const Loading = () => {

  return (
    <div className="loading">
      <img
        className="loadingImage"
        src={loadingTime}
        alt="loading bar half complete"
      />
    </div>
  );
};

export default Loading;
