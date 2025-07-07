import { useTranslation } from "react-i18next";
interface options {
  heading: string;
  text: string;
}

const PersonalDataRight = () => {
  const { t } = useTranslation();
  const options: options[] = [
    {
      heading: t("privacyPolicy.personalDataRight.options1.heading"),
      text: t("privacyPolicy.personalDataRight.options1.text"),
    },
    {
      heading: t("privacyPolicy.personalDataRight.options2.heading"),
      text: t("privacyPolicy.personalDataRight.options2.text"),
    },
    {
      heading: t("privacyPolicy.personalDataRight.options3.heading"),
      text: t("privacyPolicy.personalDataRight.options3.text"),
    },
    {
      heading: t("privacyPolicy.personalDataRight.options4.heading"),
      text: t("privacyPolicy.personalDataRight.options4.text"),
    },
  ];

  return (
    <div className='my-4'>
      <h2 className='text-sm font-bold md:text-lg xl:text-xl'>
        {t("privacyPolicy.personalDataRight.heading")}
      </h2>
      <ul className='list-disc text-start'>
        {options.map((option, index) => {
          return (
            <div key={index} className='my-4'>
              <li className='text-sm xl:text-base'>
                <b>{t(option.heading)}</b>
                {t(option.text)}
              </li>
            </div>
          );
        })}
      </ul>
      <p>{t("privacyPolicy.personalDataRight.privacyContactText")}</p>
    </div>
  );
};

PersonalDataRight.displayName = "PersonalDataRight";

export { PersonalDataRight };
