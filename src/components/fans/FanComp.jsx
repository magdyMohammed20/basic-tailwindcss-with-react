import useCustomTranslation from "../../hooks/translation";
import PropTypes from "prop-types";
const FanComp = ({ card: { img, desc } }) => {
  const { t, language } = useCustomTranslation();

  return (
    <div className=" bg-white border border-gray-200 rounded-3xl  dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex flex-col px-8 py-10">
        <div className="flex gap-4 items-center">
          {img}
          <div>
            <h5
              className={`mb-1 text-[15px]  ${
                language == "ar" ? "font-bold" : "font-medium"
              } text-gray-900 dark:text-white`}>
              {t(`fans.fan_name`)}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t(`fans.job`)}
            </span>
          </div>
        </div>
        <div className="flex mt-4 md:mt-6 text-slate-400 text-[14px] leading-6">
          {t(`fans.${desc}`)}
        </div>
      </div>
    </div>
  );
};

export default FanComp;

FanComp.PropTypes = {
  card: PropTypes.object.isRequired,
};
