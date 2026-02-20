"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VisionSection from "@/components/VisionSection";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* What is Conform Section */}
      <VisionSection />

      {/* Partners / Social Proof */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 bg-african-pattern opacity-[0.03] mix-blend-multiply pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-xs md:text-sm uppercase tracking-[0.4em] font-bold"
          >
            Validated by Culture <span className="mx-2 text-primary/30">•</span> Powered by Community
          </motion.p>
        </div>

        {/* Infinite Marquee */}
        <div className="flex overflow-hidden select-none gap-8 md:gap-16 group relative z-10">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-8 md:gap-16 items-center min-w-full"
          >
            {[
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL",
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL"
            ].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-10 md:px-16 py-8 md:py-10 rounded-[2rem] bg-white/40 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-primary/20 transition-all duration-700 group/item"
              >
                <span className="font-heading text-4xl md:text-6xl text-gray-200 group-hover/item:text-primary group-hover/item:scale-105 transition-all duration-500 tracking-tighter">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
          {/* Duplicate for seamless loop */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-8 md:gap-16 items-center min-w-full"
            aria-hidden="true"
          >
            {[
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL",
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL"
            ].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-10 md:px-16 py-8 md:py-10 rounded-[2rem] bg-white/40 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-primary/20 transition-all duration-700 group/item"
              >
                <span className="font-heading text-4xl md:text-6xl text-gray-200 group-hover/item:text-primary group-hover/item:scale-105 transition-all duration-500 tracking-tighter">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-48 md:w-80 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 md:w-80 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </section>

      {/* The Experience Section */}
      <section ref={containerRef} className="py-32 md:py-56 bg-[#05087c] relative overflow-hidden text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-african-pattern opacity-[0.05] mix-blend-overlay pointer-events-none" />

        {/* Parallax Decorative Glows */}
        <motion.div style={{ y: y1 }} className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] -z-0" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] -z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white/40 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-8 block">The Experience</span>
              <h2 className="font-heading font-normal text-6xl md:text-[9rem] mb-10 leading-[0.8] tracking-tighter transition-all">
                This Isn't Like <br />
                <span className="text-transparent outline-text-white opacity-40 italic font-serif text-[5rem] md:text-[7rem] leading-none block mt-4">Other Events</span>
              </h2>
              <p className="text-white/60 text-xl md:text-3xl font-light leading-relaxed max-w-2xl">
                CON/FORM is a system-building experience. It begins with <span className="text-white italic">honest conversation</span> and culminates in live expression.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                index: "01",
                title: "Cross-Sector",
                desc: "Creatives, brands, and institutions — in one shared space. Each with something to learn. Each with something to offer.",
              },
              {
                index: "02",
                title: "System-Building",
                desc: "Not a conference. Not a festival. A designed experience that moves from honest conversation to collective expression.",
              },
              {
                index: "03",
                title: "Earned Expression",
                desc: "Day 2 is not random. It is the cultural release of Day 1's conversations — performance, art, and celebration as response.",
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] h-full border border-white/10 hover:border-white/25 transition-all duration-700 overflow-hidden group-hover:-translate-y-2">
                  <div className="flex md:flex-col items-start gap-6 p-8 md:p-14">
                    <span className="text-5xl md:text-7xl font-heading text-white/10 group-hover:text-primary transition-all duration-700 shrink-0 leading-none">
                      {item.index}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl md:text-4xl mb-4 md:mb-8 tracking-wide group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-white/40 text-base md:text-xl leading-relaxed font-light group-hover:text-white/70 transition-all duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-primary relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-african-pattern opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-12 text-center relative z-10">
          {[
            { value: "200+", label: "Loom Rooms Alumni" },
            { value: "70+", label: "Performing Artists" },
            { value: "500+", label: "Expected Attendees" },
            { value: "2", label: "Transformative Days" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <p className="text-6xl md:text-7xl font-heading mb-4 text-white tracking-tighter">{stat.value}</p>
              <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 md:py-64 relative overflow-hidden bg-black px-6">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img src="/6.webp" className="w-full h-full object-cover scale-110 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/40 to-black mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white/40 font-bold tracking-[0.6em] uppercase text-xs mb-10 block">Final Call</span>
            <h2 className="font-heading font-normal text-6xl md:text-[10rem] mb-12 leading-[0.85] tracking-tighter">
              Don't Miss <br /><span className="text-white/20 outline-text-white">CON/FORM</span> 1.0
            </h2>
            <p className="text-2xl md:text-4xl mb-20 font-light opacity-70 max-w-3xl mx-auto leading-relaxed">
              March 20-21, 2026. Two days designed to change how you see, build, and express creativity.
            </p>
            <Link
              href="/tickets"
              className="group relative overflow-hidden bg-white text-primary px-16 py-8 text-2xl md:text-3xl font-heading uppercase tracking-[0.3em] transition-all inline-block shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:scale-105"
            >
              <span className="relative z-10">Get Your Tickets</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">Get Your Tickets</span>
            </Link>
            <p className="mt-14 text-xs md:text-sm opacity-40 uppercase tracking-[0.4em] font-medium">Limited capacity. Tickets moving fast.</p>
          </motion.div>
        </div>

        {/* Cinematic Blur Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <Footer />
    </main>
  );
}
