import Card from "./card";
import styles from "./style.module.css";
import { cardsData } from "./data";

const Articles = () => {
  const mapCards = cardsData.map((card) => <Card key={card.id} card={card} />);
  return (
    <div className="main-container md:py-24 md:px-32 px-28">
      <h1 className="header text-2xl md:text-4xl font-extrabold tracking-wider">
        Latest Articles
      </h1>
      <p className={styles.para}>
        Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
        debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-24 justify-items-center">
        {mapCards}
      </div>
    </div>
  );
};

export default Articles;
