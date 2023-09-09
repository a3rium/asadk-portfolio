import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import PageHeading from "@/components/PageHeading/PageHeading";

const Contact = () => {
	return (
		<>
			<Header />
			<ContentContainer>
				<PageHeading title="contact-me" />
				<SectionHeading title="say-hi!" />
				<div className="pt-5">
					<ContactForm />
				</div>
				{/* <div className="text-white font-medium text-2xl md:text-3xl mt-10">
            <span className="text-secondary">#</span>socials
          </div> */}
			</ContentContainer>
			<Footer />
		</>
	);
};

export default Contact;
