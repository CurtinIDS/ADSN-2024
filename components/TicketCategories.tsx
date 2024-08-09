const TicketCategories = () => {
  return (
    <div className="md:p-10 flex flex-col items-center w-full bg-white text-black scroll-mt-10">
      <h1 className="p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
        TICKET CATEGORIES
      </h1>
      <div className="p-3 md:p-6 text-center">
        <ul>
          <li>General Admission: $400</li>
          <li>
            Student Admission: $280 (30% off) - Limited to 20% of total tickets
          </li>
          <li>
            Early Bird Admission: $320 (20% off) - Available until 30th
            September 2024, limited to 30% of total tickets
          </li>
          <li>Sponsor Admission: Complimentary - Available to our sponsors</li>
          <li>VIP/Guest Admission: Complimentary - By invitation only</li>
          <li>
            Industry-day Admission: $200 - Limited to 50 tickets for only the
            third day, industry-focussed day + Day 1 sundowner.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TicketCategories;
