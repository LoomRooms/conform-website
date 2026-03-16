"use client";

import { motion } from "framer-motion";
import KeyButton from "@/components/ui/KeyButton";

// dark: logo is dark-colored → give it a white pill background
// light: logo is light-colored → give it a dark pill background
const sponsors = [
  {
    name: "Loom Rooms",
    image: "/Sponsors/Logos/Loom Rooms Logo.png",
    bg: "light",   // Updated to light
  },
  {
    name: "FIDA",
    image: "/Sponsors/Logos/FIDA.png",
    bg: "light",  // Logo is dark on white → white bg
  },
  {
    name: "TixTango",
    image: "/Sponsors/Logos/Tixtango.png",
    bg: "light",  // Logo likely dark on light
  },
  {
    name: "Dayo McIntosh",
    image: "/Sponsors/Logos/Yateou.jpg.jpeg",
    bg: "light",
  },
  {
    name: "CiDAR Africa",
    image: "/Sponsors/Logos/cidar logo.png",
    bg: "light",
  },
  {
    name: "Alimosho Local Government",
    image: "/Sponsors/Logos/Alimosho-Local-Government.jpg",
    bg: "light",
  },
  {
    name: "Da Circles",
    image: "/Sponsors/Logos/Da-circles-Logo.jpg",
    bg: "light",
  },
  {
    name: "Lagos Art & Tourism",
    image: "/Sponsors/Logos/Lagos Art and Tourism.jpeg",
    bg: "light",
  },
];

// Duplicate for infinite scroll effect
const allSponsors = [...sponsors, ...sponsors, ...sponsors];

export default function SponsorsBar() {
  return (
    <section className="py-10 md:py-14 overflow-hidden relative">
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--tw-gradient-from, currentColor), transparent)" }}
      />
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--tw-gradient-from, currentColor), transparent)" }}
      />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-7"
      >
        <span className="opacity-40 font-bold tracking-[0.6em] uppercase text-[9px] md:text-[10px]">
          Sponsors & Partners
        </span>
      </motion.div>

      {/* Scrolling row */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-3 md:gap-4 w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {allSponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className={`
                relative flex-shrink-0 w-[100px] h-[100px] md:w-[110px] md:h-[110px]
                rounded-[20px] md:rounded-[22px] overflow-hidden
                flex items-center justify-center p-3.5
                border transition-all duration-300
                ${sponsor.bg === "dark"
                  ? "bg-[#0e0e0e] border-white/10 hover:border-white/25"
                  : "bg-white border-black/8 hover:border-black/20"
                }
                shadow-sm hover:shadow-lg hover:-translate-y-0.5
              `}
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-14 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <KeyButton 
            href="/contact" 
            variant="secondary"
            className="px-8 py-4 text-[10px] md:text-xs tracking-[0.3em] font-bold"
          >
            Become a Sponsor / Partner
          </KeyButton>
        </motion.div>
      </div>
    </section>
  );
}
