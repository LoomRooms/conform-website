"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import KeyButton from "@/components/ui/KeyButton";

const featured = [
  {
    name: "Shola Bamidele",
    title: "Creative Director / CEO",
    org: "CONFORM",
    topic: "Designing Systems That Last",
    image: "/The Creatives Shaping Culture/Speakers/Shola Bamidele.jpeg",
    type: "KEYNOTE",
    panel: "Panel 1 — The Architects",
  },
  // {
  //   name: "Chude Jideonwo",
  //   title: "Journalist & Media Entrepreneur",
  //   org: "Red Africa / WithChude",
  //   topic: "Building Narrative Infrastructure for a New Africa",
  //   image: "/The Creatives Shaping Culture/Speakers/Chude Jideonwo.jpeg",
  //   type: "PANEL",
  //   panel: "Panel 1 — The Architects",
  // },
  {
    name: "Abiola Laseinde",
    title: "Governance Strategist",
    org: "FIDA / Edniesal Consulting",
    topic: "Africa’s Digital Economy",
    image: "/The Creatives Shaping Culture/Speakers/Abiola Laseinde .jpg.jpeg",
    type: "PANEL",
    panel: "Panel 1 — The Architects",
  },
  {
    name: "Jennifer Mairo",
    title: "CEO, Joy, Inc.",
    org: "Joy, Inc",
    topic: "Storytelling & Organizational Transformation",
    image: "",
    type: "PANEL",
    panel: "Panel 1 — The Architects",
  },
  {
    name: "Iyo Prosper",
    title: "Influencer & Content Creator",
    org: "Panelist",
    topic: "The Creator Economy & Digital Culture",
    image: "/The Creatives Shaping Culture/Speakers/IYO.jpeg",
    type: "PANEL",
    panel: "Panel 2 — The Executors",
  },
  {
    name: "Kingsley Omeokwe",
    title: "Influencer & Cultural Voice",
    org: "Panelist",
    topic: "Community, Content & The New Creative Class",
    image: "/The Creatives Shaping Culture/Speakers/Kingsley.jpeg",
    type: "PANEL",
    panel: "Panel 2 — The Executors",
  },
  {
    name: "Dayo McIntosh",
    title: "Founder & Creative Builder",
    org: "Yateou / Panthreads",
    topic: "Art, Culture & Technology",
    image: "/The Creatives Shaping Culture/Speakers/Dayo.jpeg",
    type: "PANEL",
    panel: "Panel 2 — The Executors",
  },
  {
    name: "Chef Gibbs",
    title: "Chef & Hospitality Consultant",
    org: "Hospitality Consultant",
    topic: "Culinary Innovation & Cultural Impact",
    image: "/The Creatives Shaping Culture/Speakers/Cheff Gibbs.jpeg",
    type: "PANEL",
    panel: "Panel 2 — The Executors",
  },
];

export default function SpeakersShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="opacity-50 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block flex items-center gap-4">
              <span className="w-8 md:w-12 h-px bg-current opacity-40 block"></span>
              Day 1 — CON
            </span>
            <h2 className="font-heading font-normal text-6xl md:text-[8rem] leading-[0.85] tracking-tighter">
              Featured{" "}
              <span className="font-heading text-[4rem] md:text-[8rem]">
                Speakers
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Interactive Accordion List */}
        <div className="max-w-7xl mx-auto flex flex-col border-t border-current/10">
          {featured.map((speaker, idx) => {
            const isActive = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onClick={() => setHoveredIndex(idx)}
                className="relative border-b border-current/10 cursor-pointer group transition-colors duration-500 overflow-hidden"
                animate={{ height: isActive ? (isMobile ? 380 : 480) : (isMobile ? 80 : 120) }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background Image that fades in when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 top-0 z-0 origin-bottom"
                    >
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover grayscale opacity-20 md:opacity-30 group-hover:grayscale-0 transition-all duration-1000 saturate-150" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 mix-blend-multiply" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-end p-4 md:p-10 pointer-events-none">
                  <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 w-full h-full">
                    
                    {/* Left: Always visible Name & Type */}
                    <div className="flex flex-col justify-center h-full pt-4 md:pt-0">
                      <motion.div 
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                        className="items-center gap-4 hidden md:flex mb-auto pt-2"
                      >
                         <span className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-60">0{idx + 1}</span>
                         <span className="px-3 py-1 border border-current/20 rounded-full text-[9px] uppercase tracking-widest">{speaker.type}</span>
                      </motion.div>
                      
                      <motion.h3 
                        layout
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.95 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-heading text-4xl md:text-7xl tracking-tighter leading-none origin-left mt-auto md:mb-2"
                      >
                        {speaker.name}
                      </motion.h3>
                    </div>

                    {/* Right: Details that fade in when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="flex flex-col md:items-end text-left md:text-right mt-auto pb-2 md:pb-0"
                        >
                          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-50 mb-1">{speaker.org}</p>
                          <p className="text-xl md:text-3xl font-light mb-4 md:mb-6">{speaker.title}</p>
                          
                          <div className="bg-current/5 backdrop-blur-xl border border-current/10 p-4 md:p-6 rounded-2xl w-full md:min-w-[320px]">
                             <p className="text-[9px] uppercase tracking-[0.3em] opacity-50 mb-2 md:mb-3">Speaking On</p>
                             <p className="text-base md:text-xl font-heading tracking-wide">"{speaker.topic}"</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Area: Link */}
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end mt-16 md:mt-24">
          <KeyButton
            href="/speakers"
            variant="secondary"
            className="gap-2 md:gap-3 py-4 px-8 group/btn"
          >
            <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">See Full Lineup</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </KeyButton>
        </div>

      </div>
    </section>
  );
}
