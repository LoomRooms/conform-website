"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import KeyButton from "@/components/ui/KeyButton";

const Logo = ({ isDarkHeader }: { isDarkHeader: boolean }) => {
    return (
        <div className={`flex items-center group transition-colors duration-500 ${isDarkHeader ? 'text-white' : 'text-black'}`}>
            <svg 
                className="h-9 w-auto transition-all duration-500 group-hover:scale-105" 
                viewBox="0 0 505 138" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <text 
                    x="-6.489" 
                    y="135.513" 
                    className="font-heading"
                    style={{
                        fontSize: "190.864px",
                        fill: "currentColor"
                    }}
                >
                    c<tspan x="61.267 131.887 207.66 267.591 338.211 409.403 " y="135.513 135.513 135.513 135.513 135.513 135.513 ">onform</tspan>
                </text>
            </svg>
        </div>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Handle background blur logic
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Handle navbar visibility logic (hide on scroll down, show on up)
            if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
                setIsVisible(false); // Scrolling down, hide wrapper
            } else {
                setIsVisible(true);  // Scrolling up or top, show wrapper
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const leftLinks = [
        { 
            name: "About & FAQ", 
            id: "about-faq",
            href: "/about",
            dropdown: [
                { name: "About Us", href: "/about" },
                { name: "FAQ", href: "/faq" },
            ]
        },
        { 
            name: "Speakers", 
            id: "speakers",
            href: "/speakers",
            dropdown: [
                { name: "All Speakers", href: "/speakers" },
                { name: "Keynotes", href: "/speakers#keynotes" },
            ]
        },
        { 
            name: "Experience", 
            id: "experience",
            href: "/experience",
            dropdown: [
                { name: "Schedule", href: "/experience#schedule" },
                { name: "Venue", href: "/experience#venue" },
                { name: "Workshops", href: "/experience#workshops" },
            ]
        },
    ];

    const rightLinks = [
        { name: "Artists", href: "/artists" },
        { name: "Contact", href: "/contact" },
    ];

    const mobileLinks = [
        ...leftLinks,
        ...rightLinks
    ];

    const darkHeaderPaths = ["/", "/tickets", "/faq", "/sponsors", "/experience", "/artists", "/about", "/contact", "/register", "/speakers", "/press"];
    const isDarkHeader = darkHeaderPaths.includes(pathname) && !isScrolled;

    const basePillClass = `px-5 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 backdrop-blur-sm whitespace-nowrap`;
    
    // Button styling with rounded corners & generous height, adding smooth transitions and active state
    // We check if the link is active based on the pathname
    const getDefaultPillColor = (href: string) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
        if (isDarkHeader) {
            return isActive 
                ? "bg-white text-black border-2 border-white shadow-[4px_4px_0_0_#ffffff] -translate-y-[2px] -translate-x-[2px]" 
                : "bg-transparent text-white border-2 border-white shadow-[2px_2px_0_0_rgba(255,255,255,0.5)] hover:bg-white hover:text-black hover:shadow-[4px_4px_0_0_#ffffff] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]";
        } else {
            return isActive
                ? "bg-primary text-white border-2 border-black shadow-[4px_4px_0_0_#000000] -translate-y-[2px] -translate-x-[2px]"
                : "bg-[#e5e5e5] text-black border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-primary hover:text-white hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]";
        }
    }

    const activePillColor = "bg-primary text-white border-2 border-black shadow-[4px_4px_0_0_#000000]";
    const activePillColorDarkPath = "bg-white text-black border-2 border-white shadow-[4px_4px_0_0_#ffffff]";

    const dropdownPillColor = "bg-primary text-white hover:bg-[#161286] border-2 border-black shadow-[2px_2px_0_0_#000000] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000]";
    const dropdownPillColorDarkPath = "bg-white text-black hover:bg-gray-200 border-2 border-white shadow-[2px_2px_0_0_#ffffff] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0_#ffffff]";

    return (
        <nav className={`fixed w-full z-50 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isScrolled ? "py-4" : "py-6"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            {/* Cinematic Progressive Blur Layer */}
            <div
                className={`absolute inset-0 transition-all duration-700 ${isScrolled ? "opacity-100" : "opacity-0"}`}
                style={{
                    background: isDarkHeader ? 'rgba(0,0,0,0.5)' : 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
            />

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1700px] mx-auto">
                <div className="grid grid-cols-[1fr_auto_1fr] items-start w-full gap-2">
                    
                    {/* Left Section */}
                    <div className="flex items-start justify-start gap-1.5 pt-1">
                        {/* Left Desktop Menu */}
                        <div className="hidden lg:flex items-start gap-1.5">
                            {leftLinks.map((link) => (
                                <div 
                                    key={link.name}
                                    className="relative flex flex-col items-start z-50 group"
                                    onMouseEnter={() => link.dropdown && setHoveredLink(link.id || null)}
                                    onMouseLeave={() => link.dropdown && setHoveredLink(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`${basePillClass} ${hoveredLink === link.id ? (isDarkHeader ? activePillColorDarkPath : activePillColor) : getDefaultPillColor(link.href)}`}
                                    >
                                        {link.name}
                                    </Link>
                                    
                                    {link.dropdown && (
                                        <AnimatePresence>
                                            {hoveredLink === link.id && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -5 }}
                                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                                    className="absolute top-[calc(100%+0.5rem)] left-0 flex flex-col gap-1.5"
                                                >
                                                    {link.dropdown.map(dropLink => (
                                                        <Link 
                                                            key={dropLink.name} 
                                                            href={dropLink.href}
                                                            className={`${basePillClass} ${isDarkHeader ? dropdownPillColorDarkPath : dropdownPillColor}`}
                                                        >
                                                            {dropLink.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center Section / Logo */}
                    <div className="flex items-center justify-center pt-0.5 pointer-events-auto">
                        <Link href="/" className="font-heading font-bold flex items-center">
                            <Logo isDarkHeader={isDarkHeader} />
                        </Link>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-start justify-end gap-1.5 pt-1">
                        {/* Right Desktop Menu */}
                        <div className="hidden lg:flex items-start gap-1.5">
                            {rightLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${basePillClass} ${getDefaultPillColor(link.href)}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            {/* Tickets Button */}
                            <Link href="/tickets" className={`${basePillClass} ml-1 ${
                                isDarkHeader 
                                    ? "bg-primary text-white border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-white hover:text-black hover:border-white hover:shadow-[4px_4px_0_0_#ffffff] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]" 
                                    : "bg-primary text-white border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-[#161286] hover:text-white hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]"
                            }`}>
                                Tickets
                            </Link>

                            <Link href="/register" className={`${basePillClass} ${
                                isDarkHeader 
                                    ? "bg-white text-black border-2 border-white shadow-[2px_2px_0_0_rgba(255,255,255,0.5)] hover:bg-gray-200 hover:shadow-[4px_4px_0_0_#ffffff] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]" 
                                    : "bg-black text-white border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-primary hover:text-white hover:border-black hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]"
                            }`}>
                                Register Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center mb-1">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-1.5 rounded-full transition-colors duration-300 ${isDarkHeader ? "text-white bg-white/10 hover:bg-white/20" : "text-black bg-[#e5e5e5] hover:bg-gray-300"} focus:outline-none`}
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Card */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.97 }}
                            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                            className="lg:hidden absolute top-full left-3 right-3 mt-2 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(5,8,124,0.25),0_0_0_1px_rgba(255,255,255,0.1)]"
                        >
                            {/* African Pattern Background Layer */}
                            <div className="absolute inset-0 bg-african-pattern opacity-[0.10] z-0" />
                            {/* Gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/80 z-[1]" />

                            <div className="relative z-10 px-5 py-5 max-h-[80vh] overflow-y-auto">
                                {/* Navigation Links */}
                                <div className="space-y-0.5">
                                    {mobileLinks.map((link, idx) => (
                                        <div key={link.name}>
                                            <motion.div
                                                initial={{ opacity: 0, x: -16 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.06 + idx * 0.04, duration: 0.3, ease: "easeOut" }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-heading text-lg tracking-[0.15em] uppercase transition-all duration-200 group ${pathname === link.href
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-gray-800 hover:bg-gray-50 hover:text-primary"
                                                        }`}
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${pathname === link.href
                                                        ? "bg-primary scale-100"
                                                        : "bg-gray-300 group-hover:bg-primary group-hover:scale-100 scale-75"
                                                        }`} />
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                            
                                            {link.dropdown && (
                                                <div className="pl-8 flex flex-col gap-1 mt-1 mb-2">
                                                    {link.dropdown.map((dropLink, dropIdx) => (
                                                        <motion.div
                                                            key={dropLink.name}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 + idx * 0.04 + dropIdx * 0.05, duration: 0.3 }}
                                                        >
                                                            <Link
                                                                href={dropLink.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-primary py-1 block"
                                                            >
                                                                - {dropLink.name}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.35, duration: 0.4 }}
                                    className="my-4 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent origin-left"
                                />

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.3 }}
                                    className="flex flex-col gap-2"
                                >
                                    <div onClick={() => setIsOpen(false)}>
                                        <KeyButton href="/tickets" variant="primary" className="w-full">
                                            Get Tickets →
                                        </KeyButton>
                                    </div>
                                    <div onClick={() => setIsOpen(false)}>
                                        <Link href="/register" className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 font-bold uppercase tracking-[0.1em] text-sm text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300">
                                            Register Now
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
