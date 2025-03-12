import React from 'react';

const Meeting = ({
    attendees,
    time,
    agenda,
    outcome,
    title = "Meeting Update",
}: {
    attendees: string;
    time: string;
    agenda: string;
    outcome: string;
    title?: string;
}) => {
    return (
        <div className="my-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                    {title}
                </h3>
                <div className="ml-auto text-sm text-gray-400">{time}</div>
            </div>

            <div className="space-y-3 text-gray-100">
                <div className="flex items-start">
                    <span className="flex-shrink-0 w-24 text-gray-400">Attendees:</span>
                    <span className="font-medium">{attendees}</span>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 w-24 text-gray-400">Agenda:</span>
                    <span className="font-medium">{agenda}</span>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 w-24 text-gray-400">Outcome:</span>
                    <div className="font-medium px-3 py-1 bg-gray-700 rounded-lg">
                        {outcome}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meeting;