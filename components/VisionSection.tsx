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
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=90&fit=crop",
        alt: "Pan-African creatives collaborating",
        tag: "The Collective",
        quote: "CON/FORM is where the next generation stops waiting for permission.",
    },
    {
        // Black man portrait — nappy.co collection
        image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=800&q=90&fit=crop",
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
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
                        The Vision
                    </span>
                    <h2 className="font-heading font-normal text-4xl sm:text-5xl md:text-7xl text-black mb-6 md:mb-8 leading-[0.9]">
                        A Journey From{" "}
                        <span className="text-primary italic font-serif">Thought</span>{" "}
                        to{" "}
                        <span className="text-primary italic font-serif">Expression</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-light">
                        CON/FORM isn't just an event — it's a two-day transformation. Born
                        in Egbeda, validated by tradition, and powered by raw creativity.
                    </p>

                    <div className="space-y-6 md:space-y-10">
                        <motion.div
                            whileHover={{ x: 6 }}
                            className="group border-l-2 border-primary/20 pl-5 md:pl-8 hover:border-primary transition-all duration-300"
                        >
                            <h3 className="font-heading text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                                Day 1: CON (Conference)
                            </h3>
                            <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                                A guided journey into how culture is built, lived, and
                                sustained — through honest conversation at UNILAG.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ x: 6 }}
                            className="group border-l-2 border-secondary/20 pl-5 md:pl-8 hover:border-secondary transition-all duration-300"
                        >
                            <h3 className="font-heading text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
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
                        className="inline-flex items-center mt-10 md:mt-16 text-primary font-heading hover:text-black transition-all uppercase tracking-[0.2em] group text-sm md:text-lg"
                    >
                        Read the full story{" "}
                        <MoveRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                {/* RIGHT: Animated Slideshow — shown on top on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Main card */}
                    <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl bg-black">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`img-${current}`}
                                src={slide.image}
                                alt={slide.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.06 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 1.1, ease: "easeInOut" }}
                            />
                        </AnimatePresence>

                        {/* Cinematic gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                        {/* Quote area */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`quote-${current}`}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
                                        {slide.tag}
                                    </span>
                                    <p className="font-heading text-white text-xl md:text-2xl lg:text-3xl leading-tight">
                                        "{slide.quote}"
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Slide indicators */}
                            <div className="flex gap-2 mt-5">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className="group relative h-[3px] transition-all duration-500 overflow-hidden rounded-full"
                                        style={{ width: i === current ? "36px" : "18px", background: "rgba(255,255,255,0.2)" }}
                                        aria-label={`Go to slide ${i + 1}`}
                                    >
                                        {i === current && (
                                            <motion.div
                                                className="absolute inset-y-0 left-0 bg-primary"
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
                                className="absolute top-5 right-5 z-20"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                    {`${current + 1} / ${slides.length}`}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Decorative glows */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-secondary/30 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-60 md:h-60 bg-primary/10 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
