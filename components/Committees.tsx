import Link from "next/link";

const Committees = () => {
  return (
    <div
      id="committees"
      className="md:p-10 relative flex flex-col items-center w-full bg-white text-black"
    >
      <h1 className="p-3 md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
        Committees
      </h1>

      <div className="flex flex-row gap-6 items-center w-full max-w-6xl">
        <div className="flex-1 p-3 md:py-6 md:px-10 flex flex-col">
          <p className="md:text-xl pb-4 ">Scientific Program Committee</p>
          <ul className="marker:text-green-button list-disc list-inside">
            <li>
              Prof. Melanie Johnston-Hollitt, Director, Curtin Institute for
              Data Science (Chair)
            </li>
            <li>
              Prof. Joanna Batstone, Director, Monash Data Futures Institute
            </li>
            <li>
              Prof. Christopher Fluke, Director Advanced Visualisation
              Laboratory, Swinburne University
            </li>
            <li>
              Prof. Lewis Mitchell, University of Adelaide (immediate past
              conference chair)
            </li>
            <li>Prof. Michael Small, Director, UWA Data Institute</li>
            <li>
              Keith Russell, Director Outreach, Australia Research Data Commons
            </li>
          </ul>
        </div>
        <div className="flex-1 p-3 md:py-6 md:px-10 flex flex-col">
          <p className="md:text-xl md:pb-4">
            Organizing Committee (
            <Link
              href="https://datascience.curtin.edu.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CIDS
            </Link>
            )
          </p>
          <ul className="marker:text-green-button list-disc list-inside select-end">
            <li>Dr Uno Fang (Chair)</li>
            <li>Dr Daniel Marrable (Deputy Chair)</li>
            <li>Calvin Pang (Program Coordination and Catering Management)</li>
            <li>Dario Limongi (Web Application Development)</li>
            <li>Juanaili Hultzsch (Logistics and Venue Coordination)</li>
            <li>Leigh Tyers (Program Coordination and Risk Management)</li>
            <li>Shan Shan Ng (Budget, Finance and Participant Management)</li>
            <li>
              Trish Radotic (Business Development and Sponsorship Engagement)
            </li>
            <li>Youngwoo (Paul) Kim (Marketing and Publicity)</li>
            <li>
              Tim Macuga, Queensland University of Technology (Community
              Engagement)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Committees;
