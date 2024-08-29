import CommitteesProfile from "@/components/CommitteesProfile";
import { CommitteeProps } from "@/components/CommitteesProfile";

const committeesScientificProgram: CommitteeProps[] = [
  {
    name: "Prof. Melanie Johnston-Hollitt",
    role: "Director, Curtin Institute for Data Science (Chair)",
    // profile_picture_path: "melanie.png" -> place the pictures in `/public/public_pictures/` and uncomment this
  },
  {
    name: "Prof. Joanna Batstone",
    role: "Director, Monash Data Futures Institute",
  },
  {
    name: "Prof. Christopher Fluke",
    role: "Director Advanced Visualisation Laboratory, Swinburne University",
  },
  {
    name: "Prof. Lewis Mitchell",
    role: "Immediate Past Conference Chair, University of Adelaide",
  },
  {
    name: "Prof. Michael Small",
    role: "Director, UWA Data Institute",
  },
  {
    name: "Keith Russell",
    role: "Director Outreach, Australia Research Data Commons",
  },
];
const committeesOrganising: CommitteeProps[] = [
  {
    name: "Dr Uno Fang",
    role: "Chair",
  },
  {
    name: "Dr Daniel Marrable",
    role: "Deputy Chair",
  },
  {
    name: "Calvin Pang",
    role: "Program Coordination and Catering Management",
  },
  {
    name: "Dario Limongi",
    role: "Web Application Development",
  },
  {
    name: "Juanaili Hultzsch",
    role: "Logistics and Venue Coordination",
  },
  {
    name: "Leigh Tyers",
    role: "Program Coordination and Risk Management",
  },
  {
    name: "Shan Shan Ng",
    role: "Budget, Finance and Participant Management",
  },
  {
    name: "Trish Radotic",
    role: "Business Development and Sponsorship Engagement",
  },
  {
    name: "Youngwoo (Paul) Kim",
    role: "Marketing and Publicity",
  },
  {
    name: "Tim Macuga",
    role: "Community Engagement, Queensland University of Technology",
  },
];

const Committees = () => {
  return (
    <div
      id="committees"
      className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto"
    >
      <p className="font-extrabold p-3 text-2xl md:text-4xl md:p-10 text-blue-navbar">
        COMMITTEES
      </p>
      <p className="font-extrabold p-3 text-xl md:text-3xl text-blue-navbar">
        Scientific Program Committee
      </p>
      <div className="p-3 md:my-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
        {committeesScientificProgram.map((item, index) => (
          <CommitteesProfile
            key={index}
            name={item.name}
            role={item.role}
            profile_picture_path={item.profile_picture_path}
          />
        ))}
      </div>
      <h3 className="font-extrabold p-3 text-xl md:text-3xl text-blue-navbar">
        Organising Committee (CIDS)
      </h3>
      <div className="p-3 md:my-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
        {committeesOrganising.map((item, index) => (
          <CommitteesProfile
            key={index}
            name={item.name}
            role={item.role}
            profile_picture_path={item.profile_picture_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Committees;
