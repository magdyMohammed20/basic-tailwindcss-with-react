import PropTypes from "prop-types";

const Card = ({ card: { src, title, desc } }) => {
  return (
    <div className="mt-6 lg:mt-0 max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 rounded-3xl">
      <a href="#" className="p-8 pb-4 block">
        <div className="overflow-hidden">
          <img
            src={src}
            className="hover:scale-110 transition-all duration-300 ease-in-out lg:h-56 h-36 w-full"
          />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-[11px] lg:text-lg md:text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="my-3 lg:my-5 font-normal text-[13px] text-gray-700 dark:text-gray-400 text-sm lg:text-sm">
          {desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center  py-2  font-medium text-center dark:text-blue-300 text-blue-600 text-[14px]">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.string.isRequired,
};
