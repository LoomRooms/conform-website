"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { margin: "-20% 0px" });
  const animationRef = useRef<any>(null);

  let wordsArray = words.split(" ");
  
  useEffect(() => {
    // Only animate if in view and the animation hasn't started yet
    if (isInView && !animationRef.current && scope.current) {
      animationRef.current = animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.25), // Adjusted to human reading pace, in the goldilocks zone
        }
      );
    }
  }, [isInView, animate, duration, filter, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0 inline-block mr-1.5 md:mr-2"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-light", className)}>
      <div className="mt-4">
        {/* Adjusted padding on mobile to limit height, relaxed line height to make it readable */}
        <div className="text-white/80 text-xl md:text-3xl lg:text-4xl leading-relaxed md:leading-[1.6] tracking-wide max-w-[42rem] mx-auto text-left px-2">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
