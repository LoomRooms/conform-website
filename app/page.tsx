"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MoveRight, CheckCircle2, Star, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      {/* What is Conform Section */}
      <section className="py-24 md:py-40 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-4 block">The Vision</span>
            <h2 className="font-heading font-normal text-5xl md:text-7xl text-black mb-8 leading-[0.9]">
              A Journey From <span className="text-primary italic">Thought</span> to <span className="text-primary italic">Expression</span>
            </h2>
            <p className="text-gray-600 text-xl mb-12 leading-relaxed font-light">
              CON/FORM isn't just an event—it's a two-day transformation. Born in Egbeda, validated by tradition, and powered by raw creativity.
            </p>

            <div className="space-y-10">
              <motion.div
                whileHover={{ x: 10 }}
                className="group border-l-2 border-primary/20 pl-8 hover:border-primary transition-all duration-300"
              >
                <h3 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors">Day 1: CON (Conference)</h3>
                <p className="text-gray-500 text-lg">Deconstruct your assumptions. Challenge your thinking. Reset your creative compass at UNILAG.</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="group border-l-2 border-secondary/20 pl-8 hover:border-secondary transition-all duration-300"
              >
                <h3 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors">Day 2: FORM (Performance)</h3>
                <p className="text-gray-500 text-lg">Witness 70+ artists rebuild culture in real-time. Film. Music. Fashion. Visual art at Egbeda.</p>
              </motion.div>
            </div>

            <Link href="/about" className="inline-flex items-center mt-16 text-primary font-heading hover:text-black transition-all uppercase tracking-[0.2em] group text-lg">
              Read the full story <MoveRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/3.png"
                alt="Creatives collaborating"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="font-heading text-3xl md:text-4xl leading-tight mb-4">"Talent is everywhere. Opportunity is not."</p>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Star className="text-white fill-white" size={20} />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Partners Strip */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm uppercase tracking-[0.3em] mb-8">Validated by Culture • Powered by Community</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo placeholders - as per strategy */}
            <div className="h-8 md:h-12 w-32 bg-gray-300 flex items-center justify-center font-bold text-xs rounded">LOOM ROOMS</div>
            <div className="h-8 md:h-12 w-32 bg-gray-300 flex items-center justify-center font-bold text-xs rounded">UNILAG</div>
            <div className="h-8 md:h-12 w-32 bg-gray-300 flex items-center justify-center font-bold text-xs rounded">ALIMOSHO LG</div>
            <div className="h-8 md:h-12 w-32 bg-gray-300 flex items-center justify-center font-bold text-xs rounded">OBAS SEAL</div>
          </div>
        </div>
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
                We're dismantling the traditional conference model. No boring panels. No fluff. Just raw energy and unfiltered creativity.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Users size={28} />,
                title: "Community Rooted",
                desc: "Born in Egbeda. Blessed by tradition. Built by creators who understand the soul of the city.",
                index: "01"
              },
              {
                icon: <Star size={28} />,
                title: "Career Transforming",
                desc: "Direct access to the gatekeepers. Network with industry leaders and get your work discovered.",
                index: "02"
              },
              {
                icon: <Zap size={28} />,
                title: "Energy Refined",
                desc: "From the hallowed halls of UNILAG to the vibrant streets of Egbeda. Witness 70+ artists.",
                index: "03"
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
                <div className="glass p-10 md:p-12 rounded-3xl h-full border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Card Index Background */}
                  <span className="absolute -top-4 -right-2 text-9xl font-heading text-white opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                    {item.index}
                  </span>

                  {/* Icon Container */}
                  <div className="mb-10 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 ring-1 ring-white/10 shadow-2xl">
                    <div className="text-white group-hover:text-primary transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl mb-6 tracking-wide group-hover:translate-x-1 transition-transform">{item.title}</h3>
                  <p className="text-white/50 text-lg leading-relaxed font-light group-hover:text-white/70 transition-colors">
                    {item.desc}
                  </p>
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
