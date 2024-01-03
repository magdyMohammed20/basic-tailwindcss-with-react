import styles from "./style.module.css";
import firstImg from "../../assets/first.webp";
import secondImg from "../../assets/second.webp";
import thirdImg from "../../assets/third.webp";
import fourthImg from "../../assets/fourth.webp";
import fifthImg from "../../assets/fifth.webp";
const GetStarted = () => {
  return (
    <div className="main-container py-8 lg:py-24 px-12 lg:px-32">
      <div className="flex items-center justify-center">
        <img src={firstImg} className="md:w-14 md:h-14 w-8 h-8 rounded-full" />
        <img
          src={secondImg}
          className="md:w-14 md:h-14 w-8 h-8 rounded-full scale-125"
        />
        <img
          src={fifthImg}
          className="md:w-14 md:h-14 w-8 h-8 rounded-full scale-150 z-20"
        />
        <img
          src={fourthImg}
          className="md:w-14 md:h-14 w-8 h-8 rounded-full scale-125"
        />
        <img src={thirdImg} className="md:w-14 md:h-14 w-8 h-8 rounded-full" />
      </div>
      <div className="text-center">
        <h1 className={`${styles.header} dark:text-white`}>Get Started now</h1>
        <p className="text-slate-600 text-sm md:text-xl">
          Be part of millions people around the world using tailus in modern
          User Interfaces.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button className="text-white bg-purple-600 px-5 py-3 rounded-full focus:ring-2 ring-purple-500 transition-all duration-75 ease-in text-[12px] md:text-base">
            Get Started
          </button>
          <button className="text-white bg-slate-800 px-5 py-3 rounded-full focus:ring-2 ring-slate-700 transition-all duration-75 ease-in text-[12px] md:text-base">
            More About
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
