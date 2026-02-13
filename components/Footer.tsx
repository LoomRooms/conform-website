import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#05087c] text-white pt-24 pb-12">
            {/* Seamless Spilling Background Image */}
            <div
                className="absolute -top-40 inset-x-0 bottom-0 z-0 pointer-events-none"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)'
                }}
            >
                <img
                    src="/3.png"
                    alt="Footer Background"
                    className="w-full h-full object-cover opacity-60 grayscale brightness-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05087c] via-[#05087c]/60 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Column 1: Brand & Description */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="block mb-8 outline-none group">
                            <img
                                src="/conform-logo.svg"
                                alt="CON/FORM Logo"
                                className="h-16 w-auto transition-transform duration-500 group-hover:scale-105"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs pl-1">
                            Deconstruct. Rebuild. Create. <br />
                            Lagos' first transformative creative summit.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-heading font-normal text-xl mb-6 tracking-widest text-white">General Info</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About CON/FORM</Link></li>
                            <li><Link href="/experience" className="text-white/70 hover:text-white transition-colors">The Experience</Link></li>
                            <li><Link href="/artists" className="text-white/70 hover:text-white transition-colors">Artists & Lineup</Link></li>
                            <li><Link href="/tickets" className="text-white/70 hover:text-white transition-colors">Get Tickets</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support & Social */}
                    <div>
                        <h3 className="font-heading font-normal text-xl mb-6 tracking-widest text-white">Support & FAQ</h3>
                        <ul className="space-y-4 text-sm font-medium mb-8">
                            <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#05087c] transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#05087c] transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#05087c] transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="font-heading font-normal text-xl mb-6 tracking-widest text-white">Contact</h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-center space-x-3">
                                <Mail size={18} />
                                <span>hello@conform.ng</span>
                            </li>
                            <li className="flex items-start space-x-3 leading-relaxed">
                                <span className="mt-1">Loom Rooms Creative Hub, <br />Egbeda, Alimosho, Lagos</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
                        <p>© 2026 CON/FORM. All rights reserved.</p>
                        <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/legal/terms" className="hover:text-white transition-colors">Ticket Terms</Link>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <span>Powered by <span className="text-white/80 font-bold">Loom Rooms</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
