import { useTranslation } from "react-i18next";

interface options {
  heading: string;
  text: string;
}

const DemoRequest = () => {
  const { t } = useTranslation();
  const options: options[] = [
    {
      heading: t("privacyPolicy.purpose.demoRequest.options1.heading"),
      text: t("privacyPolicy.purpose.demoRequest.options1.text"),
    },
    {
      heading: t("privacyPolicy.purpose.demoRequest.options2.heading"),
      text: t("privacyPolicy.purpose.demoRequest.options2.text"),
    },
    {
      heading: t("privacyPolicy.purpose.demoRequest.options3.heading"),
      text: t("privacyPolicy.purpose.demoRequest.options3.text"),
    },
  ];

  return (
    <div className='my-4'>
      <h3 className='text-sm font-bold md:text-lg xl:text-xl'>
        B - {t("privacyPolicy.purpose.demoRequest.heading")}
      </h3>
      <ul className='list-disc text-start'>
        {options.map((option, index) => {
          return (
            <div key={index} className='my-2'>
              <li className='text-sm xl:text-base'>
                <b>{t(option.heading)}</b>
                {t(option.text)}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

DemoRequest.displayName = "DemoRequest";

export { DemoRequest };
