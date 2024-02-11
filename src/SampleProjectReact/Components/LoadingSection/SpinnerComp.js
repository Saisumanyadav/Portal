import React, { useEffect, useState } from "react";
import "./loading.scss"; // Make sure to import your CSS file

const Spinner = ({ onLoadingComplete }) => {
  const [percentage, setPercentage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + 1;
        }
        clearInterval(interval);
        onLoadingComplete();
        return 100;
      });
    }, 100);
  }, [onLoadingComplete]);

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="spinnerText"> {percentage}%</p>
    </div>
  );
};

export default Spinner;
