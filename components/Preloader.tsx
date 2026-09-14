"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  const handleComplete = () => {
    window.dispatchEvent(new Event("preloaderComplete"));
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-cream text-ink dark:bg-ink dark:text-cream"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        delay: 2.8,
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={handleComplete}
    >
      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Welcome */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-5 font-sans text-[10px] uppercase tracking-[0.35em] text-ink/40 dark:text-cream/40"
        >
          welcome
        </motion.p>

        {/* Signature */}
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              rotate: -4,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: -4,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative z-10
              whitespace-nowrap
              font-hand
              text-7xl
              tracking-tight
              sm:text-8xl
              md:text-9xl
              text-ink
              dark:text-cream
            "
          >
            chiamaka
          </motion.div>

          {/* Signature stroke */}
          <svg
            viewBox="0 0 600 120"
            className="pointer-events-none absolute -bottom-8 left-1/2 z-20 w-[125%] -translate-x-1/2 overflow-visible text-ink dark:text-cream"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="
                M 22 72
                C 115 101, 205 96, 292 76
                C 374 57, 447 49, 510 64
                C 548 73, 567 61, 581 39
              "
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                pathLength: {
                  duration: 1.25,
                  delay: 0.9,
                  ease: [0.65, 0, 0.35, 1],
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.9,
                },
              }}
            />

            {/* Finishing flick */}
            <motion.path
              d="M 571 39 C 584 27, 591 19, 595 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                pathLength: {
                  duration: 0.35,
                  delay: 2.05,
                  ease: "easeOut",
                },
                opacity: {
                  duration: 0.1,
                  delay: 2.05,
                },
              }}
            />
          </svg>
        </div>

        {/* Moving dot */}
        <motion.div
          className="absolute -right-8 top-1/2 h-2 w-2 rounded-full bg-forest dark:bg-cream"
          initial={{
            scale: 0,
            x: -30,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 1, 0],
            x: [-30, 0, 18, 55],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.3,
            delay: 1.05,
            times: [0, 0.2, 0.75, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.9,
            duration: 0.5,
          }}
          className="mt-14 flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.25em] text-ink/35 dark:text-cream/35"
        >
          <span>building things</span>

          <span className="h-1 w-1 rounded-full bg-forest dark:bg-cream" />

          <span>with curiosity</span>
        </motion.div>
      </div>

      {/* Signature initials */}
      <motion.div
        className="absolute bottom-8 left-8 font-hand text-2xl text-ink/30 dark:text-cream/30"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: -4 }}
        transition={{
          delay: 1.7,
          duration: 0.5,
        }}
      >
        ca.
      </motion.div>

      {/* Progress */}
      <div className="absolute bottom-8 right-8 flex items-center gap-3">
        <div className="h-px w-16 overflow-hidden bg-ink/10 dark:bg-cream/10">
          <motion.div
            className="h-full origin-left bg-ink/50 dark:bg-cream/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2.5,
              ease: "linear",
            }}
          />
        </div>

        <span className="font-sans text-[9px] tracking-widest text-ink/30 dark:text-cream/30">
          01
        </span>
      </div>
    </motion.div>
  );
}