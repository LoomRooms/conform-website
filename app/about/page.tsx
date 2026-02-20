import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative bg-primary text-white py-24 md:py-32 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-0"></div>
                <div className="cinematic-bottom-blur" />
                <div className="relative z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">The Story Behind CON/FORM</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">A Cultural System for Conversation, Creation &amp; Continuity.</p>
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
                        <h2 className="font-heading font-normal text-5xl md:text-7xl mb-6 leading-[0.9]">Architects <span className="text-white/30">&amp;</span> Executors</h2>
                        <p className="text-white/60 text-xl leading-relaxed">
                            CON/FORM introduces a framework that removes hierarchy while honoring experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                            <span className="text-white/20 font-heading text-6xl block mb-4 leading-none">A</span>
                            <h3 className="font-heading text-3xl mb-4">Architects</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Individuals who designed or shaped cultural, creative, and economic systems — pioneers, industry leaders, and institutional figures. They built the rooms that others now operate in.
                            </p>
                        </div>
                        <div className="border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                            <span className="text-white/20 font-heading text-6xl block mb-4 leading-none">E</span>
                            <h3 className="font-heading text-3xl mb-4">Executors</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Individuals currently operating within those systems — emerging creatives, artisans, founders, entrepreneurs, and youth. They are building the future from within.
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
                        <p className="text-gray-500 leading-relaxed">A guided journey into how culture is built, lived, and sustained. Thought. Honesty. Structure. Conversation. Every segment intentionally leads into the next.</p>
                    </div>
                    <div className="border-l-4 border-black pl-8">
                        <span className="text-gray-400 font-bold tracking-widest uppercase text-xs block mb-2">March 21, 2026 — Egbeda</span>
                        <h3 className="font-heading font-bold text-2xl mb-3">Day 2: FORM</h3>
                        <p className="text-gray-500 leading-relaxed">Day 2 is earned. It is not a random performance. It is the emotional and cultural release of Day 1&apos;s conversations — live performances, DJ sets, visual art &amp; installations, community celebration.</p>
                    </div>
                </div>

                <div className="bg-black text-white p-12 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-heading font-bold text-2xl mb-4">Be Part of the System</h3>
                        <p className="mb-8 text-gray-300">CON/FORM 1.0 is where it all begins. Join us March 20–21, 2026 in Lagos, Nigeria.</p>
                        <Link
                            href="/tickets"
                            className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block"
                        >
                            Get Tickets
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
