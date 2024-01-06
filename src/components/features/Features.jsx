import { useState } from "react";
import FeaturesBox from "./FeaturesBox";
import styles from "./style.module.css";
import useCustomTranslation from "../../hooks/translation";
const Features = () => {
  const { t } = useCustomTranslation();

  const [features] = useState([
    { id: 1, title: "The lowest price", lang: "lowest" },
    { id: 2, title: "The fastest on the market", lang: "fastest" },
    { id: 3, title: "The most loved", lang: "mostLoved" },
  ]);

  const mapFeatures = features.map((feature) => (
    <FeaturesBox key={feature.id} title={t(`features.${feature.lang}`)} />
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
