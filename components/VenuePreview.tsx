"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import KeyButton from "@/components/ui/KeyButton";

const venues = [
  {
    day: "Day 1 — CON",
    date: "March 20, 2026",
    name: "UNILAG",
    sub: "Afe Babalola Hall, Akoka, Yaba, Lagos",
    time: "11:00 AM – 6:00 PM",
    desc: "Where the conversation begins. A guided journey through culture, systems, and creative infrastructure.",
    image: "/trdforconform.webp",
    mapUrl: "https://maps.google.com/?q=University+of+Lagos",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3893793747554254!3d6.451745793536814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
    accent: "bg-primary",
    tag: "Conference",
  },
  {
    day: "Day 2 — FORM",
    date: "April 6, 2026",
    name: "Loom Rooms",
    sub: "Egbeda, Lagos — Creative Home Base",
    time: "4:00 PM — Late Night",
    desc: "Where expression takes over. Music, fashion, film, visual art. The emotional release of Day 1's conversations.",
    image: "/6.webp",
    mapUrl: "https://maps.google.com/?q=Egbeda+Lagos",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4573046819297!2d3.2694583747568455!3d6.531752193533893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d5a6bfb9a49%3A0x4a5e7b2f28820f1a!2sEgbeda%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
    accent: "bg-white",
    tag: "Expression",
  },
];

export default function VenuePreview() {
  return (
    <section className="relative py-20 md:py-44 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-24"
        >
          <span className="text-gray-300 font-bold tracking-[0.6em] uppercase text-[9px] md:text-xs mb-4 md:mb-6 block flex items-center gap-3">
            <span className="w-6 md:w-8 h-px bg-gray-300 block"></span>
            The Venues
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-heading font-normal text-4xl md:text-7xl leading-[0.85] tracking-tighter">
              Know Where{" "}
              <span className="font-heading tracking-wide text-[2.5rem] md:text-[5.5rem] ml-0 md:ml-1 block md:inline mt-1 md:mt-0">
                to Be
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light max-w-sm leading-relaxed md:text-right">
              Two distinct spaces. Two distinct energies.<br />Plan your movement.
            </p>
          </div>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-16">
          {venues.map((v, idx) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100/60 bg-white hover:border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(5,8,124,0.08)] transition-all duration-700 hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-60 md:h-[22rem] overflow-hidden shrink-0">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80 md:from-black/10" />

                {/* Day badge */}
                <div className="absolute top-5 left-5 md:top-8 md:left-8 flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-black/30 backdrop-blur-xl ring-1 ring-white/20 text-white/90 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                    {v.day}
                  </span>
                  <span className="bg-primary/90 backdrop-blur-xl ring-1 ring-primary/50 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-[0_4px_15px_rgba(0,102,255,0.4)]">
                    {v.tag}
                  </span>
                </div>

                {/* Venue name overlay */}
                <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 mr-5 md:mr-0">
                  <p className="font-heading text-3xl md:text-5xl text-white tracking-tighter leading-none drop-shadow-xl">{v.name}</p>
                </div>
                
                {/* Expand indicator overlay - Hide on mobile since hover behavior isn't intuitive */}
                <div className="hidden md:flex absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ring-1 ring-white/20">
                    <ArrowRight size={18} className="text-white -rotate-45" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 bg-white flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-5 md:mb-6">
                  <div>
                    <p className="text-primary text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-1 md:mb-1.5">{v.date}</p>
                    <p className="text-gray-800 text-sm md:text-base font-medium leading-tight">{v.sub}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs shrink-0 self-start md:self-auto bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    <Clock size={12} className="text-primary" />
                    <span className="font-medium tracking-wide">{v.time}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8 border-t border-gray-100 pt-5 md:pt-6">
                  {v.desc}
                </p>

                <div className="mt-auto">
                    {/* Map Embed */}
                    <div className="w-full h-36 md:h-48 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden mb-5 md:mb-8 ring-1 ring-gray-100 bg-gray-50 relative group/map">
                      {/* Subtle map overlay that vanishes on hover */}
                      <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover/map:opacity-0 transition-opacity duration-500 mix-blend-multiply z-10 hidden md:block" />
                      <iframe
                        src={v.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full md:grayscale-[0.8] md:contrast-125 md:opacity-70 group-hover/map:grayscale-0 group-hover/map:opacity-100 transition-all duration-700"
                      />
                    </div>

                    <KeyButton
                      href={v.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-full justify-center md:w-auto md:justify-start py-3.5 md:py-3 px-6 text-[11px] md:text-sm gap-2 md:gap-3 group/btn"
                    >
                      <MapPin size={14} className="text-primary group-hover/btn:text-black transition-colors" />
                      Get Directions
                      <ArrowRight size={14} className="md:group-hover/btn:translate-x-1 transition-transform duration-300 text-gray-300 group-hover/btn:text-black" />
                    </KeyButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <KeyButton
            href="/experience"
            variant="outline"
            className="px-8 py-4 gap-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-black">
              Full venue details + transport info
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </KeyButton>
        </motion.div>
      </div>
    </section>
  );
}
