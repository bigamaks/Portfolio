// components/Skills.tsx
"use client";

import { useState } from "react";
import {
  Code2,
  Database,
  Sparkles,
  Layers3,
  ArrowUpRight,
  CornerDownRight,
} from "lucide-react";

const skills = [
  {
    number: "01",
    title: "Interfaces",
    description:
      "I turn ideas and designs into responsive, accessible interfaces that feel intuitive to use.",
    tools: ["React", "Next.js", "Tailwind"],
    icon: Code2,
    dark: false,
    rotate: "-rotate-3",
    top: "20px",
    left: "10px",
  },
  {
    number: "02",
    title: "Product Logic",
    description:
      "I build the functionality behind the interface — forms, state, authentication, workflows and data.",
    tools: ["JavaScript", "TypeScript", "Supabase"],
    icon: Layers3,
    dark: true,
    rotate: "rotate-3",
    top: "100px",
    left: "125px",
  },
  {
    number: "03",
    title: "Systems",
    description:
      "I'm learning to think beyond individual screens and understand how products, APIs and data fit together.",
    tools: ["REST APIs", "Databases", "Git"],
    icon: Database,
    dark: false,
    rotate: "-rotate-2",
    top: "165px",
    left: "245px",
  },
  {
    number: "04",
    title: "AI Experiments",
    description:
      "I explore practical ways to use AI to make products more useful, personalized and intelligent.",
    tools: ["Gemini", "AI APIs", "Automation"],
    icon: Sparkles,
    dark: true,
    rotate: "rotate-2",
    top: "15px",
    left: "360px",
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="   mx-auto
    max-w-7xl
    overflow-hidden
    px-5
    sm:px-6
    py-20
    sm:py-24
    lg:py-28"
    >
      <div
        className="  grid
    grid-cols-1
    items-start
    gap-12
    sm:gap-16
    lg:grid-cols-2
    lg:gap-16"
      >
        {/* LEFT */}
        <div className="lg:sticky lg:top-24">
          <p
            className="mb-4
    font-sans
    text-[10px]
    tracking-[0.2em]
    text-ink/50 dark:text-cream/50
    sm:text-xs"
          >
            01. WHAT I DO
          </p>

          <h2 className="   max-w-lg
    font-serif
    text-4xl
     text-ink dark:text-cream 
    leading-[1.05]
    sm:text-5xl
    lg:text-6xl">
            More than just
            <br />
            <span className="italic">writing code.</span>
          </h2>

          <p className="  mt-5
    max-w-md
    font-sans
    text-sm
    leading-7
    text-ink/65 dark:text-cream/65
    sm:mt-6
    sm:text-base">
            I build digital products from interface to functionality, while
            exploring the systems and ideas that make them work.
          </p>

          <div className="mt-6 flex items-center gap-3 sm:mt-8">
            <CornerDownRight size={18} className="text-ink/50 dark:text-cream/50 sm:h-5 sm:w-5"/>

            <span className="font-hand text-lg text-ink/60 dark:text-cream/60">
              things in my toolbox
            </span>
          </div>

          {/* Skill labels */}
          <div className="   mt-8
    flex
    max-w-md
    flex-wrap
    gap-2
    sm:mt-10">
            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Tailwind",
              "Supabase",
              "Git",
              "AI",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-ink/15 px-2.5 py-1.5 font-mono text-[10px] sm:px-3 sm:text-[11px] text-ink/60 dark:border-cream/15 dark:text-cream/60"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — TOOLBOX */}
        <div className="relative min-h-130">
          {/* Background shape */}
          <div className="absolute left-1/2 top-1/2 hidden h-97.5 w-97.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/[0.035] dark:bg-cream/[0.035] lg:block" />

          {/* Decorative star */}
          <span className="absolute left-[45%] top-0 select-none text-2xl text-ink/40 dark:text-cream/40">
            ✦
          </span>

          {/* Handwritten note */}
          <div className="absolute bottom-2 right-0 z-50">
            <p className="rotate-[-5deg] text-right font-hand text-lg leading-tight text-ink/60 dark:text-cream/60">
              hover the tools
              <br />
              to peek inside →
            </p>
          </div>

          {/* Cards */}
          {skills.map((skill) => {
            const Icon = skill.icon;
            const isActive = activeSkill === skill.title;

            return (
              <div
                key={skill.title}
                className={`absolute hidden w-52 cursor-pointer lg:block ${skill.rotate}`}
                style={{
                  top: skill.top,
                  left: skill.left,
                  zIndex: isActive ? 100 : Number(skill.number),
                }}
                onMouseEnter={() => setActiveSkill(skill.title)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div
                  className={`
                    relative rounded-2xl border p-4 sm:p-5
                    shadow-[0_15px_35px_rgba(31,42,29,0.10)]
                    transition-all duration-500 ease-out
                    ${
                      skill.dark
                        ? "border-ink bg-ink text-cream dark:border-cream/10 dark:bg-[#293527] dark:text-cream"
                        : "border-ink/10 bg-white text-ink dark:border-cream/10 dark:bg-[#293527] dark:text-cream"
                    }
                    ${
                      isActive
                        ? "-translate-y-3 rotate-0 scale-[1.04] shadow-[0_25px_50px_rgba(31,42,29,0.18)]"
                        : ""
                    }
                  `}
                >
                  {/* Number + icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-mono text-[10px] ${
                        skill.dark ? "text-cream/40" : "text-ink/35 dark:text-cream/40"
                      }`}
                    >
                      {skill.number}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className={skill.dark ? "text-cream/70" : "text-ink/60 dark:text-cream/70"}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-sans text-base font-medium sm:mt-8 sm:text-lg">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-2 font-sans text-[11px] leading-5 sm:text-xs ${
                      skill.dark ? "text-cream/65" : "text-ink/55 dark:text-cream/65"
                    }`}
                  >
                    {skill.description}
                  </p>

                  {/* Tools */}
                  <div
                    className={`
                      mt-5 overflow-hidden transition-all duration-500
                      ${isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div
                      className={`mb-3 h-px ${
                        skill.dark ? "bg-cream/15" : "bg-ink/10 dark:bg-cream/15"
                      }`}
                    />

                    <div className="flex flex-wrap gap-1.5">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`rounded-full px-2 py-1 font-mono text-[9px] ${
                            skill.dark
                              ? "bg-cream/10 text-cream/70"
                              : "bg-ink/5 text-ink/55 dark:bg-cream/10 dark:text-cream/70"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Corner arrow */}
                  <ArrowUpRight
                    size={15}
                    className={`
                      absolute bottom-5 right-5 transition-all duration-300
                      ${
                        isActive
                          ? "translate-x-0 translate-y-0 opacity-100"
                          : "translate-x-1 translate-y-1 opacity-30"
                      }
                    `}
                  />
                </div>
              </div>
            );
          })}

          {/* Toolbox base / visual anchor */}
          <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="relative h-16 w-72 rounded-xl border border-ink/10 bg-ink/4 dark:border-cream/10 dark:bg-cream/4">
              <div className="absolute left-1/2 -top-2 h-3 w-20 -translate-x-1/2 rounded-t-full border border-ink/10 bg-white dark:border-cream/10 dark:bg-[#293527]" />

              <div className="absolute bottom-4 left-5 h-1.5 w-12 rounded-full bg-ink/10 dark:bg-cream/10" />
              <div className="absolute bottom-4 right-5 h-1.5 w-20 rounded-full bg-ink/10 dark:bg-cream/10" />

              <p className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.25em] text-ink/35 dark:text-cream/35">
                bigamaks / toolbox
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className={`rounded-2xl border p-5 ${
                    skill.dark
                      ? "border-ink bg-ink text-cream dark:border-cream/10 dark:bg-[#293527] dark:text-cream"
                      : "border-ink/10 bg-white text-ink dark:border-cream/10 dark:bg-[#293527] dark:text-cream"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-mono text-[10px] ${
                        skill.dark ? "text-cream/40" : "text-ink/35 dark:text-cream/40"
                      }`}
                    >
                      {skill.number}
                    </span>

                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-8 font-sans text-lg font-medium">
                    {skill.title}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-5 ${
                      skill.dark ? "text-cream/65" : "text-ink/55 dark:text-cream/65"
                    }`}
                  >
                    {skill.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`rounded-full px-2 py-1 font-mono text-[9px] ${
                          skill.dark
                            ? "bg-cream/10 text-cream/70"
                            : "bg-ink/5 text-ink/55 dark:bg-cream/10 dark:text-cream/70"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
