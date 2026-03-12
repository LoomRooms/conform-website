"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const featured = [
  {
    name: "Tunde Oladele",
    title: "Creative Director",
    org: "Pan-African Design Studio",
    topic: "Designing Systems That Last",
    image: "/trdforconform.webp",
    type: "Keynote",
  },
  {
    name: "Adaeze Nwosu",
    title: "Founder",
    org: "Lagos Fashion Week",
    topic: "Building Industry From Culture",
    image: "/3.webp",
    type: "Panel",
  },
  {
    name: "Emeka Eze",
    title: "Tech Entrepreneur",
    org: "The Builder's Table",
    topic: "When Technology Meets Culture",
    image: "/4.webp",
    type: "Talk",
  },
  {
    name: "Caleb O.",
    title: "Systems Architect",
    org: "Loom Rooms",
    topic: "The Blueprint",
    image: "/6.webp",
    type: "Keynote",
  },
  {
    name: "Tomiwa A.",
    title: "Culture Analyst",
    org: "Native Networks",
    topic: "The Next Decade",
    image: "/afdabts.png",
    type: "Panel",
  }
];

const others = [
  { name: "Yetunde B.", image: "/6.webp" },
  { name: "Biodun A.", image: "/afdabts.png" },
  { name: "Chisom A.", image: "/3.webp" },
  { name: "Kemi O.", image: "/4.webp" },
];

export default function SpeakersShowcase() {
  const [active, setActive] = useState(2); // Start in middle
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => setActive((prev) => (prev + 1) % featured.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + featured.length) % featured.length);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="relative bg-white py-20 md:py-40 overflow-hidden perspective-[2000px]">
      <div className="absolute inset-0 bg-african-pattern opacity-[0.02] mix-blend-multiply pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-400 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block flex items-center gap-3">
              <span className="w-6 md:w-8 h-px bg-primary/50 block"></span>
              Day 1 — CON
            </span>
            <h2 className="font-heading font-normal text-5xl md:text-8xl text-black leading-[0.85] tracking-tighter drop-shadow-sm">
              Featured{" "}
              <span className="text-transparent outline-text italic font-serif text-[2.8rem] md:text-[6.5rem]">
                Speakers
              </span>
            </h2>
          </motion.div>
        </div>

        {/* 3D Cover Flow Slider */}
        <div 
          className="relative h-[380px] md:h-[600px] w-full flex items-center justify-center mb-10 md:mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {featured.map((speaker, index) => {
            // Calculate distance from active index
            let diff = index - active;
            // Handle wrap-around for smooth infinite look (for 5 items)
            if (diff > 2) diff -= featured.length;
            if (diff < -2) diff += featured.length;

            const isActive = diff === 0;
            const absDiff = Math.abs(diff);

            // Hide cards that are too far away
            if (absDiff > 2) return null;

            // Mobile-specific 3D values
            const xOffset = isMobile ? diff * 110 : diff * 250;
            const zOffset = isMobile ? (isActive ? 0 : -100 - absDiff * 80) : (isActive ? 0 : -200 - absDiff * 100);
            const rotateY = isMobile ? (isActive ? 0 : diff < 0 ? 25 : -25) : (isActive ? 0 : diff < 0 ? 35 : -35);
            const scaleOffset = isMobile ? (isActive ? 1 : 1 - absDiff * 0.1) : (isActive ? 1 : 1 - absDiff * 0.15);

            return (
              <motion.div
                key={index}
                className={`absolute w-[260px] md:w-[400px] h-[360px] md:h-[520px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer bg-white ${isActive ? "shadow-[0_20px_50px_rgba(0,0,0,0.15)]" : "shadow-lg"}`}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  rotateY: rotateY,
                  scale: scaleOffset,
                  opacity: isActive ? 1 : 1 - absDiff * 0.4,
                  zIndex: featured.length - absDiff,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(index)}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${isActive ? "grayscale-0" : "grayscale opacity-70 hover:opacity-100"}`}
                />
                
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />
                
                {/* Active Border Glow */}
                <motion.div 
                    className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none border-2 border-primary/0"
                    animate={{ borderColor: isActive ? "rgba(0,102,255,0.4)" : "rgba(255,255,255,0.1)" }}
                    transition={{ duration: 0.4 }}
                />

                {isActive && (
                    <motion.div 
                      className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,102,255,0.15)] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.div
                    animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] block mb-1.5 md:mb-2">{speaker.org}</span>
                    <h3 className="font-heading text-2xl md:text-5xl text-white leading-tight mb-1 md:mb-2 tracking-tight drop-shadow-md">{speaker.name}</h3>
                    <p className="text-white/80 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium mb-4 md:mb-6">{speaker.title}</p>
                    
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="border-t border-white/20 pt-4 md:pt-5 mt-2 bg-gradient-to-r from-white/[0.05] to-transparent -mx-6 md:-mx-8 px-6 md:px-8 pb-2"
                      >
                        <p className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-1 md:mb-1.5">Speaking on</p>
                        <p className="text-white text-xs md:text-[15px] font-heading tracking-wide">"{speaker.topic}"</p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Controls */}
          <div className="absolute bottom-[-10px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-12 pointer-events-none z-50">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-500 hover:text-black hover:border-primary hover:bg-gray-50 pointer-events-auto transition-all shadow-md focus:outline-none touch-manipulation"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-500 hover:text-black hover:border-primary hover:bg-gray-50 pointer-events-auto transition-all shadow-md focus:outline-none touch-manipulation"
            >
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Area: Avatars and Link */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8 mt-12 md:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 sm:gap-8 bg-gray-50 border border-gray-100 py-4 px-6 md:py-5 md:px-8 rounded-full shadow-sm w-full sm:w-auto justify-between sm:justify-start"
          >
            {/* Stacked avatars */}
            <div className="flex items-center">
              {others.map((o, i) => (
                <div
                  key={o.name}
                  title={o.name}
                  style={{ marginLeft: i === 0 ? 0 : -10, zIndex: others.length - i }}
                  className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white ring-1 ring-gray-100 transition-transform duration-500 hover:z-50 hover:scale-110 shadow-lg"
                >
                  <img src={o.image} alt={o.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
              <div
                style={{ marginLeft: -10 }}
                className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 border-2 border-white ring-1 ring-primary flex items-center justify-center shrink-0"
              >
                <span className="text-primary text-[8px] md:text-[10px] font-bold">+ 12</span>
              </div>
            </div>

            <div className="w-px h-6 md:h-8 bg-gray-200" />

            <Link
              href="/speakers"
              className="group flex items-center gap-2 md:gap-3 text-gray-500 hover:text-black transition-all duration-300"
            >
              <span className="text-[9px] md:text-xs font-medium tracking-[0.2em] uppercase">Full Lineup</span>
              <motion.span
                className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500"
                whileHover={{ x: 3 }}
              >
                <ArrowRight size={12} className="text-gray-400 group-hover:text-primary transition-colors md:w-[14px] md:h-[14px]" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

