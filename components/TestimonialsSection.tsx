"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "CON/FORM isn't just an event — it's the language we've been trying to speak for years. Lagos finally has a space where the conversation is as important as the performance.",
    name: "Adewale Fashola",
    role: "Creative Strategist, Lagos",
    image: "/trdforconform.webp",
  },
  {
    quote:
      "I've been to panels, summits, conferences. Nothing has brought together this calibre of thinkers and makers in the same room. What Loom Rooms has built here is rare.",
    name: "Ngozi Okonkwo",
    role: "Founder, Studio North",
    image: "/3.webp",
  },
  {
    quote:
      "This is the kind of event that Nigerian creatives have been building toward — intentional, cultural, and uncompromising in its vision.",
    name: "Emeka Diribe",
    role: "Music Executive & Curator",
    image: "/4.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="opacity-50 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4">
            What They're Saying
          </p>
          <h2 className="font-heading font-normal text-4xl md:text-7xl leading-[0.85] tracking-tighter">
            The Community{" "}
            <span className="font-heading tracking-wide">Speaks</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="h-full border border-gray-100 hover:border-primary/20 rounded-[2.5rem] p-8 md:p-10 bg-white hover:shadow-[0_30px_60px_rgba(5,8,124,0.06)] transition-all duration-700 hover:-translate-y-2">
                {/* Opening quote mark */}
                <span className="block font-heading text-[4rem] leading-[0.5] text-primary/15 mb-6 select-none">
                  "
                </span>

                <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed italic mb-10">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-base text-black tracking-wide leading-tight">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.25em] font-light mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
