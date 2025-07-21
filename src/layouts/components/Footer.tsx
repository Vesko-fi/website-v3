import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import i18n, { type SupportedLanguages } from "@/locales/i18n.config";
import { getLocalizedPath } from "@/routes/helpers/localization";
import { Logo } from "@/shared/components/common/Logo";
import { NavItem } from "@/shared/components/common/NavItem";
import { Container } from "@/shared/components/ui/container";
import { COMPANY_NAV_ITEMS, NAV_ITEMS } from "@/shared/constants/navItems";
import { SOCIALS } from "@/shared/constants/socials";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const privacyPolicyPath = getLocalizedPath("privacyPolicy", i18n.language as SupportedLanguages);
  const serviceTermsPath = getLocalizedPath("serviceTerms", i18n.language as SupportedLanguages);

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='bg-gradient-to-b from-[#F5FAF7] to-[#CDE6D9] text-sm text-gray-700'>
      <Container className='px-5 py-10 lg:px-20'>
        <div className='relative flex flex-col items-center justify-between pb-4 md:flex-row'>
          <div className='mb-6 flex flex-col items-center gap-6 md:mb-0'>
            <Logo className='h-20 md:h-24' />
            <div className='flex items-center gap-3'>
              {SOCIALS.map(({ id, url, icon, name }) => (
                <a
                  href={url}
                  key={id}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-accent1 transition-colors duration-200'
                >
                  <span className={`${icon} text-2xl`} title={name} />
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-center'>
              {COMPANY_NAV_ITEMS.map((item) => (
                <NavItem key={item.id} {...item} variant='desktop' />
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.id} {...item} variant='desktop' />
            ))}
          </div>
        </div>

        <hr />

        <div className='mt-6 flex items-center justify-center text-right'>
          <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center gap-3 text-xs sm:text-sm'>
              <p>{t("footer.company.businessId")}</p>
              <NavLink to={privacyPolicyPath} className='underline'>
                {t("footer.privacyPolicy")}
              </NavLink>
              <NavLink to={serviceTermsPath} className='underline'>
                {t("serviceTerms.terms_title")}
              </NavLink>
            </div>
            <p className='mt-2 text-sm'>
              &copy; {year} Vesko. {t("footer.rights")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
