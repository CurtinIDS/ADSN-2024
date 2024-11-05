import SpeakersProfile from "@/components/SpeakersProfile";
import { SpeakersProps } from "@/components/SpeakersProfile";

import PanellistProfile from "@/components/PanellistProfile";
import { PanellistProps } from "@/components/PanellistProfile";

const speakersKeynote: SpeakersProps[] = [
    {
        name: "Prof. Suzanne Robinson ",
        role: "Chair and Director, Health Economics, Deakin Institute for Health Transformation\nDeakin University\nAdjunct Professor at Curtin University",
        profile_picture_path: "speakers/Suzanne_Robinson.png",
        // profile_picture_path: "melanie.png" -> place the pictures in `/public/public_pictures/` and uncomment this
        biography: "Professor Suzanne Robinson is the Chair and Director of Health Economics at Deakin Institute for Health Transformation, and Adjunct Professor at Curtin University. She leads impactful health economics projects, focusing on the cost-effectiveness and decision-making processes within health systems. Suzanne's research examines how resource allocation, funding, and policy influence healthcare delivery and outcomes. She has secured competitive grants and established industry partnerships, contributing to significant reform initiatives. Passionate about evidence-based approaches, Suzanne is a pioneer in the use of data science for health research to improve healthcare quality and equity. She also mentors PhD students and early-career researchers, helping them succeed in their academic and professional journeys.",
        keynote_topic: "Reimagining Healthcare: Better Outcomes Through Digital Innovation",
        keynote_abstract: "The digital health revolution offers unprecedented opportunities to transform healthcare delivery and improve patient outcomes. By leveraging cutting-edge technologies, including data science and analytics, we can revolutionize how we diagnose, treat, and prevent diseases. This presentation will explore the factors limiting the translation of research into practice, including knowledge transfer, regulatory barriers, and resource constraints. We will also discuss strategies to bridge this gap, such as fostering collaboration, establishing effective knowledge exchange mechanisms, and addressing regulatory hurdles.\nFurthermore, we will delve into the importance of a skilled workforce in the digital health sector. Healthcare professionals, data scientists, and technology experts must be equipped with the necessary skills to develop and implement innovative solutions. This requires ongoing education, training, and upskilling programs. By harnessing the power of data science and analytics, we can unlock new insights, improve decision-making, and accelerate the development of innovative digital health solutions. This will ultimately lead to better patient outcomes, enhanced healthcare delivery, and a more patient-centred healthcare system.",
    },
];

const speakersInvited: SpeakersProps[] = [
    {
        name: "Prof. Mingming Cheng",
        role: "Professor in Digital Marketing and Director of the Social Media Research Lab\nCurtin University",
        profile_picture_path: "speakers/Mingming_Cheng.jpg",
        // profile_picture_path: "melanie.png" -> place the pictures in `/public/public_pictures/` and uncomment this
        biography: "Professor Mingming Cheng is a multiple-award-winning researcher and educator at the School of Management and Marketing, Curtin University. Professor Cheng specialises in social media analytics and digital marketing, consulting for a wide range of local and international industry partners. Professor Cheng leads the Social Media Research Lab at Curtin University, which leverages the power of social media to address pressing social issues. His research and impacts have been recognised by over 30 awards including the Young Tall Poppy Science Award, ABC Top 5 (Humanities) and Alimara CETT Barcelona Award. He is committed to innovative research and teaching practices that deliver positive impact on those involved.",
        keynote_topic: "Leveraging the power of social media analytics",
        keynote_abstract: "Social media has become an integral part of daily life, transforming the public’s role from passive consumption (\"read-read\") to active participation (\"read-write\"). It not only exerts a significant influence on human decision-making processes but also reshapes our societal structures. In this context, leveraging the power of social media analytics has never been more critical and urgent, particularly in addressing global challenges such as climate change and modern slavery.",
    },
    {
        name: "Prof. Warren Mansell",
        role: "Professor of Mental Health, School of Population Health\nCurtin University",
        profile_picture_path: "speakers/Warren_Mansell.jpg",
        // profile_picture_path: "melanie.png" -> place the pictures in `/public/public_pictures/` and uncomment this
        biography: "Professor Warren Mansell's work focuses on transdiagnostic interventions for mental health, including the development of digital health tools such as Manage Your Life Online (MYLO). His research is grounded in Perceptual Control Theory (PCT), a model that explains behaviour as a purposeful, dynamic control system. This approach informs his work on the Method of Levels Therapy for mental health issues and guides his exploration into communication in dementia, robotics, and consciousness. Professor Mansell’s work highlights the potential of digital health and data science in advancing mental health interventions by enabling robust, individualized models for predicting and improving mental health outcomes. He brings insights from his roles across Oxford, King's College London, and the University of Manchester, where he previously served as a Reader in Clinical Psychology.",
        keynote_topic: "MYLO: Applying Data Science to a Rule-Based Conversational Agent to Support Problem Clarification for Wellbeing and Mental Health",
        keynote_abstract: "MYLO is a rules-based system that engages the user in a text-based conversation about a current problem. Its architecture is informed by control systems engineering and research evidence on the active ingredients of psychological change. Through MYLO's curious questioning, the user is supported in problem expression (putting their thoughts and feelings into words), problem clarification (exploring the problem in greater depth and detail), and problem resolution (seeing the problem from a new perspective and getting insights). The Curtin Institute of Data Science implemented two rounds of codesigned improvements to MYLO - a progressive web application for smartphones - and an improvement to its database and decision-making and learning algorithms. We report on the impact of these improvements, and our plans for integrating large language models (LLMs) and natural language processing (NLP) within MYLO to generate a hybrid in the next round of improvements ahead of commercialisation.",
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
    {
        name: "Prof. Ryan Loxton",
        role: "Director, Centre for Optimisation & Decision Science\n Curtin University",
        profile_picture_path: "panellists/Ryan_Loxton.jpg",
        biography: "Professor Ryan Loxton is the Director of the Centre for Optimisation and Decision Science at Curtin. His work focuses on using advanced mathematics to optimise complex processes in a wide range of applications such as mining, oil and gas, agriculture, and industrial process control. Ryan is a passionate advocate for industry engagement and he has worked with many companies including Woodside Energy, Linkforce, Fleetcare, and Vekta Automation. He was the 2014 West Australian Young Scientist of the Year and he leads the optimisation theme in the ARC Industrial Training Centre for Transforming Maintenance through Data Science, which is funded by the Australian Research Council and industry partners Alcoa, BHP, and Roy Hill.",
        topic: "Day 3: What are the barriers to working closely between universities and industry, and what strategies do we have to create more collaborations?"
    },
    {
        name: "Mr Nick Jenkins",
        role: "Program Manager – Research Software\n Australian Research Data Commons (ARDC)",
        profile_picture_path: "panellists/Nick_Jenkins.jpg",
        biography: "Nick Jenkins has over 32 years of experience in software engineering, graduating from Curtin University in 1992 with a Bachelor of Computer Science. Early in his career, he supported academics in developing interactive teaching resources and co-authored “The Developer’s Handbook to Interactive Multimedia.” Nick went on to help establish the Australian Multimedia Testing Centre under Paul Keating’s “Creative Nation” initiative and later held software leadership roles in London, Prague, and Boston. In 2016, he co-founded Mechanical Rock, a Perth-based consultancy specializing in high-end software engineering and cloud solutions. In 2024, Nick joined CIDS as a Program Manager (Research Software Specialist) through its partnership with the ARDC, where he now leads CIDS's team in advancing the ARDC’s Research Software Agenda in Australia.",
        topic: "Day 3: What are the barriers to working closely between universities and industry, and what strategies do we have to create more collaborations?"
    },
    {
        name: "Prof. Graham Gardner",
        role: "Director, Centre for Animal Production and Health, Food Futures Institute\n Murdoch University",
        profile_picture_path: "panellists/Graham_Gardner.jpg",
        biography: "Professor Graham Gardner is a leading researcher in livestock measurement technologies and the Chief Investigator of the Advanced Livestock Measurement Technologies Project (ALMTech). This national initiative has pioneered the development and implementation of technologies that measure lean meat yield and eating quality in the sheep, pork, and cattle industries across Australia. With a background in biochemistry, nutrition, and toxicology, Professor Gardner’s work at Murdoch University focuses on understanding the physiological responses in livestock selected for traits such as growth, leanness, and eating quality. His expertise supports industry advancements in the precision measurement of meat quantity and quality, contributing to better health and production outcomes in the livestock sector.",
        topic: "Day 3: What are the barriers to working closely between universities and industry, and what strategies do we have to create more collaborations?"
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
            <p className="font-extrabold p-3 text-xl md:text-3xl text-blue-navbar">
                Invited Speakers
            </p>
            {/* Keynote Speakers */}
            <div className="p-3 md:my-10 flex flex-col space-y-6 md:space-y-10 w-full">
                {speakersInvited.map((item, index) => (
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