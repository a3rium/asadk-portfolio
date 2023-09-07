import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="md:px-14 mx-8 flex flex-col">
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
      </div>
      <Footer />
    </>
  );
};

export default Contact;
