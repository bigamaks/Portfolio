"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import {
  ArrowRight,
  Code2,
  Component,
  Database,
  GitBranch,
  Globe,
  Layers,
  MousePointer2,
  Sparkles,
} from "lucide-react";

import { useEffect, useRef, useState, type ElementType } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

/* ---------------------------------------
   Toolbox items
--------------------------------------- */

const tools = [
  {
    id: "react",
    label: "React",
    icon: Component,
    position: "top-[4%] left-[5%]",
    rotate: -8,
    delay: 0.75,
    color: "bg-white text-ink dark:bg-[#293527] dark:text-cream",
  },
  {
    id: "next",
    label: "Next.js",
    icon: Globe,
    position: "top-[6%] right-[5%]",
    rotate: 7,
    delay: 0.85,
    color: "bg-ink text-cream dark:bg-cream dark:text-ink",
  },
  {
    id: "code",
    label: "</>",
    icon: Code2,
    position: "top-[31%] left-[-2%]",
    rotate: -12,
    delay: 0.95,
    color:
      "bg-[#DCE5D4] text-ink dark:bg-[#465642] dark:text-cream",
  },
  {
    id: "database",
    label: "Supabase",
    icon: Database,
    position: "bottom-[25%] left-[3%]",
    rotate: 8,
    delay: 1.05,
    color:
      "bg-[#E8DDD2] text-ink dark:bg-[#554940] dark:text-cream",
  },
  {
    id: "git",
    label: "Git",
    icon: GitBranch,
    position: "bottom-[8%] right-[5%]",
    rotate: -6,
    delay: 1.15,
    color: "bg-white text-ink dark:bg-[#293527] dark:text-cream",
  },
  {
    id: "ui",
    label: "UI",
    icon: Layers,
    position: "bottom-[31%] right-[-1%]",
    rotate: 10,
    delay: 1.25,
    color:
      "bg-[#DCE5D4] text-ink dark:bg-[#465642] dark:text-cream",
  },
];

/* ---------------------------------------
   Tool card
--------------------------------------- */

function ToolCard({
  label,
  icon: Icon,
  position,
  rotate,
  delay,
  color,
}: {
  label: string;
  icon: ElementType;
  position: string;
  rotate: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate,
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 180,
        damping: 13,
        mass: 0.8,
      }}
      whileHover={{
        scale: 1.12,
        rotate: 0,
        y: -8,
        transition: {
          duration: 0.2,
        },
      }}
      className={`
        absolute ${position}
        z-30
        flex items-center gap-2
        px-2.5 py-1.5
sm:px-3 sm:py-2
        rounded-xl
        border border-ink/10 dark:border-cream/10
shadow-[0_8px_25px_rgba(31,42,29,0.08)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        font-mono text-[9px]
sm:text-[10px]
lg:text-[11px]
        cursor-default
        ${color}
      `}
    >
      <Icon size={14} strokeWidth={1.7} />
      {label}
    </motion.div>
  );
}

/* ---------------------------------------
   Decorative particle
--------------------------------------- */

function Particle({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, 0.6],
        scale: [0, 1, 0.8],
      }}
      transition={{
        delay,
        duration: 1.2,
        ease: "easeOut",
      }}
      className={`absolute w-2 h-2 rounded-full bg-ink/30 dark:bg-cream/30 ${className}`}
    />
  );
}

/* ---------------------------------------
   Main Hero
--------------------------------------- */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handlePreloaderComplete = () => {
      setIsReady(true);
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete);

    return () => {
      window.removeEventListener("preloaderComplete", handlePreloaderComplete);
    };
  }, []);

  /* ---------------------------------------
     Mouse interaction
  --------------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 18);
    mouseY.set(y * 18);
  };

  const toolboxX = useTransform(springX, (value) => value * 0.35);

  const toolboxY = useTransform(springY, (value) => value * 0.35);

  const cursorX = useTransform(springX, (value) => value * -0.6);

  const cursorY = useTransform(springY, (value) => value * -0.6);

  if (!isReady) {
    return null;
  }

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate="show"
      onMouseMove={handleMouseMove}
      className="
         max-w-7xl
  mx-auto
  px-5 sm:px-6
  pt-24 sm:pt-28 lg:pt-32
  pb-16 sm:pb-20 lg:pb-24
  overflow-hidden
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* =====================================
            LEFT — TEXT
        ===================================== */}

        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            className="relative inline-block mb-10 -rotate-2"
          >
            <p className="font-hand text-2xl text-ink/80 dark:text-cream/80">
              frontend developer & product enthusiast
            </p>

            <svg
              width="90"
              height="40"
              viewBox="0 0 90 40"
              fill="none"
              className="absolute -bottom-8 left-2 text-ink dark:text-cream"
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                }}
                d="M8 6 Q 35 32, 60 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />

              <motion.path
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 0.4,
                }}
                d="M52 15 L62 22 L52 27"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="
               font-serif
  text-4xl
  sm:text-5xl
  lg:text-6xl
  leading-[1.08]
  mb-6
            "
          >
            Frontend developer building
            <span className="italic"> thoughtful</span> digital experiences.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
              font-sans
  text-sm
  sm:text-base
  leading-relaxed
  text-ink/70
    dark:text-cream/70
  max-w-md
  mb-8
            "
          >
            I turn ideas into responsive, accessible products with React — and
            I&apos;m exploring the intersection of frontend, AI, and product.
          </motion.p>

          <motion.a
            href="#projects"
            variants={fadeUp}
            className="
    group
    inline-flex
    items-center
    gap-2
    font-sans
    text-sm
    border-b
    border-ink
    dark:border-cream
    pb-1
  "
          >
            View my work
            <ArrowRight
              size={16}
              className="
      transition-transform
      group-hover:translate-x-1
    "
            />
          </motion.a>
        </div>

        {/* =====================================
            RIGHT — TOOLBOX EXPLOSION
        ===================================== */}

        <div
          className="
             relative
    min-h-97.5
    sm:min-h-115
    lg:min-h-130
    flex
    items-center
    justify-center
    w-full
          "
        >
          {/* Background circle */}

          <motion.div
            style={{
              x: toolboxX,
              y: toolboxY,
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="
                absolute
  w-65
  h-65
  sm:w-[320px]
  sm:h-80
  lg:w-87.5
  lg:h-87.5
  rounded-full
  border
border-ink/5 dark:border-cream/10
            "
          />

          {/* Explosion particles */}

          <Particle className="top-[18%] left-[25%]" delay={0.7} />

          <Particle className="top-[25%] right-[24%]" delay={0.8} />

          <Particle className="bottom-[26%] left-[25%]" delay={0.9} />

          <Particle className="bottom-[19%] right-[25%]" delay={1} />

          {/* Flying tools */}

          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              label={tool.label}
              icon={tool.icon}
              position={tool.position}
              rotate={tool.rotate}
              delay={tool.delay}
              color={tool.color}
            />
          ))}

          {/* =====================================
              TOOLBOX
          ===================================== */}

          <motion.div
            style={{
              x: toolboxX,
              y: toolboxY,
            }}
            className="
              relative
              z-20
              w-67.5
              h-55
            "
          >
            {/* Explosion glow */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.3,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.3, 1.5, 1.8],
              }}
              transition={{
                delay: 0.45,
                duration: 1,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0
               bg-ink/4 dark:bg-cream/5
                rounded-full
                blur-2xl
              "
            />

            {/* Toolbox body */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                type: "spring",
                stiffness: 130,
                damping: 12,
              }}
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                w-57.5
                h-37.5
                bg-ink dark:bg-[#293527]
                rounded-[28px]
                shadow-[0_25px_60px_rgba(31,42,29,0.16)]
              "
            >
              {/* Toolbox front */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-26.25
                  rounded-3xl
                  bg-ink dark:bg-[#293527]
                "
              >
                {/* Handle */}

                <div
                  className="
                    absolute
                    -top-9.5
                    left-1/2
                    -translate-x-1/2
                    w-21.25
                    h-13.75
                    border-8
                    border-ink dark:border-[#293527]
                    border-b-0
                    rounded-t-3xl
                  "
                />

                {/* Center latch */}

                <div
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-9
                    h-5
                    rounded-md
                    bg-cream
                  "
                />

                {/* Tiny label */}

                <p
                  className="
                    absolute
                    bottom-5
                    left-0
                    right-0
                    text-center
                    font-mono
                    text-[9px]
                    tracking-[0.3em]
                    text-cream/40 
                  "
                >
                  BIGAMAKS / TOOLS
                </p>
              </div>
            </motion.div>

            {/* Toolbox lid */}

            <motion.div
              initial={{
                rotate: 0,
                y: 20,
              }}
              animate={{
                rotate: -17,
                y: -55,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
                type: "spring",
                stiffness: 110,
                damping: 12,
              }}
              style={{
                transformOrigin: "bottom left",
              }}
              className="
                absolute
                left-5
                bottom-26.25
                w-57.5
                h-15
                bg-ink dark:bg-[#293527]
                rounded-[18px]
                z-10
                shadow-lg
              "
            />

            {/* Sparkles */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 15,
              }}
              transition={{
                delay: 0.8,
                type: "spring",
              }}
              className="
                absolute
                -top-18.75
                left-10
                z-40
              "
            >
              <Sparkles size={25} strokeWidth={1.4} />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.9,
                type: "spring",
              }}
              className="
                absolute
                -top-15
                right-8.75
                z-40
              "
            >
              <Sparkles size={17} strokeWidth={1.4} />
            </motion.div>
          </motion.div>

          {/* Floating cursor */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
              y: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              delay: 1.4,
              duration: 0.5,
            }}
            style={{
              x: cursorX,
              y: cursorY,
            }}
            className="
              absolute
              right-[15%]
              top-[43%]
              z-40
            "
          >
            <MousePointer2
              size={28}
              strokeWidth={1.5}
              className="rotate-[-18deg]"
            />
          </motion.div>

          {/* Handwritten note */}

          <motion.p
            initial={{
              opacity: 0,
              rotate: -8,
              y: 15,
            }}
            animate={{
              opacity: 1,
              rotate: -4,
              y: 0,
            }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 100,
            }}
            className="
              absolute
              bottom-[2%]
              left-[12%]
              font-hand
              text-sm
              text-ink/60 
            "
          >
            things I use to build ✦
          </motion.p>

          {/* Code floating tag */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              rotate: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 8,
            }}
            transition={{
              delay: 1.3,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            className="
              absolute
              top-[38%]
              right-[0%]
              z-30
              px-3
              py-2
              bg-[#E8DDD2]
              dark:bg-[#554940]
              rounded-xl
              font-mono
              text-xs
              shadow-sm
            "
          >
            {"<build />"}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
