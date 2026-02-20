import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

export default function Tickets() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative bg-primary text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-0"></div>
                <div className="cinematic-bottom-blur" />
                <div className="relative z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Secure Your Spot</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">Limited capacity. 500 Attendees only.</p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-center">

                    {/* Day 1 Card */}
                    <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white order-2 md:order-1">
                        <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Day 1 Only</h3>
                        <div className="text-4xl font-heading font-bold mb-6">₦3,000</div>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">Perfect for those seeking knowledge and networking.</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Full Day 1 Access</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>All panels & workshops</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Networking sessions</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Lunch included</span></li>
                        </ul>

                        <button className="w-full py-4 border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors">
                            Buy Day 1
                        </button>
                    </div>

                    {/* Both Days Card (Highlighted) */}
                    <div className="border-2 border-primary rounded-2xl p-8 shadow-2xl bg-white relative order-1 md:order-2 transform scale-105 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-black px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest shadow-sm">
                            Recommended
                        </div>

                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Full Package</h3>
                        <div className="text-5xl font-heading font-bold mb-2">₦6,000</div>
                        <p className="text-green-600 font-bold text-sm mb-6">Save ₦1,000</p>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">The complete CON/FORM experience.</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start"><Check className="text-secondary bg-black rounded-full p-0.5 mr-3 shrink-0" size={20} /> <span>Full Day 1 & Day 2 Access</span></li>
                            <li className="flex items-start"><Check className="text-secondary bg-black rounded-full p-0.5 mr-3 shrink-0" size={20} /> <span>Free shuttle transport</span></li>
                            <li className="flex items-start"><Check className="text-secondary bg-black rounded-full p-0.5 mr-3 shrink-0" size={20} /> <span>Exclusive merch</span></li>
                            <li className="flex items-start"><Check className="text-secondary bg-black rounded-full p-0.5 mr-3 shrink-0" size={20} /> <span>Priority seating</span></li>
                        </ul>

                        <button className="w-full py-4 bg-primary text-white font-bold uppercase hover:bg-black transition-colors shadow-lg">
                            Buy Full Package
                        </button>
                    </div>

                    {/* Day 2 Card */}
                    <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white order-3">
                        <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Day 2 Only</h3>
                        <div className="text-4xl font-heading font-bold mb-6">₦4,000</div>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">For those who want to experience the energy.</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Full Day 2 Access</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>All performances</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Art exhibitions</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>After-party access</span></li>
                        </ul>

                        <button className="w-full py-4 border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors">
                            Buy Day 2
                        </button>
                    </div>

                </div>

                {/* Info Section */}
                <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <h4 className="font-bold text-lg mb-4">What's Included</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>• Digital ticket sent via email</li>
                            <li>• QR code for entry</li>
                            <li>• Event updates via SMS/WhatsApp</li>
                            <li>• Access to exclusive CON/FORM content</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Group Discounts?</h4>
                        <p className="text-gray-600 mb-4">Bringing a squad? Groups of 10+ get package tickets for ₦5,000 each.</p>
                        <a href="mailto:hello@conform.ng" className="text-primary font-bold underline">Contact us for group booking</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
