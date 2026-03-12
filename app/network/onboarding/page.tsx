"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/lib/supabase/client";
import { motion, AnimatePresence } from "framer-motion";

export default function OnboardingPage() {
    const supabase = createClient();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        bio: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const userId = uuidv4();

        const { data, error } = await supabase
            .from("network_profiles")
            .insert([
                {
                    id: userId,
                    name: formData.name,
                    role: formData.role,
                    bio: formData.bio,
                },
            ])
            .select()
            .single();

        if (error) {
            console.error("Error creating profile:", error);
            alert("Failed to create profile. Please try again.");
            setLoading(false);
            return;
        }

        localStorage.setItem("conform_network_user", JSON.stringify(data));
        router.push("/network");
    };

    return (
        <div className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-conform-blue/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-conform-green/10 rounded-full blur-[120px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm z-10"
            >
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4"
                    >
                        Digital pass v1.0
                    </motion.div>
                    <h1 className="text-6xl font-bebas tracking-tight mb-2">
                        DROP <span className="text-conform-green italic text-5xl">IN</span>
                    </h1>
                    <p className="text-white/40 font-light text-sm">
                        Ready to encounter the network.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <input
                            type="text"
                            name="name"
                            required
                            maxLength={50}
                            placeholder="NAME / MONIKER"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-bebas tracking-wider text-xl"
                        />
                    </div>

                    <div className="space-y-1">
                        <input
                            type="text"
                            name="role"
                            required
                            maxLength={50}
                            placeholder="ROLE / CRAFT"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-bebas tracking-wider text-xl"
                        />
                    </div>

                    <div className="space-y-1">
                        <textarea
                            name="bio"
                            maxLength={150}
                            placeholder="WHAT ARE YOU SEARCHING FOR?"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light text-sm resize-none"
                        />
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="w-full relative group overflow-hidden bg-white text-black font-bebas text-2xl tracking-[0.1em] py-5 rounded-xl transition-all"
                    >
                        <div className="absolute inset-0 bg-conform-green translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-black">
                            {loading ? "INITIALIZING..." : "ENTER NETWORK"}
                        </span>
                    </motion.button>
                </form>
            </motion.div>

            <div className="absolute bottom-8 text-[10px] text-white/20 font-mono tracking-widest uppercase">
                CON/FORM // NETWORK // 2026
            </div>
        </div>
    );
}
