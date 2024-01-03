// eslint-disable-next-line react/prop-types
import styles from "./style.module.css";
import PropTypes from "prop-types";

const FeaturesBox = ({ title }) => {
  return (
    <div className={styles.box_style}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>Some text here</p>
    </div>
  );
};

export default FeaturesBox;

FeaturesBox.propTypes = {
  title: PropTypes.string.isRequired,
};
