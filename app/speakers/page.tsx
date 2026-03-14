"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "Shola Bamidele",
    title: "Creative Director / CEO",
    org: "CONFORM",
    topic: "Designing Systems That Last",
    bio: "The Creative Director and CEO behind CON/FORM, Shola is a visionary leader who has shaped the visual identity of the movement. He challenges how creatives think about legacy and infrastructure. Speaking on Panel 1 — The Architects.",
    image: "/The Creatives Shaping Culture/Speakers/Shola Bamidele.jpeg",
    handle: "SholaBamidele",
    day: "March 20",
    type: "Keynote",
  },
  {
    name: "Chude Jideonwo",
    title: "Journalist & Media Entrepreneur",
    org: "Red Africa / WithChude",
    topic: "Building Narrative Infrastructure for a New Africa",
    bio: "Co-founder of Red Africa and host of #WithChude, Chude Jideonwo is one of Africa's most influential media voices. Forbes 30 Under 30, Yale World Fellow, and a champion of African storytelling at a global scale. Speaking on Panel 1 — The Architects.",
    image: "/The Creatives Shaping Culture/Speakers/Chude Jideonwo.jpeg",
    handle: "chudejideonwo",
    day: "March 20",
    type: "Panel",
  },
  {
    name: "Iyo Prosper",
    title: "Influencer & Content Creator",
    org: "Panelist",
    topic: "The Creator Economy & Digital Culture",
    bio: "A renowned influencer and cultural voice, Iyo Prosper joins CON/FORM as a panelist to discuss the evolving dynamics of digital influence and its impact on modern culture. Speaking on Panel 2 — The Executors.",
    image: "/The Creatives Shaping Culture/Speakers/IYO.jpeg",
    handle: "iyoprosper",
    day: "March 20",
    type: "Panel",
  },
  {
    name: "Kingsley Omeokwe",
    title: "Influencer & Cultural Voice",
    org: "Panelist",
    topic: "Community, Content & The New Creative Class",
    bio: "Kingsley Omeokwe is a prominent influencer and creative community builder whose work bridges digital culture and real-world impact. He speaks to a generation building careers at the intersection of content and culture. Speaking on Panel 2 — The Executors.",
    image: "/The Creatives Shaping Culture/Speakers/Kingsley.jpeg",
    handle: "kingsleyomeokwe",
    day: "March 20",
    type: "Panel",
  },
];

const typeBadgeColor: Record<string, string> = {
  Keynote: "bg-primary/20 text-primary border-primary/30",
  Panel: "bg-white/10 text-white border-white/15",
  Talk: "bg-white/5 text-white/60 border-white/10",
  Workshop: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export default function Speakers() {
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
              className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-30"
            />
          </div>

          <div className="relative z-30 text-center px-4 max-w-5xl mx-auto pt-32 pb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-primary font-bold tracking-[0.8em] uppercase text-[10px] md:text-xs mb-8 block opacity-80">
                The Voices
              </span>
              <h1 className="font-heading text-4xl md:text-[6.5rem] text-white mb-4 leading-[0.8] tracking-tighter">
                The{" "}
                <span className="font-heading tracking-wide text-[3rem] md:text-[5.5rem] inline-block mt-4 uppercase">
                  Architects
                </span>
              </h1>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.4em] font-light mt-12 max-w-2xl mx-auto">
                Practitioners • Founders • Culture Architects • Day 1, CON/FORM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-24 md:py-40 px-4 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-700 hover:border-white/20">
                {/* Image */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105 opacity-75 group-hover:opacity-95 grayscale group-hover:grayscale-0"
                />

                {/* Type + Day Badge */}
                <div className="absolute top-6 left-6 flex gap-2 z-20">
                  <span className={`text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full border backdrop-blur-md ${typeBadgeColor[speaker.type] ?? "bg-white/5 text-white/60 border-white/10"}`}>
                    {speaker.type}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full border bg-black/30 text-white/40 border-white/10 backdrop-blur-md">
                    {speaker.day}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-4">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] md:text-[9px] mb-2 block">
                      {speaker.org}
                    </span>
                    <h3 className="font-heading text-3xl md:text-4xl text-white mb-1 leading-[0.9] tracking-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-light">
                      {speaker.title}
                    </p>
                  </div>

                  {/* Hover Detail Card */}
                  <div className="mt-6 overflow-hidden">
                    <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700 mb-2">
                        <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
                          Speaking on
                        </p>
                        <p className="text-white text-sm font-heading leading-tight mb-4 tracking-wide">
                          "{speaker.topic}"
                        </p>
                        <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                          {speaker.bio}
                        </p>
                        <div className="flex gap-3">
                          <a
                            href={`https://instagram.com/${speaker.handle}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all"
                          >
                            <Instagram size={14} />
                          </a>
                          <a
                            href={`https://x.com/${speaker.handle}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all"
                          >
                            <Twitter size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* CTA Final */}
      <section className="relative py-48 overflow-hidden bg-black text-center border-t border-white/5">
        <div className="absolute inset-0 bg-african-pattern opacity-[0.03] mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white/30 font-bold tracking-[0.6em] uppercase text-xs mb-8 block">
              Hear Them Live
            </span>
            <h2 className="font-heading text-6xl md:text-9xl mb-14 text-white leading-tight">
              BE IN THE <br />
              <span className="tracking-wide font-heading">ROOM</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tickets"
                className="bg-white text-black px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] transition-all inline-block hover:bg-primary hover:text-white hover:scale-110"
              >
                Get Tickets
              </Link>
              <Link
                href="/experience"
                className="border border-white/20 text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] transition-all inline-block hover:border-white hover:scale-105 backdrop-blur-sm"
              >
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
