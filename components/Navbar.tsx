"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Logo = ({ isDarkHeader }: { isDarkHeader: boolean }) => {
    return (
        <div className="h-10 flex items-center group">
            <img
                src="/conform-logo.svg"
                alt="CON/FORM"
                className={`h-10 w-auto transition-all duration-500 group-hover:scale-110 ${!isDarkHeader
                    ? 'filter brightness-0 invert-[.1] sepia-[1] saturate-[5] hue-rotate-[240deg]'
                    : ''
                    }`}
                onError={(e) => {
                    console.error("Logo failed to load");
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                }}
            />
            <span className={`fallback hidden tracking-[0.2em] font-heading text-xl transition-colors duration-300 ${isDarkHeader ? 'text-white' : 'text-black'}`}>CON/FORM</span>
        </div>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Experience", href: "/experience" },
        { name: "Artists", href: "/artists" },
        { name: "Apply", href: "/register" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ];

    const darkHeaderPaths = ["/", "/tickets", "/faq", "/sponsors", "/experience", "/artists", "/about", "/contact", "/register"];
    const isDarkHeader = darkHeaderPaths.includes(pathname) && !isScrolled;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? "py-5" : "py-8"}`}>
            {/* Cinematic Progressive Blur Layer */}
            <div
                className={`absolute inset-0 transition-all duration-700 ${isScrolled ? "opacity-100" : "opacity-0"}`}
                style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-heading font-bold text-2xl tracking-tighter flex items-center">
                            <Logo isDarkHeader={isDarkHeader} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] relative group ${isDarkHeader ? "text-white" : "text-black hover:text-primary"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
                            </Link>
                        ))}
                        <Link
                            href="/tickets"
                            className="bg-primary hover:bg-black text-white px-8 py-3 font-heading text-lg uppercase tracking-[0.1em] transition-all transform hover:scale-105 shadow-[0_5px_15px_rgba(5,8,124,0.3)]"
                        >
                            Get Tickets
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`transition-colors duration-300 ${isDarkHeader ? "text-white" : "text-black"} hover:text-primary focus:outline-none`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
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
                            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Card */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.97 }}
                            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                            className="md:hidden absolute top-full left-3 right-3 mt-2 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(5,8,124,0.25),0_0_0_1px_rgba(255,255,255,0.1)]"
                        >
                            {/* African Pattern Background Layer */}
                            <div className="absolute inset-0 bg-african-pattern opacity-[0.10] z-0" />
                            {/* Gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/80 z-[1]" />

                            <div className="relative z-10 px-5 py-5">
                                {/* Navigation Links */}
                                <div className="space-y-0.5">
                                    {navLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.name}
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
                                >
                                    <Link
                                        href="/tickets"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center bg-primary text-white px-4 py-3.5 rounded-xl font-heading text-lg uppercase tracking-[0.15em] hover:bg-primary/90 transition-all duration-200 shadow-[0_4px_16px_rgba(5,8,124,0.3)] hover:shadow-[0_6px_24px_rgba(5,8,124,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Get Tickets →
                                    </Link>
                                </motion.div>

                                {/* Subtle branding footer */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-center text-[10px] text-gray-300 uppercase tracking-[0.3em] mt-4 mb-1"
                                >
                                    Lagos • March 2026
                                </motion.p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
