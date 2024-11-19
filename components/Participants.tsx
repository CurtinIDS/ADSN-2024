import React, { useState } from "react";
import { participantsData } from '../data/participantsData';

const Participants: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Sort participants alphabetically by first name
    const sortedParticipants = [...participantsData].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    // Show only the first row of participants when not expanded
    const visibleParticipants = isExpanded ? sortedParticipants : sortedParticipants.slice(0, 4);

    return (
        <div id="participants" className="bg-gray-100 p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-blue-900 mb-2">
                    Conference Participants
                </h1>
                <p className="text-lg text-gray-700">
                    We look forward to seeing you in Perth!
                </p>
            </div>
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
                {/* Participant Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {visibleParticipants.map((participant, index) => (
                        <div key={index} className="py-4 flex flex-col items-center bg-gray-50 rounded-lg p-4 text-center">
                            <span className="text-xs font-light text-gray-500">{participant.title}</span>
                            <span className="text-md font-medium text-gray-800">{participant.name}</span>
                            <span className="text-gray-600 text-xs">{participant.organization}</span>
                        </div>
                    ))}
                </div>
                {/* Show More / Show Less Button */}
                <div className="text-center mt-6">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                        onClick={toggleExpand}
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Participants;
