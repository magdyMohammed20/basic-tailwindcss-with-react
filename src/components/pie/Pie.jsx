import styles from "./style.module.css";
import { PieChart } from "lucide-react";
import pie_img from "../../assets/pie.svg";
import { MessageSquareText } from "lucide-react";
import { MapPin } from "lucide-react";
import useCustomTranslation from "../../hooks/translation";

const Pie = () => {
  const { t, language } = useCustomTranslation();

  return (
    <div className="main-container pt-12">
      <div className={styles.grid_container}>
        <div className="px-12 lg:ps-8 lg:pe-0 ">
          <PieChart className={styles.svg} />
          <h1 className={`${styles.header} text-slate-800 dark:text-white }`}>
            {t("pie.title")}
          </h1>
          <p
            className={`${styles.text} dark:text-slate-400 ${
              language == "ar" && "text-[15px]"
            }`}>
            {t("pie.desc1")}
          </p>

          <p
            className={`${styles.text} dark:text-slate-400 mt-6 ${
              language == "ar" && "text-[15px]"
            }`}>
            {t("pie.desc2")}
          </p>

          <div className="mt-12">
            <div className="flex items-center gap-4">
              <div
                className={`${styles.icon_style_blue} dark:bg-blue-200 dark:bg-opacity-15 bg-slate-700 bg-opacity-85`}>
                <MessageSquareText className="text-indigo-400 " />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl dark:text-indigo-300 ${
                    language == "ar" && "font-bold"
                  }`}>
                  {t("pie.chat_any_time")}
                </span>
                <span className="mt-1 text-sm  dark:text-gray-300 text-slate-500">
                  {t("pie.desc")}
                </span>
              </div>
            </div>
            <hr className="my-4 border-slate-800" />
            <div className="flex items-center gap-4 mt-6">
              <div
                className={`${styles.icon_style_blue} dark:bg-blue-200 dark:bg-opacity-15 bg-slate-900 bg-opacity-70`}>
                <MapPin className="text-green-400 " />
              </div>
              <div className="flex flex-col">
                <span className="text-xl dark:text-green-300">
                  {t("pie.real_time_location")}
                </span>
                <span className="mt-1 text-sm  dark:text-gray-300 text-slate-500">
                  {t("pie.desc")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src={pie_img} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Pie;
