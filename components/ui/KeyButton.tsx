import React from 'react';
import Link from 'next/link';

interface KeyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'dark' | 'outline';
    className?: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
}

export default function KeyButton({ href, variant = 'primary', className = '', target, rel, children, ...props }: KeyButtonProps) {
    // Sharp edges, bold uppercase text, keyboard 3D effect parameters
    const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 font-heading font-bold uppercase tracking-widest text-lg md:text-xl border-2 border-black rounded-none transition-all duration-150 ease-out";
    
    // The "keyboard key" 3D shadow effect (base, hover, active)
    const shadowStyle = "shadow-[4px_4px_0_0_#000000] hover:shadow-[6px_6px_0_0_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-[0_0_0_0_#000000] active:translate-y-[4px] active:translate-x-[4px]";
    
    let colorStyle = "";
    switch (variant) {
        case 'primary':
            colorStyle = "bg-primary text-white hover:bg-[#161286]";
            break;
        case 'secondary':
            colorStyle = "bg-secondary text-black hover:bg-[#f6f874]";
            break;
        case 'accent':
            colorStyle = "bg-accent text-black hover:bg-[#6ed3f2]";
            break;
        case 'dark':
            colorStyle = "bg-dark text-white hover:bg-[#130d36]";
            break;
        case 'outline':
            colorStyle = "bg-white text-black hover:bg-gray-50";
            break;
    }

    const combinedClassName = `${baseStyle} ${shadowStyle} ${colorStyle} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} target={target} rel={rel}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
