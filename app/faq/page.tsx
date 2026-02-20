"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is CON/FORM?",
        answer: "CON/FORM is a two-day cultural platform designed to bring creatives, artisans, entrepreneurs, institutions, and brands into one shared space — to confront how culture is created, funded, governed, and sustained in Nigeria and Africa. It is a system-building experience, beginning with honest conversation and culminating in live expression and performance. It is not positioned as a traditional conference or festival."
    },
    {
        question: "Who is this event for?",
        answer: "CON/FORM is for two groups: Architects — pioneers, industry leaders, and institutional figures who designed or shaped cultural and economic systems — and Executors — emerging creatives, artisans, founders, entrepreneurs, and youth currently operating within those systems. Both are equally essential. CON/FORM places them in conversation, not competition."
    },
    {
        question: "What is the Architects & Executors framework?",
        answer: "The Architects & Executors framework is CON/FORM's core philosophy. It removes hierarchy while honoring experience. Architects are the people who built the systems; Executors are the people living and working inside them. Day 1 brings both groups into honest dialogue — not for celebration, but for accountability, reflection, and collaborative design."
    },
    {
        question: "When and where is it happening?",
        answer: "March 20–21, 2026. Day 1 (CON — Conference) takes place at UNILAG, Afe Babalola Hall, from 11:00 AM – 6:00 PM. Day 2 (FORM — Expression) takes place in Egbeda, Alimosho — the home of Loom Rooms."
    },
    {
        question: "Do I need a ticket for both days?",
        answer: "No! You can buy a Day 1 ticket (₦3,000), Day 2 ticket (₦4,000), or save with the full package for both days (₦6,000)."
    },
    {
        question: "How do I get from Day 1 (UNILAG) to Day 2 (Egbeda)?",
        answer: "Package ticket holders get free shuttle transport from UNILAG to Egbeda on Day 2. Pickup details will be sent via email/SMS."
    },
    {
        question: "What's included in my ticket?",
        answer: "Full access to all sessions, performances, workshops, and networking on your ticketed day(s). Package holders also get free transport, exclusive merch, and priority seating."
    },
    {
        question: "How can my brand or institution get involved?",
        answer: "CON/FORM actively partners with brands and institutions that are willing to engage with the creative community authentically — not as spectators, but as participants. Sponsors appear as environments, not ads. To discuss partnerships or sponsorships, call 09035998080 or email hello@conform.com.ng."
    },
    {
        question: "Is food provided?",
        answer: "Day 1 includes lunch. Day 2 has food and drinks available for purchase."
    },
    {
        question: "Can I get a refund?",
        answer: "Tickets are non-refundable but transferable. Contact us at hello@conform.com.ng to transfer your ticket."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative bg-black text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-15 mix-blend-overlay z-0"></div>
                <div className="cinematic-bottom-blur" />
                <div className="relative z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-300">Everything you need to know about CON/FORM 1.0.</p>
                </div>
            </section>

            {/* Accordion */}
            <section className="py-20 px-4 max-w-3xl mx-auto">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-gray-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                            >
                                <span className="font-bold text-lg pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-primary shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-80 opacity-100 p-6 pt-0" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <a href="/contact" className="text-primary font-bold underline">Contact Us</a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
