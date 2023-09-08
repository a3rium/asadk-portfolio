import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContentContainer from "@/components/ContentContainer/ContentContainer";

const Contact = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <div className="flex flex-col">
          <div className="text-white font-medium text-3xl md:text-4xl">
            <span className="text-secondary">/</span>contact-me
          </div>
          <div className="text-white font-medium text-2xl md:text-3xl mt-10">
            <span className="text-secondary">#</span>say-hi!
          </div>
          <div className="pt-5">
            <ContactForm />
          </div>
          {/* <div className="text-white font-medium text-2xl md:text-3xl mt-10">
            <span className="text-secondary">#</span>socials
          </div> */}
        </div>
      </ContentContainer>
      <Footer />
    </>
  );
};

export default Contact;
