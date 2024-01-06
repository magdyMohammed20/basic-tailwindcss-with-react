import { ArrowRight, ArrowLeft } from "lucide-react";
import styles from "./style.module.css";
import PropTypes from "prop-types";
import useCustomTranslation from "../../hooks/translation";
const Group = ({ card: { src, title, lang, id } }) => {
  const { t, language } = useCustomTranslation();
  return (
    <div className={`${styles.group} group dark:bg-gray-800 bg-slate-600`}>
      <div className={styles.inner_parent}>
        <img
          src={src}
          loading="lazy"
          width="200"
          height="200"
          className={styles.img_style}
        />
        <div className="space-y-8">
          <h5 className={styles.group_header}>{title}</h5>
          <p className="text-gray-300">{t(`tech_first.cards.${lang}`)}</p>
          <div
            className={`${styles.flex_con} ${
              language == "ar" && id == 1 && "translate-y-[22px]"
            }`}>
            <a
              href="#"
              className={`${
                styles.read_more_link
              } dark:group-hover:text-orange-400 text-black hover:text-black dark:text-slate-400 ${
                language == "ar" && "font-bold"
              }`}>
              {t(`tech_first.cards.read_more`)}
            </a>
            {language == "en" ? (
              <ArrowRight
                className={`${styles.read_more_arrow} dark:text-orange-400 text-white`}
              />
            ) : (
              <ArrowLeft
                className={`${styles.read_more_arrow_ar} dark:text-orange-400 text-white`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;

Group.propTypes = {
  card: PropTypes.object.isRequired,
};
