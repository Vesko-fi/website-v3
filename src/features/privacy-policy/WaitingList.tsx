interface options {
  heading: string;
  text: string;
}

const WaitingList = () => {
  const options: options[] = [
    {
      heading: "Purpose of Processing: ",
      text: "Joining the waitlist and sending you important updates regarding the development and release date of Vesko applications.",
    },
    {
      heading: "Categories of Personal Data: ",
      text: "Contact information (name, phone number, email address).",
    },
    {
      heading: "Legal Basis: ",
      text: "Consent",
    },
  ];
  return (
    <div className='my-4'>
      <h2 className='ext-sm font-bold md:text-lg xl:text-xl'>A - Waitlist</h2>
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
    </div>
  );
};

WaitingList.displayName = "WaitingList";
export { WaitingList };
