import { useTranslation } from "react-i18next";

interface options {
  heading: string;
  text: string;
}

const WaitingList = () => {
  const { t } = useTranslation();

  const options: options[] = [
    {
      heading: t("privacyPolicy.purpose.waitlist.heading1"),
      text: t("privacyPolicy.purpose.waitlist.text1"),
    },
    {
      heading: t("privacyPolicy.purpose.waitlist.heading2"),
      text: t("privacyPolicy.purpose.waitlist.text2"),
    },
    {
      heading: t("privacyPolicy.purpose.waitlist.heading3"),
      text: t("privacyPolicy.purpose.waitlist.text3"),
    },
  ];
  return (
    <div className='my-4'>
      <h3 className='text-sm font-bold md:text-lg xl:text-xl'>
        A - {t("privacyPolicy.purpose.waitlist.heading")}
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

WaitingList.displayName = "WaitingList";

export { WaitingList };
