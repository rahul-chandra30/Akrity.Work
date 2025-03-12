import React from 'react';
import Link from 'next/link';

const Button = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link href={href} className="inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
            {children}
        </Link>
    );
};

export default Button;