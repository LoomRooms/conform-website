"use client";

import Link from "next/link";
import KeyButton from "@/components/ui/KeyButton";
import Countdown from "./Countdown";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-1 leading-[0.8] tracking-tighter mix-blend-difference">
                        CON/FORM <span className="opacity-40">1.0</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-base md:text-lg text-secondary font-light mb-6 max-w-3xl mx-auto uppercase tracking-[0.4em] opacity-80">
                        Deconstruct. Rebuild. Create.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8 space-y-1 py-4 inline-block w-full max-w-md relative"
                >
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[currentColor] opacity-20 to-transparent" />
                    <p className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] mb-1">March 20 & April 6, 2026</p>
                    <p className="text-gray-400 tracking-[0.2em] text-[10px] md:text-xs uppercase">UNILAG • EGBEDA Lagos</p>
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[currentColor] opacity-20 to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center mb-10"
                >
                    <Countdown />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <KeyButton href="/tickets" variant="secondary" className="px-8 py-3 text-xs md:text-sm tracking-[0.3em]">
                        Get Tickets
                    </KeyButton>
                    <KeyButton href="/register" variant="primary" className="px-8 py-3 text-xs md:text-sm tracking-[0.3em]">
                        Register Now
                    </KeyButton>
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
                <span className="text-[10px] opacity-30 uppercase tracking-[0.5em] rotate-90 mb-10 origin-left">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-[currentColor] opacity-60 via-[currentColor] to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
