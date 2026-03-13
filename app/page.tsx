"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VisionSection from "@/components/VisionSection";
import NewsletterSection from "@/components/NewsletterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpeakersShowcase from "@/components/SpeakersShowcase";
import VenuePreview from "@/components/VenuePreview";
import KeyButton from "@/components/ui/KeyButton";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ColorTrigger = ({
  color,
  textColor,
  setTheme,
  children,
  className = ""
}: {
  color: string;
  textColor: string;
  setTheme: (theme: { bg: string; text: string }) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  // Using -50% to trigger transition as soon as the section enters the middle/starts appearing
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setTheme({ bg: color, text: textColor });
    }
  }, [isInView, color, textColor, setTheme]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

const Counter = ({ value, label }: { value: string; label: string }) => {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setDisplayValue(target);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={countRef}>
      <p className="text-6xl md:text-7xl font-heading mb-4 tracking-tighter opacity-90">
        {displayValue}{value.includes('+') ? '+' : ''}
      </p>
      <motion.p 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold"
      >
        {label}
      </motion.p>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState({ bg: "#000000", text: "#ffffff" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.main 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen transition-colors duration-1000"
    >
      <Navbar currentTheme={theme} />

      <ColorTrigger color="#000000" textColor="#ffffff" setTheme={setTheme}>
        <Hero />
      </ColorTrigger>

      {/* 2nd Section: Dark Blue */}
      <ColorTrigger color="#0A0725" textColor="#ffffff" setTheme={setTheme}>
        <VisionSection />
      </ColorTrigger>

      {/* 3rd & 4th Section: Current/Same Blue */}
      <ColorTrigger color="#100C68" textColor="#ffffff" setTheme={setTheme}>
        <SpeakersShowcase />
      </ColorTrigger>

      {/* "This Isn't Like Other Events": Yellow BG */}
      <ColorTrigger color="#F1F352" textColor="#000000" setTheme={setTheme}>
        <section ref={containerRef} className="py-32 md:py-56 relative overflow-hidden">
          {/* Parallax Decorative Glows - Adjusted for higher visibility on yellow if needed */}
          <motion.div style={{ y: y1 }} className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-0" />
          <motion.div style={{ y: y2 }} className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mb-32">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="opacity-60 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-8 block"
                >
                  The Experience
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="font-heading font-normal text-5xl md:text-[7.5rem] mb-10 leading-[0.8] tracking-tighter"
                >
                  This Isn't Like <br />
                  <span className="font-heading tracking-wider text-[3.5rem] md:text-[6rem] leading-none block mt-4">Other Events</span>
                </motion.h2>
                <p className="opacity-80 text-xl md:text-3xl font-normal leading-relaxed max-w-2xl">
                  CON/FORM is a system-building experience. It begins with <span className="font-bold opacity-100">honest conversation</span> and culminates in live expression.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {[
                {
                  index: "01",
                  title: "Connect & Converse",
                  desc: "Creatives, brands, and institutions in one shared space. Exchanging perspectives, discovering shared challenges, and learning.",
                },
                {
                  index: "02",
                  title: "Converge",
                  desc: "Through honest dialogue, ideas begin to align. Finding where legacy meets adaptation to build new collective understanding.",
                },
                {
                  index: "03",
                  title: "Transform",
                  desc: "Day 2 is the cultural release of Day 1's conversations — a new way of thinking expressed through live performance and art.",
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="bg-current/[0.08] backdrop-blur-xl rounded-[2.5rem] h-full border border-current/20 hover:border-current/40 transition-all duration-700 overflow-hidden group-hover:-translate-y-2">
                    <div className="flex md:flex-col items-start gap-6 p-8 md:p-14">
                      <span className="text-5xl md:text-7xl font-heading opacity-50 group-hover:opacity-80 transition-all duration-700 shrink-0 leading-none">
                        {item.index}
                      </span>
                      <div>
                        <h3 className="font-heading text-2xl md:text-4xl mb-4 md:mb-8 tracking-wide transition-colors">{item.title}</h3>
                        <p className="opacity-80 text-base md:text-xl leading-relaxed font-normal group-hover:opacity-100 transition-all duration-500">
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

        {/* Stats Section Integrated into Yellow Background area */}
        <section className="py-32 relative overflow-hidden px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-12 text-center relative z-10">
            {[
              { value: "200+", label: "Loom Rooms Alumni" },
              { value: "70+", label: "Performing Artists" },
              { value: "500+", label: "Expected Attendees" },
              { value: "2", label: "Transformative Days" }
            ].map((stat, idx) => (
              <Counter key={idx} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>
      </ColorTrigger>

      {/* Know Where To Be: White BG */}
      <ColorTrigger color="#ffffff" textColor="#000000" setTheme={setTheme}>
        <VenuePreview />
      </ColorTrigger>

      {/* Next: Black BG */}
      <ColorTrigger color="#000000" textColor="#ffffff" setTheme={setTheme}>
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="py-48 md:py-64 relative overflow-hidden px-6">
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
              <motion.span 
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-white/40 font-bold tracking-[0.6em] uppercase text-xs mb-10 block"
              >
                Final Call
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading font-normal text-5xl md:text-[8.5rem] mb-12 leading-[0.85] tracking-tighter"
              >
                Don't Miss <br /><span>CON/FORM</span> 1.0
              </motion.h2>
              <p className="text-2xl md:text-4xl mb-20 font-light opacity-70 max-w-3xl mx-auto leading-relaxed">
                March 20 & April 6, 2026. Two days designed to change how you see, build, and express creativity.
              </p>
              {/* 3 CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <KeyButton href="/tickets" variant="secondary" className="px-12 py-6 text-lg md:text-2xl tracking-[0.3em]">
                  Get Tickets
                </KeyButton>
                <KeyButton href="/register" variant="primary" className="px-12 py-6 text-lg md:text-2xl tracking-[0.3em]">
                  Apply as Artist
                </KeyButton>
                <KeyButton href="/sponsors" variant="accent" className="px-12 py-6 text-lg md:text-2xl tracking-[0.3em]">
                  Partner With Us
                </KeyButton>
              </div>
              <p className="mt-14 text-xs md:text-sm opacity-40 uppercase tracking-[0.4em] font-medium">Limited capacity. Tickets moving fast.</p>
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
      </ColorTrigger>

      {/* Newsletter - Back to Dark Blue */}
      <ColorTrigger color="#0A0725" textColor="#ffffff" setTheme={setTheme}>
        <NewsletterSection />
      </ColorTrigger>

      <Footer />
    </motion.main>
  );
}
