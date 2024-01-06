// useCustomTranslation.js
import { useTranslation } from "react-i18next";

const useCustomTranslation = () => {
  const { t, i18n } = useTranslation();
  return { t, language: i18n.language, i18n };
};

export default useCustomTranslation;
