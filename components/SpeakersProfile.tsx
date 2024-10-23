"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface SpeakersProps {
    name: string;
    role: string;
    profile_picture_path?: string;
    biography?: string;
    keynote_topic?: string;
    keynote_abstract?: string;
}

const SpeakersProfile: React.FC<SpeakersProps> = ({
    name,
    role,
    profile_picture_path = "placeholder.png",
    biography = "Coming soon",
    keynote_topic = "",
    keynote_abstract = "",
}) => {
    // Split the role string by \n and store it as an array
    const roleLines = role.split('\n');

    // State to toggle collapsible content
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-xl shadow-md overflow-hidden my-4 mx-auto">
            <div className="flex flex-col items-center p-4 space-y-4">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <Image
                        src={`/ADSN-2024/profile_pictures/${profile_picture_path}`}
                        alt={`${name}'s profile picture`}
                        className="rounded-full"
                        width={150}
                        height={150}
                    />
                </div>

                {/* Name and Role */}
                <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">{name}</p>
                    <p className="text-gray-600">
                        {roleLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < roleLines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                {/* Show/Hide Details Button */}
                <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    onClick={toggleCollapse}
                >
                    {isOpen ? 'Hide Details' : 'Show Details'}
                </button>

                {/* Collapsible Section */}
                {isOpen && (
                    <div className="w-full text-left mt-4 bg-gray-100 p-4 rounded-lg">
                        {/* Biography */}
                        <div className="mb-4">
                            <h3 className="font-bold text-lg">Biography</h3>
                            <p className="text-gray-700">{biography}</p>
                        </div>

                        {/* Conditionally render Keynote Topic if not empty */}
                        {keynote_topic && (
                            <div className="mb-4">
                                <h3 className="font-bold text-lg">Topic</h3>
                                <p className="text-gray-700">{keynote_topic}</p>
                            </div>
                        )}

                        {/* Conditionally render Keynote Abstract if not empty */}
                        {keynote_abstract && (
                            <div>
                                <h3 className="font-bold text-lg">Abstract</h3>
                                <p className="text-gray-700">{keynote_abstract}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpeakersProfile;
