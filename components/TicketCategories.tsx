import TicketCategoriesRow from "./TicketCategoriesRow";

const TicketCategories = () => {
  return (
    <div
      id="ticket-categories"
      className="md:p-10 flex flex-col items-center w-full bg-white text-black scroll-mt-10"
    >
      <h1 className="px-3 pt-3 md:px-6 md:pt-6 font-extrabold md:tracking-wide md:text-4xl text-center">
        TICKET CATEGORIES
      </h1>
      <h2 className="pb-3 md:pb-6 px-3 md:px-6 text-center">
        (10% GST inclusive, Eventbrite processing fee exclusive)
      </h2>

      <table className="w-full max-w-6xl mx-3 text-sm text-left rtl:text-right shadow-md text-gray-500 dark:text-gray-400">
        <tbody>
          <TicketCategoriesRow
            borderTop={true}
            category="General Admission"
            description=""
            price="$400"
          />
          <TicketCategoriesRow
            category="Student Admission"
            description="Limited to 20% of total tickets"
            price="$280 (30% off)"
          />
          <TicketCategoriesRow
            category="Early Bird Admission"
            description="Available until 30th September 2024, limited to 30% of total tickets"
            price="$320 (20% off)"
          />
          <TicketCategoriesRow
            category="Sponsor Admission"
            description="Available to our sponsors"
            price="Complimentary"
          />
          <TicketCategoriesRow
            category="VIP/Guest Admission"
            description="By invitation only"
            price="Complimentary"
          />
          <TicketCategoriesRow
            category="Industry-day Admission"
            description="Limited to 50 tickets for only the third day, industry-focussed day + Day 1 sundowner"
            price="$200"
          />
        </tbody>
      </table>
    </div>
  );
};

export default TicketCategories;
