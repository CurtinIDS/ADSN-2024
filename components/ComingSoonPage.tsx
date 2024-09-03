import React from 'react';

const ComingSoon = () => {
    return (
        <div id="comingsoon" className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-lg">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Coming Soon
                </h1>
                <p className="text-gray-600 mb-6">
                    We&apos;re working hard to get this page ready. Stay tuned!
                </p>
                <div className="flex justify-center">
                    <div className="w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
