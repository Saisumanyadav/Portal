import React, { useState, useEffect } from "react";
import HeaderComp from "../Components/HeaderSection/HeaderComp";
import "./Common.scss";
import Dashboard from "../Components/DashboardSection.js/Dashboard";
import Spinner from "../Components/LoadingSection/SpinnerComp";
import OfferingsComp from "../Components/OfferingsSection/OfferingsComp";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return loading ? (
    <Spinner onLoadingComplete={handleLoadingComplete} />
  ) : (
    <div className="mainBackground">
      <div className="home">
        <HeaderComp />
        <Dashboard />
        <OfferingsComp/>
      </div>
    </div>
  );
};

export default Home;
