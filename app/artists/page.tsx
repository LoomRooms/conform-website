import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

// Placeholder data - would eventually come from Supabase
const artists = [
    {
        name: "Chidi Okoro",
        discipline: "Film",
        role: "Director",
        bio: "Award-winning filmmaker bringing Afro-futurist stories to life.",
        image: "/assets/5.png", // Using asset 5 as placeholder
    },
    {
        name: "Amara Nnaji",
        discipline: "Music",
        role: "Neo-Soul Artist",
        bio: "Blending traditional Igbo sounds with modern jazz fusion.",
        image: "/assets/3.png",
    },
    {
        name: "Tunde Bakare",
        discipline: "Visual Art",
        role: "Painter",
        bio: "Exploring the chaos of Lagos through abstract expressionism.",
        image: "/assets/4.png",
    },
    {
        name: "Zainab Yusuf",
        discipline: "Fashion",
        role: "Designer",
        bio: "Sustainable fashion using upcycled Ankara fabrics.",
        image: "/assets/6.png",
    },
    // Add more placeholders to fill grid
    { name: "David West", discipline: "Music", role: "Producer", bio: "Sonic architect behind the new Lagos sound.", image: "/assets/3.png" },
    { name: "Sola Alabi", discipline: "Film", role: "Cinematographer", bio: "Capturing the raw emotion of the streets.", image: "/assets/5.png" },
];

export default function Artists() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="bg-black text-white py-20 px-4 text-center">
                <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Meet the 70+ Creatives</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-400">Shaping the future of culture. Nurtured by Loom Rooms.</p>
            </section>

            {/* Filter Tabs (Visual only for now) */}
            <section className="py-8 border-b border-gray-100 flex justify-center overflow-x-auto">
                <div className="flex space-x-2 px-4 min-w-max">
                    <button className="px-6 py-2 bg-black text-white rounded-full font-medium text-sm">All Artists</button>
                    <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-full font-medium text-sm transition-colors">Film</button>
                    <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-full font-medium text-sm transition-colors">Music</button>
                    <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-full font-medium text-sm transition-colors">Fashion</button>
                    <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-full font-medium text-sm transition-colors">Visual Art</button>
                </div>
            </section>

            {/* Artist Grid */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {artists.map((artist, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4 rounded-sm">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <p className="text-white text-sm font-light italic">{artist.bio}</p>
                                    <div className="flex space-x-3 mt-3 text-white">
                                        <Instagram size={18} />
                                        <Twitter size={18} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-heading font-bold text-xl uppercase tracking-tight">{artist.name}</h3>
                            <p className="text-primary font-medium text-sm uppercase tracking-wider">{artist.discipline} | {artist.role}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <p className="text-gray-500 mb-6">More artists being announced. Follow us for updates.</p>
                    <a href="#" className="inline-flex items-center text-primary font-bold hover:underline">
                        <Instagram className="mr-2" /> Follow on Instagram
                    </a>
                </div>
            </section>

            <section className="bg-secondary/30 py-20 text-center">
                <h2 className="font-heading font-bold text-3xl mb-6">See Them Live at CON/FORM</h2>
                <Link
                    href="/tickets"
                    className="bg-primary hover:bg-black text-white px-8 py-3 text-lg font-bold uppercase tracking-widest transition-all inline-block shadow-lg"
                >
                    Get Tickets
                </Link>
            </section>

            <Footer />
        </main>
    );
}
