import styles from "./style.module.css";
import Group from "../group/Group";
import { cards } from "./data";
import useCustomTranslation from "../../hooks/translation";
const TechFirst = () => {
  const { t, language } = useCustomTranslation();
  const mapCards = cards.map((card, index) => (
    <Group card={card} key={card.id} index={index} />
  ));

  return (
    <div className="main-container pt-12">
      <div className="px-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={styles.svg}>
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"></path>
        </svg>
        <h1
          className={`${styles.header} dark:text-white ${
            language == "ar" && "font-extrabold"
          }`}
          dangerouslySetInnerHTML={{ __html: t("tech_first.title") }}></h1>
        <p
          className={`${styles.text} ${
            language == "ar" && "font-bold text-[17px]"
          }`}>
          {t("tech_first.description")}
        </p>
      </div>

      <div className="pb-16">
        <div className="px-16 mx-auto">
          <div className={styles.group_parent}>{mapCards}</div>
        </div>
      </div>
    </div>
  );
};

export default TechFirst;
