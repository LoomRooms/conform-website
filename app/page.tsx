"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VisionSection from "@/components/VisionSection";
import Link from "next/link";
import { MoveRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* What is Conform Section */}
      <VisionSection />

      {/* Partners / Social Proof */}
      <section className="py-20 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <p className="text-center text-gray-400 text-sm uppercase tracking-[0.3em]">Validated by Culture • Powered by Community</p>
        </div>


        {/* Infinite Marquee */}
        <div className="flex overflow-hidden select-none gap-12 group">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-12 items-center min-w-full"
          >
            {[
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL",
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL"
            ].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-12 py-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-500 group/item"
              >
                <span className="font-heading text-4xl md:text-5xl text-gray-300 group-hover/item:text-primary transition-colors tracking-tighter">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
          {/* Duplicate for seamless loop */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-12 items-center min-w-full"
            aria-hidden="true"
          >
            {[
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL",
              "LOOM ROOMS", "UNILAG", "ALIMOSHO LG", "OBAS SEAL"
            ].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-12 py-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-500 group/item"
              >
                <span className="font-heading text-4xl md:text-5xl text-gray-300 group-hover/item:text-primary transition-colors tracking-tighter">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Seamless Blend Layer */}
        <div className="cinematic-bottom-blur-primary h-24" />
      </section>

      {/* The Experience Section */}
      <section className="py-32 md:py-48 bg-[#05087c] relative overflow-hidden text-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] -z-0" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-white/40 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">The Experience</span>
              <h2 className="font-heading font-normal text-6xl md:text-8xl mb-8 leading-[0.85]">
                This Isn't Like <br /> <span className="text-white/30 outline-text">Other Events</span>
              </h2>
              <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed">
                CON/FORM is a system-building experience. It begins with honest conversation and culminates in live expression and performance.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="glass rounded-2xl md:rounded-3xl h-full border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Mobile: horizontal compact layout / Desktop: vertical card */}
                  <div className="flex md:flex-col items-start gap-4 p-6 md:p-12">
                    <span className="text-4xl md:text-5xl font-heading text-white/10 group-hover:text-white/20 transition-colors shrink-0 leading-none">
                      {item.index}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl md:text-3xl mb-2 md:mb-6 tracking-wide group-hover:translate-x-1 transition-transform">{item.title}</h3>
                      <p className="text-white/50 text-sm md:text-lg leading-relaxed font-light group-hover:text-white/70 transition-colors">
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

      {/* Stats Section / Social Proof 2 */}
      <section className="py-24 bg-primary text-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-heading mb-2 text-white">200+</p>
            <p className="text-white/70 text-xs uppercase tracking-widest">Loom Rooms Alumni</p>
          </div>
          <div>
            <p className="text-5xl font-heading mb-2 text-white">70+</p>
            <p className="text-white/70 text-xs uppercase tracking-widest">Performing Artists</p>
          </div>
          <div>
            <p className="text-5xl font-heading mb-2 text-white">500+</p>
            <p className="text-white/70 text-xs uppercase tracking-widest">Expected Attendees</p>
          </div>
          <div>
            <p className="text-5xl font-heading mb-2 text-white">2</p>
            <p className="text-white/70 text-xs uppercase tracking-widest">Transformative Days</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden bg-primary px-4">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="/6.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
          <div className="cinematic-bottom-blur-primary" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-normal text-6xl md:text-8xl mb-10 leading-[0.9]">
              Don't Miss <br />CON/FORM 1.0
            </h2>
            <p className="text-2xl md:text-3xl mb-16 font-light opacity-80 max-w-2xl mx-auto">
              March 20-21, 2026. Two days that will change how you see creativity.
            </p>
            <Link
              href="/tickets"
              className="bg-white text-primary hover:bg-secondary px-12 py-6 text-2xl font-heading uppercase tracking-[0.2em] transition-all inline-block shadow-2xl hover:scale-105"
            >
              Get Your Tickets Now
            </Link>
            <p className="mt-10 text-sm opacity-60 uppercase tracking-[0.2em]">Limited capacity. Tickets selling fast.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
