const TicketCategories = () => {
  return (
    <div className="md:p-10 flex flex-col items-center w-full bg-white text-black scroll-mt-10">
      <h1 className="p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
        TICKET CATEGORIES
      </h1>

      <table className="w-full max-w-6xl mx-3 text-sm text-left rtl:text-right shadow-md text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b border-t dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex items-center p-3 md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
            >
              <div className="md:ps-3">
                <div className="text-base font-semibold">General Admission</div>
              </div>
            </th>
            <td className="p-3 md:px-6 md:py-4 text-gray-900">$400</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="p-3 flex items-center md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
            >
              <div className="md:ps-3">
                <div className="text-base font-semibold">Student Admission</div>
                <div className="font-normal text-gray-500">
                  Limited to 20% of total tickets
                </div>
              </div>
            </th>
            <td className="p-3 md:px-6 md:py-4 text-gray-900">
              $280 (30% off)
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="p-3 flex items-center md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
            >
              <div className="md:ps-3">
                <div className="text-base font-semibold">
                  Early Bird Admission
                </div>
                <div className="font-normal text-gray-500">
                  Available until 30th September 2024, limited to 30% of total
                  tickets
                </div>
              </div>
            </th>
            <td className="p-3 md:px-6 md:py-4 text-gray-900">
              $320 (20% off)
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="p-3 flex items-center md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
            >
              <div className="md:ps-3">
                <div className="text-base font-semibold">Sponsor Admission</div>
                <div className="font-normal text-gray-500">
                  Available to our sponsors
                </div>
              </div>
            </th>
            <td className="p-3 md:px-6 md:py-4 text-gray-900">Complimentary</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="p-3 flex items-center md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
            >
              <div className="md:ps-3">
                <div className="text-base font-semibold">
                  VIP/Guest Admission
                </div>
                <div className="font-normal text-gray-500">
                  By invitation only
                </div>
              </div>
            </th>
            <td className="p-3 md:px-6 md:py-4 text-gray-900">Complimentary</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="p-3 flex items-center md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
            >
              <div className="md:ps-3">
                <div className="text-base font-semibold">
                  Industry-day Admission
                </div>
                <div className="font-normal text-gray-500">
                  Limited to 50 tickets for only the third day,
                  industry-focussed day + Day 1 sundowner
                </div>
              </div>
            </th>
            <td className="p-3 md:px-6 md:py-4 text-gray-900">$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicketCategories;
