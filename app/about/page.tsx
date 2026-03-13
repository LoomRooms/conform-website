"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import KeyButton from "@/components/ui/KeyButton";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen relative rounded-t-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white">

            {/* Header Pod */}
            <section className="relative bg-transparent px-3 md:px-5 pt-4 md:pt-4 pb-0">
                <div className="relative bg-primary text-white py-24 md:py-32 px-4 text-center overflow-hidden rounded-[3rem] md:rounded-[4.5rem]">
                    <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-0"></div>
                    <div className="cinematic-bottom-blur" />
                    <div className="relative z-10">
                        <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white">The Story Behind CON/FORM</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90 text-white">A Cultural System for Conversation, Creation &amp; Continuity.</p>
                    </div>
                </div>
            </section>

            {/* WHY CON/FORM EXISTS — Manifesto Section */}
            <section className="relative bg-black text-white py-32 md:py-48 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-[0.04] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] -z-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-0 pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <span className="text-white/25 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-12 block">
                        The Origin
                    </span>
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="font-heading font-normal text-4xl md:text-[6.5rem] text-white mb-10 leading-[0.85] tracking-tighter"
                    >
                        Redefining the{" "}
                        <span className="font-heading tracking-wide text-[2.8rem] md:text-[5rem]">System</span>
                    </motion.h2>

                    {/* The Big Statement */}
                    <div className="border-l-2 border-primary pl-8 md:pl-12 mb-20 max-w-3xl">
                        <p className="text-white/80 text-xl md:text-3xl font-light leading-relaxed">
                            "Every system that ignored you is now watching what you build without it."
                        </p>
                    </div>

                    {/* Narrative Paragraphs */}
                    <div className="space-y-10 max-w-3xl mb-24">
                        <p className="text-white/60 text-lg md:text-xl font-light leading-loose">
                            Nigeria's creative generation is the most talented in history. They are making music that reaches the world, building fashion that redefines the continent's identity, telling stories on screens once shut to them, designing futures that weren't supposed to exist yet.
                        </p>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-loose">
                            But <span className="text-white font-normal">the systems were not built for them</span>. The institutions were slow. The brands were extractive. The infrastructure was missing. The conversations were closed.
                        </p>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-loose">
                            CON/FORM was born from one belief: that the most powerful thing you can do for a creative ecosystem is <span className="text-primary font-normal">put the right people in the same room and refuse to let them leave without a real conversation</span>.
                        </p>
                        <p className="text-white font-normal text-lg md:text-2xl leading-relaxed">
                            Not a networking event. Not a conference. Not a festival.<br />
                            <span className="text-white/40">A system-building experience.</span>
                        </p>
                    </div>

                    {/* 4 Cultural Tensions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            {
                                num: "01",
                                title: "Broken Systems",
                                desc: "Creative infrastructure in Nigeria has always lagged behind creative talent. CON/FORM exists to name that gap and begin closing it — together.",
                            },
                            {
                                num: "02",
                                title: "Invisible Creatives",
                                desc: "The most innovative people in the room are often the least heard. CON/FORM gives the room back to them.",
                            },
                            {
                                num: "03",
                                title: "Disconnected Institutions",
                                desc: "Brands and institutions want cultural relevance but don't always know how to earn it. CON/FORM creates the honest space for that education.",
                            },
                            {
                                num: "04",
                                title: "Missing Infrastructure",
                                desc: "Talent without structure eventually exhausts itself. CON/FORM is the first step in building the infrastructure that creative movements need to last.",
                            },
                        ].map((item) => (
                            <div
                                key={item.num}
                                className="group border border-white/10 hover:border-white/25 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]"
                            >
                                <span className="text-5xl md:text-6xl font-heading text-white/10 group-hover:text-primary transition-all duration-500 block mb-4 leading-none">
                                    {item.num}
                                </span>
                                <h3 className="font-heading text-xl md:text-2xl text-white mb-3 tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-white/40 text-sm md:text-base font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                    <p className="mb-6 text-xl font-medium text-black">
                        Africa&apos;s creative economy is expanding rapidly. But <span className="text-primary font-bold">creators remain under-supported and under-protected</span>. Institutions struggle to engage culture authentically. Brands seek relevance but lack proximity and trust. Systems that support creativity are fragmented or absent.
                    </p>
                    <p className="mb-8 text-lg">
                        There is visibility without structure, noise without longevity, and talent without sustainability.
                    </p>
                    <p className="text-lg">
                        CON/FORM exists to change that — not as a conference or festival, but as a <strong>system-building experience</strong>, beginning with honest conversation and culminating in live expression and performance.
                    </p>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Purpose</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-black mb-6">Why CON/FORM Exists</h2>
                        <p className="text-gray-600 mb-6">
                            At its core, CON/FORM asks: <em>How do we align our creative expression with sustainable systems, shared values, and collective goals?</em>
                        </p>
                        <ul className="space-y-5 mb-8">
                            <li className="flex items-start">
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 text-sm">1</span>
                                <p className="text-gray-600">Create honest, cross-sector conversations about creativity, economy, identity, power, and systems.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 text-sm">2</span>
                                <p className="text-gray-600">Bridge the gap between culture and infrastructure.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 text-sm">3</span>
                                <p className="text-gray-600">Allow creatives, brands, and institutions to design solutions together.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 text-sm">4</span>
                                <p className="text-gray-600">Build a shared understanding of how culture can scale without losing integrity.</p>
                            </li>
                        </ul>
                    </div>
                    {/* Image */}
                    <div className="relative h-[400px] bg-secondary/30 rounded-lg overflow-hidden">
                        <img
                            src="/6.webp"
                            alt="CON/FORM Event"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        {/* Cinematic Blend */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-50 via-gray-50/40 to-transparent z-10" />
                    </div>
                </div>
            </section>

            {/* Architects & Executors Framework */}
            <section className="py-20 px-4 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl mb-16">
                        <span className="text-white/40 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">The Framework</span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="font-heading font-normal text-5xl md:text-7xl mb-6 leading-[0.9]"
                        >
                            Architects <span className="text-white/30">&amp;</span> Executors
                        </motion.h2>
                        <p className="text-white/60 text-xl leading-relaxed">
                            CON/FORM introduces a framework that removes hierarchy while honoring experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                            <span className="text-white/20 font-heading text-6xl block mb-4 leading-none">A</span>
                            <h3 className="font-heading text-3xl mb-4">Architects</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                The pioneers and builders of Nigeria's creative industry. These individuals helped shape the systems that define the industry today, creating platforms, institutions, and opportunities that later generations would inherit.
                            </p>
                        </div>
                        <div className="border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                            <span className="text-white/20 font-heading text-6xl block mb-4 leading-none">E</span>
                            <h3 className="font-heading text-3xl mb-4">Executors</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                The current generation of creators and performers building careers within those systems. Artists, actors, performers, and cultural figures who navigate and adapt existing structures to fit a new generation.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 border border-white/10 rounded-2xl p-8 text-center">
                        <p className="font-heading text-2xl md:text-3xl text-white/80">
                            Both groups are equally essential.<br />
                            <span className="text-white/40">CON/FORM places them in conversation, not competition.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* The Two Days */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Structure</span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-black">Two Days. One System.</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="border-l-4 border-primary pl-8">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">March 20, 2026 — UNILAG</span>
                        <h3 className="font-heading font-bold text-2xl mb-3">Day 1: CON</h3>
                        <p className="text-gray-500 leading-relaxed">A guided journey into how culture is built, lived, and sustained. Unfolds through an Opening Address, Panel One (The Architects), a Systems Interlude, and Panel Two (The Executors).</p>
                    </div>
                    <div className="border-l-4 border-black pl-8">
                        <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block mb-2">April 6, 2026 — Egbeda</span>
                        <h3 className="font-heading font-bold text-2xl mb-3">Day 2: FORM</h3>
                        <p className="text-gray-500 leading-relaxed">Day 2 is earned. It is not a random performance. It is the emotional and cultural release of Day 1&apos;s conversations — live performances, DJ sets, visual art &amp; installations, community celebration.</p>
                    </div>
                </div>

                <div className="bg-black text-white p-12 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-heading font-bold text-2xl mb-4">Be Part of the System</h3>
                        <p className="mb-8 text-gray-300">CON/FORM 1.0 is where it all begins. Join us March 20 & April 6, 2026 in Lagos, Nigeria.</p>
                        <KeyButton
                            href="/tickets"
                            variant="secondary"
                            className="px-8 py-3 tracking-widest !border-white"
                        >
                            Get Tickets
                        </KeyButton>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
        </>
    );
}
