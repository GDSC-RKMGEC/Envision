import React from "react";
import PageSection from "./PageSection";

import contactImage from "../assets/contact-us.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact Us"
      subtitle={`If you are a brand or want to give a speech, please do reach out to use by filling this form below:

  `}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* left */}

        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contactImage}
            alt="contact us"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
          />
          <div className="flex flex-col justify-center items-center">

          <p className=" py-12 max-w-md">
            <h1 className="text-4xl text-center">Reach out to:</h1>
            <br />
            Name: Dipayan Sarkar,
            <br />
            Co-Lead, GDSC RKMGEC,
            <br />
            Email: dipayan@gdsc.in
          </p>
          </div>

          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/company/gdsc-rkmgec/">

              <FaLinkedin  size={25} />
              </a>
            </div>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <a target={"_blank"} rel="noreferrer" href="https://twitter.com/gdsc_rkmgec">

              <FaTwitter size={25} />
              </a>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
