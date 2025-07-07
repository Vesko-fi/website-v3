interface options {
  heading: string;
  text: string;
}

const DemoRequest = () => {
  const options: options[] = [
    {
      heading: "Purpose of Processing: ",
      text: "Sending demo requests and displaying product reviews on the website.",
    },
    {
      heading: "Categories of Personal Data: ",
      text: "Contact information (name, phone number, email address).",
    },
    {
      heading: "Legal Basis: ",
      text: "Legitimate interest.",
    },
  ];
  return (
    <div className='my-4'>
      <h3 className='text-sm font-bold md:text-lg xl:text-xl'>B - Demo Request</h3>
      <ul className='list-disc text-start'>
        {options.map((option, index) => {
          return (
            <div key={index} className='my-2'>
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

DemoRequest.displayName = "DemoRequest";
export { DemoRequest };
