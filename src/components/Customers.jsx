import React from "react";
import PageSection from "./PageSection";



const Customers = () => {
  const facts = [
    {
      id: 1,
      title: "500+",
      subtitle: "General Members along with our Core Leads both in and outside of RKMGEC",
    },
    {
      id: 2,
      title: "1000+",
      subtitle: "Community Members along with both in and outside of RKMGEC",
    },
    {
      id: 3,
      title: "Collaborated with 22+",
      subtitle: "GDSC Student Chapters across India",
    },
    {
      id: 4,
      title: "957+",
      subtitle: "Participants in Coding Fortnight Competition organized by us in October,2022",
    },
  ];

 

  return (
    <PageSection
      name="GDSC RKMGEC"
      title="GDSC RKMGEC"
      subtitle={`Google Developer Student Clubs of Ramkrishna Mahato Government Engineering College has:`}
    >
      <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg"
            >
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>

            <div className="flex text-center justify-center items-center mt-40 animate-bounce">
              <h1 className="text-4xl">We are looking for <span className="text-orange-500 font-bold">Sponsorship</span> & <span className="text-cyan-300 font-bold">Speakers</span></h1>
            </div>
      </>
    </PageSection>
  );
};

export default Customers;
