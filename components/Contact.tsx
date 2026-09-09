// components/Contact.tsx
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="border-t border-ink/10 pt-8">
        <p className="font-sans text-xs tracking-[0.25em] text-ink/40 mb-8">
          04. SAY HELLO
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight max-w-4xl">
              Got an idea?
              <br />
              Let&apos;s make{" "}
              <span className="italic">something.</span>
            </h2>

            <p className="font-sans text-ink/60 max-w-md mt-8 leading-relaxed">
              Whether it&apos;s a product, an interface, an experiment, or
              something slightly weird — I&apos;d love to hear about it.
            </p>
          </div>

          <a
            href="mailto:hello@chiamaka.dev"
            className="group inline-flex items-center gap-3 bg-ink text-cream px-6 py-4 rounded-full font-sans text-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Mail size={17} />
            <span>Say hello</span>

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}