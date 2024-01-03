import styles from "./style.module.css";
const Home = () => {
  return (
    <div className="main-container">
      <div className={`${styles.hero} flex items-center justify-between`}>
        <div className="w-full lg:w-1/2 ">
          <h1 className={styles.span}>Be With Us</h1>
          <h1 className={styles.header}>Shaping a world with reimagination.</h1>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            possimus aliquid fuga praesentium enim, commodi aut deleniti,
            perferendis dolores, officia quae tempora voluptatibus nobis dolore
            facilis facere illum dolorum. Dignissimos qui similique maxime fuga.
            Minima voluptas esse dignissimos laborum modi?
          </p>
          <div className={styles.btn_container}>
            <button className={styles.first_btn}>Get Started</button>
            <button className={styles.second_btn}>About Me</button>
          </div>
        </div>
        <div className={styles.img_container}>
          <img
            src="https://i.ibb.co/Z1zrVDm/undraw-React-re-g3ui-removebg-preview.png"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
