"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Digit = ({ val }: { val: string }) => (
    <div className="relative h-[1em] w-[0.6em] flex justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
            <motion.span
                key={val}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute"
            >
                {val}
            </motion.span>
        </AnimatePresence>
    </div>
);

const TimeUnit = ({ value, label }: { value: number; label: string }) => {
    const strValue = value.toString().padStart(2, '0');
    const digits = strValue.split("");

    return (
        <div className="flex flex-col items-center md:items-end">
            <div className="flex text-3xl md:text-6xl font-heading text-white tracking-tighter leading-none mb-1">
                {digits.map((d, i) => (
                    <Digit key={i} val={d} />
                ))}
            </div>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-secondary font-bold opacity-80">{label}</span>
        </div>
    );
};

export default function Countdown() {
    const calculateTimeLeft = (): TimeLeft => {
        const eventDate = new Date("2026-03-20T00:00:00");
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex space-x-6 md:space-x-10 text-center md:text-right">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="w-px h-8 bg-white/10 self-center hidden md:block" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="w-px h-8 bg-white/10 self-center hidden md:block" />
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <div className="w-px h-8 bg-white/10 self-center hidden md:block" />
            <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
    );
}
