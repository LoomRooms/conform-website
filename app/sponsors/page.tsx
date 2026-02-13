import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Mail, ArrowRight, Star, Award, Heart } from "lucide-react";

export default function Sponsors() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-black text-white py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Partnership Opportunities
                    </span>
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                        Power the Future of Creativity
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-80 mb-10">
                        Join us in shaping the narrative of African creativity. Connect with over 500+ creatives, industry leaders, and tastemakers.
                    </p>
                    <a
                        href="#contact"
                        className="bg-primary text-white hover:bg-white hover:text-primary px-8 py-4 font-bold uppercase tracking-widest transition-all inline-flex items-center group"
                    >
                        Become a Partner <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

            {/* Why Sponsor Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-black mb-4">
                        Why Partner with CON/FORM?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Beyond brand visibility, you're investing in the next generation of creative leadership.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-primary">
                            <UsersIcon />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Targeted Reach</h3>
                        <p className="text-gray-600">
                            Access a highly engaged audience of Gen Z and Millennial creatives, early adopters, and cultural influencers.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Star />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Brand Affinity</h3>
                        <p className="text-gray-600">
                            Align your brand with innovation, community empowerment, and the renowned "Egbeda to the World" movement.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Heart />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Social Impact</h3>
                        <p className="text-gray-600">
                            Directly support the Loom Rooms ecosystem, providing resources and opportunities for underrepresented talent.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sponsorship Tiers */}
            <section className="py-20 px-4 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                            Sponsorship Packages
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Choose a tier that aligns with your brand goals. Custom packages available.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Silver Tier */}
                        <div className="border border-gray-700 rounded-xl p-8 hover:border-gray-500 transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-2xl text-gray-300">Silver</h3>
                                <Award className="text-gray-400 w-8 h-8" />
                            </div>
                            <p className="text-2xl font-bold mb-6">₦500,000</p>
                            <ul className="space-y-4 text-gray-400 mb-8">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>Logo on website footer</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>Social media mention (1 post)</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>2 VIP Tickets</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>Screen projection mention</span>
                                </li>
                            </ul>
                            <a href="#contact" className="block text-center border border-white/20 hover:bg-white hover:text-black py-3 rounded font-bold transition-all">
                                Select Silver
                            </a>
                        </div>

                        {/* Gold Tier */}
                        <div className="border border-primary rounded-xl p-8 bg-gray-800 relative transform md:-translate-y-4 shadow-xl">
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl">POPULAR</div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-2xl text-secondary">Gold</h3>
                                <Award className="text-secondary w-8 h-8" />
                            </div>
                            <p className="text-3xl font-bold mb-6">₦2,000,000</p>
                            <ul className="space-y-4 text-gray-300 mb-8">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-primary shrink-0" />
                                    <span>Priority Logo placement</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-primary shrink-0" />
                                    <span>Dedicated Social media campaign</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-primary shrink-0" />
                                    <span>5 VIP Tickets</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-primary shrink-0" />
                                    <span>Booth space at Conference</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-primary shrink-0" />
                                    <span>Speaking slot (Panel)</span>
                                </li>
                            </ul>
                            <a href="#contact" className="block text-center bg-primary text-white hover:bg-white hover:text-primary py-3 rounded font-bold transition-all">
                                Select Gold
                            </a>
                        </div>

                        {/* Platinum Tier */}
                        <div className="border border-gray-700 rounded-xl p-8 hover:border-gray-500 transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-2xl text-gray-300">Platinum</h3>
                                <Award className="text-gray-400 w-8 h-8" />
                            </div>
                            <p className="text-2xl font-bold mb-6">₦5,000,000</p>
                            <ul className="space-y-4 text-gray-400 mb-8">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>Headline Sponsor Status</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>Logo on all printed materials</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>10 VIP Tickets + Backstage access</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>Keynote Speaking Slot</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                    <span>Dedicated Branded Experience</span>
                                </li>
                            </ul>
                            <a href="#contact" className="block text-center border border-white/20 hover:bg-white hover:text-black py-3 rounded font-bold transition-all">
                                Select Platinum
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contract Section */}
            <section id="contact" className="py-20 px-4 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-heading font-bold text-3xl text-black mb-4">
                        Let's Make History Together
                    </h2>
                    <p className="text-gray-600">
                        Fill out the form below and our partnerships team will get back to you within 24 hours.
                    </p>
                </div>

                <form className="space-y-6 bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="Your Company" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="John Doe" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" placeholder="+234..." />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Interested Tier</label>
                        <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition">
                            <option>Select a tier...</option>
                            <option>Platinum (Headline)</option>
                            <option>Gold (Major Partner)</option>
                            <option>Silver (Supporter)</option>
                            <option>Custom Package</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                        <textarea className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition h-32" placeholder="Tell us about your brand goals..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded uppercase tracking-wider hover:bg-black transition-colors shadow-lg">
                        Submit Partnership Request
                    </button>
                </form>
            </section>

            <Footer />
        </main>
    );
}

function UsersIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    )
}
