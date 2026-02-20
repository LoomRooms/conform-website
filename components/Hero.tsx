"use client";

import Link from "next/link";
import Countdown from "./Countdown";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/65 z-10" />
                <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
                <img
                    src="/assets/hero-bg.png"
                    alt="Conform Event Atmosphere"
                    className="w-full h-full object-cover scale-105 animate-slow-zoom"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16 md:mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-1 leading-[0.8] tracking-tighter">
                        CON/FORM <span className="text-white/20">1.0</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-base md:text-lg text-secondary font-light mb-6 max-w-3xl mx-auto uppercase tracking-[0.4em] opacity-80">
                        Deconstruct. Rebuild. Create.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-white mb-8 space-y-1 py-4 inline-block w-full max-w-md relative"
                >
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <p className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] mb-1">March 20-21, 2026</p>
                    <p className="text-gray-400 tracking-[0.2em] text-[10px] md:text-xs uppercase">UNILAG • EGBEDA Lagos</p>
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex justify-center mb-10"
                >
                    <Countdown />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/tickets"
                        className="group relative overflow-hidden bg-primary text-white px-8 py-3 text-xs md:text-sm font-heading uppercase tracking-[0.3em] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(5,8,124,0.3)]"
                    >
                        <span className="relative z-10 text-white">Get Tickets</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                        <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">Get Tickets</span>
                    </Link>
                    <Link
                        href="/register"
                        className="group border border-white/20 text-white hover:border-white px-8 py-3 text-xs md:text-sm font-heading uppercase tracking-[0.3em] transition-all backdrop-blur-sm"
                    >
                        Register Now
                    </Link>
                </motion.div>
            </div>

            {/* Cinematic Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] rotate-90 mb-10 origin-left">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 via-white/20 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
