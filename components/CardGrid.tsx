import React from 'react';

const CardGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            {children}
        </div>
    );
};

export default CardGrid;