import { useState, useRef, useEffect } from "react";
import useCustomTranslation from "../../hooks/translation";

const Dropdown = () => {
  const { i18n } = useCustomTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    i18n.changeLanguage(language);

    document.body.dir = language == "en" ? "ltr" : "rtl";
    document.body.style.textAlign = language == "en" ? "left" : "right";
    //localStorage.setItem("lang", language);
    // You can perform additional actions based on the selected language if needed
  };

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")) {
      //alert(1);
      handleLanguageClick(localStorage.getItem("i18nextLng"));
    } else {
      //handleLanguageClick("en");
    }
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className=" gap-1  dark:text-white text-slate-950  focus:outline-none  font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center  "
        type="button">
        <span>
          {selectedLanguage == "ar" ? (
            <span className="fi fi-eg "></span>
          ) : (
            <span className="fi fi-us"></span>
          )}{" "}
        </span>
        {/* {selectedLanguage}{" "} */}
        {/*         <svg
          className={`w-2.5 h-2.5 ms-3 ${isOpen ? "transform rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg> */}
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-[999] bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-950 shadow-lg absolute top-full mt-1">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton">
            <li>
              <a
                onClick={() => handleLanguageClick("en")}
                className="cursor-pointer select-none px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white flex items-center gap-2">
                <span className="fi fi-us"></span>
                English
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLanguageClick("ar")}
                className="cursor-pointer select-none px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white flex items-center gap-2">
                <span className="fi fi-eg"></span>
                العربية
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
