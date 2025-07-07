import { DemoRequest } from "./DemoRequest";
import { PersonalDataRight } from "./PersonalDataRight";
import { WaitingList } from "./WaitingList";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";

const MainContents = () => {
  return (
    <>
      <Section className='scroll-margin-top-[64px] mt-8'>
        <Container className='sbg-teal-50 flex flex-col items-center gap-16 px-8 pb-6'>
          <div className='flex flex-col text-justify'>
            <h2 className='mb-1 text-center text-2xl font-bold sm:text-balance lg:text-3xl xl:text-4xl'>
              Privacy Policy
            </h2>
          </div>
          <div className='flex flex-col gap-4 text-start'>
            <p className='text-sm xl:text-base'>Updated 07.07.2025</p>
            <h2 className='text-xl font-bold lg:text-2xl xl:text-3xl'>Introduction</h2>
            <p>
              We are committed to protecting your privacy. This Privacy Policy outlines how we
              collect, use, and store your personal data in compliance with the EU General Data
              Protection Regulation (GDPR). This policy may be updated, and the latest version can
              always be found on this page. Note that your data will not be handed over to a third
              party nor processed outside Finland and we will also notify you of any significant
              changes by email.
            </p>

            <p className='text-sm xl:text-base'>
              This privacy policy applies to personal data we collect from the waitlist and the
              &#39;demo request&#39; contact form. Vesko Ltd., business ID 3472131-6, is the
              controller responsible for your personal data.
            </p>
          </div>
          <div className='flex flex-col gap-4 text-justify'>
            <h2 className='text-start text-xl font-bold md:text-balance lg:text-2xl xl:text-3xl'>
              Purpose of Processing and Legal Basis
            </h2>
            <WaitingList />
            <DemoRequest />

            <div className='my-4 flex flex-col gap-4 text-start'>
              <h2 className='text-start text-xl font-bold lg:text-2xl xl:text-3xl'>
                Protection and Retention of Personal Data
              </h2>
              <p className='text-sm xl:text-base'>
                Only authorised Vesko Ltd. employees have the right to access customer system data.
                Each system user has personal credentials and passwords, and employees use the data
                only as necessary for their work tasks.
              </p>
              <p className='text-sm xl:text-base'>
                Personal data will be retained only as long as necessary to fulfil the purpose of
                the processing or as required by applicable laws. You may request the deletion of
                your data at any time.
              </p>
            </div>
            <div className='my-4 flex flex-col gap-2 text-start'>
              <h2 className='text-start text-xl font-bold lg:text-2xl xl:text-3xl'>
                Transfers of Data Outside the EU/EEA
              </h2>
              <p className='text-sm xl:text-base'>
                Personal data will only be processed within the EU/EEA.
              </p>
            </div>
            <PersonalDataRight />
            <div className='my-4 flex flex-col gap-4 text-start'>
              <h2 className='text-start text-xl font-bold lg:text-2xl xl:text-3xl'>
                Sharing Data with Third Parties
              </h2>
              <p className='text-sm xl:text-base'>
                We do not share personal data with third parties without your consent.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

MainContents.displayName = "MainContents";
export { MainContents };
