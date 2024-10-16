import SpeakersProfile from "@/components/SpeakersProfile";
import { SpeakersProps } from "@/components/SpeakersProfile";

import PanellistProfile from "@/components/PanellistProfile";
import { PanellistProps } from "@/components/PanellistProfile";

const speakersKeynote: SpeakersProps[] = [
    {
        name: "Prof. Mingming Cheng",
        role: "Professor in Digital Marketing and Director of the Social Media Research Lab\nCurtin University",
        profile_picture_path: "speakers/Mingming_Cheng.jpg",
        // profile_picture_path: "melanie.png" -> place the pictures in `/public/public_pictures/` and uncomment this
        biography: "Professor Mingming Cheng is a multiple-award-winning researcher and educator at the School of Management and Marketing, Curtin University. Professor Cheng specialises in social media analytics and digital marketing, consulting for a wide range of local and international industry partners. Professor Cheng leads the Social Media Research Lab at Curtin University, which leverages the power of social media to address pressing social issues. His research and impacts have been recognised by over 30 awards including the Young Tall Poppy Science Award, ABC Top 5 (Humanities) and Alimara CETT Barcelona Award. He is committed to innovative research and teaching practices that create positive impacts on those involved.",
        keynote_topic: "Leveraging the power of social media analytics",
        keynote_abstract: "Social media has become an integral part of daily life, transforming the public’s role from passive consumption (\"read-read\") to active participation (\"read-write\"). It not only exerts a significant influence on human decision-making processes but also reshapes our societal structures. In this context, leveraging the power of social media analytics has never been more critical and urgent, particularly in addressing global challenges such as climate change and modern slavery.",
    },
];
const speakersPanel: PanellistProps[] = [
    {
        name: "Dr Paul Hancock",
        role: "Data Science Project Lead - Curtin Institute for Data Science\n Curtin University",
        profile_picture_path: "panellists/Paul-H.png",
        biography: "Dr Paul Hancock holds a PhD in Physics from Sydney University, where he studied the youngest radio galaxies using a 20GHz survey. He developed key software for the survey processing. After his PhD, Paul worked as a postdoc at Sydney and Curtin Universities, focusing on variable radio sources and surveys, developing software like visibility stacking and the Aegean source finding algorithm. In 2021, Paul became the data science lead for ADACS at CIDS, contributing to software support, teaching, and the SMART pulsar survey project.",
        topic: "Day 2: How do current training options in higher education meet industry requirements for data science careers? Are there areas to improve?"
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
                        keynote_topic={item.keynote_topic}
                        keynote_abstract={item.keynote_abstract}
                    />
                ))}
            </div>
            <h3 className="font-extrabold p-3 text-xl md:text-3xl text-blue-navbar">
                Panellists
            </h3>
            {/* Panelists */}
            <div className="p-3 md:my-10 flex flex-col space-y-6 md:space-y-10 w-full">
                {speakersPanel.map((item, index) => (
                    <PanellistProfile
                        key={index}
                        name={item.name}
                        role={item.role}
                        profile_picture_path={item.profile_picture_path}
                        biography={item.biography}
                        topic={item.topic}
                    />
                ))}
            </div>
        </div>
    );
};

export default Speakers;