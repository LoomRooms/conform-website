import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mic2, Palette, Film, Shirt, MapPin, Clock } from "lucide-react";
import Timeline from "@/components/Timeline";

export default function Experience() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative bg-black text-white py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-15 mix-blend-overlay z-0"></div>
                <div className="cinematic-bottom-blur" />
                <div className="relative z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">What to Expect at CON/FORM</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-300">Two Days. Two Venues. One Transformative Experience.</p>
                </div>
            </section>

            {/* Day 1: CON */}
            <section className="py-20 px-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3 sticky top-[72px] md:top-32 h-fit relative z-30 md:z-10 -mx-4 px-4 md:mx-0 md:px-0 py-4 md:py-0">
                            {/* Refined Localized Blur for Mobile - Left Side only - Extended up to eliminate peek-through */}
                            <div className="md:hidden absolute top-[-72px] bottom-0 left-0 w-[85%] bg-white/80 backdrop-blur-sm z-0"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to right, black 70%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to right, black 70%, transparent 100%)',
                                    maskComposite: 'intersect',
                                    WebkitMaskComposite: 'source-in'
                                }}
                            />

                            <div className="relative z-10 pt-2 pb-6">
                                <span className="text-primary font-bold tracking-widest uppercase block mb-2 text-xs md:text-base">March 20, 2026</span>
                                <h2 className="font-heading font-bold text-5xl md:text-7xl text-black mb-4 leading-none">CON</h2>
                                <p className="text-xl md:text-2xl font-light text-gray-500 mb-6 font-heading tracking-widest">Conference</p>

                                <div className="flex items-center text-gray-700 mb-2 md:mb-3">
                                    <MapPin className="mr-2 text-primary shrink-0" size={16} />
                                    <span className="text-sm md:text-base">UNILAG, Afe Babalola Hall</span>
                                </div>
                                <div className="flex items-center text-gray-500 mb-4 md:mb-8">
                                    <Clock className="mr-2 text-primary shrink-0" size={16} />
                                    <span className="text-xs md:text-sm tracking-tighter">11:00 AM – 6:00 PM</span>
                                </div>

                                <Link href="/tickets" className="hidden md:inline-block bg-black text-white px-8 py-4 font-heading text-lg tracking-widest hover:bg-primary transition-all hover:scale-105">
                                    Get Day 1 Ticket
                                </Link>
                            </div>
                        </div>

                        <div className="md:w-2/3 space-y-6">
                            <div>
                                <h3 className="font-bold text-2xl mb-3 text-black">A Guided Journey Into the System</h3>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Day 1 is designed as a guided journey into how culture is built, lived, and sustained. Focus: Thought, honesty, structure, and conversation. Every segment intentionally leads into the next.
                                </p>

                                <h4 className="font-bold text-sm mb-6 uppercase tracking-[0.2em] text-gray-400">The Day 1 Experience</h4>
                                <div className="space-y-4">
                                    {[
                                        { time: "11:00 AM", title: "Arrival & Immersion: Entering the System", desc: "LED walls, ambient sound design, and sponsors as environments — not ads. Attendees are not entering an event. They are entering a system." },
                                        { time: "11:20 AM", title: "Opening Address: Why CON/FORM Exists", desc: "Lead Convener Shola Bamidele formally opens the event, frames the Architects & Executors framework, and names the central tension: talent vs structure, culture vs economy." },
                                        { time: "12:00 PM", title: "Panel Session 1 — The Architects", desc: "\"Designing Culture That Lasts.\" Senior cultural figures, institutional leaders, and legacy builders in an honest, reflective, and accountable conversation." },
                                        { time: "1:15 PM", title: "Spoken Word / Poetry Response", desc: "Emotional grounding — translating institutional language into human language. Giving voice to what cannot be said in panels." },
                                        { time: "1:30 PM", title: "The Systems Interlude", desc: "A live systems walkthrough: brands and institutions explain how their operating systems work — and what creatives can learn from them. This is where CON/FORM becomes different from every other creative event." },
                                        { time: "2:00 PM", title: "Networking & Activation Window", desc: "Sponsor activations fully live. Informal conversations sparked by the Systems Interlude. Creatives engage brands with context, not desperation." },
                                        { time: "3:00 PM", title: "Panel Session 2 — The Executors", desc: "\"Living Inside the System.\" Emerging creatives, artisans, founders, and entrepreneurs share honest, evidence-based accounts of daily creative survival, economic pressure, and what support structures are missing." },
                                        { time: "4:30 PM", title: "Brand & Institution Conversations", desc: "Open format: fireside chats, small group conversations, and Q&A circles on how creatives can realistically engage brands — and where collaboration is truly possible." },
                                        { time: "5:30 PM", title: "Day 1 Closing: Holding the Tension", desc: "\"We have named the system. Tomorrow, we will express what it feels like to live inside it.\"" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:bg-gray-50 transition-all duration-200">
                                            <div className="text-primary font-bold text-xs uppercase tracking-wide shrink-0 w-16 pt-0.5">{item.time}</div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Day 2: FORM */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse gap-12">
                        <div className="md:w-1/3 sticky top-[72px] md:top-32 h-fit text-right relative z-30 md:z-10 -mx-4 px-4 md:mx-0 md:px-0 py-4 md:py-0">
                            {/* Refined Localized Blur for Mobile - Right Side only - Extended up to eliminate peek-through */}
                            <div className="md:hidden absolute top-[-72px] bottom-0 right-0 w-[85%] bg-[#F9FAFB]/80 backdrop-blur-sm z-0"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to left, black 70%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to left, black 70%, transparent 100%)',
                                    maskComposite: 'intersect',
                                    WebkitMaskComposite: 'source-in'
                                }}
                            />

                            <div className="relative z-10 pt-2 pb-6">
                                <span className="text-gray-500 font-bold tracking-widest uppercase block mb-2 text-xs md:text-base">March 21, 2026</span>
                                <h2 className="font-heading font-bold text-5xl md:text-7xl text-black mb-4 leading-none">FORM</h2>
                                <p className="text-xl md:text-2xl font-light text-gray-500 mb-6 font-heading tracking-widest">Expression</p>

                                <div className="flex items-center justify-end text-gray-700 mb-4 md:mb-8">
                                    <span className="text-sm md:text-base">Egbeda (Loom Rooms Home)</span>
                                    <MapPin className="ml-2 text-primary shrink-0" size={16} />
                                </div>

                                <Link href="/tickets" className="hidden md:inline-block bg-primary text-white px-8 py-4 font-heading text-lg tracking-widest hover:bg-black transition-all hover:scale-105">
                                    Get Day 2 Ticket
                                </Link>
                            </div>
                        </div>

                        <div className="md:w-2/3 space-y-12">
                            <div>
                                <h3 className="font-bold text-2xl mb-3 text-black">Expression &amp; Release</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">Day 2 is earned. It is not a random performance — it is the emotional and cultural release of Day 1&apos;s conversations. Back in Egbeda, where Loom Rooms was born.</p>
                                <p className="text-primary font-medium italic">&ldquo;If we understand the system better, how do we express ourselves differently?&rdquo;</p>

                                <h4 className="font-bold text-sm mb-6 mt-10 uppercase tracking-[0.2em] text-gray-400">What You&apos;ll Experience</h4>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all">
                                        <Film className="mb-4 text-primary w-7 h-7" />
                                        <h5 className="font-bold mb-2">FILM</h5>
                                        <p className="text-sm text-gray-500">Screenings of original short films by Loom Rooms alumni — creative works as cultural evidence.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all">
                                        <Mic2 className="mb-4 text-primary w-7 h-7" />
                                        <h5 className="font-bold mb-2">MUSIC</h5>
                                        <p className="text-sm text-gray-500">Live performances across genres — Afrobeats, Hip-Hop, Afro-soul, and DJ sets.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all">
                                        <Shirt className="mb-4 text-primary w-7 h-7" />
                                        <h5 className="font-bold mb-2">FASHION</h5>
                                        <p className="text-sm text-gray-500">Runway shows featuring emerging designers — expression through form and identity.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all">
                                        <Palette className="mb-4 text-primary w-7 h-7" />
                                        <h5 className="font-bold mb-2">VISUAL ART</h5>
                                        <p className="text-sm text-gray-500">Live painting, installations, and exhibitions — culture made visible.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Timeline */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <span className="text-primary font-bold tracking-widest uppercase block mb-2">The Schedule</span>
                    <h2 className="font-heading font-bold text-4xl text-black">Event Timeline</h2>
                </div>
                <Timeline />
            </section>

            {/* Vibe Check Section */}
            <section className="py-20 px-4 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-4xl mb-6">The Vibe Check</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Come correct. Here&apos;s what you need to know to survive and thrive at CON/FORM.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-xl mb-4 text-blue-400">Day 1: Smart &amp; Sharp</h3>
                            <p className="text-gray-300 mb-4">It&apos;s a conference, but make it fashion. Think &ldquo;Creative Professional.&rdquo;</p>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Business Casual / Smart Casual</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Comfortable shoes (lots of walking)</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Notebook / Tablet for gems</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-xl mb-4 text-secondary">Day 2: Express Yourself</h3>
                            <p className="text-gray-300 mb-4">No rules. High fashion, streetwear, traditional fusion. Show us who you are.</p>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Bold colors &amp; patterns</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Statement pieces</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Camera ready fits</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-xl mb-4 text-white">Essentials</h3>
                            <p className="text-gray-300 mb-4">Don&apos;t leave home without these.</p>
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
