"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, FileText } from "lucide-react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4">
      <nav className="mx-auto flex w-fit max-w-full items-center gap-1 rounded-full border border-ink/10 bg-cream/90 p-1.5 shadow-sm backdrop-blur-md dark:border-cream/10 dark:bg-ink/90">
        {/* Personal icon */}
        <a
          href="#top"
          aria-label="Home"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 dark:text-cream dark:hover:bg-cream/5"
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {/* C */}
            <path
              d="M19.5 8.5C17.9 7.2 16 6.5 14 6.5C9.3 6.5 5.5 10.3 5.5 15C5.5 19.7 9.3 23.5 14 23.5C16 23.5 17.9 22.8 19.5 21.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* A */}
            <path
              d="M17 23.5L22.5 7L28 23.5M19 18H26"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className="mx-1 h-4 w-px bg-ink/10 dark:bg-cream/10" />

        {/* Navigation */}
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-3 py-1.5 font-sans text-xs text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink dark:text-cream/60 dark:hover:bg-cream/5 dark:hover:text-cream"
          >
            {link.label}
          </a>
        ))}

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink dark:text-cream/60 dark:hover:bg-cream/5 dark:hover:text-cream"
        >
          <FileText size={15} />
        </a>

        <div className="mx-1 h-4 w-px bg-ink/10 dark:bg-cream/10" />

        {/* Theme */}
        <button
          type="button"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label={
            isDark ? "Switch to light mode" : "Switch to dark mode"
          }
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink dark:text-cream/60 dark:hover:bg-cream/5 dark:hover:text-cream"
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </nav>
    </header>
  );
}