import React from "react";
import PageSection from "./PageSection";

import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Prodcuts = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "Solution Challange Hackathon",
      subtitle:
        "Build a solution to a local problem using Google technologies, in accordance with one or more of the United Nations 17 Sustainable Development Goals.",
    },
    {
      id: 2,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "Coding Fortnight 6.0",
      subtitle:
        "The competition will bring the complete coding community close and help them to increase their productivity. Also, for motivating your efforts ",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "Technical Exhibition",
      subtitle:
        "2023 edition of International Technical Exhibition on Image Technology and Equipment will be held at Rabindra Bhavan on 16th December.",
    },
    {
      id: 4,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "payload Gaming Corners",
      subtitle:
        "Players can participate for professional competitions for a range of games such as GTA V, COD, Apex Legends & other games.",
    },
  ];

  return (
    <PageSection
      name="Activities"
      title="Activities"
      subtitle={`We will host many activities in ENVISION like Solution Challange Hackathon, Coding Fortnight Quater Finals, Tech Exhibitions, Payload Gaming Corners, and many more...`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Prodcuts;
