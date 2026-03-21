"use client";

import Link from "next/link";
import KeyButton from "@/components/ui/KeyButton";
import Countdown from "./Countdown";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Typewriter component
function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => setStarted(true), delay * 1000);
        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        setDisplayed("");
        const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) clearInterval(interval);
        }, 42); // ~42ms per char for smooth feel
        return () => clearInterval(interval);
    }, [started, text]);

    return (
        <span>
            {displayed}
            {displayed.length < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.55 }}
                    className="inline-block w-[2px] h-[1em] bg-secondary ml-[2px] align-middle"
                />
            )}
        </span>
    );
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking glow only — no scroll parallax on image
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const targetX = (e.clientX / window.innerWidth - 0.5) * 30;
            const targetY = (e.clientY / window.innerHeight - 0.5) * 30;
            mouseX.set(targetX);
            mouseY.set(targetY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            ref={containerRef}
            className="relative bg-black w-full"
        >
            <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Layer 1: Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/CONFORM VID.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Layer 2: Mouse-tracking glow only */}
            <motion.div
                style={{ x: smoothX, y: smoothY }}
                className="absolute inset-0 z-10 pointer-events-none"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.15] mix-blend-overlay" />
                <div className="absolute inset-0 bg-radial-[at_50%_50%] from-primary/20 via-transparent to-transparent opacity-50" />
            </motion.div>

            {/* Layer 3: Kinetic Content */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-12 md:gap-0 h-full pb-20 md:pb-28 pt-24 md:pt-32">

                {/* Left Side: Title & Subtitle */}
                <div className="flex-1 flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden group w-full"
                    >
                        <h1 className="font-heading text-[clamp(4.5rem,12vw,10rem)] leading-[0.85] tracking-tighter mb-4 text-white relative">
                            CON
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="block text-secondary drop-shadow-[0_0_30px_rgba(241,243,82,0.3)]"
                            >
                                FORM
                            </motion.span>
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, delay: 0.8 }}
                            className="h-px bg-current opacity-20 mt-4 md:mt-8"
                        />
                    </motion.div>

                    <div className="mt-8 md:mt-12 space-y-6 md:max-w-xl">
                        {/* Typewriter line */}
                        <div className="min-h-[3em]">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 1.0 }}
                                className="text-lg md:text-2xl font-light tracking-[0.2em] text-white/70 uppercase leading-relaxed"
                            >
                                <Typewriter text="First Listen. Then Build." delay={1.2} />
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 4.0 }}
                                className="text-sm md:text-lg font-bold tracking-[0.4em] text-secondary mt-2 uppercase"
                            >
                                <Typewriter text="Return to yourself." delay={4.2} />
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 6.5 }}
                            className="flex flex-wrap gap-6 items-center"
                        >
                            <KeyButton href="/tickets" variant="secondary" className="px-10 py-4 text-sm tracking-[0.3em] font-bold">
                                Get Tickets
                            </KeyButton>
                            <KeyButton href="/register" variant="primary" className="px-10 py-4 text-sm tracking-[0.3em] font-bold">
                                Register
                            </KeyButton>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Information Block (Asymmetrical) */}
                <div className="flex flex-col items-start md:items-end text-left md:text-right gap-8 md:gap-16 w-full md:w-auto">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1.4 }}
                        >
                            <Countdown />
                        </motion.div>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/40 font-bold block">Till Deconstruction Begins</p>
                    </div>

                    <div className="space-y-2 py-8 md:py-12 border-t border-white/10 w-full md:w-auto">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                            className="text-2xl md:text-4xl font-heading tracking-widest text-white"
                        >
                            MARCH 20 &amp; APRIL 6
                        </motion.p>
                        <p className="text-[10px] md:text-xs tracking-[0.4em] text-secondary/80 font-bold uppercase">
                            UNILAG <span className="mx-2 text-white/20">•</span> EGBEDA LAGOS
                        </p>
                    </div>
                </div>
            </div>

            {/* Cinematic Foreground */}
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-15 pointer-events-none" />

            {/* Vertical Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute right-6 md:right-12 bottom-10 z-20 flex flex-col items-center gap-6"
            >
                <span className="text-[9px] text-white/40 uppercase tracking-[0.6em] vertical-text mb-4">Explore</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-secondary opacity-80 via-white/20 to-transparent" />
            </motion.div>

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    transform: rotate(180deg);
                }
            `}</style>
            </div>
        </section>
    );
}
