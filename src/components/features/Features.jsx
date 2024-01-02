import { useState } from "react";
import FeaturesBox from "./FeaturesBox";

const Features = () => {
  const [features] = useState([
    { id: 1, title: "The lowest price" },
    { id: 2, title: "The fastest on the market" },
    { id: 3, title: "The most loved" },
  ]);

  const mapFeatures = features.map((feature) => (
    <FeaturesBox key={feature.id} title={feature.title} />
  ));
  return (
    <div className="main-container">
      <div className="lg:w-3/5 mx-auto lg:border-t border-0 lg:border-b lg:border-gray-700  lg:py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:justify-items-start  px-6">
          {mapFeatures}
        </div>
      </div>
    </div>
  );
};

export default Features;
