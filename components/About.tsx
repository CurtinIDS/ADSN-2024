const About = () => {
  return (
    <div
      id="about"
      className="flex flex-row md:gap-6 md:px-4 md:py-8 items-center bg-white"
    >
      <div className="flex-1 p-3 md:py-6 md:px-10 flex items-center">
        <p className="font-extrabold md:text-4xl md:p-10">
          Australian Data Science Network Conference is coming to Perth, WA from
          2 to 4 December 2024.
        </p>
      </div>
      <div className="flex-1 p-3 md:py-6 md:px-10 flex items-center">
        <p className="md:text-xl md:p-10">
          The 3rd Australian Data Science Network Conference is set to take
          place in Perth, Western Australia. The Curtin Institute for Data
          Science is hosting the conference at Curtin University&apos;s Bentley
          Campus. The ADSN conference aims to connect Australia`&apos;s top
          experts in data science, fostering collaboration, expanding
          opportunities, and showcasing our collective capabilities. The network
          is driven by its partner organisations, ensuring a strategic approach
          to enhancing outcomes and opportunities for all members.
        </p>
      </div>
    </div>
  );
};

export default About;
