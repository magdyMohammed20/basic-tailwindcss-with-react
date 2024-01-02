import styles from "./style.module.css";
const Home = () => {
  return (
    <div className="main-container">
      <div className={`${styles.hero} flex items-center justify-between`}>
        <div className="w-full lg:w-1/2 ">
          <h1 className="text-5xl text-white text-[30px] lg:text-6xl text-indigo-400">
            Shaping a world with reimagination.
          </h1>
          {/* <h1 className="text-sm lg:text-xl text-gray-300 mt-5">
            Software Engineer
          </h1> */}
          <p className="mt-12 text-gray-400 text-sm lg:text-[15px] leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            possimus aliquid fuga praesentium enim, commodi aut deleniti,
            perferendis dolores, officia quae tempora voluptatibus nobis dolore
            facilis facere illum dolorum. Dignissimos qui similique maxime fuga.
            Minima voluptas esse dignissimos laborum modi?
          </p>
          <div className="mt-12 flex gap-4">
            <button className="bg-indigo-600 text-gray-100 px-8 py-3 rounded-full focus:ring-4 focus:ring-indigo-500 transition-all duration-300">
              Get Started
            </button>
            <button className="bg-white text-slate-950 px-8 py-3 rounded-full focus:ring-4 focus:ring-gray-700 transition-all duration-300 hover:bg-black hover:text-white">
              About Me
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end hidden lg:flex">
          <img src="/src/assets/hero.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
