import styles from "./style.module.css";
import useCustomTranslation from "../../hooks/translation";

import hero1 from "../../assets/hero1.svg";
const Home = () => {
  const { t, language } = useCustomTranslation();

  const arCondition = language == "ar" && "font-bold";
  return (
    <div className="main-container">
      <div className={`${styles.hero} flex items-center justify-between`}>
        <div className="w-full lg:w-1/2 ">
          <h1
            className={`${styles.span} text-slate-800 mb-8 dark:text-blue-400 ${arCondition}`}>
            {t("main.slogan")}
          </h1>
          <h1
            className={`${styles.header} text-slate-700 dark:text-white ${
              language == "ar" && "font-extrabold"
            }`}>
            {t("main.header")}
          </h1>
          <p
            className={`${styles.para} dark:text-gray-400 text-slate-500 ${arCondition}`}>
            {t("main.description")}
          </p>
          <div className={styles.btn_container}>
            <button className={`${styles.first_btn} ${arCondition}`}>
              {t("main.getStarted")}
            </button>
            <button
              className={`${styles.second_btn} ${arCondition} dark:bg-white dark:text-slate-950 bg-black text-white  hover:bg-black hover:text-white`}>
              {t("main.aboutUs")}
            </button>
          </div>
        </div>
        <div className={styles.img_container}>
          <img
            src={
              language == "en"
                ? "https://i.ibb.co/Z1zrVDm/undraw-React-re-g3ui-removebg-preview.png"
                : hero1
            }
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
