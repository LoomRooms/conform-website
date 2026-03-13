"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CoinFlipProps {
    onComplete: (result: "heads" | "tails") => void;
    result: "heads" | "tails";
}

export default function CoinFlip({ onComplete, result }: CoinFlipProps) {
    const [isFlipping, setIsFlipping] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFlipping(false);
            setTimeout(() => onComplete(result), 2000);
        }, 3000); // Animation duration
        return () => clearTimeout(timer);
    }, [onComplete, result]);

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-3xl">
            <div className="text-center">
                <div className="relative w-48 h-48 perspective-1000 mx-auto mb-12">
                    <motion.div
                        initial={{ rotateY: 0, y: 100, opacity: 0 }}
                        animate={{
                            rotateY: isFlipping ? [0, 1800] : result === "heads" ? 1800 : 1980,
                            y: isFlipping ? [100, -200, 0] : 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: isFlipping ? 3 : 0.5,
                            ease: isFlipping ? "easeInOut" : "easeOut",
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="w-full h-full relative"
                    >
                        {/* Heads Side (Silver/Chrome) */}
                        <div
                            className="absolute inset-0 rounded-full border-8 border-white/20 bg-gradient-to-br from-white via-zinc-400 to-zinc-600 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] backface-hidden"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            <div className="text-black font-bebas text-6xl">H</div>
                        </div>

                        {/* Tails Side (Green/Dark) */}
                        <div
                            className="absolute inset-0 rounded-full border-8 border-conform-green/20 bg-gradient-to-br from-conform-green via-emerald-700 to-zinc-900 flex items-center justify-center shadow-[0_0_50px_rgba(0,255,0,0.2)]"
                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                        >
                            <div className="text-white font-bebas text-6xl">T</div>
                        </div>
                    </motion.div>
                </div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white font-bebas text-4xl tracking-[0.2em] uppercase"
                >
                    {isFlipping ? "Flipping Destiny..." : `Settle for ${result.toUpperCase()}`}
                </motion.h2>
                <p className="text-white/40 text-sm mt-4 font-mono uppercase tracking-widest">
                    Winner finds the Target
                </p>
            </div>
        </div>
    );
}
