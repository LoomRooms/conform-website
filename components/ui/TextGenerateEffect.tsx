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
    if (!animationRef.current && scope.current) {
      animationRef.current = animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.35), // Slowed down for reading
        }
      );
      // Pause initially so it only plays when in view
      animationRef.current.pause();
    }
  }, [animate, duration, filter, scope]);

  useEffect(() => {
    if (animationRef.current) {
      if (isInView) {
        animationRef.current.play();
      } else {
        animationRef.current.pause();
      }
    }
  }, [isInView]);

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
        <div className="text-white/80 text-xl md:text-3xl lg:text-4xl leading-relaxed md:leading-[1.5] tracking-wide max-w-[42rem] mx-auto text-left">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
