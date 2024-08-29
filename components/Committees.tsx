import CommitteesProfile from "@/components/CommitteesProfile";
import { CommitteeProps } from "@/components/CommitteesProfile";

const committeesScientificProgram: CommitteeProps[] = [
  {
    name: "Prof. Melanie Johnston-Hollitt",
    role: "Director, Curtin Institute for Data Science (Chair)",
    profile_picture_path: "SPC/Melanie_Johnston-Hollitt.jpg",
    // profile_picture_path: "melanie.png" -> place the pictures in `/public/public_pictures/` and uncomment this
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/professor-melanie-johnston-hollitt/",
  },
  {
    name: "Prof. Joanna Batstone",
    role: "Director, Monash Data Futures Institute",
    profile_picture_path: "SPC/Joanne_Batstone.jpg",
    biography_url: "https://research.monash.edu/en/persons/joanna-batstone",
  },
  {
    name: "Prof. Christopher Fluke",
    role: "Director Advanced Visualisation Laboratory, Swinburne University",
    profile_picture_path: "SPC/Chris_Fluke.jpg",
    biography_url: "https://astronomy.swin.edu.au/~cfluke/research/cv.html",
  },
  {
    name: "Prof. Lewis Mitchell",
    role: "Immediate Past Conference Chair, University of Adelaide",
    profile_picture_path: "SPC/Lewis_Mitchell.jpg",
    biography_url: "https://researchers.adelaide.edu.au/profile/lewis.mitchell",
  },
  {
    name: "Prof. Michael Small",
    role: "Director, UWA Data Institute",
    profile_picture_path: "SPC/Michael_Small.jpg",
    biography_url: "https://research-repository.uwa.edu.au/en/persons/michael-small",
  },
  {
    name: "Keith Russell",
    role: "Director Outreach, Australia Research Data Commons",
    profile_picture_path: "SPC/Keith_Russell.jpg",
    biography_url: "https://ardc.edu.au/about-us/our-people/",
  },
];
const committeesOrganising: CommitteeProps[] = [
  {
    name: "Dr Uno Fang",
    role: "Chair",
    profile_picture_path: "OC/Uno_Fang.jpg",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/uno-fang/",
  },
  {
    name: "Dr Daniel Marrable",
    role: "Deputy Chair",
    profile_picture_path: "OC/Dan_Marrable.jpg",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/dr-daniel-marrable/",
  },
  {
    name: "Calvin Pang",
    role: "Program Coordination",
    profile_picture_path: "OC/Calvin_Pang.jpg",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/calvin-pang/",
  },
  {
    name: "Dario Limongi",
    role: "Web Application Development",
    profile_picture_path: "OC/Dario_Limongi.jpg",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/dario-limongi/",
  },
  {
    name: "Juanaili Hultzsch",
    role: "Logistics and Venue Coordination",
    profile_picture_path: "OC/Juanaili_Hultzsch.jpg",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/juanaili-hultzsch/",
  },
  {
    name: "Leigh Tyers",
    role: "Program Coordination",
    profile_picture_path: "OC/Leigh_Tyers.png",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/leigh-tyers/",
  },
  {
    name: "Shan Shan Ng",
    role: "Budget, Finance and Participant Management",
    profile_picture_path: "OC/Shan_Ng.png",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/shan-shan-ng/",
  },
  {
    name: "Trish Radotic",
    role: "Business Development and Sponsorship Engagement",
    profile_picture_path: "OC/Trish_Radotic.png",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/trish-radotic/",
  },
  {
    name: "Youngwoo (Paul) Kim",
    role: "Marketing and Publicity",
    profile_picture_path: "OC/Paul_Kim.png",
    biography_url: "https://datascience.curtin.edu.au/about-us/our-people/youngwoo-kim/",
  },
  {
    name: "Tim Macuga",
    role: "Community Engagement, Queensland University of Technology",
    profile_picture_path: "OC/Tim_Macuga.jpg",
    biography_url: "https://research.qut.edu.au/qutcds/staff/tim-macuga/",
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
            biography_url={item.biography_url}
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
            biography_url={item.biography_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Committees;
