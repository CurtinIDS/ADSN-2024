const Locations = () => {
  return (
    <div className="md:p-10 flex flex-col items-center w-full bg-white text-black scroll-mt-10">
      <h1 className="p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
        TICKET CATEGORIES
      </h1>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="ps-3">
                <div className="text-base font-semibold">General Admission</div>
              </div>
            </th>
            <td className="px-6 py-4">$400</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="ps-3">
                <div className="text-base font-semibold">Student Admission</div>
                <div className="font-normal text-gray-500">
                  Limited to 20% of total tickets
                </div>
              </div>
            </th>
            <td className="px-6 py-4">$280 (30% off)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Locations;
