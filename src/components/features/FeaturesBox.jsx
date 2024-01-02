// eslint-disable-next-line react/prop-types
const FeaturesBox = ({ title }) => {
  return (
    <div className="mt-8 lg:mt-0 flex justify-center flex-col text-center lg:text-left">
      <h1 className="text-xl text-white">{title}</h1>
      <p className="text-[14px] text-gray-400 mt-4 font-normal">
        Some text here
      </p>
    </div>
  );
};

export default FeaturesBox;
