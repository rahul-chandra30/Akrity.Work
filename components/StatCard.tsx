import React from 'react';

const StatCard = ({ value, label }: { value: string; label: string }) => {
    return (
        <div className="p-6 rounded-xl  mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 mb-2">
                {value}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{label}</p>
        </div>
    );
};

export default StatCard;