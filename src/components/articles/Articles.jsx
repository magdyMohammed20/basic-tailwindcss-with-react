import Card from "./card";
import styles from "./style.module.css";
import { cardsData } from "./data";
import useCustomTranslation from "../../hooks/translation";

const Articles = () => {
  const { t } = useCustomTranslation();

  const mapCards = cardsData.map((card) => <Card key={card.id} card={card} />);
  return (
    <div className="main-container md:py-24 md:px-16 px-12 lg:px-14">
      <h1 className="header text-2xl md:text-4xl font-extrabold tracking-wider dark:text-white text-black">
        {t("articles.title")}
      </h1>
      <p className={styles.para}>{t("articles.desc")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-24 justify-items-center gap-x-8">
        {mapCards}
      </div>
    </div>
  );
};

export default Articles;
