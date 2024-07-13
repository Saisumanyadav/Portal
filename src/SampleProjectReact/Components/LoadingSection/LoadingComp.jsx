import React from "react";
import loadingImage from "../../assets/CompanyLogo.svg"; // Replace with your image file
import "./loading.scss";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <img src={loadingImage} alt="Loading" className="loading-image" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingComponent;
