import AdsnButton from "./AdsnButton";

const ComingSoon = () => {
  return (
    <div
      id="coming-soon"
      className="p-3 md:p-10 flex flex-col text-center text-white justify-center items-center w-full bg-cover bg-center bg-[url('/ADSN-2024/background_coming_soon.webp')]"
    >
      <h1 className="p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center text-white">
        2024 CONFERENCE PROGRAM NOW AVAILABLE
      </h1>
      <AdsnButton
        text="Program Schedule"
        url="/ADSN-2024/program"
      />
      <p className="p-3 m-3 md:px-10 md:p-6 md:text-xl">
        We are excited to announce that the ADSN 2024 program is now available, offering a wide array of engaging topics, expert-led discussions, and networking opportunities. This year’s program is crafted to inspire and inform, building on the success of previous conferences. Explore the sessions, speakers, and tours scheduled, and get ready for a stimulating experience at ADSN 2024!
      </p>

      <div className="flex flex-row gap-6 items-center w-full max-w-6xl justify-center">
        <div className="flex-1 p-3 md:py-6 md:px-10 flex items-center justify-center">
          <AdsnButton
            text="Registration"
            url="https://www.eventbrite.com.au/e/australian-data-science-network-conference-2024-tickets-967171274317"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
