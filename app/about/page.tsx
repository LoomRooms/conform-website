import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="bg-primary text-white py-20 md:py-32 px-4 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">The Story Behind CON/FORM</h1>
                <p className="text-xl max-w-2xl mx-auto opacity-90">Born in Egbeda. Validated by tradition. Powered by raw creativity.</p>
            </section>

            {/* Opening Story */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                    <p className="mb-6 text-xl font-medium text-black">
                        In 2020, a creative hub called <span className="text-primary font-bold">Loom Rooms</span> was born in Egbeda, Alimosho. Not in Victoria Island. Not in Lekki. In Egbeda—where most people said creativity couldn't thrive.
                    </p>
                    <p className="mb-8">
                        They were wrong.
                    </p>
                    <p>
                        Loom Rooms has since nurtured 200+ creatives across film, music, fashion, and visual arts. We've proven that talent isn't bound by geography—it's fueled by community, culture, and opportunity.
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Vision</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-black mb-6">Why CON/FORM?</h2>
                        <p className="text-gray-600 mb-6">
                            CON/FORM is the next evolution. It's not just a showcase—it's a movement.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</span>
                                <div>
                                    <h3 className="font-bold text-lg">Day 1 (CON)</h3>
                                    <p className="text-gray-500">We deconstruct the barriers, biases, and old ways of thinking that limit creativity.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-secondary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</span>
                                <div>
                                    <h3 className="font-bold text-lg">Day 2 (FORM)</h3>
                                    <p className="text-gray-500">We rebuild. 70+ artists show you what's possible when creativity is unleashed.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Placeholder Image */}
                    <div className="relative h-[400px] bg-secondary/30 rounded-lg overflow-hidden">
                        {/* Using asset 6 or similar */}
                        <img
                            src="/assets/6.png"
                            alt="Conform Event"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Loom Rooms Story */}
            <section className="py-20 px-4 max-w-4xl mx-auto text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20" />
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-black mb-8">About Loom Rooms</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Founded in Egbeda, Alimosho, Loom Rooms is a creative hub dedicated to nurturing filmmakers, musicians, fashion designers, and visual artists. Our mission is to provide tools, mentorship, and community for emerging creatives who don't have access to traditional resources.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                    <div className="p-6 border border-gray-100 rounded-lg">
                        <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                        <p className="text-gray-500 uppercase text-sm">Alumni</p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-lg">
                        <h3 className="text-4xl font-bold text-primary mb-2">4</h3>
                        <p className="text-gray-500 uppercase text-sm">Disciplines</p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-lg">
                        <h3 className="text-4xl font-bold text-primary mb-2">1</h3>
                        <p className="text-gray-500 uppercase text-sm">Community</p>
                    </div>
                </div>

                <div className="bg-black text-white p-12 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-heading font-bold text-2xl mb-4">Be Part of the Story</h3>
                        <p className="mb-8 text-gray-300">CON/FORM 1.0 is where it all begins. Join us March 20-21, 2026.</p>
                        <Link
                            href="/tickets"
                            className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block"
                        >
                            Get Tickets
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
