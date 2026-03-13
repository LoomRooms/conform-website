"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { FiLogOut, FiZap, FiPlus, FiCheck, FiX } from "react-icons/fi";
import CoinFlip from "./CoinFlip";

interface Profile {
    id: string;
    name: string;
    role: string;
    bio: string | null;
    connections_made: number;
}

interface BumpRequest {
    id: string;
    sender_id: string;
    sender_name?: string;
    sender_role?: string;
    coin_flip_result?: string;
}

export default function NetworkPage() {
    const supabase = createClient();
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<Profile | null>(null);
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(true);
    const [bumpingId, setBumpingId] = useState<string | null>(null);
    const [incomingBump, setIncomingBump] = useState<BumpRequest | null>(null);
    const [activeEncounter, setActiveEncounter] = useState<BumpRequest | null>(null);
    const [flippingResult, setFlippingResult] = useState<"heads" | "tails" | null>(null);

    const fetchProfiles = useCallback(async (currentId: string) => {
        const { data, error } = await supabase
            .from("network_profiles")
            .select("*")
            .eq("is_open_to_bump", true)
            .neq("id", currentId)
            .order("last_active_at", { ascending: false });

        if (!error) setProfiles(data || []);
        setLoading(false);
    }, [supabase]);

    useEffect(() => {
        const storedUser = localStorage.getItem("conform_network_user");
        if (!storedUser) {
            router.push("/network/onboarding");
            return;
        }

        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
        fetchProfiles(parsedUser.id);

        // Real-time Bumps Subscription
        const bumpChannel = supabase
            .channel("network_bumps_realtime")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "network_bumps",
                    filter: `receiver_id=eq.${parsedUser.id}`,
                },
                async (payload: any) => {
                    console.log("Bump Received:", payload);
                    // Fetch sender details to show in modal
                    const { data: sender } = await supabase
                        .from("network_profiles")
                        .select("name, role")
                        .eq("id", payload.new.sender_id)
                        .single();

                    setIncomingBump({
                        id: payload.new.id,
                        sender_id: payload.new.sender_id,
                        sender_name: sender?.name || "Unknown",
                        sender_role: sender?.role || "Creator",
                    });
                }
            )
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "network_bumps",
                },
                async (payload: any) => {
                    // Case 1: You are the SENDER and the receiver just accepted
                    if (payload.new.sender_id === parsedUser.id && payload.new.status === "accepted") {
                        setFlippingResult(payload.new.coin_flip_result as "heads" | "tails");
                    }
                    // Case 2: You are the RECEIVER and you just accepted (local state usually handles this but good for sync)
                    if (payload.new.receiver_id === parsedUser.id && payload.new.status === "accepted") {
                        setFlippingResult(payload.new.coin_flip_result as "heads" | "tails");
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(bumpChannel);
        };
    }, [router, fetchProfiles, supabase]);

    const handleBump = async (targetId: string) => {
        if (!currentUser) return;
        setBumpingId(targetId);

        const { error } = await supabase.from("network_bumps").insert([
            {
                sender_id: currentUser.id,
                receiver_id: targetId,
                status: "pending",
            },
        ]);

        if (error) alert("Failed to bump.");
        else alert("Bump request sent!");

        setBumpingId(null);
    };

    const handleAcceptBump = async () => {
        if (!incomingBump) return;

        const result = Math.random() > 0.5 ? "heads" : "tails";

        const { error } = await supabase
            .from("network_bumps")
            .update({
                status: "accepted",
                coin_flip_result: result
            })
            .eq("id", incomingBump.id);

        if (!error) {
            setIncomingBump(null);
            // No need to alert, flippingResult state will trigger the animation via the Realtime listener
        }
    };

    const handleExit = () => {
        localStorage.removeItem("conform_network_user");
        router.push("/network/onboarding");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
                />
                <p className="font-bebas tracking-widest text-white/40 text-sm">SYNCING NETWORK</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-conform-green selection:text-black">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-conform-blue/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-conform-green/5 rounded-full blur-[150px]" />
            </div>

            {/* Persistent Nav / Header */}
            <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/5 bg-black/50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 font-bebas text-xl">
                            {currentUser?.name[0].toUpperCase()}
                        </div>
                        <div>
                            <p className="font-bebas text-lg leading-none tracking-wide">{currentUser?.name}</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                                {currentUser?.connections_made} CONNECTIONS
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleExit}
                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                            title="Leave Network"
                        >
                            <FiLogOut className="text-white/60 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bebas tracking-tighter leading-none mb-4">
                            THE <span className="text-conform-green">NETWORK</span>
                        </h2>
                        <div className="flex items-center gap-3 text-white/40 font-light max-w-lg">
                            <FiZap className="text-conform-green flex-shrink-0" />
                            <p className="text-sm md:text-base">Real-time encounter hub for CON/FORM attendees. Find, bump, and connect.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <AnimatePresence mode="popLayout">
                        {profiles.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full h-64 border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-white/20"
                            >
                                <FiPlus className="text-4xl mb-4 opacity-20" />
                                <p className="font-bebas tracking-widest uppercase">Waiting for more creators to drop in</p>
                            </motion.div>
                        ) : (
                            profiles.map((profile, index) => (
                                <motion.div
                                    key={profile.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                                >
                                    {/* Glass Highlight */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-bebas text-2xl group-hover:scale-110 transition-transform duration-500">
                                                {profile.name[0].toUpperCase()}
                                            </div>
                                            <div className="flex gap-1">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-1 h-1 rounded-full bg-conform-green animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bebas tracking-tight mb-1 group-hover:text-conform-green transition-colors">
                                            {profile.name}
                                        </h3>
                                        <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-4">
                                            {profile.role}
                                        </p>

                                        {profile.bio && (
                                            <p className="text-white/60 text-sm font-light leading-relaxed mb-8 italic">
                                                "{profile.bio}"
                                            </p>
                                        )}
                                    </div>

                                    <div className="mt-auto flex items-center justify-between relative z-10 pt-6 border-t border-white/5">
                                        <div className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
                                            {profile.connections_made} LINKS
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleBump(profile.id)}
                                            disabled={bumpingId === profile.id}
                                            className="bg-white text-black h-12 px-8 rounded-full font-bebas text-lg tracking-wider hover:bg-conform-green transition-colors disabled:opacity-50"
                                        >
                                            {bumpingId === profile.id ? "BUMPING..." : "BUMP"}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Incoming Bump Modal */}
            <AnimatePresence>
                {incomingBump && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="relative w-full max-w-sm bg-white/5 border border-white/10 rounded-[2.5rem] p-10 text-center overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-conform-green animate-pulse" />

                            <div className="w-24 h-24 rounded-full bg-conform-green/20 border border-conform-green/30 flex items-center justify-center mx-auto mb-8 animate-bounce">
                                <FiZap className="text-4xl text-conform-green" />
                            </div>

                            <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-2">Incoming Bump</p>
                            <h4 className="text-5xl font-bebas mb-1 leading-none">{incomingBump.sender_name}</h4>
                            <p className="text-conform-green font-mono text-[10px] uppercase tracking-widest mb-8">
                                {incomingBump.sender_role}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setIncomingBump(null)}
                                    className="h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-red-500/10 hover:border-red-500/20 transition-all font-bebas text-xl tracking-widest text-white/40 hover:text-red-500"
                                >
                                    DECLINE
                                </button>
                                <button
                                    onClick={handleAcceptBump}
                                    className="h-16 rounded-2xl bg-white text-black flex items-center justify-center group hover:bg-conform-green transition-all font-bebas text-xl tracking-widest"
                                >
                                    ACCEPT
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {flippingResult && (
                    <CoinFlip
                        result={flippingResult}
                        onComplete={() => {
                            setFlippingResult(null);
                            // After flip, we could open the chat or show who is seeking
                        }}
                    />
                )}
            </AnimatePresence>

            <footer className="relative z-10 py-12 px-6 border-t border-white/5 text-center">
                <p className="text-white/10 font-bebas text-4xl tracking-tighter opacity-50">CON/FORM NETWORK</p>
            </footer>
        </div>
    );
}
