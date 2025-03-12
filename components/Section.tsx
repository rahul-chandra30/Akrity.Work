import React from 'react';

const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => {
    return (
        <div className="rounded-xl p-8 my-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg">
            {title && (
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700">
                    {title}
                </h2>
            )}
            <div className="text-gray-800 dark:text-gray-200">{children}</div>
        </div>
    );
};

export default Section;