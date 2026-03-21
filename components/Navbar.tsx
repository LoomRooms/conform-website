"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import KeyButton from "@/components/ui/KeyButton";

const Logo = ({ isDarkHeader, isMobile, isScrolled }: { isDarkHeader: boolean; isMobile?: boolean; isScrolled?: boolean }) => {
    // Mobile logo is now ALWAYS white per user request
    let logoColor = isMobile ? 'text-white' : (isDarkHeader ? 'text-white' : 'text-black');
    
    return (
        <div className={`flex items-center group transition-colors duration-500 ${logoColor}`}>
            <svg 
                className={`${isMobile ? 'h-7' : 'h-9'} w-auto transition-all duration-500 group-hover:scale-105`} 
                viewBox="0 0 505 138" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <text 
                    x="-6.489" 
                    y="135.513" 
                    className="font-heading font-normal"
                    style={{
                        fontSize: "190.864px",
                        fill: "currentColor",
                        fontWeight: "normal"
                    }}
                >
                    c<tspan x="61.267 131.887 196.887 256.818 327.438 398.63" y="135.513 135.513 135.513 135.513 135.513 135.513">onform</tspan>
                </text>
            </svg>
        </div>
    );
};

export default function Navbar({ currentTheme }: { currentTheme?: { bg: string; text: string } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    // Single mobile logo: starts centered, slides to left on scroll
    const { scrollY } = useScroll();
    
    // We'll use a smoother, more reliable drift
    const logoXMobile = useSpring(
        useTransform(scrollY, [0, 150], [0, -120]), // Move 120px to the left (adjust based on screen)
        { damping: 30, stiffness: 50, mass: 1 }
    );
    
    // We calculate the center offset differently
    const [mobileXOffset, setMobileXOffset] = useState(0);

    useEffect(() => {
        const updateOffset = () => {
            // Calculate how much we need to move to get from center to left
            // (WindowWidth/2) - (LogoWidth/2) - Padding
            setMobileXOffset(-(window.innerWidth / 2 - 20 - 66));
        };
        updateOffset();
        window.addEventListener('resize', updateOffset);
        return () => window.removeEventListener('resize', updateOffset);
    }, []);

    const finalLogoX = useSpring(
        useTransform(scrollY, [0, 150], [0, mobileXOffset]),
        { damping: 40, stiffness: 60, mass: 0.8 }
    );

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Handle background blur logic
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Handle navbar visibility logic: hide on scroll up, show on scroll down
            // (As requested: "when scrolling up the navigation should hide")
            if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false); // Scrolling up, hide
            } else {
                setIsVisible(true);  // Scrolling down or at top, show
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    type DropdownLink = { name: string; href: string };
    type NavLink = { name: string; href: string; id?: string; dropdown?: DropdownLink[] };

    const leftLinks: NavLink[] = [
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

    const rightLinks: NavLink[] = [
        { name: "Artists", href: "/artists" },
        { name: "Contact", href: "/contact" },
    ];

    const mobileLinks = [
        ...leftLinks,
        ...rightLinks
    ];

    const darkHeaderPaths = ["/", "/tickets", "/faq", "/sponsors", "/experience", "/artists", "/about", "/contact", "/register", "/speakers", "/press"];
    const lightBackgroundPaths = ["/about", "/tickets", "/experience", "/contact", "/register", "/sponsors", "/faq", "/legal"];

    // Determine if the header should be "dark" (white text/logo)
    const getIsDarkHeader = () => {
        // At the top of any page, we now sit over dark cinematic hero content (video or dark blue)
        // So we want a white logo/text for visibility (isDarkHeader = true)
        if (!isScrolled) return true;

        // Core theme-sensing logic for pages with dynamic color sections (like Homepage)
        if (currentTheme) {
            // If the explicit text color is dark (black), then logo must be black (isDarkHeader = false)
            if (currentTheme.text.toLowerCase() === "#000000" || currentTheme.text.toLowerCase() === "black") return false;
            
            const bg = currentTheme.bg.toLowerCase();
            // Fallback to background check
            if (bg === "#ffffff" || bg === "white" || bg === "#f1f352") return false;
            return true;
        }

        // On dark themed page content (Speakers, Artists, Press)
        if (!lightBackgroundPaths.some(p => pathname.startsWith(p))) return true;

        // Default to dark/black logo for light-themed static pages
        return false;
    };

    const isDarkHeader = getIsDarkHeader();

    const basePillClass = `px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 backdrop-blur-sm whitespace-nowrap`;
    
    // Button styling with rounded corners & generous height, adding smooth transitions and active state
    // We check if the link is active based on the pathname
    const getDefaultPillColor = (href: string) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
        if (isDarkHeader) {
            return isActive 
                ? "bg-white text-black border-2 border-white shadow-[4px_4px_0_0_#ffffff] -translate-y-[2px] -translate-x-[2px]" 
                : "bg-[#1a1a1a]/40 text-white border-2 border-white/20 shadow-[2px_2px_0_0_rgba(255,255,255,0.2)] hover:bg-white hover:text-black hover:border-white hover:shadow-[4px_4px_0_0_#ffffff] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]";
        } else {
            return isActive
                ? "bg-primary text-white border-2 border-black shadow-[4px_4px_0_0_#000000] -translate-y-[2px] -translate-x-[2px]"
                : "bg-white/40 text-black border-2 border-black/10 shadow-[2px_2px_0_0_rgba(0,0,0,0.1)] hover:bg-primary hover:text-white hover:border-black hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]";
        }
    }

    const activePillColor = "bg-primary text-white border-2 border-black shadow-[4px_4px_0_0_#000000]";
    const activePillColorDarkPath = "bg-white text-black border-2 border-white shadow-[4px_4px_0_0_#ffffff]";

    const dropdownPillColor = "bg-primary text-white hover:bg-[#161286] border-2 border-black shadow-[2px_2px_0_0_#000000] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000]";
    const dropdownPillColorDarkPath = "bg-white text-black hover:bg-gray-200 border-2 border-white shadow-[2px_2px_0_0_#ffffff] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_0_#ffffff]";

    return (
        <motion.header 
            initial={{ y: 0, opacity: 1 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 bg-transparent"
        >
            <nav 
                className={`relative w-full z-10 transition-all duration-500
                    ${isScrolled ? "py-3" : "py-5"}
                `}
            >
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1700px] mx-auto">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full gap-2">
                    
                    {/* Left Section: Desktop links only */}
                    <div className="flex items-center justify-start gap-1.5 pt-1">
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

                    {/* Center Section / Logo — desktop always visible; mobile handled here too */}
                    <div className="flex items-center justify-center pt-0.5 relative">
                        {/* Desktop: always visible */}
                        <Link href="/" className="hidden lg:flex font-heading items-center">
                            <Logo isDarkHeader={isDarkHeader} />
                        </Link>
                        
                        {/* Mobile: Animated drift from center to left with white pill background */}
                        <motion.div 
                            style={{ x: finalLogoX }}
                            className="lg:hidden flex items-center relative z-[110]"
                        >
                            <Link href="/" className="font-heading flex items-center relative">
                                {/* Translucent Dark Pill Background - shows on scroll to pop the white logo */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: isScrolled ? 1 : 0,
                                        scale: isScrolled ? 1 : 0.8
                                    }}
                                    className="absolute -inset-x-6 -inset-y-3 bg-black/30 backdrop-blur-lg rounded-full -z-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/30"
                                />
                                <Logo isDarkHeader={isDarkHeader} isMobile={true} isScrolled={isScrolled} />
                            </Link>
                        </motion.div>
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
                                    ? "bg-primary text-white border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-white hover:text-primary hover:border-white hover:shadow-[4px_4px_0_0_#ffffff] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]" 
                                    : "bg-primary text-white border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-secondary hover:text-black hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]"
                            }`}>
                                Tickets
                            </Link>
                            
                            <Link href="/register" className={`${basePillClass} ${
                                isDarkHeader 
                                    ? "bg-white text-black border-2 border-white shadow-[2px_2px_0_0_#ffffff] hover:bg-secondary hover:shadow-[4px_4px_0_0_#f1f352] hover:border-secondary hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]" 
                                    : "bg-black text-white border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-primary hover:text-white hover:border-black hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]"
                            }`}>
                                Register Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center mb-1">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                                className="relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] rounded-full transition-all duration-300 bg-black/30 hover:bg-black/50 text-white backdrop-blur-md border border-white/20 shadow-lg focus:outline-none z-50"
                            >
                                <motion.span 
                                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3, ease: [0.23,1,0.32,1] }}
                                    className="block w-[18px] h-[1.5px] bg-current rounded-full" 
                                />
                                <motion.span 
                                    animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="block w-[18px] h-[1.5px] bg-current rounded-full"
                                />
                                <motion.span 
                                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3, ease: [0.23,1,0.32,1] }}
                                    className="block w-[18px] h-[1.5px] bg-current rounded-full" 
                                />
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
                            transition={{ duration: 0.3 }}
                            className="lg:hidden fixed inset-0 z-[-1]"
                            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel — cinematic full-width dark glass */}
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:hidden fixed top-0 left-0 right-0 h-screen z-[150] overflow-hidden"
                            style={{
                                background: "rgba(6, 4, 40, 0.98)",
                                backdropFilter: "blur(40px)",
                                WebkitBackdropFilter: "blur(40px)",
                                borderBottom: "1px solid rgba(241,243,82,0.12)",
                                boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8), 0 0 0 0.5px rgba(255,255,255,0.05)",
                            }}
                        >
                            {/* Close Button Inside Menu */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white z-[160] transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* African pattern subtle overlay */}
                            <div className="absolute inset-0 bg-african-pattern opacity-[0.04] pointer-events-none" />

                            <div className="relative z-10 px-6 pt-24 pb-8 h-full overflow-y-auto">

                                {/* Main Navigation Links */}
                                <nav className="space-y-1 mb-8">
                                    {mobileLinks.map((link, idx) => {
                                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`group flex items-baseline justify-between py-3 border-b transition-all duration-300
                                                        ${isActive 
                                                            ? "border-secondary/30 text-secondary" 
                                                            : "border-white/5 text-white/70 hover:text-white hover:border-white/20"
                                                        }`}
                                                >
                                                    <span className="font-heading text-4xl tracking-tighter leading-none">
                                                        {link.name}
                                                    </span>
                                                    <motion.span 
                                                        initial={{ x: -4, opacity: 0 }}
                                                        whileHover={{ x: 0, opacity: 1 }}
                                                        className={`text-lg font-light transition-all duration-300 ${isActive ? "opacity-100 text-secondary" : "opacity-0 group-hover:opacity-60"}`}
                                                    >
                                                        →
                                                    </motion.span>
                                                </Link>

                                                {link.dropdown && (
                                                    <div className="pl-2 pt-1 pb-2 flex flex-wrap gap-2">
                                                        {link.dropdown.map((dropLink) => (
                                                            <Link
                                                                key={dropLink.name}
                                                                href={dropLink.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-secondary/80 transition-colors duration-200 py-1"
                                                            >
                                                                {dropLink.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </nav>

                                {/* Divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent origin-left mb-8"
                                />

                                {/* CTA Block */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55, duration: 0.5 }}
                                    className="flex flex-col gap-3"
                                >
                                    <Link
                                        href="/tickets"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full flex items-center justify-between gap-2 rounded-2xl py-4 px-6 font-heading text-xl tracking-wide bg-secondary text-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(241,243,82,0.2)] hover:shadow-[0_0_40px_rgba(241,243,82,0.35)]"
                                    >
                                        Get Tickets
                                        <span className="text-2xl">→</span>
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full flex items-center justify-between gap-2 rounded-2xl py-4 px-6 font-heading text-xl tracking-wide bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                                    >
                                        Register Now
                                        <span className="text-2xl opacity-50">→</span>
                                    </Link>
                                </motion.div>

                                {/* Bottom info */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-8 text-center text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold"
                                >
                                    March 20 & April 6, 2026 · Lagos
                                </motion.p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
        </motion.header>
    );
}
