"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface PanellistProps {
    name: string;
    role: string;
    profile_picture_path?: string;
    biography?: string;
    position?: string;
    day?: number;
}

const PanellistProfile: React.FC<PanellistProps> = ({
    name,
    role,
    profile_picture_path = "placeholder.png",
    biography = "Coming soon",
    position = "TBC",
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // Split the role string by \n and store it as an array
    const roleLines = role.split("\n");

    return (
        <>
            <div
                className="relative w-full max-w-[200px] bg-white rounded-xl shadow-md overflow-hidden my-4 mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleOpenModal}
            >
                {/* Profile Picture */}
                <div className="w-full h-[200px] overflow-hidden">
                    <Image
                        src={`/ADSN-2024/profile_pictures/${profile_picture_path}`}
                        alt={`${name}'s profile picture`}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                    />
                </div>

                {/* Name and Role */}
                <div className="p-4 text-center">
                    <p className="text-md text-gray-900">{position}</p>
                    <p className="text-lg font-bold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-600">
                        {roleLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < roleLines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={handleCloseModal}
                        >
                            ✕
                        </button>
                        <div className="text-center">
                            <Image
                                src={`/ADSN-2024/profile_pictures/${profile_picture_path}`}
                                alt={`${name}'s profile picture`}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                                width={96}
                                height={96}
                            />
                            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                            <p className="text-sm text-gray-600">
                                {roleLines.map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < roleLines.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                        <div className="mt-4 text-left">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Biography</h4>
                            <p className="text-gray-700 text-sm">{biography}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PanellistProfile;
