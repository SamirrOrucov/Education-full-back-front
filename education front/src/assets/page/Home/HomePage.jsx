import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderSetion from "../../components/HeaderSection/HeaderSetion";
import ExploreSection from "../../components/ExploreSection/ExploreSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";

function HomePage() {
  return (
    <>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </div>
      <HeaderSetion />
      <ExploreSection />
      <FeaturesSection />
    </>
  );
}

export default HomePage;
