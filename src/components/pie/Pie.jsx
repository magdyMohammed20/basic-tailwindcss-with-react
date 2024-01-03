import styles from "./style.module.css";
import { PieChart } from "lucide-react";
import pie_img from "../../assets/pie.svg";
import { MessageSquareText } from "lucide-react";
import { MapPin } from "lucide-react";

const Pie = () => {
  return (
    <div className="main-container pt-12">
      <div className={styles.grid_container}>
        <div className="px-12 lg:ps-8 lg:pe-0 ">
          <PieChart className={styles.svg} />
          <h1 className={`${styles.header} dark:text-white`}>
            Nuxt development is carried out by passionate developers
          </h1>
          <p className={`${styles.text} dark:text-slate-400 `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
            ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
            minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
            magni adipisci.
          </p>

          <p className={`${styles.text} dark:text-slate-400 mt-6`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
            ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
            minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
            magni adipisci.
          </p>

          <div className="mt-12">
            <div className="flex items-center gap-4">
              <div
                className={`${styles.icon_style_blue} dark:bg-blue-200 dark:bg-opacity-15 bg-slate-700 bg-opacity-85`}>
                <MessageSquareText className="text-indigo-400 " />
              </div>
              <div className="flex flex-col">
                <span className="text-xl dark:text-indigo-300">
                  Chat Anytime
                </span>
                <span className="mt-1 text-sm  dark:text-gray-300 text-slate-500">
                  Asperiores nemo possimus nesciunt quam mollitia.
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
                  Real Time Location
                </span>
                <span className="mt-1 text-sm  dark:text-gray-300 text-slate-500">
                  Asperiores nemo possimus nesciunt quam mollitia.
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
