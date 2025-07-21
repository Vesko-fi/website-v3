import { ContactFormSection } from "@/features/contact/ContactFormSection";
import { HeroSection } from "@/features/contact/HeroSection";

const ContactPage = () => {
  return (
    <div className='relative -top-18 overflow-x-hidden'>
      <HeroSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactPage;
