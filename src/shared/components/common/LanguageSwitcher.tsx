import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import type { SupportedLanguages } from "@/locales/i18n.config";
import { ROUTE_PATHS } from "@/routes/constants/route-paths";
import { getLocalizedPath } from "@/routes/helpers/localization";
import { RemixIcons } from "@/shared/constants/icons";

const languageNames: Record<SupportedLanguages, string> = {
  en: "English",
  fi: "Suomi",
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  const currentPath = location.pathname;
  const [, ...rest] = currentPath.split("/");
  const currentSlug = rest.join("/");

  useEffect(() => {
    if (i18n.language !== "fi") {
      void i18n.changeLanguage("fi");
    }
  }, [i18n]);

  const handleChangeLanguage = (targetLang: SupportedLanguages) => {
    const routeKey = Object.keys(ROUTE_PATHS).find((key) => {
      return (
        ROUTE_PATHS[key as keyof typeof ROUTE_PATHS]?.[i18n.language as SupportedLanguages] ===
        currentSlug
      );
    });

    let newPath = `/${targetLang}`;
    if (routeKey) {
      newPath = getLocalizedPath(routeKey as keyof typeof ROUTE_PATHS, targetLang);
    }

    void i18n.changeLanguage(targetLang);
    void navigate(newPath);
    setHasSelected(true);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block rounded-full'>
      {/* Toggle button */}
      <button
        onClick={handleOpen}
        className='group relative flex items-center gap-2 rounded-3xl border border-gray-200 bg-transparent px-3 py-2 shadow-sm transition-all hover:border-gray-300 hover:shadow-md focus:ring-2 focus:ring-slate-700 focus:ring-offset-1 focus:outline-none'
        style={{ minWidth: hasSelected ? "auto" : "44px" }}
      >
        <i className={`${RemixIcons.online} h-5 w-5 text-green-900`} />
        <span
          className={`text-sm font-medium text-gray-700 transition-opacity group-hover:text-gray-900 ${
            hasSelected ? "opacity-100" : "w-0 overflow-hidden opacity-0"
          }`}
        >
          {languageNames[i18n.language as SupportedLanguages]}
        </span>
        <i
          className={`${RemixIcons.arrowDown} h-5 w-5 text-gray-700 ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className='animate-in fade-in-0 zoom-in-95 absolute top-full right-0 z-50 mt-2 rounded-xl border border-gray-200 bg-white py-2 shadow-lg'>
          {(Object.keys(languageNames) as SupportedLanguages[]).map((lng) => (
            <button
              key={lng}
              onClick={() => handleChangeLanguage(lng)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-sm whitespace-nowrap transition-colors hover:bg-gray-50 ${
                i18n.language === lng
                  ? "bg-green-50 font-medium text-green-700"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {languageNames[lng]}
              {i18n.language === lng && (
                <div className='ml-auto h-2 w-2 rounded-full bg-green-600'></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay */}
      {isOpen && <div className='fixed inset-0 z-40' onClick={() => setIsOpen(false)} />}
    </div>
  );
};
