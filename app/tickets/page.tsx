"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import KeyButton from "@/components/ui/KeyButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tickets() {
    const [loadingState, setLoadingState] = useState({
        isOpen: false,
        targetUrl: '',
        status: '',
        progress: 0
    });

    const handleBuyClick = (e: React.MouseEvent, url: string) => {
        e.preventDefault();
        
        setLoadingState({
            isOpen: true,
            targetUrl: url,
            status: 'Finding ticket availability...',
            progress: 15
        });

        setTimeout(() => {
            setLoadingState(prev => ({ ...prev, status: 'Finding location...', progress: 35 }));
        }, 1200);

        setTimeout(() => {
            setLoadingState(prev => ({ ...prev, status: 'Securing your spot...', progress: 60 }));
        }, 2200);

        setTimeout(() => {
            setLoadingState(prev => ({ ...prev, status: 'Ticket not...', progress: 80 }));
        }, 3000);

        setTimeout(() => {
            const remainingVals = [2, 3, 4, 7];
            const remaining = remainingVals[Math.floor(Math.random() * remainingVals.length)]; 
            setLoadingState(prev => ({ ...prev, status: `Ticket found... ${remaining} remaining.`, progress: 100 }));
        }, 4800);

        setTimeout(() => {
            window.open(url, '_blank');
            setLoadingState(prev => ({ ...prev, isOpen: false }));
        }, 6000);
    };

    // If no URL is provided, default to conformity tickets home
    const fallbackUrl = "https://www.tixtango.com/spotlight/conform-conference";

    return (
        <>
            <Navbar />
            <main className="min-h-screen relative bg-white">

            {/* Header Full-Screen */}
            <section className="relative bg-transparent">
                <div className="relative bg-primary text-white py-24 px-4 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-0"></div>
                    <div className="cinematic-bottom-blur" />
                    <div className="relative z-10">
                        <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white">Secure Your Spot</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90 text-white">Limited capacity. 500 Attendees only.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-center">

                    {/* Day 1 Card */}
                    <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white order-2 md:order-1">
                        <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Day 1 Only (March 20)</h3>
                        <div className="text-4xl font-heading font-bold mb-6">₦3,000</div>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">Perfect for those seeking knowledge and networking.</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Full Day 1 Access</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>All panels & workshops</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Networking sessions</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Lunch included</span></li>
                        </ul>

                        <KeyButton 
                            onClick={(e) => handleBuyClick(e, "https://www.tixtango.com/spotlight/conform-conference")}
                            variant="outline" 
                            className="w-full py-4"
                        >
                            Buy Day 1
                        </KeyButton>
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

                        <KeyButton 
                            variant="primary" 
                            className="w-full py-4"
                            onClick={(e) => handleBuyClick(e, fallbackUrl)}
                        >
                            Buy Full Package
                        </KeyButton>
                    </div>

                    {/* Day 2 Card */}
                    <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white order-3">
                        <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Day 2 Only (April 6)</h3>
                        <div className="text-4xl font-heading font-bold mb-6">₦4,000</div>
                        <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">For those who want to experience the energy.</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Full Day 2 Access</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>All performances</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>Art exhibitions</span></li>
                            <li className="flex items-start"><Check className="text-primary mr-3 shrink-0" size={20} /> <span>After-party access</span></li>
                        </ul>

                        <KeyButton 
                            onClick={(e) => handleBuyClick(e, "https://www.tixtango.com/spotlight/conform-performance")}
                            variant="outline" 
                            className="w-full py-4"
                        >
                            Buy Day 2
                        </KeyButton>
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

            {/* Psychological Loading Screen Overlay */}
            <AnimatePresence>
                {loadingState.isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                        style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-sm rounded-[2rem] p-8 overflow-hidden text-center shadow-2xl"
                            style={{ 
                                background: 'linear-gradient(145deg, #020b24 0%, #051336 100%)',
                                boxShadow: '0 0 40px rgba(0, 150, 255, 0.15), inset 0 0 0 1px rgba(255,255,255,0.05)'
                            }}
                        >
                            {/* Glow effects */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(0,180,255,0.2),transparent_60%)] pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(0,100,255,0.15),transparent_60%)] pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center">
                                <p className="text-[#a4b1cf] text-sm font-medium tracking-wide mb-2">Secure Your Spot</p>
                                <h3 className="text-white text-2xl font-bold mb-8 font-heading tracking-widest min-h-[4rem] flex justify-center items-center leading-snug">
                                    {loadingState.status}
                                </h3>
                                
                                <div className="mt-4 mb-8 w-full">
                                    <div className="w-full h-4 bg-black/50 rounded-full overflow-hidden border border-white/10 p-0.5 shadow-inner">
                                        <motion.div 
                                            className="h-full rounded-full relative overflow-hidden"
                                            style={{ background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)' }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${loadingState.progress}%` }}
                                            transition={{ ease: "easeOut", duration: 0.5 }}
                                        >
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-between items-center mt-3 text-xs font-bold text-[#a4b1cf] tracking-widest uppercase">
                                        <span>Progress</span>
                                        <span>{loadingState.progress}%</span>
                                    </div>
                                </div>
                                
                                <div className="mt-2 w-full">
                                    <button 
                                        disabled 
                                        className="w-full py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest transition-all shadow-[0_4px_20px_rgba(255,255,255,0.25)] border-2 border-white/90"
                                    >
                                        {loadingState.progress === 100 ? 'Redirecting...' : 'Restart Now'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
        </>
    );
}
