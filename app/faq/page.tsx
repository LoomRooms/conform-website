"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is CON/FORM?",
        answer: "CON/FORM is a two-day creative summit featuring a conference (Day 1) and performance showcase (Day 2) with 70+ artists across film, music, fashion, and visual art. It's organized by Loom Rooms in Egbeda, Alimosho."
    },
    {
        question: "When and where is it happening?",
        answer: "March 20-21, 2026. Day 1 (Conference) at UNILAG Afe Babalola Hall. Day 2 (Performance) in Egbeda, Alimosho."
    },
    {
        question: "Do I need a ticket for both days?",
        answer: "No! You can buy a Day 1 ticket (₦3,000), Day 2 ticket (₦4,000), or save money with the package for both days (₦6,000)."
    },
    {
        question: "How do I get from Day 1 (UNILAG) to Day 2 (Egbeda)?",
        answer: "Package ticket holders get free shuttle transport from UNILAG to Egbeda on Day 2. Pickup details will be sent via email/SMS."
    },
    {
        question: "Can I attend Day 2 only?",
        answer: "Yes! Day 2 tickets are available for ₦4,000."
    },
    {
        question: "What's included in my ticket?",
        answer: "Full access to all sessions, performances, workshops, and networking on your ticketed day(s). Package holders also get free transport, exclusive merch, and priority seating."
    },
    {
        question: "Is food provided?",
        answer: "Day 1 includes lunch. Day 2 has food and drinks available for purchase."
    },
    {
        question: "Can I get a refund?",
        answer: "Tickets are non-refundable but transferable. Contact us at hello@conform.ng to transfer your ticket."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="bg-black text-white py-20 px-4 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Frequently Asked Questions</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-400">Everything you need to know about CON/FORM 1.0.</p>
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
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100 p-6 pt-0" : "max-h-0 opacity-0"
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
