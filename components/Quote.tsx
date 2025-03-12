import React from 'react';

const Quote = ({ author, children }: { author: string; children: React.ReactNode }) => {
    return (
        <div className="py-8 my-8 px-6 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-xl border-l-4 border-teal-600">
            <p className="italic text-xl md:text-2xl font-serif text-gray-800 dark:text-gray-200">
                "{children}"
            </p>
            <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-4 font-medium">
                — {author}
            </p>
        </div>
    );
};

export default Quote;