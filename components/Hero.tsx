"use client";

import Link from "next/link";
import Countdown from "./Countdown";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="/assets/hero-bg.png"
                    alt="Conform Event Atmosphere"
                    className="w-full h-full object-cover scale-105 animate-slow-zoom"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-white mb-3 leading-tight tracking-tighter">
                        CON/FORM 1.0
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-xl md:text-2xl text-secondary font-light mb-4 max-w-3xl mx-auto uppercase tracking-[0.2em]">
                        Deconstruct. Rebuild. Create.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-white mb-6 space-y-1 border-y border-white/20 py-4 inline-block w-full max-w-md"
                >
                    <p className="text-lg md:text-xl font-bold uppercase tracking-widest">March 20-21, 2026</p>
                    <p className="text-gray-300 tracking-wide text-sm">UNILAG • EGBEDA</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center mb-10"
                >
                    <Countdown />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/tickets"
                        className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-3.5 text-lg font-heading uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(5,8,124,0.2)]"
                    >
                        Get Tickets
                    </Link>
                    <Link
                        href="/register"
                        className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3.5 text-lg font-heading uppercase tracking-[0.2em] transition-all"
                    >
                        Register Now
                    </Link>
                </motion.div>
            </div>

            {/* Blur Overlay */}
            <div className="cinematic-bottom-blur" />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
