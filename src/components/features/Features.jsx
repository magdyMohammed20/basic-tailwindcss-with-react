import { useState } from "react";
import FeaturesBox from "./FeaturesBox";
import styles from "./style.module.css";
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
      <div className={styles.inner_container}>
        <div className={styles.features_container}>{mapFeatures}</div>
      </div>
    </div>
  );
};

export default Features;
