"use client";

import { useState } from "react";
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
    bio: "The Creative Director and CEO behind CON/FORM, Shola is a visionary leader who has shaped the visual identity of the movement. He challenges how creatives think about legacy and infrastructure.",
    image: "/The Creatives Shaping Culture/Speakers/Shola Bamidele.jpeg",
    handle: "SholaBamidele",
    day: "March 20",
    type: "Panel 1",
  },
  {
    name: "Abiola Laseinde",
    title: "Governance Strategist",
    org: "FIDA / Edniesal Consulting",
    topic: "Africa’s Digital Economy",
    bio: "Abiola Laseinde is a distinguished African business leader and governance strategist with over two decades of experience spanning law, enterprise advisory, and technology leadership. As Founder and CEO of Edniesal Consulting and Convener of the CIO & C-Suite Awards Africa, she leads engagements focused on corporate governance and digital transformation.",
    image: "/The Creatives Shaping Culture/Speakers/Abiola Laseinde .jpg.jpeg",
    handle: "loomrooms",
    day: "March 20",
    type: "Systems Interlude",
  },
  {
    name: "Iyo Prosper",
    title: "Influencer & Content Creator",
    org: "Panelist",
    topic: "The Creator Economy & Digital Culture",
    bio: "A renowned influencer and cultural voice, Iyo Prosper joins CON/FORM as a panelist to discuss the evolving dynamics of digital influence and its impact on modern culture.",
    image: "/The Creatives Shaping Culture/Speakers/IYO.jpeg",
    handle: "iyoprosper",
    day: "March 20",
    type: "Panel 2",
  },
  {
    name: "Kingsley Omeokwe",
    title: "Influencer & Cultural Voice",
    org: "Panelist",
    topic: "Community, Content & The New Creative Class",
    bio: "Kingsley Omeokwe (kingsley_om) is a Nigerian content creator and digital storyteller known for his relatable comedy skits. A first-class graduate, his work transforms ordinary situations into clever storytelling that resonates widely across platforms.",
    image: "/The Creatives Shaping Culture/Speakers/Kingsley.jpeg",
    handle: "kingsleyomeokwe",
    day: "March 20",
    type: "Panel 2",
  },
  {
    name: "Ademola Jokotoye",
    title: "Software Engineer",
    org: "TixTango",
    topic: "Building Powering Community",
    bio: "Ademola Jokotoye is a software engineer with over 7 years of experience building mobile applications at global scale. He is the founder of TixTango, an event and ticketing platform focused on powering community-driven experiences and live events.",
    image: "/The Creatives Shaping Culture/Speakers/Ademola Jokotoye.jpeg",
    handle: "loomrooms",
    day: "March 20",
    type: "Systems Interlude",
  },
  {
    name: "Dayo McIntosh",
    title: "Founder & Creative Builder",
    org: "Yateou / Panthreads",
    topic: "Art, Culture & Technology",
    bio: "Dayo McIntosh is a founder, technologist, and creative builder working at the intersection of art, culture, and technology. She is the founder of Yateou, a robotics and AI company, and Panthreads, a platform for cultural fashion.",
    image: "/The Creatives Shaping Culture/Speakers/Dayo.jpeg",
    handle: "loomrooms",
    day: "March 20",
    type: "Systems Interlude",
  },
  {
    name: "Chef Gibbs",
    title: "Chef & Hospitality Consultant",
    org: "Hospitality Consultant",
    topic: "Culinary Innovation & Cultural Impact",
    bio: "Chef Gbolabo “Chef Gibbs” Adebakin is a visionary culinary director and hospitality expert. He served as Culinary Director for Hilda Baci’s Guinness World Record 100-hour cooking marathon and is the mastermind behind the Bistro at the Theatre.",
    image: "/The Creatives Shaping Culture/Speakers/Cheff Gibbs.jpeg",
    handle: "chefgibbs",
    day: "March 20",
    type: "Panel 2",
  },
  {
    name: "Ugoccie",
    title: "Singer & Artiste",
    org: "Artist",
    topic: "Viral Creativity & Digital Sound",
    bio: "Favour Ugochi Anabelle Anosike, popularly known as Ugoccie, is a Nigerian singer, songwriter, and rapper known for her hit single 'Do You Really Like Me?'. She was a Rookie of the Year nominee at The Headies 2022.",
    image: "/The Creatives Shaping Culture/Speakers/Ugoccie.jpeg",
    handle: "ugoccie",
    day: "March 20",
    type: "Panel 2",
  },
  {
    name: "Gillian Baci",
    title: "Artist & Filmmaker",
    org: "Pop Artist / Author",
    topic: "Digital Storytelling & Philosophical Pop",
    bio: "Gillian Baci is a multi-talented Nigerian pop artist, author, and filmmaker. A graduate of the MultiChoice Talent Factory, he is known for his 'philosophical pop music' and his novel 'A Decent Man'.",
    image: "/The Creatives Shaping Culture/Speakers/Gillian Baci.webp",
    handle: "gillianbaci",
    day: "March 20",
    type: "Panel 2",
  },
  {
    name: "Judith Audu",
    title: "Film Producer & Director",
    org: "Judith Audu Productions",
    topic: "Social Justice in Film",
    bio: "Judith Audu is a multi-award winning Nigerian filmmaker and actress known for films like 'Just Not Married' and 'The Sessions'. She is a passionate advocate for social justice and supports the UN Refugee Agency (UNHCR).",
    image: "/The Creatives Shaping Culture/Speakers/Judith Audu.webp",
    handle: "judithaudu",
    day: "March 20",
    type: "Panel 1",
  },
  {
    name: "Bimbo CiDAR",
    title: "Music Executive",
    org: "CiDAR Africa",
    topic: "Redefining A&R and Marketing",
    bio: "Olamide Abimbola (Bimbo) is a leading music executive and co-founder of CiDAR Africa. He is redefining the A&R field and marketing excellence in Nigeria, having worked on major hits for artists like Fido, Kunmie, and Kidd Carder.",
    image: "/The Creatives Shaping Culture/Speakers/Bimbo headshot.JPG.webp",
    handle: "bimbocidar",
    day: "March 20",
    type: "Panel 1",
  },
  {
    name: "Jide Kene",
    title: "Actor & Model",
    org: "Swanky JKA",
    topic: "Narrative & Screen Excellence",
    bio: "Jide Kene Achufusi (Swanky JKA) is a prominent Nigerian actor and model. He rose to fame for his role in 'Living in Bondage: Breaking Free', earning the Trailblazer Award at the 2020 AMVCA.",
    image: "/The Creatives Shaping Culture/Speakers/Jide Kene.jpg",
    handle: "swankyjka",
    day: "March 20",
    type: "Panel 2",
  },
  {
    name: "Kenzy Udosen",
    title: "Content Creator & Host",
    org: "Madam Theresa",
    topic: "Cultural Commentary & Social Reflections",
    bio: "Kenzy Udosen is a content creator, media personality, and actor best known for the viral character Madam Theresa. He is an AMVCA nominee recognized for his witty cultural commentary and relatable social reflections.",
    image: "/The Creatives Shaping Culture/Speakers/Kenzy Udosen.jpeg",
    handle: "kenzyudosen",
    day: "March 20",
    type: "Panel 2",
  },
  {
    name: "Tacha",
    title: "Media Personality & Entrepreneur",
    org: "Titan",
    topic: "Record-Breaking & Brand Excellence",
    bio: "Anita Natacha Akide (Tacha) is a Nigerian media personality, entrepreneur, and reality TV star. She is a multi-title Guinness World Record holder for cosmetic makeovers and a passionate advocate for philanthropy.",
    image: "/The Creatives Shaping Culture/Speakers/Tacha.png",
    handle: "symply_tacha",
    day: "March 20",
    type: "Panel 2",
  },
];

const typeBadgeColor: Record<string, string> = {
  Keynote: "bg-primary/20 text-primary border-primary/30",
  Panel: "bg-white/10 text-white border-white/15",
  Talk: "bg-white/5 text-white/60 border-white/10",
  Workshop: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export default function Speakers() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (idx: number) => setActiveIdx(prev => prev === idx ? null : idx);

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
          {speakers.map((speaker, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative cursor-pointer"
                onClick={() => toggle(idx)}
              >
                <div className={`relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-neutral-900 border shadow-2xl transition-all duration-700 ${isActive ? "border-white/20" : "border-white/5"}`}>
                  {/* Image */}
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`object-cover w-full h-full transition-all duration-[2s] ${isActive ? "scale-105 opacity-95 grayscale-0" : "opacity-75 grayscale"}`}
                  />

                  {/* Type + Day Badge */}
                  <div className="absolute top-6 left-6 flex gap-2 z-20">
                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full border backdrop-blur-md bg-white/10 text-white border-white/15">
                      {speaker.type}
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full border bg-black/30 text-white/40 border-white/10 backdrop-blur-md">
                      {speaker.day}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                    <div className={`relative z-10 transition-transform duration-700 ${isActive ? "-translate-y-4" : ""}`}>
                      <span className="text-accent font-bold uppercase tracking-[0.3em] text-[8px] md:text-[9px] mb-2 block">
                        {speaker.org}
                      </span>
                      <h3 className="font-heading text-3xl md:text-4xl text-white mb-1 leading-[0.9] tracking-tight">
                        {speaker.name}
                      </h3>
                      <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-light">
                        {speaker.title}
                      </p>
                    </div>

                    {/* Detail Card */}
                    <div className="mt-6 overflow-hidden">
                      <div className={`transition-all duration-500 overflow-hidden ${isActive ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                        <div className={`bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-3xl transition-transform duration-700 mb-2 ${isActive ? "translate-y-0" : "translate-y-4"}`}>
                          <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
                            Speaking on
                          </p>
                          <p className="text-white text-sm font-heading leading-tight mb-4 tracking-wide">
                            &quot;{speaker.topic}&quot;
                          </p>
                          <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                            {speaker.bio}
                          </p>
                          <div className="flex gap-3">
                            <a
                              href={`https://instagram.com/${speaker.handle}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all"
                            >
                              <Instagram size={14} />
                            </a>
                            <a
                              href={`https://x.com/${speaker.handle}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
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
            );
          })}
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
