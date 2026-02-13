import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mic2, Palette, Film, Shirt, Users, MapPin } from "lucide-react";
import Timeline from "@/components/Timeline";

export default function Experience() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="bg-black text-white py-20 px-4 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">What to Expect at CON/FORM</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-400">Two Days. Two Venues. One Transformative Eperience.</p>
            </section>

            {/* Day 1: CON */}
            <section className="py-20 px-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3 sticky top-24 h-fit">
                            <span className="text-primary font-bold tracking-widest uppercase block mb-2">March 20, 2026</span>
                            <h2 className="font-heading font-bold text-5xl md:text-6xl text-black mb-4">CON</h2>
                            <p className="text-2xl font-light text-gray-500 mb-6">Conference</p>

                            <div className="flex items-center text-gray-700 mb-8">
                                <MapPin className="mr-2 text-primary" />
                                <span>UNILAG Afe Babalola Hall</span>
                            </div>

                            <Link href="/tickets" className="hidden md:inline-block bg-black text-white px-6 py-3 font-bold uppercase hover:bg-primary transition-colors">
                                Get Day 1 Ticket
                            </Link>
                        </div>

                        <div className="md:w-2/3 space-y-12">
                            <div>
                                <h3 className="font-bold text-2xl mb-4 text-black">Deconstruct Your Mind</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">Day 1 is about breaking down barriers—the mental blocks, industry gatekeeping, and limiting beliefs that hold creatives back.</p>

                                <h4 className="font-bold text-lg mb-4 mt-8 uppercase tracking-wide text-gray-400">What You'll Experience</h4>
                                <ul className="grid md:grid-cols-2 gap-6">
                                    <li className="flex items-start">
                                        <span className="bg-primary/10 p-2 rounded mr-4 text-primary"><Users size={20} /></span>
                                        <span>Keynote Speeches from industry leaders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-primary/10 p-2 rounded mr-4 text-primary"><Users size={20} /></span>
                                        <span>Panel Discussions on the creative economy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-primary/10 p-2 rounded mr-4 text-primary"><Users size={20} /></span>
                                        <span>Workshops on film, music, fashion, art</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-primary/10 p-2 rounded mr-4 text-primary"><Users size={20} /></span>
                                        <span>Networking with 300+ creatives</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Day 2: FORM */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse gap-12">
                        <div className="md:w-1/3 sticky top-24 h-fit text-right">
                            <span className="text-secondary font-bold tracking-widest uppercase block mb-2 text-black/60">March 21, 2026</span>
                            <h2 className="font-heading font-bold text-5xl md:text-6xl text-black mb-4">FORM</h2>
                            <p className="text-2xl font-light text-gray-500 mb-6">Performance</p>

                            <div className="flex items-center justify-end text-gray-700 mb-8">
                                <span>Egbeda (Loom Rooms Home)</span>
                                <MapPin className="ml-2 text-secondary fill-current text-black" />
                            </div>

                            <Link href="/tickets" className="hidden md:inline-block bg-primary text-white px-6 py-3 font-bold uppercase hover:bg-black transition-colors">
                                Get Day 2 Ticket
                            </Link>
                        </div>

                        <div className="md:w-2/3 space-y-12">
                            <div>
                                <h3 className="font-bold text-2xl mb-4 text-black">Witness the Rebuild</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">Day 2 is where theory becomes reality. Return to Egbeda—where Loom Rooms was born—and watch 70+ artists create magic.</p>

                                <h4 className="font-bold text-lg mb-4 mt-8 uppercase tracking-wide text-gray-400">What You'll Experience</h4>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                                        <Film className="mb-4 text-primary w-8 h-8" />
                                        <h5 className="font-bold mb-2">FILM</h5>
                                        <p className="text-sm text-gray-500">Screenings of original short films by Loom Rooms alumni.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                                        <Mic2 className="mb-4 text-primary w-8 h-8" />
                                        <h5 className="font-bold mb-2">MUSIC</h5>
                                        <p className="text-sm text-gray-500">Live performances across genres—Afrobeats, Hip-Hop, Afro-soul.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                                        <Shirt className="mb-4 text-primary w-8 h-8" />
                                        <h5 className="font-bold mb-2">FASHION</h5>
                                        <p className="text-sm text-gray-500">Runway shows featuring emerging designers.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                                        <Palette className="mb-4 text-primary w-8 h-8" />
                                        <h5 className="font-bold mb-2">VISUAL ART</h5>
                                        <p className="text-sm text-gray-500">Live painting, installations, and exhibitions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <span className="text-secondary font-bold tracking-widest uppercase block mb-2">The Schedule</span>
                    <h2 className="font-heading font-bold text-4xl text-black">Event Timeline</h2>
                </div>
                {/* Lazy load Timeline to avoid hydration mismatch if possible, but for now direct import is fine */}
                <Timeline />
            </section>

            {/* Vibe Check Section */}
            <section className="py-20 px-4 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-4xl mb-6">The Vibe Check</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Come correct. Here's what you need to know to survive and thrive at CON/FORM.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-xl mb-4 text-primary">Day 1: Smart & Sharp</h3>
                            <p className="text-gray-300 mb-4">It's a conference, but make it fashion. Think "Creative Professional."</p>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Business Casual / Smart Casual</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Comfortable shoes (lots of walking)</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Notebook / Tablet for gems</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-xl mb-4 text-secondary">Day 2: Express Yourself</h3>
                            <p className="text-gray-300 mb-4">No rules. High fashion, streetwear, traditional fusion. Show us who you are.</p>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Bold colors & patterns</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Statement pieces</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Camera ready fits</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-xl mb-4 text-white">Essentials</h3>
                            <p className="text-gray-300 mb-4">Don't leave home without these.</p>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>Power bank (critical)</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>Valid ID for entry</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>Good vibes only</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-primary text-white text-center">
                <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Ready for the Experience?</h2>
                <Link
                    href="/tickets"
                    className="bg-white text-primary hover:bg-black hover:text-white px-10 py-4 text-xl font-bold uppercase tracking-widest transition-all inline-block shadow-lg"
                >
                    Get Your Tickets
                </Link>
            </section>

            <Footer />
        </main>
    );
}
