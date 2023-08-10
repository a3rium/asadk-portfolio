import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="px-10 max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="flex flex-col mx-8">
          <div className="text-white font-medium text-4xl">
            <span className="text-secondary">/</span>contact-me
          </div>
          <div className="text-white font-medium text-3xl mt-10">
            <span className="text-secondary">#</span>Socials
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
