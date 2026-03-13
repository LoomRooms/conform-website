"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Mail, ImageIcon, FileText, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

const pressDescription = `CON/FORM 1.0 is a two-day cultural experience produced by Loom Rooms, taking place on March 20–21, 2026 in Lagos, Nigeria.

Day 1 (CON — Conference) takes place at UNILAG's Afe Babalola Hall and features keynote speakers, panel discussions, workshops, and brand activations designed around the theme of culture-building and creative systems.

Day 2 (FORM — Expression) returns to Loom Rooms' home base in Egbeda and features live music performances, fashion showcases, film screenings, visual art installations, and cultural celebrations.

The event brings together 70+ performing artists, 200+ Loom Rooms alumni, and 500+ expected attendees from across Nigeria's creative and brand ecosystem.

CON/FORM is not just an event — it is a system-building experience. It begins with honest conversation and culminates in live expression under the banner: Deconstruct. Rebuild. Create.`;

export default function Press() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pressDescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const assets = [
    { label: "CON/FORM Logo (SVG)", href: "/conform-new-logo.svg", icon: <ImageIcon size={18} /> },
    { label: "Event Photos Pack", href: "#", icon: <ImageIcon size={18} /> },
    { label: "Press Release PDF", href: "#", icon: <FileText size={18} /> },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen relative rounded-t-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-[#050505] selection:bg-primary selection:text-white">

      {/* Hero Pod */}
      <section className="relative bg-transparent px-3 md:px-5 pt-4 md:pt-4 pb-0">
        <div className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden rounded-[3rem] md:rounded-[4.5rem]">
          <div className="absolute inset-0 bg-african-pattern opacity-[0.06] mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#050505] pointer-events-none" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-primary font-bold tracking-[0.8em] uppercase text-[10px] md:text-xs mb-8 block">
                Press & Media
              </span>
              <h1 className="font-heading text-4xl md:text-[6rem] text-white mb-6 leading-[0.85] tracking-tighter">
                CON/FORM in the{" "}
                <span className="font-heading tracking-wide text-[2.5rem] md:text-[4.5rem]">
                  Media
                </span>
              </h1>
              <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
                Everything you need to cover CON/FORM 1.0. Download assets, copy the press description, and contact our media team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-40">

        {/* Event Description */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 border-b border-white/10"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-4xl text-white tracking-wide">Event Description</h2>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all border border-white/15 text-white/50 hover:text-white hover:border-white/40 px-5 py-3 rounded-full"
            >
              {copied ? <CheckCheck size={14} className="text-green-400" /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12">
            <p className="text-white/60 text-sm md:text-base font-light leading-loose whitespace-pre-line">
              {pressDescription}
            </p>
          </div>
        </motion.section>

        {/* Fast Facts */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 border-b border-white/10"
        >
          <h2 className="font-heading text-2xl md:text-4xl text-white tracking-wide mb-10">Fast Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Date", value: "March 20–21, 2026" },
              { label: "Location", value: "Lagos, Nigeria" },
              { label: "Artists", value: "70+" },
              { label: "Expected Attendees", value: "500+" },
            ].map((fact) => (
              <div key={fact.label} className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 text-center hover:border-white/25 transition-all duration-300">
                <p className="font-heading text-2xl md:text-3xl text-white mb-2 tracking-tight">{fact.value}</p>
                <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Downloadable Assets */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 border-b border-white/10"
        >
          <h2 className="font-heading text-2xl md:text-4xl text-white tracking-wide mb-10">Downloadable Assets</h2>
          <div className="space-y-4">
            {assets.map((asset) => (
              <a
                key={asset.label}
                href={asset.href}
                download
                className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-[1.5rem] hover:border-white/25 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-white/60 group-hover:text-white">
                  {asset.icon}
                  <span className="text-sm font-light tracking-wide">{asset.label}</span>
                </div>
                <Download size={16} className="text-white/20 group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </motion.section>

        {/* Media Contact */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <h2 className="font-heading text-2xl md:text-4xl text-white tracking-wide mb-10">Media Contact</h2>
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-white font-heading text-xl md:text-2xl mb-1">CON/FORM Press Team</p>
              <p className="text-white/40 text-sm font-light mb-4">Loom Rooms — Creative & Cultural Division</p>
              <p className="text-white/30 text-xs uppercase tracking-[0.3em]">For interviews, coverage, and accreditation requests</p>
            </div>
            <a
              href="mailto:press@conform.com.ng"
              className="group flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-[0.2em] shrink-0"
            >
              <Mail size={16} />
              press@conform.com.ng
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link href="/contact" className="text-white/30 text-xs uppercase tracking-[0.3em] hover:text-white transition-colors">
              General enquiries → /contact
            </Link>
          </div>
        </motion.section>

      </div>

      <Footer />
    </main>
    </>
  );
}
