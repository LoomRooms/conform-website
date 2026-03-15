"use client";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const storyText = 
  "Let's start with the honest truth. When most people hear the word CONFORM, their guard goes up immediately. They think it means giving up who they are. Because the word has been hijacked. The problem is that the divide between the CON and FORM is not clarified. Without the slash, CONFORM looks like an instruction from the outside world. With the slash — CON/FORM — it becomes an invitation from the inside. First, the CON: coming together, listening, processing, and understanding. Then, the FORM: bringing something into being, executing, and building. In our modern rush, we've been pushed to skip the CON and go straight to FORM. We act, produce, and build without pausing to listen. The result is exhaustion and broken systems. We crash because we execute without understanding. But the most powerful forces today are the ones returning to balance. They listen before they speak. They process before they produce. They gather the whole picture before giving shape to their vision. For those who have been building without breathing. For those whose expression is faster than their understanding. CON/FORM is the return. Not to a system. To yourself.";

export default function StorySection() {
    return (
        <section className="relative py-32 md:py-48 px-6 bg-[#03051a] overflow-hidden min-h-screen flex items-center justify-center">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-screen bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
                <TextGenerateEffect 
                    words={storyText} 
                    className="text-center md:text-left mx-auto"
                />
            </div>
            
            {/* Gradient border bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
