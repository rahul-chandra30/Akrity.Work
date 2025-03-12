import React from 'react';

const Hero = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="text-center py-16 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-l">
            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
                {children}
            </h1>
        </div>
    );
};

export default Hero;