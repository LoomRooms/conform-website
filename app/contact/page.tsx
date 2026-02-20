"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would integrate with Supabase or a form handler
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative bg-primary text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-0"></div>
                <div className="cinematic-bottom-blur" />
                <div className="relative z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white">Get in Touch</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90 text-white">Sponsorships, Partnerships, Media, and General Inquiries &mdash; we&apos;d love to connect.</p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Contact Details */}
                    <div>
                        <h2 className="font-heading font-bold text-3xl mb-8">Contact Information</h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-full mr-6 text-primary">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <a href="mailto:hello@conform.com.ng" className="text-gray-600 hover:text-primary transition-colors block">hello@conform.com.ng</a>
                                    <p className="text-sm text-gray-400 mt-1">General inquiries &amp; ticket support</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-full mr-6 text-primary">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call / WhatsApp</h3>
                                    <p className="text-gray-600 font-medium">09035998080</p>
                                    <p className="text-sm text-gray-400 mt-1">Lead Convener: Shola Bamidele &mdash; Sponsorships &amp; Partnerships</p>
                                    <p className="text-sm text-gray-400">Mon–Sat, 9AM–6PM</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-full mr-6 text-primary">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-600">Loom Rooms Creative Hub</p>
                                    <p className="text-gray-600">Egbeda, Alimosho, Lagos</p>
                                    <p className="text-sm text-gray-400 mt-1">By appointment only</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-primary transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-primary transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-primary transition-colors"><Facebook size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
                                    <Mail size={32} />
                                </div>
                                <h3 className="font-bold text-2xl mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-primary font-bold underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="font-heading font-bold text-2xl mb-6">Send a Message</h2>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                        <option>General Inquiry</option>
                                        <option>Partnership / Sponsorship</option>
                                        <option>Press / Media</option>
                                        <option>Ticket Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-black text-white font-bold uppercase py-4 rounded-lg hover:bg-primary transition-colors shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
