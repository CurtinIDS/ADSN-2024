import Image from "next/image";
import AccommodationCard from "./AccommodationCard";

const Accommodation = () => {
  return (
    <div id="accommodation" className="bg-white scroll-mt-10">
      <div className="flex flex-col justify-end w-full h-[300px] md:h-[600px] bg-cover bg-center bg-[url('/ADSN-2024/pertheq.jpg')]">
        <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
          <span className="bg-white/75 mb-3 px-3 md:px-12 md:py-2 inline-block">
            ACCOMMODATION OPTIONS
          </span>
        </h1>
      </div>
      <div className="p-3 md:p-10 flex flex-col items-center w-full">
        <p className="md:text-xl text-center max-w-4xl mb-8">
          Welcome to the 3rd Australia Data Science Network Conference at Curtin University! We have selected a range of nearby hotels to ensure you have a comfortable and convenient stay during the conference. Below, you will find details about recommended hotels, including their locations, amenities, and directions on how to get there.
        </p>
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          <AccommodationCard
            name="Nesuto Curtin Perth Hotel"
            description="Perfect for those who want to stay near the University and Perth's CBD. It's within walking distance from cafes, restaurants, and a supermarket. Only 7 kilometres from the airport and offers comfortable accommodations with easy access to all conference venues."
            amenities={["Complimentary Wi-Fi", "On-site dining options", "Fitness centre"]}
            location="On-Campus, Curtin University"
            address="B420 Koorliny Way & Beazley Ave, Bentley, WA 6102, Australia"
            phone="+61 8 6255 0800"
            walkingDirections="https://maps.app.goo.gl/96WWnVoLj94rqV8J6"
            drivingDirections="https://maps.app.goo.gl/4xX4HBEcE1D7PQ8JA"
            specialOffer="Nesuto offers a discounted conference rate for conference delegates staying in the Superior Room online. To book your stay at this special rate, please click here."
            bookingConditions={[
              "The conference rate is available for bookings for stays between November 29th and December 8th, 2024.",
              "The special conference offer applies only to online bookings. Guests are required to complete their bookings online using the provided booking link or with the Discount Code ADSN24.",
              "Guests have the option to book any other special deals on the website without any further discount.",
              "A valid credit card is required at the time of booking to secure the reservation, and full payment is due upon the guest's arrival. If the booking will be paid by a third party or a corporate credit card, a written payment authority must be emailed to the hotel before the guest's arrival."
            ]}
          />
          <AccommodationCard
            name="Metro Hotel Perth, South Perth"
            description="Just a short walk from the beautiful Swan River foreshore. It's only 5.6 kilometres from Curtin University, 11 kilometres from the airport, and a few minutes from Perth's CBD. This hotel is a good choice for affordable, spacious accommodation near Curtin University and the city."
            amenities={["Complimentary Wi-Fi", "On-site dining options", "Fitness centre"]}
            location="5.1 km from Curtin University"
            address="61 Canning Highway, South Perth, WA 6151, Australia"
            phone="+61 8 9367 6122"
            drivingDirections="https://maps.app.goo.gl/tQs7MMThyg2ij1mw5"
            publicTransportDirections="https://maps.app.goo.gl/M69eQ4BrVyew4JVu5"
          />
          <AccommodationCard
            name="Broadwater Resort Como"
            description="This resort offers contemporary 1, 2, and 3-bedroom apartments, perfect for short or extended stays. Located just minutes from Perth CBD, opposite the Swan River, this property caters to leisure and business travellers. In the lively Como area, guests can enjoy nearby shopping and dining, all within walking distance."
            amenities={["Complimentary Wi-Fi", "Nearby dining options", "Street parking", "Swimming pool / Spa / Sauna", "BBQ Area"]}
            location="5.1 km from Curtin University"
            address="137 Melville Parade, Como, WA 6152, Australia"
            phone="+61 8 9474 4222"
            drivingDirections="https://maps.app.goo.gl/8hCktkMXBP3JBvLX9"
            publicTransportDirections="https://maps.app.goo.gl/9B2DuwrFLQZDLBGr7"
          />
          <AccommodationCard
            name="The Peninsula Riverside Serviced Apartments"
            description="The Peninsula offers convenient and scenic accommodation on the South Perth foreshore, just minutes from Perth's CBD. The fully equipped 1, 2, and 3-bedroom apartments provide easy access to Curtin University and local attractions. Guests can enjoy a comfortable stay near restaurants, cafes, and public transport."
            amenities={["Complimentary Wi-Fi", "Nearby dining options", "On-site free parking"]}
            location="6.6 km from Curtin University"
            address="53 South Perth Esplanade, South Perth, WA 6151, Australia"
            phone="+61 8 9368 6688"
            drivingDirections="https://maps.app.goo.gl/Hxgcr9zdDupFpcUK6"
            publicTransportDirections="https://maps.app.goo.gl/Pepw7aqJNNYbV9AcA"
          />
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
