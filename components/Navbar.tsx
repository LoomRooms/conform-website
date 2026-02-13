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

    const isDarkHeader = isHome && !isScrolled;

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
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl overflow-hidden"
                    >
                        <div className="px-6 pt-4 pb-12 space-y-2">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-4 text-black hover:text-primary font-heading text-3xl tracking-widest border-l-4 border-transparent hover:border-primary transition-all uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-8"
                            >
                                <Link
                                    href="/tickets"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-primary text-white px-4 py-5 font-heading text-2xl uppercase tracking-[0.1em] hover:bg-black transition-colors"
                                >
                                    Get Tickets
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
