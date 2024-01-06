// eslint-disable-next-line react/prop-types
import styles from "./style.module.css";
import PropTypes from "prop-types";
import useCustomTranslation from "../../hooks/translation";
const FeaturesBox = ({ title }) => {
  const { t, language } = useCustomTranslation();

  return (
    <div
      className={`${styles.box_style} text-center ${
        language == "ar" ? "lg:text-right" : "lg:text-left"
      }`}>
      <h1
        className={`${styles.title} ${
          language == "ar" && "font-bold"
        } dark:text-white text-slate-800`}>
        {title}
      </h1>
      <p
        className={`${styles.desc} dark:text-gray-400 text-slate-600 ${
          language == "ar" && "font-bold"
        }`}>
        {t("features.someText")}
      </p>
    </div>
  );
};

export default FeaturesBox;

FeaturesBox.propTypes = {
  title: PropTypes.string.isRequired,
};
