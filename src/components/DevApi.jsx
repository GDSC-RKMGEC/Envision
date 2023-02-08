import React from "react";

import codeImage from "../assets/venue.jpeg";
import PageSection from "./PageSection";
import {FiExternalLink} from "react-icons/fi";

const DevApi = () => {
  return (
    <PageSection
      name="Venue"
      title="Venue: Rabindra Bhavan"
      subtitle={`The Rabindra Bhavan is situated at
      the heart of Purulia town, beside the
      Saheb Bandh lake. Also it is the
      largest auditorium in Purulia. This is
      fully governmental property,
      managed by Purulia Municipality.
      `}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}

        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            We are expecting 1000+ Students to be present in the event.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            This is a Government Owned Property, managed by Purulia Municipality.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Event date: 15th March - 17th March.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Every safety majors will be followed by the Municipality.
          </p>
          <br />
          <button className="bg-blue-500 flex animate-bounce  hover:scale-105 duration-200 rounded text-center justify-center items-center">
            <span className="flex gap-2">

            <FiExternalLink className="mt-1"/>
            <a target={"_blank"} rel="noreferrer" href="https://maps.google.com/?cid=12380600778432613448&entry=gps">Open Map</a>
            </span>
            </button>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
