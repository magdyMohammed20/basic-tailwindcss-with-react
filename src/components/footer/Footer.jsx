import { links, social } from "./data";
import useCustomTranslation from "../../hooks/translation";

const Footer = () => {
  const { t, language } = useCustomTranslation();

  const mapLinks = links.map((link) => (
    <li
      key={link.id}
      className={`${
        language == "ar" && "text-[18px]"
      } dark:text-slate-400 mt-6 hover:text-indigo-500 transition-all duration-100 ease-linear`}>
      <a href="#"> {t(`links.internal_links.${link.name}`)}</a>
    </li>
  ));

  const socials = social.map((link) => (
    <li
      key={link.id}
      className="dark:text-slate-400 mt-6 hover:text-indigo-500 transition-all duration-0 ease-linear flex items-center gap-2">
      {link.icon}
      <a href="#">{link.name}</a>
    </li>
  ));
  return (
    <div className="main-container py-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ps-12">
        <div>
          <ul className="list-disc">{mapLinks}</ul>
        </div>

        <div className="mt-8 md:mt-0">
          <ul className="list-disc">{socials}</ul>
        </div>

        <div className="mt-12 md:mt-6">
          <div className="dark:text-slate-500">
            <p className={`${language == "ar" && "text-[18px]"}`}>
              {t("links.other_links.title")}
            </p>
            <p className="my-6">Tailus Blocks ©</p>
          </div>

          <div className="dark:text-white flex items-center gap-9">
            <a href="">{t("links.other_links.tos")}</a>
            <a href="">{t("links.other_links.privacy")}</a>
          </div>

          <div className="flex items-center gap-3  mt-6">
            <span className="dark:text-gray-400">
              {t("links.other_links.need_help")}
            </span>
            <a href="" className="dark:text-white">
              {t("links.internal_links.Contact_us")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
