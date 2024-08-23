import KeyDatesRow from "./KeyDatesRow";

const KeyDates = () => {
  return (
    <div
      id="key-dates"
      className="md:p-10 flex flex-col justify-center items-center w-full bg-gray-background scroll-mt-10"
    >
      <h1 className="flex-1 items-start p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
        KEY DATES
      </h1>
      <h3 className="flex-1 text-green-button font-extrabold md:text-2xl text-center">
        Please take note of the following key dates.
      </h3>
      <div className="p-3">
        <table className="table-fixed w-full max-w-6xl text-left rtl:text-right text-gray-500">
          <thead>
            <tr className="border-b-medium border-black">
              <th
                scope="col"
                className="p-3 md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap "
              >
                <div className="md:text-xl font-semibold">Event</div>
              </th>
              <th
                scope="col"
                className="p-3 md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap "
              >
                <div className="md:text-xl font-semibold">Date</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <KeyDatesRow
              event="Abstract Submission Open"
              date="5 August 2024"
            />
            <KeyDatesRow
              event="Abstract Submission Close"
              date="13 September 2024"
            />
            <KeyDatesRow
              event="Early Bird Admission Pricing Ends"
              date="30 September 2024"
            />
            <KeyDatesRow
              event="ADSN Conference Dates"
              date="2 - 4 December 2024"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeyDates;
