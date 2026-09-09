// components/Footer.tsx
import { ArrowUpRight } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227 23.2 23.227 23.2 22.271V1.729C23.2.774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/bigamaks",
    icon: <SiGithub size={17} />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <LinkedinIcon />,
  },
  {
    label: "X",
    href: "#",
    icon: <SiX size={17} />,
  },
];

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-8">
      <div className="pt-8">
        {/* Contact links */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-hand text-sm text-ink/40 mb-2">
              or just email me
            </p>

            <a
              href="mailto:hello@chiamaka.dev"
              className="group inline-flex items-center gap-2 font-sans text-base text-ink hover:opacity-60 transition"
            >
              chiamakaaniago@gmail.com

              <ArrowUpRight
                size={15}
                className="opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex items-center gap-2 border border-ink/15 rounded-full px-4 py-2.5 font-sans text-xs text-ink/60 hover:text-ink hover:border-ink/40 transition"
              >
                {social.icon}

                <span>{social.label}</span>

                <ArrowUpRight
                  size={12}
                  className="opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 pt-6 border-t border-ink/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-hand text-sm text-ink/40">
              Built with curiosity &amp; too much coffee. ☕
            </p>

            <p className="font-sans text-[11px] text-ink/30 mt-1">
              © {new Date().getFullYear()} Chiamaka Aniago
            </p>
          </div>

          <a
            href="#top"
            className="font-sans text-xs text-ink/40 hover:text-ink transition"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}