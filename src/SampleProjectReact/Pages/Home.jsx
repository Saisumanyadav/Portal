import React, { useState, useRef } from "react";
import HeaderComp from "../Components/HeaderSection/HeaderComp";
import "./Common.scss";
import Dashboard from "../Components/DashboardSection.js/Dashboard";
import Spinner from "../Components/LoadingSection/SpinnerComp";
import OfferingsComp from "../Components/OfferingsSection/OfferingsComp";
import OurPartnerComp from "../Components/OurPartnersSection/OurPartnerComp";
import OurProcessComp from "../Components/ProcessSection/OurProcessComp";
import FaqComp from "../Components/FaqSection/FaqComp";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const dashboardRef = useRef(null);
  const offeringsRef = useRef(null);
  const partnersRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  // const scrollToSection = (section) => {
  //   section.current.scrollIntoView({ behavior: "smooth" });
  // };
  const scrollToSection = (section) => {
    const headerOffset = document.querySelector('.headingComp').offsetHeight;
    const elementPosition = section.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return false ? (//need to set loading for loader
    <Spinner onLoadingComplete={handleLoadingComplete} />
  ) : (
    <div className="mainBackground">
      <HeaderComp
        scrollToSection={scrollToSection}
        sections={{ dashboardRef, offeringsRef, partnersRef, processRef, faqRef }}
      />
      <div className="home">
        <div ref={dashboardRef}>
          <Dashboard />
        </div>
        <div ref={offeringsRef}>
          <OfferingsComp />
        </div>
        <div ref={partnersRef}>
          <OurPartnerComp />
        </div>
        <div ref={processRef}>
          <OurProcessComp />
        </div>
        <div ref={faqRef}>
          <FaqComp />
        </div>
      </div>
    </div>
  );
};

export default Home;
