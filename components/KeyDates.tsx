const KeyDates = () => {
  return (
    <div
      id="key-dates"
      className="md:p-10 flex flex-col justify-center items-center w-full bg-gray-background scroll-mt-10"
    >
      <h1 className="flex-1 items-start p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl">
        Key Dates
      </h1>

      <div className="flex flex-row gap-6 items-center w-full max-w-6xl text-center justify-center">
        <div className="p-3 md:py-6 md:px-10 flex-1 flex flex-col">
          <p className="md:text-xl md:px-10 md:py-5">
            Abstract Submission Open
          </p>
          <p className="md:tracking-wide md:text-4xl md:px-10 md:py-5 font-extrabold">
            5th August, 2024
          </p>
        </div>
        <div className="p-3 md:py-6 md:px-10 flex-1 flex flex-col">
          <p className="md:text-xl md:px-10 md:py-5">
            Abstract Submission Close
          </p>
          <p className="md:tracking-wide md:text-4xl md:px-10 md:py-5 font-extrabold">
            13th September, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyDates;
