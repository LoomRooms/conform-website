"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const slides = [
    {
        // Black young man in creative studio (verified)
        image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=90&fit=crop",
        alt: "Young black creative in a studio",
        tag: "The Creator",
        quote: "Every system that ignored you is now watching what you build without it.",
    },
    {
        // Black man performing on stage — nappy.co collection
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=90&fit=crop",
        alt: "Black artist performing on stage",
        tag: "The Performer",
        quote: "Culture doesn't audition. It arrives — fully formed, unapologetically real.",
    },
    {
        // Black woman portrait — Eye for Ebony collection (verified)
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=90&fit=crop",
        alt: "Black woman leader",
        tag: "The Architect",
        quote: "The seat was never offered. So we built the table, the room, and the whole building.",
    },
    {
        // Group of Black friends — Vonecia Carswell (verified)
        image: "/afdabts.png",
        alt: "Pan-African creatives collaborating",
        tag: "The Collective",
        quote: "CON/FORM is where the next generation stops waiting for permission.",
    },
    {
        // Black man portrait — nappy.co collection
        image: "/trdforconform.webp",
        alt: "Black creative visionary",
        tag: "The Visionary",
        quote: "When your lens captures your own story, the narrative finally belongs to you.",
    },
];

export default function VisionSection() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [isHovered]);

    const slide = slides[current];

    return (
        <section className="py-16 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden">
            {/* Mobile: stacked, Desktop: side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

                {/* LEFT: Text Content — shown first on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="order-2 md:order-1"
                >
                    <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
                        The Vision
                    </span>
                    <h2 className="font-heading font-normal text-4xl sm:text-5xl md:text-7xl text-black mb-6 md:mb-8 leading-[0.9]">
                        A Journey From{" "}
                        <span className="text-blue-400 italic font-serif">Thought</span>{" "}
                        to{" "}
                        <span className="text-blue-400 italic font-serif">Expression</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-light">
                        CON/FORM isn't just an event — it's a two-day transformation. Born
                        in Egbeda, validated by tradition, and powered by raw creativity.
                    </p>

                    <div className="space-y-6 md:space-y-10">
                        <motion.div
                            whileHover={{ x: 6 }}
                            className="group border-l-2 border-primary/20 pl-5 md:pl-8 hover:border-blue-400 transition-all duration-300"
                        >
                            <h3 className="font-heading text-xl md:text-2xl mb-2 group-hover:text-blue-400 transition-colors">
                                Day 1: CON (Conference)
                            </h3>
                            <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                                A guided journey into how culture is built, lived, and
                                sustained — through honest conversation at UNILAG.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ x: 6 }}
                            className="group border-l-2 border-secondary/20 pl-5 md:pl-8 hover:border-blue-400 transition-all duration-300"
                        >
                            <h3 className="font-heading text-xl md:text-2xl mb-2 group-hover:text-blue-400 transition-colors">
                                Day 2: FORM (Expression)
                            </h3>
                            <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                                Day 2 is earned — live performances, DJ sets, visual art
                                installations, and community celebration in Egbeda.
                            </p>
                        </motion.div>
                    </div>

                    <Link
                        href="/about"
                        className="inline-flex items-center mt-10 md:mt-16 text-blue-400 font-heading hover:text-black transition-all uppercase tracking-[0.2em] group text-sm md:text-lg"
                    >
                        Read the full story{" "}
                        <MoveRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                {/* RIGHT: Animated Slideshow — shown on top on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 md:order-2 relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Main card */}
                    <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl bg-black border border-white/5">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`img-${current}`}
                                src={slide.image}
                                alt={slide.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </AnimatePresence>

                        {/* Cinematic gradient overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                        {/* Quote area */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`quote-${current}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <span className="text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-4 block opacity-80">
                                        {slide.tag}
                                    </span>
                                    <p className="font-heading text-white text-2xl md:text-4xl leading-[1.1] tracking-tight">
                                        &ldquo;{slide.quote}&rdquo;
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Slide indicators */}
                            <div className="flex gap-3 mt-8">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className="group relative h-[2px] transition-all duration-700 overflow-hidden rounded-full"
                                        style={{ width: i === current ? "48px" : "24px", background: "rgba(255,255,255,0.15)" }}
                                        aria-label={`Go to slide ${i + 1}`}
                                    >
                                        {i === current && (
                                            <motion.div
                                                className="absolute inset-y-0 left-0 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 4.5, ease: "linear" }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tag pill top-right */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`tag-${current}`}
                                className="absolute top-8 right-8 z-20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="bg-black/20 backdrop-blur-xl border border-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full shadow-2xl">
                                    <span className="text-white/40">0</span>{current + 1} <span className="mx-1 text-white/20">/</span> <span className="text-white/40">0</span>{slides.length}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Decorative glows */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
