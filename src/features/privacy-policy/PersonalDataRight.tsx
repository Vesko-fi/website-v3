interface options {
  heading: string;
  text: string;
}

const PersonalDataRight = () => {
  const options: options[] = [
    {
      heading: "Right to Deletion: ",
      text: "You have the right to request the deletion of your personal data. We will delete your data if there is no legal basis for retaining it, such as a legal obligation. We will also delete the data if the processing was based on consent and you withdraw your consent, or if you object to the processing and there are no other legal grounds for processing.",
    },
    {
      heading: "Right to Object to Processing: ",
      text: "You have the right to object to the processing of your personal data, for example, if the processing is based on legitimate interest.",
    },
    {
      heading: "Right to Access Your Data: ",
      text: "You have the right to request a copy of the personal data we have collected about you. If you make such a request, we may ask for additional information to verify your identity before releasing the data.",
    },
    {
      heading: "Right to Rectification: ",
      text: "If you find that the information we have about you is inaccurate or incomplete, you have the right to request the correction of the data.",
    },
  ];
  return (
    <div className='my-4 flex flex-col gap-2 text-justify'>
      <h2 className='text-start text-xl font-bold lg:text-2xl xl:text-3xl'>
        Your Rights Regarding Personal Data
      </h2>
      <ul className='list-disc text-start'>
        {options.map((option, index) => {
          return (
            <div key={index} className='my-4'>
              <li className='text-sm xl:text-base'>
                <b>{option.heading}</b>
                {option.text}
              </li>
            </div>
          );
        })}
      </ul>
      <p>To exercise your rights, please contact us via email: vesko.finland@gmail.com</p>
    </div>
  );
};

PersonalDataRight.displayName = "PersonalDataRight";
export { PersonalDataRight };
