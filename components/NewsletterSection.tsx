"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import KeyButton from "@/components/ui/KeyButton";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white/30 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-8 block">
            Stay Connected
          </span>
          <h2 className="font-heading font-normal text-4xl md:text-7xl mb-6 leading-[0.85] tracking-tighter">
            Join the{" "}
            <span className="font-heading tracking-wide">
              Community
            </span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto mb-16">
            Get updates on CONFORM, the next edition, creative opportunities, and dispatches from the Loom Rooms ecosystem.
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <CheckCircle2 className="text-green-400" size={48} strokeWidth={1.5} />
                <p className="text-white text-xl font-heading tracking-wide">You're in.</p>
                <p className="text-white/40 text-sm font-light tracking-widest uppercase">
                  Welcome to the CONFORM community
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder:text-white/25 px-6 py-4 text-sm font-light tracking-wide focus:outline-none focus:border-white/40 transition-colors duration-300 rounded-none"
                  />
                  {errorMsg && (
                    <p className="absolute -bottom-6 left-0 text-red-400 text-xs tracking-wide">{errorMsg}</p>
                  )}
                </div>
                <KeyButton
                  type="submit"
                  disabled={status === "loading"}
                  variant="secondary"
                  className="py-4 text-[10px] sm:text-xs tracking-[0.3em] gap-2 disabled:opacity-60"
                >
                    {status === "loading" ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Subscribe
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                </KeyButton>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] mt-12">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
