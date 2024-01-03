import air from "../../assets/airbnb.svg";
import micro from "../../assets/microsoft.svg";
import netflix from "../../assets/netflix.svg";
import googleCloud from "../../assets/google-cloud.svg";
import ge from "../../assets/ge.svg";
import google from "../../assets/google.svg";
import { useState } from "react";
import styles from "./brands.module.css";
const Brands = () => {
  const same = `hover:grayscale-0 dark:grayscale ${styles.img_style}`;
  const [images] = useState([
    {
      id: 1,
      element: <img src={air} className={same} />,
      parentClasses: "w-32 h-32",
    },
    {
      id: 2,
      element: <img src={micro} alt="micro" className={same} />,
      parentClasses: "w-32 h-32",
    },
    {
      id: 3,
      element: <img src={netflix} alt="micro" className={same} />,
      parentClasses: "w-32 h-32",
    },
    {
      id: 4,
      element: <img src={googleCloud} alt="micro" className={same} />,
      parentClasses: "w-32 h-32",
    },
    {
      id: 5,
      element: <img src={ge} alt="micro" className={same} />,
      parentClasses: "w-16 h-16",
    },
    {
      id: 6,
      element: <img src={google} alt="micro" className={same} />,
      parentClasses: "w-32 h-32",
    },
  ]);

  const mapBrands = images.map((img) => (
    <div className={img.parentClasses} key={img.id}>
      {img.element}
    </div>
  ));
  return (
    <div className="main-container py-10">
      <div className={styles.img_container}>{mapBrands}</div>
    </div>
  );
};

export default Brands;
