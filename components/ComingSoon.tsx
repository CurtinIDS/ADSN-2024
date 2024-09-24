import AdsnButton from "./AdsnButton";

const ComingSoon = () => {
  return (
    <div
      id="coming-soon"
      className="p-3 md:p-10 flex flex-col text-center text-white justify-center items-center w-full bg-cover bg-center bg-[url('/ADSN-2024/background_coming_soon.webp')]"
    >
      <h1 className="p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center text-white">
        2024 CONFERENCE PROGRAM COMING SOON
      </h1>
      <p className="p-3 m-3 md:p-6 md:text-xl font-bold">
        Stay tuned - 2024 conference program coming soon.
      </p>
      <p className="p-3 m-3 md:px-10 md:p-6 md:text-xl">
        This year, we are pleased to offer a comprehensive program designed to
        be just as stimulating and informative as the 2023 conference. Please
        stay tuned for updates and announcements. For now, you can review the
        2023 conference wrap-up below for a preview of the upcoming topics and
        discussions awaiting you this year.
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
