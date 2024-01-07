import { useEffect, useRef, useState } from "react";
import styles from "./nav.module.css";
import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import Dropdown from "../langDropDown/DropDown";
import useCustomTranslation from "../../hooks/translation";

const Navbar = () => {
  const { t, language } = useCustomTranslation();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : true
  );
  const [links] = useState(["features", "solutions", "reviews", "premium"]);
  const [toggle, setToggle] = useState(false);
  const headerRef = useRef();
  const stylesAll = `${styles.link}  dark:text-gray-400  dark:hover:bg-gray-100 hover:bg-slate-900 dark:md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-blue-500 dark:hover:bg-slate-800 dark:hover:text-white hover:text-white`;
  const handleOpenSidebar = () => {
    setToggle(!toggle);
  };

  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", JSON.stringify(!theme));
  };

  useEffect(() => {
    if (!theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          //headerRef.current.style.backgroundColor = "#0a0f1c";
          headerRef.current.className =
            "h-18 shadow-sm shadow-gray-400 border-gray-400 shadow-slate-800  sticky w-full top-0 z-50 transition-all duration-500 linear dark:bg-mobColor bg-white";
        }
        if (window.scrollY < 50) {
          headerRef.current.classList.remove(
            "shadow-sm",
            "shadow-slate-800",
            "border-gray-400",
            "sticky"
          );
          // headerRef.current.style.backgroundColor = "transparent";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.headerStyle} dark:bg-mobColor bg-white`}
      ref={headerRef}>
      <div className={styles.navContainer}>
        <div>
          <a
            href="#"
            className={`${styles.logo} dark:text-white text-slate-900`}>
            <span className={styles.logoText}>A</span>strolus{" "}
            {/*  <span className="fi fi-eg"></span>
            <span className="fi fi-us"></span> */}
          </a>
        </div>
        <nav className="flex items-center  gap-x-3">
          <ul className={styles.ulList}>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link}`}
                  className={`${styles.navLink} ${
                    language == "ar" && "font-semibold text-[18px]"
                  } dark:text-gray-200 dark:hover:text-white text-slate-900 hover:text-slate-900`}>
                  {t(`main.${link}`)}
                </a>
              </li>
            ))}
          </ul>

          <label className="relative lg:inline-flex items-center  cursor-pointer select-none hidden">
            <input
              type="checkbox"
              value={theme}
              className="sr-only peer select-none"
              onChange={toggleTheme}
              checked={theme}
            />
            <div className="w-11 h-6 flex items-center bg-gray-400 peer-focus:outline-none select-none    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ">
              <span className="select-none ">☀️</span>
              <span className="select-none">🌙</span>
            </div>
          </label>

          <div className="hidden lg:flex">
            <Dropdown />
          </div>

          <button
            className={`${styles.navBtn} ${
              language == "ar" ? "text-[18px] px-7" : "px-5"
            }`}>
            {t("getStarted.getStarted_btn")}
          </button>

          <div className="sm:hidden flex items-center gap-3">
            <div className="flex lg:hidden">
              <Dropdown />
            </div>
            <label className="relative lg:hidden items-center  cursor-pointer select-none flex">
              <input
                type="checkbox"
                value={theme}
                className="sr-only peer select-none"
                onChange={toggleTheme}
                checked={theme}
              />
              <div className="w-11 h-6 flex items-center bg-gray-400 peer-focus:outline-none select-none    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ">
                <span className="select-none ">☀️</span>
                <span className="select-none">🌙</span>
              </div>
            </label>

            <button
              className="relative group"
              onClick={() => handleOpenSidebar()}
              data-collapse-toggle="navbar-default"
              type="button">
              <div className="relative  flex overflow-hidden items-center justify-center rounded-full w-[45px] h-[45px] transform transition-all bg-[#263353] ring-0 ring-gray-300 hover:ring-2 group-focus:ring-2 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 ${
                      language == "en" ? "origin-left" : "origin-right"
                    } ${
                      toggle
                        ? language == "en"
                          ? "rotate-[42deg]"
                          : "-rotate-[42deg]"
                        : "rotate-[0deg]"
                    } `}></div>
                  <div
                    className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                      toggle && "-translate-x-10"
                    }`}></div>
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 
                    
                    ${language == "en" ? "origin-left" : "origin-right"}

                    ${
                      toggle
                        ? language == "en"
                          ? "-rotate-[42deg]"
                          : "rotate-[42deg]"
                        : "-rotate-[0deg]"
                    }`}></div>
                </div>
              </div>
            </button>

            <div
              className={`fixed transition-all duration-300 ease-in-out ${
                !toggle
                  ? language == "en"
                    ? "-left-full"
                    : "-right-full"
                  : language == "en"
                  ? "left-0"
                  : "right-0"
              } top-0 bottom-0 block md:hidden w-[300px] h-screen dark:bg-sideNav bg-white`}
              id="navbar-default">
              <ul className="font-medium flex flex-col md:p-0 md:flex-row md:space-x-8  md:mt-0  ">
                <li>
                  <a
                    href="#"
                    className={`${
                      language == "ar" && "font-bold"
                    } block py-4 px-3 text-white bg-indigo-600  md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-300 md:dark:text-blue-500`}
                    aria-current="page">
                    {t("side_nav.Home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${
                      language == "ar" && "font-bold"
                    } ${stylesAll}`}>
                    {t("side_nav.About")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${
                      language == "ar" && "font-bold"
                    } ${stylesAll}`}>
                    {t("side_nav.Services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${
                      language == "ar" && "font-bold"
                    } ${stylesAll}`}>
                    {t("side_nav.Pricing")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${
                      language == "ar" && "font-bold"
                    } ${stylesAll}`}>
                    {t("side_nav.Contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
