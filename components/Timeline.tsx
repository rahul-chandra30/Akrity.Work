import React from 'react';

const Timeline = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="space-y-6 my-8 border-l-2 border-teal-600 pl-4">
            {children}
        </div>
    );
};

export default Timeline;