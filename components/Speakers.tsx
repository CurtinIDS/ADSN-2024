import SpeakersProfile from "@/components/SpeakersProfile";
import { SpeakersProps } from "@/components/SpeakersProfile";

const speakersKeynote: SpeakersProps[] = [
    {
        name: "Prof. Ben Mullins",
        role: "Professor and Head - Occupation, Environment and Safety\nCurtin University",
        profile_picture_path: "speakers/Ben_Mullins.png",
        // profile_picture_path: "melanie.png" -> place the pictures in `/public/public_pictures/` and uncomment this
        biography: "Professor Ben Mullins is a prominent figure in the School of Public Health at Curtin University, where he specializes in the intersection of pollutants with environmental and biological systems, such as air filters and human lungs. His research focuses on developing and characterizing pollution control technologies and studying the micro-scale interactions of pollutants with surfaces. Professor Mullins has led significant research initiatives, acting as chief investigator on 17 projects that have collectively secured around $10 million in funding, and has published over 130 peer-reviewed articles."
    },
];
const speakersPanel: SpeakersProps[] = [
    {
        name: "Dr Uno Fang",
        role: "Data Scientist - Curtin Institute for Data Science\n Curtin University",
        profile_picture_path: "OC/Uno_Fang.jpg",
    },
];

const Speakers = () => {
    return (
        <div
            id="speakers"
            className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto"
        >
            <p className="font-extrabold p-3 text-2xl md:text-4xl md:p-10 text-blue-navbar">
                Speakers
            </p>
            <p className="font-extrabold p-3 text-xl md:text-3xl text-blue-navbar">
                Keynote Speakers
            </p>
            {/* Keynote Speakers */}
            <div className="p-3 md:my-10 flex flex-col space-y-6 md:space-y-10 w-full">
                {speakersKeynote.map((item, index) => (
                    <SpeakersProfile
                        key={index}
                        name={item.name}
                        role={item.role}
                        profile_picture_path={item.profile_picture_path}
                        biography={item.biography}
                    />
                ))}
            </div>
            <h3 className="font-extrabold p-3 text-xl md:text-3xl text-blue-navbar">
                Panellists
            </h3>
            {/* Panelists */}
            <div className="p-3 md:my-10 flex flex-col space-y-6 md:space-y-10 w-full">
                {speakersPanel.map((item, index) => (
                    <SpeakersProfile
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

export default Speakers;