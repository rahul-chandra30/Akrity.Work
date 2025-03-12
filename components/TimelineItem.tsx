import React from 'react';

const TimelineItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className="relative">
            <div className="absolute -left-6 mt-1 w-4 h-4 rounded-full bg-teal-600" />
            <h4 className="text-xl font-bold text-teal-600">{title}</h4>
            <p className="text-white">{children}</p>
        </div>
    );
};

export default TimelineItem;