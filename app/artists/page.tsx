"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Instagram, Twitter, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Film", "Music", "Fashion", "Visual Art"];

const artists = [
    {
        name: "Shola Bamidele",
        role: "Creative Director/CEO",
        category: "Visual Art",
        bio: "Design is not just what it looks like; it's how it shapes reality.",
        image: "/The Creatives Shaping Culture/Shola.jpeg",
        handle: "SholaBamidele"
    },
    {
        name: "Mastermind",
        role: "Head Of Finace",
        category: "Visual Art",
        bio: "Culture is the ultimate asset, and we are its stewards.",
        image: "/The Creatives Shaping Culture/Mastermind.jpeg",
        handle: "Mastermind"
    },
    {
        name: "Zenith",
        role: "Event Organizer/Admin Manager/Marketing Lead/PA",
        category: "Visual Art",
        bio: "Excellence is in the details of the experience we craft.",
        image: "/The Creatives Shaping Culture/Zenith.jpeg",
        handle: "Zenith"
    },
    {
        name: "Doyin",
        role: "Talent and community manger",
        category: "Visual Art",
        bio: "Community is the heart of every creative movement.",
        image: "/The Creatives Shaping Culture/Doyin.jpeg",
        handle: "Doyin"
    },
    {
        name: "SVNTN",
        role: "Artist/Stage manger",
        category: "Music",
        bio: "The stage is where our collective energy comes alive.",
        image: "/The Creatives Shaping Culture/SVNTN.jpeg",
        handle: "SVNTN"
    },
    {
        name: "LarryStix",
        role: "Producer/Production Manager",
        category: "Music",
        bio: "Precision in production, passion in every sound.",
        image: "/The Creatives Shaping Culture/Larry.jpeg",
        handle: "LarryStix"
    },
    {
        name: "Snow",
        role: "Cinematographer",
        category: "Film",
        bio: "Framing the world through a lens of infinite possibility.",
        image: "/The Creatives Shaping Culture/Snow.jpeg",
        handle: "Snow"
    },
    {
        name: "VOX",
        role: "Artist/A&R",
        category: "Music",
        bio: "The sound of tomorrow is built on the rhythms of today.",
        image: "/The Creatives Shaping Culture/VOX.jpeg",
        handle: "VOX"
    },
    {
        name: "Kreddy",
        role: "Artist",
        category: "Music",
        bio: "True art is uncomfortable; it challenges the status quo.",
        image: "/The Creatives Shaping Culture/Kreddy.jpeg",
        handle: "Kreddy"
    },
    {
        name: "Jackefa",
        role: "Creative",
        category: "Visual Art",
        bio: "Innovation begins where tradition meets exploration.",
        image: "/The Creatives Shaping Culture/Jackefa.jpeg",
        handle: "Jackefa"
    },
    {
        name: "Limz",
        role: "Producer",
        category: "Music",
        bio: "Every beat tells a story that words cannot reach.",
        image: "/The Creatives Shaping Culture/Limz.jpeg",
        handle: "Limz"
    },
    {
        name: "Honeybelle",
        role: "PR Manager/artist",
        category: "Visual Art",
        bio: "The narrative we build is the legacy we leave behind.",
        image: "/The Creatives Shaping Culture/Honeybelle.jpeg",
        handle: "Honeybelle"
    },
    {
        name: "IFE",
        role: "Fashion designer/OAP",
        category: "Fashion",
        bio: "Fashion is the language we speak before we say a word.",
        image: "/The Creatives Shaping Culture/IFE.jpeg",
        handle: "IFE"
    },
    {
        name: "Uduak",
        role: "Communication Lead/OAP",
        category: "Visual Art",
        bio: "Voices amplified through clarity and purpose.",
        image: "/The Creatives Shaping Culture/Uduak.jpeg",
        handle: "Uduak"
    },
    {
        name: "KidHillz",
        role: "Artist/Producer",
        category: "Music",
        bio: "Soundwaves that bridge the gap between dreams and reality.",
        image: "/The Creatives Shaping Culture/KidHillz.jpeg",
        handle: "KidHillz"
    },
    {
        name: "Oporshevy",
        role: "Talent manger",
        category: "Visual Art",
        bio: "Guiding the stars of tomorrow toward their zenith.",
        image: "/The Creatives Shaping Culture/Oporshevy.jpeg",
        handle: "Oporshevy"
    },
    {
        name: "KayCee",
        role: "Dance Instructor/Artist manger",
        category: "Music",
        bio: "Motion is the purest form of human expression.",
        image: "/The Creatives Shaping Culture/KayCee.jpeg",
        handle: "KayCee"
    },
    {
        name: "Creddy",
        role: "Artist",
        category: "Music",
        bio: "Visions translated into vibrant strokes of creativity.",
        image: "/The Creatives Shaping Culture/Creddy.jpeg",
        handle: "Creddy"
    },
    {
        name: "Geexen",
        role: "Artist/Head of Artist Manager",
        category: "Music",
        bio: "Leadership is about empowering every voice in the room.",
        image: "/The Creatives Shaping Culture/GEEXEN.jpeg",
        handle: "Geexen"
    },
    {
        name: "BIDEX",
        role: "Artist",
        category: "Music",
        bio: "Rhythms that resonate with the soul of the culture.",
        image: "/The Creatives Shaping Culture/Bidex.jpeg",
        handle: "BIDEX"
    },
    {
        name: "Arewa",
        role: "Artist",
        category: "Music",
        bio: "Beauty and strength redefined through artistic vision.",
        image: "/The Creatives Shaping Culture/Arewa.jpeg",
        handle: "Arewa"
    },
    {
        name: "Mercy",
        role: "Creative",
        category: "Visual Art",
        bio: "Details define the difference between good and great.",
        image: "/The Creatives Shaping Culture/Mercy.jpeg",
        handle: "Mercy"
    },
    {
        name: "DJ Yinkus",
        role: "DJ/Artist",
        category: "Music",
        bio: "The pulse of the city, captured one track at a time.",
        image: "/The Creatives Shaping Culture/DJ Yinkus.jpeg",
        handle: "DJYinkus"
    },
    {
        name: "Lumi",
        role: "Creative",
        category: "Visual Art",
        bio: "Illuminating the path for future culture shapers.",
        image: "/The Creatives Shaping Culture/Lumi.jpeg",
        handle: "Lumi"
    }
];

export default function Artists() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArtists = artists.filter(artist => {
        const matchesCategory = selectedCategory === "All" || artist.category === selectedCategory;
        const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            artist.role.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Navbar />
            <main className="min-h-screen relative bg-[#050505] selection:bg-primary selection:text-white">

            {/* Cinematic Hero Full-Screen */}
            <section className="relative bg-transparent">
                <div className="relative min-h-[65vh] md:min-h-[85vh] flex items-center justify-center bg-black overflow-hidden">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505] z-10" />
                        <img
                            src="/assets/hero-bg.png"
                            alt="Background"
                            className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-40"
                        />
                    </div>

                    <div className="relative z-30 text-center px-4 max-w-5xl mx-auto pt-32 pb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-primary font-bold tracking-[0.8em] uppercase text-[10px] md:text-xs mb-8 block opacity-80">
                                The Collective
                            </span>
                            <h1 className="font-heading text-4xl md:text-[6.5rem] text-white mb-4 leading-[0.8] tracking-tighter">
                                SHAPING{" "}
                                <br className="md:hidden" />
                                <span className="font-heading tracking-wide text-[3rem] md:text-[5.5rem] inline-block mt-4 uppercase">THE FUTURE</span>
                            </h1>
                            <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.4em] font-light mt-12 max-w-2xl mx-auto">
                                70+ Creatives • Nurtured by Loom Rooms • Validated by the system
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="sticky top-[72px] md:top-24 z-40 -mt-16 md:-mt-24 px-4 h-0 overflow-visible">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-full p-2 flex flex-col md:flex-row items-center gap-3 md:gap-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
                    >
                        {/* Search Input - Full width on mobile */}
                        <div className="relative flex-1 w-full group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors duration-300" size={18} />
                            <input
                                type="text"
                                placeholder="Search the collection..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 md:bg-transparent border-none py-4 md:py-5 pl-14 pr-8 text-sm text-white focus:outline-none placeholder:text-white/20 font-light tracking-wide rounded-full md:rounded-none"
                            />
                        </div>

                        {/* Category Tags - Clean Horizontal Scroll on Mobile */}
                        <div className="relative w-full md:w-auto px-2 md:px-0">
                            <div className="flex items-center gap-1.5 md:pr-1.5 overflow-x-auto scrollbar-hide pb-2 md:pb-0 scroll-smooth">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap min-w-max border ${selectedCategory === cat
                                            ? "bg-white text-black border-white shadow-lg"
                                            : "bg-white/5 text-white/40 border-white/5 hover:text-white hover:bg-white/10"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Artist Grid */}
            <section className="py-32 md:py-48 px-4 max-w-[90rem] mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredArtists.map((artist) => (
                            <motion.div
                                key={artist.name}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-700 hover:border-white/20">
                                    {/* Image */}
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                    />

                                    {/* Bottom Content Always Visible */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                                        <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-4">
                                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] md:text-[9px] mb-2 block">
                                                {artist.category}
                                            </span>
                                            <h3 className="font-heading text-4xl md:text-5xl text-white mb-2 leading-[0.9] tracking-tight">
                                                {artist.name}
                                            </h3>
                                            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-light">
                                                {artist.role}
                                            </p>
                                        </div>

                                        {/* Premium Blur Hover Details */}
                                        <div className="mt-8 transition-all duration-700 pointer-events-auto overflow-visible">
                                            <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700 mb-2">
                                                    <p className="text-white/70 text-xs font-light leading-relaxed mb-8">
                                                        "{artist.bio}"
                                                    </p>
                                                    <div className="flex gap-4">
                                                        <a href={`https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(artist.name)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group/icon">
                                                            <Instagram size={18} className="transition-transform group-hover/icon:scale-110" />
                                                        </a>
                                                        <a href={`https://x.com/search?q=${encodeURIComponent(artist.name)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group/icon">
                                                            <Twitter size={18} className="transition-transform group-hover/icon:scale-110" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Results */}
                {filteredArtists.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-48"
                    >
                        <h3 className="font-heading text-4xl text-white/20 uppercase tracking-[0.2em]">Void</h3>
                        <p className="text-white/10 mt-4 font-light tracking-widest">Adjust your focus or clear filters</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-12 text-primary font-bold hover:text-white transition-colors uppercase text-xs tracking-widest"
                        >
                            Reset
                        </button>
                    </motion.div>
                )}
            </section>

            {/* CTA Final */}
            <section className="relative py-48 overflow-hidden bg-black text-center border-t border-white/5">
                <div className="absolute inset-0 bg-african-pattern opacity-[0.03] mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="font-heading text-[4rem] md:text-[8rem] text-white/10 leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-20 select-none">
                        SONIC ARCHITECTS
                    </h2>
                    <div className="relative z-20">
                        <h2 className="font-heading text-6xl md:text-9xl mb-14 text-white leading-tight text-center">
                            WATCH THEM <br />
                            <span className="tracking-wide font-heading">CREATE</span>
                        </h2>
                        <Link
                            href="/tickets"
                            className="bg-white text-black px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] transition-all inline-block hover:bg-primary hover:text-white hover:scale-110"
                        >
                            Get Tickets
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
        </>
    );
}
