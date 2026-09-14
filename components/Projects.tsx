// components/Projects.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

type ProjectPreviewType = "dashboard" | "ai" | "commerce";

type FeaturedProject = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  type: ProjectPreviewType;
  rotate: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    category: "PRODUCT · FRONTEND · SYSTEMS",
    title: "PhysioTrack",
    description:
      "A physiotherapy practice-management platform designed around the workflows of patients, therapists and administrators.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    image: "/projects/physiotrack.png",
    liveUrl: "https://physio-track-lbay-8oxtqgkc5-chiamakas-projects-d1a0fefe.vercel.app",
    githubUrl: "https://github.com/bigamaks/PhysioTrack",
    type: "dashboard",
    rotate: "-rotate-2",
  },
  {
    number: "02",
    category: "AI · PRODUCT · FRONTEND",
    title: "PhysioPal AI",
    description:
      "An AI rehabilitation companion exploring how personalized guidance can make recovery more accessible and engaging.",
    tags: ["Next.js", "TypeScript", "Gemini", "Supabase"],
    image: "/projects/physiopal.png",
    liveUrl: "https://physio-pal-ai.vercel.app/",
    githubUrl: "https://github.com/bigamaks/PhysioPal-Ai",
    type: "ai",
    rotate: "rotate-2",
  },
  {
    number: "03",
    category: "PRODUCT · FRONTEND · SYSTEMS",
    title: "Onstorr",
    description:
      "A business-management platform I'm building to explore inventory, sales and product workflows for growing businesses.",
    tags: ["React", "TypeScript", "Supabase"],
    image: "/projects/physiotrack.png",
    liveUrl: "https://your-physiotrack-url.com",
    githubUrl: "https://github.com/bigamaks/PhysioTrack",
    type: "commerce",
    rotate: "-rotate-1",
  },
];

const experiments = [
  {
    number: "04",
    title: "Job Listing App",
    description: "A responsive job discovery interface with dynamic filtering.",
    tags: ["React", "JavaScript", "Tailwind"],
  },
  {
    number: "05",
    title: "Audiophile",
    description: "A multi-page e-commerce storefront with cart functionality.",
    tags: ["Next.js", "TypeScript", "Zustand"],
  },
  {
    number: "06",
    title: "Coding Conf",
    description:
      "A ticket generator with avatar upload, local storage and downloadable tickets.",
    tags: ["React", "JavaScript", "LocalStorage"],
  },
  {
    number: "07",
    title: "HerPhysio Movement",
    description:
      "A women's health and movement platform built for a non-profit organization.",
    tags: ["React", "Tailwind"],
  },
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;

    if (!track) return;

    const cardWidth = track.firstElementChild?.clientWidth ?? 500;

    track.scrollBy({
      left: direction === "left" ? -(cardWidth + 32) : cardWidth + 32,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl overflow-hidden px-6 py-28"
    >
      {/* =========================================
          HEADER
      ========================================== */}

      <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="mb-4 font-sans text-xs tracking-[0.2em] text-ink/50 dark:text-cream/50">
            02. SELECTED WORK
          </p>

          <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] text-ink dark:text-cream md:text-5xl lg:text-6xl">
            Things I&apos;ve been
            <br />
            <span className="italic">building & figuring out.</span>
          </h2>
        </div>

        <p className="max-w-sm font-sans text-sm leading-6 text-ink/65 dark:text-cream/65 lg:pb-1">
          A collection of products, experiments and ideas that have helped me
          learn how to build beyond the interface.
        </p>
      </div>

      {/* =========================================
          FEATURED PROJECTS
      ========================================== */}

      <div className="relative">
        {/* Controls */}
        <div className="mb-6 flex items-center justify-between">
         <p className="font-hand text-lg text-ink/55 dark:text-cream/55">
            a few things I&apos;ve made ✦
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15  text-ink transition hover:bg-ink hover:text-cream dark:border-cream/15 dark:text-cream dark:hover:bg-cream dark:hover:text-ink"
              aria-label="Previous project"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:bg-ink hover:text-cream dark:border-cream/15 dark:text-cream dark:hover:bg-cream dark:hover:text-ink"
              aria-label="Next project"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Project track */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-8 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
                rotate: index % 2 === 0 ? -3 : 3,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.12,
              }}
              className={`group snap-start shrink-0 w-[min(82vw,620px)] ${project.rotate}`}
            >
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white text-ink shadow-[0_15px_40px_rgba(31,42,29,0.08)] transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_rgba(31,42,29,0.14)] dark:border-cream/10 dark:bg-[#293527] dark:text-cream dark:shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                {/* Project preview */}
                {/* <ProjectPreview type={project.type} >
                                <Image
    src={project.image}
    alt="PhysioTrack dashboard"
    fill
    className="object-cover"
  />
                   </ ProjectPreview> */}

                <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project information */}
                <div className="p-6 md:p-8">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 font-mono text-[10px] tracking-[0.18em] text-ink/40 dark:text-cream/40">
                        {project.number} / {project.category}
                      </p>

                      <h3 className="font-serif text-3xl text-ink dark:text-cream md:text-4xl">
                        {project.title}
                      </h3>
                    </div>

                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink dark:border-cream/15 dark:text-cream"
                    >
                      <ArrowUpRight size={17} />
                    </motion.div>
                  </div>

                  <p className="max-w-xl font-sans text-sm leading-6 text-ink/65 dark:text-cream/65 md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink/5 px-3 py-1.5 font-mono text-[10px] text-ink/55 dark:bg-cream/10 dark:text-cream/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-7 flex gap-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 border-b border-ink pb-1 font-sans text-xs text-ink dark:border-cream dark:text-cream"
                    >
                      Live project
                      <ExternalLink
                        size={13}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 border-b border-ink/20 pb-1 font-sans text-xs text-ink/60 dark:border-cream/20 dark:text-cream/60"
                    >
                      GitHub
                      <span className="text-[10px] font-medium">GH</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =========================================
          OTHER EXPERIMENTS
      ========================================== */}

      <div className="mt-24 border-t border-ink/10 pt-16 dark:border-cream/10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-sans text-xs tracking-[0.2em] text-ink/50 dark:text-cream/50">
              OTHER EXPERIMENTS
            </p>

            <h3 className="font-serif text-3xl text-ink dark:text-cream md:text-4xl">
              Smaller things I&apos;ve built.
            </h3>
          </div>

          <span className="hidden font-hand text-lg text-ink/50 dark:text-cream/50 md:block">
            still learning, still building ✦
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {experiments.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-ink/10 bg-white/60 p-6 transition-shadow duration-300 hover:shadow-lg dark:border-cream/10 dark:bg-[#293527]/70 dark:text-cream"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="mb-2 font-mono text-[10px] text-ink/35 dark:text-cream/35">
                    {project.number}
                  </p>

                  <h4 className="font-serif text-xl">{project.title}</h4>

                  <p className="mt-2 max-w-md font-sans text-sm leading-5 text-ink/60 dark:text-cream/60">
                    {project.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-ink/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink dark:text-cream/40 dark:group-hover:text-cream"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[9px] text-ink/50 dark:bg-cream/10 dark:text-cream/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   PROJECT PREVIEW
========================================= */

function ProjectPreview({ type }: { type: "dashboard" | "ai" | "commerce" }) {
  if (type === "dashboard") {
    return (
      <div className="relative h-72 overflow-hidden bg-[#E5EADF] p-6 md:h-80">
        {/* Browser */}
        <div className="absolute left-[8%] top-[12%] h-[82%] w-[84%] overflow-hidden rounded-xl border border-ink/10 bg-[#F9F9F6] shadow-xl transition duration-700 group-hover:scale-[1.03]">
          {/* Browser bar */}
          <div className="flex h-8 items-center gap-1.5 border-b border-ink/10 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
          </div>

          <div className="flex h-full">
            {/* Sidebar */}
            <div className="hidden w-24 border-r border-ink/10 p-3 sm:block">
              <div className="mb-7 h-3 w-12 rounded bg-ink/15" />

              <div className="space-y-3">
                <div className="h-2 w-full rounded bg-ink/10" />
                <div className="h-2 w-4/5 rounded bg-ink/5" />
                <div className="h-2 w-full rounded bg-ink/5" />
                <div className="h-2 w-3/5 rounded bg-ink/5" />
              </div>
            </div>

            {/* Dashboard */}
            <div className="flex-1 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 rounded bg-ink/20" />
                  <div className="mt-2 h-1.5 w-12 rounded bg-ink/10" />
                </div>

                <div className="h-6 w-6 rounded-full bg-ink/10" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-lg bg-[#DCE8D5]" />
                <div className="h-12 rounded-lg bg-[#E9DED0]" />
                <div className="h-12 rounded-lg bg-[#D8E1E8]" />
              </div>

              {/* Chart */}
              <div className="relative mt-3 h-24 rounded-lg border border-ink/5 bg-white p-3">
                <div className="absolute bottom-4 left-4 right-4 flex h-12 items-end gap-1">
                  {[30, 45, 25, 65, 50, 80, 60, 90, 72, 100].map(
                    (height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.04,
                        }}
                        className="flex-1 rounded-t bg-ink/15"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="absolute bottom-5 left-6 font-hand text-sm text-ink/40">
          patients · progress · care
        </span>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="relative h-72 overflow-hidden bg-[#E9DED0] p-6 md:h-80">
        <div className="absolute left-[12%] top-[10%] h-[85%] w-[76%] overflow-hidden rounded-xl border border-ink/10 bg-[#FAF8F3] shadow-xl transition duration-700 group-hover:scale-[1.03]">
          {/* Header */}
          <div className="flex h-10 items-center justify-between border-b border-ink/10 px-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-cream">
                <span className="text-[9px]">✦</span>
              </div>

              <div className="h-2 w-20 rounded bg-ink/15" />
            </div>

            <div className="h-2 w-8 rounded bg-ink/10" />
          </div>

          {/* Chat */}
          <div className="space-y-3 p-5">
            <div className="ml-auto max-w-[65%] rounded-xl rounded-br-sm bg-[#DCE8D5] p-3">
              <div className="h-1.5 w-full rounded bg-ink/10" />
              <div className="mt-2 h-1.5 w-3/4 rounded bg-ink/10" />
            </div>

            <div className="max-w-[72%] rounded-xl rounded-bl-sm bg-white p-3 shadow-sm">
              <div className="h-1.5 w-full rounded bg-ink/10" />
              <div className="mt-2 h-1.5 w-5/6 rounded bg-ink/10" />
              <div className="mt-2 h-1.5 w-2/3 rounded bg-ink/10" />
            </div>

            <div className="ml-auto max-w-[55%] rounded-xl rounded-br-sm bg-[#E5EADF] p-3">
              <div className="h-1.5 w-full rounded bg-ink/10" />
              <div className="mt-2 h-1.5 w-4/5 rounded bg-ink/10" />
            </div>
          </div>

          {/* Input */}
          <div className="absolute bottom-4 left-5 right-5 h-8 rounded-lg border border-ink/10 bg-white" />
        </div>

        <span className="absolute bottom-5 right-6 font-hand text-sm text-ink/40">
          ask · learn · recover
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-72 overflow-hidden bg-[#DCE8D5] p-6 md:h-80">
      <div className="absolute left-[8%] top-[12%] h-[82%] w-[84%] overflow-hidden rounded-xl border border-ink/10 bg-[#F9F9F6] shadow-xl transition duration-700 group-hover:scale-[1.03]">
        {/* Header */}
        <div className="flex h-9 items-center justify-between border-b border-ink/10 px-4">
          <div className="h-2 w-16 rounded bg-ink/20" />
          <div className="flex gap-2">
            <div className="h-5 w-5 rounded-full bg-ink/5" />
            <div className="h-5 w-5 rounded-full bg-ink/5" />
          </div>
        </div>

        <div className="p-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-ink/5 bg-white p-3"
              >
                <div className="h-1.5 w-10 rounded bg-ink/10" />
                <div className="mt-3 h-3 w-14 rounded bg-ink/20" />
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-24 rounded-lg bg-[#E9DED0]" />
            <div className="h-24 rounded-lg bg-[#D8E1E8]" />
            <div className="h-24 rounded-lg bg-[#EFE8D4]" />
            <div className="h-24 rounded-lg bg-[#E5EADF]" />
          </div>
        </div>
      </div>

      <span className="absolute bottom-5 left-6 font-hand text-sm text-ink/40">
        products · inventory · growth
      </span>
    </div>
  );
}
