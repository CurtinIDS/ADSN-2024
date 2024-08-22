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
        (*Eventbrite processing fee and 10% GST exclusive)
      </h2>

      <table className="w-full max-w-6xl mx-3 text-left rtl:text-right shadow-md text-gray-500 dark:text-gray-400">
        <tbody>
          <TicketCategoriesRow
            borderTop={true}
            category="General Admission"
            description=""
            price="$400 + fees*"
          />
          <TicketCategoriesRow
            category="Student Admission"
            description="Please note, Student Admission is exclusively available to current students enrolled at a recognised educational institution."
            description_2="We reserve the right to cancel any registrations if the registrant cannot provide valid proof of enrolment."
            price="$260 + fees*"
          />
          <TicketCategoriesRow
            category="Early Bird Admission"
            description="Available until 30th September 2024."
            price="$365 + fees*"
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
            description="Industry-focused day (Day 3) + Sundowner Day 1"
            price="$185 + fees*"
          />
        </tbody>
      </table>
    </div>
  );
};

export default TicketCategories;
