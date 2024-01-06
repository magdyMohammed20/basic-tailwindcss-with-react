import { useState } from "react";
import FanComp from "./FanComp";
import styles from "./style.module.css";
import firstCard from "../../assets/first.webp";
import secondCard from "../../assets/second.webp";
import thirdCard from "../../assets/third.webp";
import fourthCard from "../../assets/fourth.webp";
import fifthCard from "../../assets/fifth.webp";
import useCustomTranslation from "../../hooks/translation";

const Fans = () => {
  const { t } = useCustomTranslation();

  const [firstCards] = useState([
    {
      id: 1,
      desc: "first_desc",
      img: (
        <img
          className="w-14 h-14 rounded-full shadow-lg"
          src={firstCard}
          alt="Bonnie image"
        />
      ),
    },
    {
      id: 2,
      desc: "second_desc",
      img: (
        <img
          className="w-14 h-14 rounded-full shadow-lg"
          src={secondCard}
          alt="Bonnie image"
        />
      ),
    },
  ]);

  const [secondCards] = useState([
    {
      id: 3,
      desc: "third_desc",
      img: (
        <img
          className="w-14 h-14 rounded-full shadow-lg"
          src={thirdCard}
          alt="Bonnie image"
        />
      ),
    },

    {
      id: 4,
      desc: "fourth_desc",
      img: (
        <img
          className="w-14 h-14 rounded-full shadow-lg"
          src={fourthCard}
          alt="Bonnie image"
        />
      ),
    },
  ]);
  const [thirdCards] = useState([
    {
      id: 5,
      desc: "fifth_desc",
      img: (
        <img
          className="w-14 h-14 rounded-full shadow-lg"
          src={fifthCard}
          alt="Bonnie image"
        />
      ),
    },
    {
      id: 6,
      desc: "six_desc",
      img: (
        <img
          className="w-14 h-14 rounded-full shadow-lg"
          src={secondCard}
          alt="Bonnie image"
        />
      ),
    },
  ]);

  const cardsMap1 = firstCards.map((card) => (
    <FanComp card={card} key={card.id} />
  ));

  const cardsMap2 = secondCards.map((card) => (
    <FanComp card={card} key={card.id} />
  ));

  const cardsMap3 = thirdCards.map((card) => (
    <FanComp card={card} key={card.id} />
  ));
  return (
    <div className="main-container py-24 px-8 lg:px-32">
      <h1 className={`${styles.header} dark:text-white text-slate-950`}>
        {t("fans.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-x-8 gap-y-6  ">
        <div className="grid grid-cols-1  gap-x-8 gap-y-6  pt-11 lg:pt-20">
          {cardsMap1}
        </div>
        <div className="grid grid-cols-1  gap-x-8 lg:gap-y-6 gap-y-5  lg:pt-20">
          {cardsMap2}
        </div>
        <div className="grid grid-cols-1  gap-x-8 lg:gap-y-6 gap-y-5  lg:pt-20">
          {cardsMap3}
        </div>
      </div>

      {/*       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-6  pt-20">
        {cardsMap}
      </div> */}
    </div>
  );
};

export default Fans;
