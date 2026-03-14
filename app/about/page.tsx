"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyButton from "@/components/ui/KeyButton";
import { useRef } from "react";

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <>
            {/* White/Black text handling happens in Navbar automatically based on scroll */}
            <Navbar />
            <main ref={containerRef} className="min-h-screen relative bg-black text-white selection:bg-secondary selection:text-black">

            {/* 1. Cinematic Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y: yBackground }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.4] mix-blend-overlay z-10" />
                    <div className="absolute inset-0 bg-radial-[at_50%_0%] from-primary/40 via-black to-black opacity-80 z-10" />
                    <img src="/3.webp" alt="Background" className="w-full h-full object-cover opacity-30 grayscale brightness-50" />
                </motion.div>
                
                <div className="cinematic-bottom-blur-primary" />
                
                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-white/60 mb-8 backdrop-blur-md">
                            The Origin Story
                        </span>
                        <h1 className="font-heading font-normal text-6xl md:text-[8rem] mb-6 text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
                            THE STORY <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                                BEHIND CON/FORM
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed text-white/70">
                            A Cultural System for Conversation, Creation &amp; Continuity.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    style={{ opacity: opacityHero }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Discover</span>
                    <motion.div 
                        animate={{ y: [0, 10, 0] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
                    />
                </motion.div>
            </section>

            {/* 2. THE BIG STATEMENT */}
            <section className="relative py-32 md:py-48 px-6 bg-black z-20 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
                
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight text-white/90">
                            "Every system that <span className="font-heading italic font-bold tracking-widest text-primary px-4 bg-white/5 rounded-2xl border border-white/10 glass-premium inline-block transform -rotate-2">ignored you</span> is now watching what you build <span className="text-white border-b-2 border-secondary pb-2">without it</span>."
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* 3. NARRATIVE SECTION */}
            <section className="relative py-24 px-6 bg-[#03051a] z-20">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none" />
                
                <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                    <motion.p 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-xl md:text-3xl font-light leading-relaxed text-white/80"
                    >
                        Nigeria&apos;s creative generation is the most talented in history. They are making music that reaches the world, building fashion that redefines the continent&apos;s identity, telling stories on screens once shut to them, and designing futures that weren&apos;t supposed to exist yet.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 md:p-12 glass-premium rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                        <p className="text-xl md:text-3xl font-light leading-relaxed text-white">
                            But the systems <span className="font-bold underline decoration-secondary decoration-4 underline-offset-8">were not built for them</span>. The institutions were slow. The brands were extractive. The infrastructure was missing. The conversations were closed.
                        </p>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-3xl font-light leading-relaxed text-white/80"
                    >
                        CON/FORM was born from one belief: that the most powerful thing you can do for a creative ecosystem is <span className="text-secondary font-bold">put the right people in the same room and refuse to let them leave without a real conversation</span>.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center pt-12 border-t border-white/10"
                    >
                        <p className="text-white font-normal text-2xl md:text-4xl leading-snug font-heading tracking-wide">
                            Not a networking event. <br className="hidden md:block"/>
                            Not a conference. Not a festival.<br />
                            <span className="text-primary mt-4 block text-4xl md:text-6xl drop-shadow-[0_0_20px_rgba(16,12,104,0.8)]">A SYSTEM-BUILDING EXPERIENCE.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. THE 4 CULTURAL TENSIONS - bento grid style */}
            <section className="py-32 px-6 bg-black z-20 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center">
                        <span className="text-white/30 font-bold tracking-[0.5em] uppercase text-xs mb-4 block">The Mandate</span>
                        <h2 className="font-heading font-normal text-5xl md:text-[5rem] text-white">Why We Build</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { num: "01", title: "Broken Systems", desc: "Creative infrastructure in Nigeria has always lagged behind creative talent. CON/FORM exists to name that gap and begin closing it — together.", color: "from-blue-900/40" },
                            { num: "02", title: "Invisible Creatives", desc: "The most innovative people in the room are often the least heard. CON/FORM gives the room back to them.", color: "from-purple-900/40" },
                            { num: "03", title: "Disconnected Institutions", desc: "Brands and institutions want cultural relevance but don't always know how to earn it. CON/FORM creates the honest space for that education.", color: "from-yellow-900/40" },
                            { num: "04", title: "Missing Infrastructure", desc: "Talent without structure eventually exhausts itself. CON/FORM is the first step in building the infrastructure that creative movements need to last.", color: "from-emerald-900/40" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className={`group glass-premium border border-white/10 hover:border-white/30 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden bg-gradient-to-b ${item.color} to-transparent`}
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <span className="text-6xl font-heading text-white/5 opacity-50 group-hover:text-white/20 transition-all duration-500 block leading-none mix-blend-overlay">
                                        {item.num}
                                    </span>
                                </div>
                                <div className="mt-16 relative z-10">
                                    <h3 className="font-heading text-3xl text-white mb-4 tracking-wide group-hover:text-secondary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-base font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. ARCHITECTS & EXECUTORS */}
            <section className="py-32 px-6 bg-white text-black z-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-[0.03] mix-blend-multiply pointer-events-none" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="flex-1 sticky top-32">
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">The Framework</span>
                            <motion.h2 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="font-heading font-normal text-6xl md:text-[6rem] mb-6 leading-[0.85] tracking-tighter"
                            >
                                Architects <br/><span className="text-black/20">&amp;</span> Executors
                            </motion.h2>
                            <p className="text-black/60 text-xl leading-relaxed max-w-lg">
                                CON/FORM introduces a framework that removes hierarchy while honoring experience.
                            </p>
                        </div>

                        <div className="flex-1 space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gray-50 border-2 border-black/10 rounded-3xl p-10 md:p-12 hover:border-black/30 transition-all shadow-xl hover:shadow-2xl translate-x-0 md:translate-x-8"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <h3 className="font-heading text-4xl">Architects</h3>
                                    <span className="text-black/10 font-heading text-8xl leading-none -mt-4">A</span>
                                </div>
                                <p className="text-black/70 text-lg leading-relaxed font-medium">
                                    The pioneers and builders of Nigeria&apos;s creative industry. These individuals helped shape the systems that define the industry today, creating platforms, institutions, and opportunities that later generations would inherit.
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-black text-white rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <h3 className="font-heading text-4xl text-secondary">Executors</h3>
                                    <span className="text-white/10 font-heading text-8xl leading-none -mt-4">E</span>
                                </div>
                                <p className="text-white/70 text-lg leading-relaxed font-light relative z-10">
                                    The current generation of creators and performers building careers within those systems. Artists, actors, performers, and cultural figures who navigate and adapt existing structures to fit a new generation.
                                </p>
                            </motion.div>

                            <div className="pt-8 text-center md:text-left">
                                <p className="font-heading text-2xl md:text-3xl text-black/90">
                                    Both groups are equally essential.<br />
                                    <span className="text-primary italic">CON/FORM places them in conversation, not competition.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE STRUCTURE / CTA */}
            <section className="py-32 px-6 bg-black z-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/4.webp" alt="Structure" className="w-full h-full object-cover opacity-20 grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">The Format</span>
                        <h2 className="font-heading font-normal text-5xl md:text-[5rem] text-white">Two Days. One System.</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass border border-white/20 p-10 rounded-3xl relative overflow-hidden group hover:border-primary transition-colors"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">March 20, 2026 — UNILAG</span>
                            <h3 className="font-heading text-4xl text-white mb-4">Day 1: CON</h3>
                            <p className="text-white/60 leading-relaxed font-light text-lg">A guided journey into how culture is built, lived, and sustained. Unfolds through an Opening Address, Panel One (The Architects), a Systems Interlude, and Panel Two (The Executors).</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass border border-white/20 p-10 rounded-3xl relative overflow-hidden group hover:border-secondary transition-colors"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs block mb-4">April 6, 2026 — Egbeda</span>
                            <h3 className="font-heading text-4xl text-white mb-4">Day 2: FORM</h3>
                            <p className="text-white/60 leading-relaxed font-light text-lg">Day 2 is earned. It is not a random performance. It is the emotional and cultural release of Day 1&apos;s conversations — live performances, DJ sets, visual art &amp; installations, community celebration.</p>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-premium border border-white/10 p-12 md:p-16 rounded-[3rem] text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-3xl z-0" />
                        <div className="relative z-10">
                            <h3 className="font-heading font-normal text-4xl md:text-6xl text-white mb-6">Be Part of the System</h3>
                            <p className="mb-10 text-white/70 text-lg md:text-xl font-light">CON/FORM 1.0 is where it all begins. <br className="hidden md:block"/>Join us in Lagos, Nigeria.</p>
                            <KeyButton
                                href="/tickets"
                                variant="secondary"
                                className="px-12 py-5 tracking-[0.3em] font-bold text-sm"
                            >
                                Secure Your Spot
                            </KeyButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 7. THE TEAM */}
            <section className="py-32 px-6 bg-black z-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <span className="text-white/40 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">The Architects of CON/FORM</span>
                    
                    {/* The Convener */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 flex flex-col items-center"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 glass-premium shadow-[0_0_40px_rgba(0,180,255,0.15)] mb-6 relative group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            {/* Adjusted image to focus on face */}
                            <img 
                                src="/The Creatives Shaping Culture/Shola.jpeg" 
                                alt="Shola Bamidele - Event Convener" 
                                className="w-full h-full object-cover scale-110 object-top group-hover:scale-125 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            />
                        </div>
                        <h3 className="font-heading text-3xl md:text-5xl text-white mb-2 tracking-wide">Shola Bamidele</h3>
                        <p className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">Event Convener</p>
                    </motion.div>

                    {/* Loom Rooms Team - Apple bubble style */}
                    <div className="relative">
                        <span className="text-white/30 font-bold tracking-[0.3em] uppercase text-xs mb-10 block">Powered By Loom Rooms</span>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center items-center -space-x-4 md:-space-x-6 hover:space-x-2 transition-all duration-500 ease-out"
                        >
                            {[
                                { name: "Zenith", src: "Zenith.jpeg" },
                                { name: "Doyin", src: "Doyin.jpeg" },
                                { name: "GeeXen", src: "GEEXEN.jpeg" },
                                { name: "SVNTN", src: "SVNTN.jpeg" },
                                { name: "Snow", src: "Snow.jpeg" },
                                { name: "Mastermind", src: "Mastermind.jpeg" }
                            ].map((person, index) => (
                                <div 
                                    key={person.name}
                                    title={person.name}
                                    className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#000] shadow-[0_4px_20px_rgba(0,0,0,0.8)] relative group transform hover:scale-125 hover:-translate-y-4 hover:z-50 transition-all duration-300 ease-out cursor-pointer"
                                    style={{ zIndex: 10 - index }} // ensure proper overlapping left to right
                                >
                                    {/* Glass reflection overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,transparent_50%)] z-20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                    
                                    <img 
                                        src={`/The Creatives Shaping Culture/${person.src}`}
                                        alt={person.name} 
                                        className="w-full h-full object-cover scale-150 object-top group-hover:scale-[1.8] group-hover:rotate-2 transition-all duration-500 grayscale group-hover:grayscale-0"
                                    />
                                    
                                    {/* Name tooltip */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-lg pointer-events-none">
                                        {person.name}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
        </>
    );
}
