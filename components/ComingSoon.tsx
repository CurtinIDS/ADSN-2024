import AdsnButton from "./AdsnButton";

const ComingSoon = () => {
  return (
    <div
      id="coming-soon"
      className="p-3 md:p-10 flex flex-col text-center text-white justify-center items-center w-full bg-cover bg-center bg-[url('/ADSN-2024/background_coming_soon.webp')]"
    >
      <h1 className="p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center text-white">
        ADSN 2024 CONFERENCE PROGRAM CONCLUDED
      </h1>
      <AdsnButton
        text="Program Schedule"
        url="/ADSN-2024/program"
      />
      <p className="p-3 m-3 md:px-10 md:p-6 md:text-xl">
        ADSN 2024 has successfully concluded, leaving us with a wealth of insights and connections. We hope the engaging topics, expert-led discussions, and networking opportunities provided valuable learning and inspiration. We sincerely thank all participants, speakers, and sponsors for making this event a success. Stay tuned for updates on future ADSN conferences and initiatives!
      </p>


      <div className="flex flex-row gap-6 items-center w-full max-w-6xl justify-center">
        <div className="flex-1 p-3 md:py-6 md:px-10 flex items-center justify-center">
          <AdsnButton
            text="Check ADSN 2024 Photos"
            url="https://drive.google.com/drive/folders/1hksy4Uy0LAQseDEXzuguwyqn9wJDw-gj"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
